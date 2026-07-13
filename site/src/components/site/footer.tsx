import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/site/instagram-icon";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { SITE, WA_DEFAULT } from "@/lib/site";

const SERVICE_LINKS = [
  { href: "/wedding-suits/", label: "Wedding Suits" },
  { href: "/wedding-suits/#reception", label: "Reception Suits" },
  { href: "/tuxedos/", label: "Tuxedos" },
  { href: "/custom-tailoring/", label: "Custom Tailoring" },
  { href: "/suit-rentals/", label: "Suit & Blazer Rentals" },
  { href: "/wedding-packages/", label: "Wedding Packages" },
  { href: "/corporate-suits/", label: "Corporate Suits" },
];

const EXPLORE_LINKS = [
  { href: "/about/", label: "About Us" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/faqs/", label: "FAQs" },
  { href: "/blog/", label: "Style Journal" },
  { href: "/contact/", label: "Contact" },
];

const POPULAR_SEARCHES = [
  { href: "/wedding-suits/", label: "Wedding suits in Chennai" },
  { href: "/suit-rentals/", label: "Suit rental in Guindy" },
  { href: "/tuxedos/", label: "Wedding tuxedo Chennai" },
  { href: "/wedding-suits/", label: "Groom suit Chennai" },
  { href: "/custom-tailoring/", label: "Custom tailor Chennai" },
  { href: "/corporate-suits/", label: "Corporate suits Chennai" },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-coal pb-24 lg:pb-0">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        {/* Brand */}
        <div>
          <p className="font-serif text-2xl text-silk">Richman Suits</p>
          <p className="text-metallic mt-1 text-[10px] font-bold tracking-[0.5em]">
            GOLD · CHENNAI
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
            Chennai&apos;s luxury wedding suit atelier in Guindy — custom
            tailoring, tuxedos and premium rentals for the modern groom.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={SITE.links.instagram}
              target="_blank"
              rel="noopener"
              aria-label="Richman Suits on Instagram"
              className="rounded-full border border-gold/25 p-2.5 text-mist transition-colors hover:border-gold hover:text-champagne"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener"
              aria-label="Chat with Richman Suits on WhatsApp"
              className="rounded-full border border-gold/25 p-2.5 text-mist transition-colors hover:border-gold hover:text-champagne"
            >
              <WhatsAppIcon size={16} />
            </a>
            <a
              href={SITE.phone.href}
              aria-label={`Call Richman Suits at ${SITE.phone.display}`}
              className="rounded-full border border-gold/25 p-2.5 text-mist transition-colors hover:border-gold hover:text-champagne"
            >
              <Phone className="size-4" aria-hidden />
            </a>
            <a
              href={SITE.links.maps}
              target="_blank"
              rel="noopener"
              aria-label="Get directions to Richman Suits Gold"
              className="rounded-full border border-gold/25 p-2.5 text-mist transition-colors hover:border-gold hover:text-champagne"
            >
              <MapPin className="size-4" aria-hidden />
            </a>
          </div>
        </div>

        {/* Services */}
        <nav aria-label="Services">
          <p className="eyebrow mb-5 text-[11px]">Services</p>
          <ul className="space-y-3 text-sm">
            {SERVICE_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-mist transition-colors hover:text-champagne"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Explore */}
        <nav aria-label="Explore">
          <p className="eyebrow mb-5 text-[11px]">Explore</p>
          <ul className="space-y-3 text-sm">
            {EXPLORE_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-mist transition-colors hover:text-champagne"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Visit */}
        <div>
          <p className="eyebrow mb-5 text-[11px]">Visit the Showroom</p>
          <address className="text-sm not-italic leading-relaxed text-mist">
            {SITE.name}
            <br />
            {SITE.address.display}
          </address>
          <p className="mt-4 text-sm text-mist">
            <a
              href={SITE.phone.href}
              className="inline-block py-1 transition-colors hover:text-champagne"
            >
              {SITE.phone.display}
            </a>
            <br />
            <a
              href={SITE.phoneAlt.href}
              className="inline-block py-1 transition-colors hover:text-champagne"
            >
              {SITE.phoneAlt.display}
            </a>
          </p>
          <dl className="mt-4 space-y-1 text-sm text-mist">
            {SITE.hours.map((h) => (
              <div key={h.label} className="flex justify-between gap-4">
                <dt>{h.label}</dt>
                <dd className="text-silk/80">
                  {h.opens} – {h.closes}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Popular searches + service areas — honest internal links */}
      <div className="border-t border-gold/10">
        <div className="shell py-8">
          <p className="eyebrow mb-4 text-[10px]">Popular Searches</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[13px]">
            {POPULAR_SEARCHES.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-mist/80 transition-colors hover:text-champagne"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-mist/80">
            Dressing grooms across {SITE.serviceAreas.join(" · ")} — and all of
            Chennai.
          </p>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="shell flex flex-col items-center justify-between gap-3 py-6 text-xs text-mist/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link
              href="/privacy/"
              className="transition-colors hover:text-champagne"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms/"
              className="transition-colors hover:text-champagne"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
