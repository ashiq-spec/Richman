import type { Metadata } from "next";
import { Phone } from "lucide-react";

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
import { ALL_FAQS } from "@/lib/faqs";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { SITE, WA_DEFAULT } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs — Wedding Suits, Rentals & Tailoring in Chennai",
  description:
    "Straight answers about wedding suits, custom tailoring, suit rentals, pricing, timelines and fittings at Richman Suits Gold, Guindy, Chennai.",
  alternates: { canonical: "/faqs/" },
};

export default function FaqsPage() {
  return (
    <>
      <section className="pt-36 pb-10 md:pt-44">
        <div className="shell max-w-3xl text-center">
          <Reveal>
            <p data-reveal className="eyebrow mb-4">
              Good Questions
            </p>
            <h1
              data-reveal
              className="font-serif text-4xl leading-[1.08] tracking-tight text-silk sm:text-5xl md:text-6xl"
            >
              Everything You&apos;d Ask
              <span className="text-metallic block italic">
                Before You Visit
              </span>
            </h1>
            <p data-reveal className="mt-5 leading-relaxed text-mist md:text-lg">
              Cost, timing, rentals, fittings and everything in between —
              answered the way we&apos;d answer across the counter.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="shell max-w-4xl">
          <Reveal>
            <div data-reveal>
              <Accordion type="single" collapsible>
                {ALL_FAQS.map((faq, i) => (
                  <AccordionItem key={faq.question} value={`faq-${i}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div
              data-reveal
              className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-gold/15 bg-card p-7 text-center sm:flex-row sm:justify-between sm:text-left"
            >
              <div>
                <p className="font-serif text-lg text-silk">
                  Didn&apos;t find your answer?
                </p>
                <p className="mt-1 text-sm text-mist">
                  Ask us directly — calls answered during store hours, WhatsApp
                  any time.
                </p>
              </div>
              <div className="flex shrink-0 gap-3">
                <Button asChild size="md">
                  <a href={SITE.phone.href}>
                    <Phone className="size-4" aria-hidden />
                    Call Us
                  </a>
                </Button>
                <Button asChild variant="whatsapp" size="md">
                  <a href={WA_DEFAULT} target="_blank" rel="noopener">
                    <WhatsAppIcon size={15} className="text-whatsapp" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />

      <JsonLd data={faqSchema(ALL_FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQs", path: "/faqs/" },
        ])}
      />
    </>
  );
}
