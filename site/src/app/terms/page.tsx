import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms for orders, rentals and services at Richman Suits Gold, Chennai.",
  alternates: { canonical: "/terms/" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <section className="pt-36 pb-20 md:pt-44">
      <div className="shell max-w-2xl">
        <h1 className="font-serif text-4xl tracking-tight text-silk">
          Terms of <span className="text-metallic italic">Service</span>
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-mist [&_h2]:font-serif [&_h2]:text-xl [&_h2]:text-silk">
          <h2>Orders & pricing</h2>
          <p>
            Every custom order is quoted upfront after consultation, and the
            quoted price is what you pay. Timelines (standard 7–10 days,
            express 3 days) are confirmed at the time of order and depend on
            fabric availability and fittings.
          </p>
          <h2>Fit guarantee</h2>
          <p>
            If a garment we tailored doesn&apos;t fit correctly at delivery, we
            alter it free of charge. Fit changes caused later (for example,
            significant body changes) are handled as paid alterations at fair
            rates.
          </p>
          <h2>Rentals</h2>
          <p>
            Rental garments are provided cleaned and pressed, and must be
            returned on the agreed date in the condition received, normal wear
            excepted. Damage beyond normal wear or non-return is chargeable at
            the garment&apos;s fair value, communicated at the time of rental.
          </p>
          <h2>Content</h2>
          <p>
            All text and imagery on this website belong to {SITE.name} or are
            used under license, and may not be reused commercially without
            permission.
          </p>
          <h2>Contact & jurisdiction</h2>
          <p>
            Questions about these terms: {SITE.phone.display}. These terms are
            governed by the laws of India; courts of Chennai, Tamil Nadu have
            jurisdiction.
          </p>
          <p className="text-xs text-mist/60">Last updated: July 2026</p>
        </div>
      </div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms/" },
        ])}
      />
    </section>
  );
}
