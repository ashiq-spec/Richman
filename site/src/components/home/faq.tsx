import { Phone } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { HOME_FAQS } from "@/lib/faqs";
import { SITE } from "@/lib/site";

export function Faq() {
  return (
    <section id="faqs" className="section-pad bg-coal">
      <div className="shell max-w-4xl">
        <Reveal>
          <SectionHeading
            eyebrow="Good Questions"
            title={
              <>
                Everything Grooms
                <span className="text-metallic italic"> Ask Us</span>
              </>
            }
            sub="Straight answers on cost, timing, rentals and fittings."
          />
        </Reveal>

        <Reveal>
          <div data-reveal>
            <Accordion type="single" collapsible>
              {HOME_FAQS.map((faq, i) => (
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
                Still deciding? Ask a stylist directly.
              </p>
              <p className="mt-1 text-sm text-mist">
                We answer within business hours — usually in minutes.
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <a href={SITE.phone.href}>
                <Phone className="size-4" aria-hidden />
                {SITE.phone.display}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
