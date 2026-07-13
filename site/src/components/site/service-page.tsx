import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Phone } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { Reveal } from "@/components/site/reveal";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import type { ServicePageContent } from "@/lib/service-pages";
import { SITE, wa } from "@/lib/site";

export function serviceMetadata(page: ServicePageContent): Metadata {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: page.path },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: page.path,
      images: [{ url: page.image.src, alt: page.image.alt }],
    },
  };
}

export function ServicePage({ page }: { page: ServicePageContent }) {
  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_80%_0%,rgba(198,161,91,0.1),transparent_70%)]"
        />
        <div className="shell relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <nav aria-label="Breadcrumb" data-reveal>
              <ol className="flex flex-wrap items-center gap-2 text-xs tracking-wide text-mist">
                <li>
                  <Link href="/" className="transition-colors hover:text-champagne">
                    Home
                  </Link>
                </li>
                <li aria-hidden className="text-gold">
                  /
                </li>
                <li aria-current="page" className="text-champagne">
                  {page.eyebrow}
                </li>
              </ol>
            </nav>

            <h1
              data-reveal
              className="mt-6 font-serif text-4xl leading-[1.06] tracking-tight text-silk sm:text-5xl md:text-6xl"
            >
              {page.h1}
              <span className="text-metallic block italic">{page.h1Accent}</span>
            </h1>

            <p
              data-reveal
              className="mt-6 max-w-xl text-base leading-relaxed text-mist md:text-lg"
            >
              {page.intro}
            </p>

            <div data-reveal className="mt-9 flex flex-col gap-3 sm:flex-row">
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
                <a href={wa(page.waText)} target="_blank" rel="noopener">
                  <WhatsAppIcon className="text-whatsapp" />
                  Enquire on WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal className="relative">
            <div
              data-reveal
              className="overflow-hidden rounded-2xl border border-gold/15 shadow-lift"
            >
              <Image
                src={page.image.src}
                alt={page.image.alt}
                width={880}
                height={1100}
                priority
                sizes="(min-width: 1024px) 44vw, 92vw"
                className="h-auto max-h-[560px] w-full object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's included */}
      <section className="border-y border-gold/15 bg-coal">
        <div className="shell py-16 md:py-20">
          <Reveal
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.06}
          >
            {page.included.map((item) => (
              <div
                key={item.title}
                data-reveal
                className="rounded-2xl border border-gold/15 bg-card p-6"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <Check className="size-4" aria-hidden />
                </span>
                <h2 className="mt-4 font-serif text-lg text-silk">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {item.text}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Anchored sub-section */}
      {page.anchor ? (
        <section id={page.anchor.id} className="section-pad scroll-mt-24">
          <div className="shell max-w-3xl text-center">
            <Reveal>
              <h2
                data-reveal
                className="font-serif text-3xl leading-[1.12] tracking-tight text-silk sm:text-4xl"
              >
                {page.anchor.heading}
                <span className="text-metallic block italic">
                  {page.anchor.accent}
                </span>
              </h2>
              {page.anchor.body.map((para) => (
                <p
                  key={para.slice(0, 24)}
                  data-reveal
                  className="mt-5 leading-relaxed text-mist md:text-lg"
                >
                  {para}
                </p>
              ))}
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* Process */}
      <section>
        <div className="shell pt-16 pb-16 md:pt-24 md:pb-20">
          <Reveal>
            <p data-reveal className="eyebrow mb-10 text-center">
              How It Works
            </p>
          </Reveal>
          <Reveal
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.07}
          >
            {page.steps.map((step, i) => (
              <div
                key={step.title}
                data-reveal
                className="relative rounded-2xl border border-gold/15 p-6"
              >
                <p className="text-metallic font-serif text-3xl" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-lg text-silk">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {step.text}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-coal">
        <div className="shell max-w-4xl py-16 md:py-20">
          <Reveal>
            <h2
              data-reveal
              className="mb-8 text-center font-serif text-3xl tracking-tight text-silk sm:text-4xl"
            >
              Good <span className="text-metallic italic">Questions</span>
            </h2>
            <div data-reveal>
              <Accordion type="single" collapsible>
                {page.faqs.map((faq, i) => (
                  <AccordionItem key={faq.question} value={`faq-${i}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div data-reveal className="mt-8 flex flex-wrap justify-center gap-3">
              {page.related.map((rel) => (
                <Button key={rel.href} asChild variant="outline" size="md">
                  <Link href={rel.href}>
                    {rel.label}
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </Link>
                </Button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand whatsappText={page.waText} />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: page.h1 + " " + page.h1Accent, path: page.path },
        ])}
      />
      <JsonLd data={faqSchema(page.faqs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: page.metaTitle,
          description: page.metaDescription,
          url: `${SITE.url}${page.path}`,
          areaServed: "Chennai",
          provider: { "@id": `${SITE.url}/#business` },
        }}
      />
    </>
  );
}
