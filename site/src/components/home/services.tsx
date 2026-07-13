import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  Briefcase,
  CalendarClock,
  Gem,
  Layers,
  Scissors,
  Shirt,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { SERVICES } from "@/lib/services";

const ICONS: Record<string, LucideIcon> = {
  "wedding-suits": Gem,
  "reception-suits": Sparkles,
  tuxedos: Award,
  "three-piece-suits": Layers,
  "custom-tailoring": Scissors,
  "suit-rentals": CalendarClock,
  "wedding-packages": Users,
  "corporate-suits": Briefcase,
  "premium-blazers": Shirt,
};

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="What We Craft"
            title={
              <>
                Tailored for Every
                <span className="text-metallic block italic">
                  Defining Moment
                </span>
              </>
            }
            sub="From the muhurtham to the boardroom — nine ways to look like the best-dressed man in the room."
          />
        </Reveal>

        <Reveal className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" stagger={0.07}>
          {SERVICES.map((service) => {
            const Icon = ICONS[service.slug] ?? Gem;
            return (
              <article
                key={service.slug}
                data-reveal
                className="group relative flex flex-col rounded-2xl border border-gold/15 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-lift"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors group-hover:bg-gold/10">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-serif text-xl text-silk">
                  <Link
                    href={service.href}
                    className="after:absolute after:inset-0 group-hover:text-champagne"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  {service.short}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-wide text-gold transition-colors group-hover:text-champagne">
                  Explore
                  <ArrowUpRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
