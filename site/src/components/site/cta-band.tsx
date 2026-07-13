import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { SITE, wa } from "@/lib/site";

type CtaBandProps = {
  eyebrow?: string;
  title?: string;
  sub?: string;
  whatsappText?: string;
};

/** Full-width closing invitation — every page ends with a way to call. */
export function CtaBand({
  eyebrow = "Book Your Consultation",
  title = "Your Wedding Suit Is Waiting in Guindy",
  sub = "One visit is all it takes — meet your stylist, feel the fabrics, and walk out knowing exactly how you'll look on the big day.",
  whatsappText = "Hi Richman Suits! I'd like to book a wedding consultation.",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden border-y border-gold/15 bg-coal">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_0%,rgba(198,161,91,0.14),transparent_70%)]"
      />
      <Reveal className="shell relative section-pad text-center">
        <p data-reveal className="eyebrow mb-4">
          {eyebrow}
        </p>
        <h2
          data-reveal
          className="mx-auto max-w-3xl font-serif text-3xl leading-[1.12] tracking-tight text-balance text-silk sm:text-4xl md:text-5xl"
        >
          {title}
        </h2>
        <p data-reveal className="mx-auto mt-5 max-w-xl text-mist md:text-lg">
          {sub}
        </p>
        <div
          data-reveal
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild size="xl" className="w-full sm:w-auto">
            <a href={SITE.phone.href}>
              <Phone className="size-4" aria-hidden />
              Call Now — {SITE.phone.display}
            </a>
          </Button>
          <Button
            asChild
            variant="whatsapp"
            size="xl"
            className="w-full sm:w-auto"
          >
            <a href={wa(whatsappText)} target="_blank" rel="noopener">
              <WhatsAppIcon className="text-whatsapp" />
              Book on WhatsApp
            </a>
          </Button>
        </div>
        <p data-reveal className="mt-6 text-xs tracking-wide text-mist">
          Open today · {SITE.hours[0].label} {SITE.hours[0].opens}–
          {SITE.hours[0].closes} · {SITE.address.display}
        </p>
      </Reveal>
    </section>
  );
}
