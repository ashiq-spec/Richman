import type { Metadata } from "next";
import Image from "next/image";
import { Gem, HeartHandshake, Ruler, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { Reveal } from "@/components/site/reveal";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Chennai's Luxury Groom Atelier in Guindy",
  description:
    "The story of Richman Suits Gold — 12+ years of master tailoring in Guindy, Chennai. 7,500+ suits delivered across weddings, receptions and boardrooms.",
  alternates: { canonical: "/about/" },
};

const VALUES = [
  {
    icon: Ruler,
    title: "Precision first",
    text: "20+ measurements before a single cut. The suit is built on you, not near you.",
  },
  {
    icon: Gem,
    title: "Material honesty",
    text: "200+ fabrics you can touch and drape — we'll tell you plainly what suits Chennai heat and what doesn't.",
  },
  {
    icon: ShieldCheck,
    title: "Stand behind the stitch",
    text: "Perfect-fit guarantee on every garment. If it isn't right, we make it right, free.",
  },
  {
    icon: HeartHandshake,
    title: "Respect for the day",
    text: "Weddings run on trust and timelines. We've honoured both for 500+ grooms.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(198,161,91,0.1),transparent_70%)]"
        />
        <div className="shell relative max-w-3xl text-center">
          <Reveal>
            <p data-reveal className="eyebrow mb-4">
              Our Story
            </p>
            <h1
              data-reveal
              className="font-serif text-4xl leading-[1.08] tracking-tight text-silk sm:text-5xl md:text-6xl"
            >
              Twelve Years of
              <span className="text-metallic block italic">
                Dressing Chennai&apos;s Finest
              </span>
            </h1>
            <p
              data-reveal
              className="mx-auto mt-6 max-w-2xl leading-relaxed text-mist md:text-lg"
            >
              Richman Suits Gold began as a small atelier in Guindy with a
              singular obsession — the perfect suit. {SITE.stats.suitsDelivered}{" "}
              garments later, we&apos;re the name Chennai grooms trust with the
              most photographed day of their lives.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-gold/15 bg-coal">
        <div className="shell grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div
              data-reveal
              className="overflow-hidden rounded-2xl border border-gold/15 shadow-lift"
            >
              <Image
                src="/images/wedding-look.jpg"
                alt="Cream embroidered sherwani with pearl haar prepared for a wedding"
                width={880}
                height={1100}
                sizes="(min-width: 1024px) 44vw, 92vw"
                className="h-auto max-h-[540px] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <h2
              data-reveal
              className="font-serif text-3xl leading-[1.12] tracking-tight text-silk sm:text-4xl"
            >
              We don&apos;t just tailor garments.
              <span className="text-metallic block italic">
                We architect confidence.
              </span>
            </h2>
            <p data-reveal className="mt-6 leading-relaxed text-mist">
              Every suit that leaves our floor passes through the hands of
              master craftsmen with a decade or more at the needle. From the
              first consultation to the final press, each commission is treated
              as exactly that — a commission, never a transaction.
            </p>
            <p data-reveal className="mt-4 leading-relaxed text-mist">
              Grooms come to us from every corner of Chennai — Velachery,
              Adyar, T. Nagar, Anna Nagar, OMR — and walk out with wedding
              suits, sherwanis, tuxedos and heirloom-grade three-pieces built
              around their story.
            </p>
            <div data-reveal className="mt-8">
              <Button asChild size="lg">
                <a href={SITE.phone.href}>Talk to the Studio</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <Reveal>
            <p data-reveal className="eyebrow mb-10 text-center">
              What We Stand For
            </p>
          </Reveal>
          <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
            {VALUES.map((value) => (
              <div
                key={value.title}
                data-reveal
                className="rounded-2xl border border-gold/15 bg-card p-7"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <value.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-lg text-silk">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {value.text}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Meet Us in Person"
        title="The Fabric Wall Is Worth the Visit Alone"
        sub="Come touch what your suit could be made of — the studio is open every day in Guindy."
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />
    </>
  );
}
