import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

const REASONS = [
  {
    title: "Perfect Fit Guarantee",
    text: "If it doesn't fit perfectly after delivery, we alter it — free of charge, no questions asked.",
  },
  {
    title: "Wedding Specialists",
    text: "500+ grooms styled. We plan complete looks across muhurtham, reception and beyond.",
  },
  {
    title: "Premium Fabric Library",
    text: "200+ handpicked fabrics from Italy, England and India's finest mills — feel them before you commit.",
  },
  {
    title: "Master Craftsmen",
    text: "Every suit passes through tailors with 10+ years of experience. Craftsmanship is never outsourced.",
  },
  {
    title: "Express 3-Day Tailoring",
    text: "Standard delivery in 7–10 days, express in 3 — for the moments that can't wait.",
  },
  {
    title: "Transparent Pricing",
    text: "Upfront quotes that don't change. Luxury without ambiguity, on any budget.",
  },
];

export function Why() {
  return (
    <section className="section-pad bg-ink">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="The Richman Standard"
            title={
              <>
                Why Chennai&apos;s Finest
                <span className="text-metallic block italic">Choose Us</span>
              </>
            }
          />
        </Reveal>
        <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {REASONS.map((reason, i) => (
            <div
              key={reason.title}
              data-reveal
              className="rounded-2xl border border-gold/15 bg-coal p-7 transition-colors duration-300 hover:border-gold/40"
            >
              <p className="text-metallic font-serif text-3xl" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-lg text-silk">
                {reason.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-mist">
                {reason.text}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
