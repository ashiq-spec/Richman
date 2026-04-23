/* ═══════════════════════════════════════════
   RICHMAN SUITS GOLD — Main Script
═══════════════════════════════════════════ */

/* ── Copyright year ── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ── Offer banner dismiss ── */
const offerBanner = document.getElementById('offerBanner');
const offerClose  = document.getElementById('offerClose');
if (offerClose) {
  offerClose.addEventListener('click', () => {
    offerBanner.classList.add('hidden');
    try { sessionStorage.setItem('offerDismissed', '1'); } catch (_) {}
  });
  try {
    if (sessionStorage.getItem('offerDismissed')) offerBanner.classList.add('hidden');
  } catch (_) {}
}

/* ── Header: add .scrolled class on scroll ── */
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── Mobile hamburger nav ── */
const hamburger = document.getElementById('hamburger');
const mainNav   = document.getElementById('mainNav');
hamburger.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('mobile-open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('mobile-open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* ── Scroll reveal (Intersection Observer) ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Animated stat counters ── */
function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1800;
  const start = performance.now();
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.round(eased * target).toLocaleString('en-IN');
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num[data-count]').forEach(el => counterObserver.observe(el));

/* ── Booking form → WhatsApp ── */
function handleBooking(e) {
  e.preventDefault();
  const name    = document.getElementById('fname').value.trim();
  const phone   = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const occasion = document.getElementById('occasion').value.trim();
  const message = document.getElementById('message').value.trim();

  const lines = [
    `Hi Richman Suits Gold! 👋`,
    ``,
    `*New Appointment Request*`,
    `*Name:* ${name}`,
    `*Phone:* ${phone}`,
    `*Service:* ${service}`,
  ];
  if (occasion) lines.push(`*Occasion/Date:* ${occasion}`);
  if (message)  lines.push(`*Notes:* ${message}`);
  lines.push(``, `Looking forward to visiting your Chennai studio!`);

  const text = encodeURIComponent(lines.join('\n'));
  window.open(`https://wa.me/919944930106?text=${text}`, '_blank', 'noopener,noreferrer');
}

/* ── Active nav highlight on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.main-nav a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.style.color = 'var(--gold)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

/* ── Smooth anchor scroll (offset for sticky header) ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
