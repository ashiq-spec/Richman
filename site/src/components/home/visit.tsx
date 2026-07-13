import { Clock, MapPin, Navigation, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { SITE, WA_DEFAULT } from "@/lib/site";

export function Visit() {
  return (
    <section id="visit" className="section-pad">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Visit the Studio"
            title={
              <>
                Minutes from Guindy Metro,
                <span className="text-metallic block italic">
                  Worth the Trip from Anywhere
                </span>
              </>
            }
            sub="Walk in, feel the fabrics, meet your stylist — the showroom is open every day."
          />
        </Reveal>

        <Reveal className="grid gap-6 lg:grid-cols-5">
          <div
            data-reveal
            className="flex flex-col gap-6 rounded-2xl border border-gold/15 bg-card p-7 lg:col-span-2"
          >
            <div className="flex gap-4">
              <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                <MapPin className="size-4" aria-hidden />
              </span>
              <div>
                <h3 className="font-semibold text-silk">Showroom</h3>
                <address className="mt-1 text-sm not-italic leading-relaxed text-mist">
                  {SITE.name}
                  <br />
                  {SITE.address.display}
                </address>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                <Clock className="size-4" aria-hidden />
              </span>
              <div>
                <h3 className="font-semibold text-silk">Store Hours</h3>
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

            <div className="flex gap-4">
              <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                <Phone className="size-4" aria-hidden />
              </span>
              <div>
                <h3 className="font-semibold text-silk">Talk to Us</h3>
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

            <div className="mt-auto flex flex-col gap-3 border-t border-gold/10 pt-6">
              <Button asChild size="lg">
                <a href={SITE.phone.href}>
                  <Phone className="size-4" aria-hidden />
                  Call Now
                </a>
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button asChild variant="outline" size="md">
                  <a href={SITE.links.maps} target="_blank" rel="noopener">
                    <Navigation className="size-4" aria-hidden />
                    Directions
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
          </div>

          <div
            data-reveal
            className="overflow-hidden rounded-2xl border border-gold/15 lg:col-span-3"
          >
            <iframe
              src={SITE.links.mapsEmbed}
              title="Richman Suits Gold on Google Maps — Guindy, Chennai"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full border-0 grayscale-[25%] sm:h-full sm:min-h-[460px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
