"use client";

import { useRef } from "react";
import Image from "next/image";
import { Phone, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import { SITE, wa } from "@/lib/site";

const TRUST = [
  `${SITE.stats.suitsDelivered} Suits Delivered`,
  `${SITE.stats.yearsOfMastery} Years of Mastery`,
  "Guindy Showroom",
];

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Skip the intro when the page loads scrolled past the hero
        // (anchor deep links) — never animate what nobody sees.
        if (window.scrollY > window.innerHeight * 0.5) return;

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });
        tl.from(".hero-media", {
          scale: 1.07,
          duration: 2.6,
          ease: "power2.out",
        })
          .from(
            "[data-hero]",
            {
              y: 36,
              autoAlpha: 0,
              duration: 1.1,
              stagger: 0.13,
              clearProps: "opacity,visibility,transform",
            },
            0.25,
          )
          .from(
            ".hero-hint",
            { autoAlpha: 0, duration: 1 },
            "-=0.3",
          );
      });
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-20 pt-36 sm:items-center sm:pb-24"
    >
      {/* Photography */}
      <div className="hero-media absolute inset-0" aria-hidden>
        <Image
          src="/images/hero-wedding.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center]"
        />
      </div>
      {/* Cinematic grading — deep left panel keeps text crisp over the ivory embroidery */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/45 to-ink/5"
      />

      <div className="shell relative">
        <div className="max-w-2xl">
          <p
            data-hero
            className="mb-5 flex items-center gap-3 text-[11px] font-semibold tracking-[0.34em] text-champagne uppercase"
          >
            <span aria-hidden className="h-px w-10 bg-gold" />
            Guindy · Chennai — Luxury Groom Atelier
          </p>

          <h1
            data-hero
            className="font-serif text-[2.65rem] leading-[1.04] tracking-tight text-silk sm:text-6xl md:text-7xl"
          >
            Luxury Wedding Suits
            <span className="text-metallic block">in Chennai,</span>
            <span className="block italic">
              tailored for the modern groom.
            </span>
          </h1>

          <p
            data-hero
            className="mt-6 max-w-xl text-base leading-relaxed text-silk/85 md:text-lg"
          >
            Custom wedding suits, tuxedos and sherwanis, cut in our Guindy
            atelier — {SITE.stats.suitsDelivered}&nbsp;suits delivered across
            Chennai&apos;s finest weddings.
          </p>

          <div
            data-hero
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild size="xl" className="w-full sm:w-auto">
              <a href={SITE.phone.href}>
                <Phone className="size-4" aria-hidden />
                Call Now — {SITE.phone.plain}
              </a>
            </Button>
            <Button
              asChild
              variant="whatsapp"
              size="xl"
              className="w-full sm:w-auto"
            >
              <a
                href={wa("Hi Richman Suits! I'd like to book a consultation.")}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon className="text-whatsapp" />
                Book a Consultation
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div
            data-hero
            className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-silk/15 pt-6"
          >
            <a
              href={SITE.links.maps}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-silk/90 transition-colors hover:text-champagne"
            >
              <Star className="size-3.5 fill-current text-gold" aria-hidden />
              <strong className="font-semibold">{SITE.rating.value}</strong>·{" "}
              {SITE.rating.count} Google Reviews
            </a>
            {TRUST.map((item) => (
              <span
                key={item}
                className="text-xs font-medium tracking-wide text-silk/75"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        aria-hidden
        className="hero-hint absolute bottom-7 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <span className="block h-12 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
