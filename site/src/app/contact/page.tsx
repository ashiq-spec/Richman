import type { Metadata } from "next";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/site/contact-form";
import { InstagramIcon } from "@/components/site/instagram-icon";
import { JsonLd } from "@/components/site/json-ld";
import { Reveal } from "@/components/site/reveal";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE, WA_DEFAULT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Visit — Guindy Showroom, Chennai",
  description:
    "Visit Richman Suits Gold in Guindy, Chennai. Call +91 99449 30106, WhatsApp us, or book a consultation. Open Mon–Sat 10 AM–9 PM, Sun 11 AM–8 PM.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-36 pb-10 md:pt-44">
        <div className="shell max-w-3xl text-center">
          <Reveal>
            <p data-reveal className="eyebrow mb-4">
              Contact
            </p>
            <h1
              data-reveal
              className="font-serif text-4xl leading-[1.08] tracking-tight text-silk sm:text-5xl md:text-6xl"
            >
              One Call Away From
              <span className="text-metallic block italic">
                Your Best-Dressed Day
              </span>
            </h1>
            <p data-reveal className="mt-5 leading-relaxed text-mist md:text-lg">
              Call, WhatsApp or walk in — the Guindy studio is open every day.
            </p>
            <div
              data-reveal
              className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
            >
              <Button asChild size="xl">
                <a href={SITE.phone.href}>
                  <Phone className="size-4" aria-hidden />
                  {SITE.phone.display}
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="xl">
                <a href={WA_DEFAULT} target="_blank" rel="noopener">
                  <WhatsAppIcon className="text-whatsapp" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="shell grid gap-6 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <div
              data-reveal
              className="rounded-2xl border border-gold/15 bg-card p-7"
            >
              <div className="flex gap-4">
                <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <MapPin className="size-4" aria-hidden />
                </span>
                <div>
                  <h2 className="font-semibold text-silk">Showroom</h2>
                  <address className="mt-1 text-sm not-italic leading-relaxed text-mist">
                    {SITE.name}
                    <br />
                    {SITE.address.display}
                  </address>
                  <Button asChild variant="outline" size="sm" className="mt-4">
                    <a href={SITE.links.maps} target="_blank" rel="noopener">
                      <Navigation className="size-3.5" aria-hidden />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>

              <div className="mt-7 flex gap-4">
                <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <Clock className="size-4" aria-hidden />
                </span>
                <div className="grow">
                  <h2 className="font-semibold text-silk">Store Hours</h2>
                  <dl className="mt-1 space-y-1 text-sm text-mist">
                    {SITE.hours.map((h) => (
                      <div key={h.label} className="flex justify-between gap-6">
                        <dt>{h.label}</dt>
                        <dd>
                          {h.opens} – {h.closes}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className="mt-7 flex gap-4">
                <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <Phone className="size-4" aria-hidden />
                </span>
                <div>
                  <h2 className="font-semibold text-silk">Phone</h2>
                  <p className="mt-1 text-sm leading-relaxed text-mist">
                    <a
                      href={SITE.phone.href}
                      className="transition-colors hover:text-champagne"
                    >
                      {SITE.phone.display}
                    </a>
                    <br />
                    <a
                      href={SITE.phoneAlt.href}
                      className="transition-colors hover:text-champagne"
                    >
                      {SITE.phoneAlt.display}
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-7 flex gap-4">
                <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <InstagramIcon size={15} />
                </span>
                <div>
                  <h2 className="font-semibold text-silk">Instagram</h2>
                  <a
                    href={SITE.links.instagram}
                    target="_blank"
                    rel="noopener"
                    className="mt-1 inline-block text-sm text-mist transition-colors hover:text-champagne"
                  >
                    @richmansuits — lookbooks & behind the scenes
                  </a>
                </div>
              </div>
            </div>

            <div
              data-reveal
              className="grow overflow-hidden rounded-2xl border border-gold/15"
            >
              <iframe
                src={SITE.links.mapsEmbed}
                title="Richman Suits Gold on Google Maps — Guindy, Chennai"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[300px] w-full border-0 grayscale-[25%] lg:h-full lg:min-h-[280px]"
              />
            </div>
          </Reveal>

          <Reveal>
            <div data-reveal>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ])}
      />
    </>
  );
}
