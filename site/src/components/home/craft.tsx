import Image from "next/image";
import Link from "next/link";
import { Gem, Ruler, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { SITE } from "@/lib/site";

const PILLARS = [
  {
    icon: Ruler,
    title: "20+ measurements",
    text: "Your body is the pattern — every suit begins with a full personal fitting.",
  },
  {
    icon: Gem,
    title: "200+ premium fabrics",
    text: "Italian, English and India's finest mills — touch and drape before you decide.",
  },
  {
    icon: ShieldCheck,
    title: "Perfect-fit guarantee",
    text: "If it isn't right after delivery, we alter it free. No questions asked.",
  },
];

/** Light editorial break — the page breathes here. */
export function Craft() {
  return (
    <section className="bg-cream text-espresso">
      <div className="shell section-pad grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div data-reveal className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/craft-atelier.jpg"
                alt="Bespoke suit jacket under construction beside a vintage sewing machine and fabric swatches"
                width={880}
                height={1100}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 44vw, 92vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-3 rounded-2xl bg-espresso px-6 py-5 text-cream shadow-lift sm:-right-6">
              <p className="font-serif text-3xl">
                {SITE.stats.suitsDelivered}
              </p>
              <p className="mt-0.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-cream/70">
                Suits Delivered
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p
            data-reveal
            className="mb-4 text-xs font-semibold tracking-[0.32em] text-gold-deep uppercase"
          >
            The Richman Standard
          </p>
          <h2
            data-reveal
            className="font-serif text-3xl leading-[1.12] tracking-tight text-balance sm:text-4xl md:text-5xl"
          >
            Crafted with precision.
            <span className="block italic">Worn with pride.</span>
          </h2>
          <p data-reveal className="mt-6 leading-relaxed text-cocoa md:text-lg">
            What began as a small atelier in Guindy has become Chennai&apos;s
            trusted name in luxury groom wear — {SITE.stats.suitsDelivered}{" "}
            suits across weddings, receptions and boardrooms. We don&apos;t
            just tailor garments; we architect the way a man carries his
            biggest day.
          </p>

          <ul data-reveal className="mt-9 space-y-6">
            {PILLARS.map((pillar) => (
              <li key={pillar.title} className="flex gap-4">
                <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-espresso/15 text-gold-deep">
                  <pillar.icon className="size-4.5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold">{pillar.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-cocoa">
                    {pillar.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div data-reveal className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild variant="light" size="lg">
              <Link href="/about/">Our Story</Link>
            </Button>
            <a
              href={SITE.phone.href}
              className="text-sm font-semibold text-espresso underline-offset-4 transition-colors hover:text-gold-deep hover:underline"
            >
              or call {SITE.phone.display}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
