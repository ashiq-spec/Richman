import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { SITE } from "@/lib/site";

const REVIEWS = [
  {
    name: "Arjun Krishnamurthy",
    role: "Groom · Wedding Sherwani",
    text: "I walked in two weeks before my wedding, unsure of everything. I walked out with the most impeccable ivory sherwani I've ever seen. The fit was surgical — every single guest asked where I got it.",
    featured: true,
  },
  {
    name: "Karthik Balaji",
    role: "Groom · Group Wedding Package",
    text: "Booked a group package for my groomsmen — six suits, all custom. Every suit was delivered on time and fit each of us like it was made exclusively for us. Because it was.",
    featured: false,
  },
  {
    name: "Sathish Narayanan",
    role: "Groom · Embroidered Tuxedo",
    text: "The Aari embroidery work on my wedding suit was breathtaking. I've never felt more like myself than in that suit. This is not just a shop — it's an experience.",
    featured: false,
  },
  {
    name: "Rajan Subramaniam",
    role: "Corporate Client · Custom 3-Piece",
    text: "A custom navy three-piece in six days. The craftsmanship is on par with suits I've seen for three times the price abroad.",
    featured: false,
  },
];

function Stars() {
  return (
    <span className="flex gap-0.5 text-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-current" aria-hidden />
      ))}
    </span>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="section-pad">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Client Stories"
            title={
              <>
                Worn by Men Who
                <span className="text-metallic block italic">
                  Refuse to Settle
                </span>
              </>
            }
          />
        </Reveal>

        <Reveal className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {REVIEWS.map((review) => (
            <blockquote
              key={review.name}
              data-reveal
              className={`flex flex-col rounded-2xl border border-gold/15 bg-card p-7 ${
                review.featured ? "lg:row-span-2 lg:justify-center" : ""
              }`}
            >
              <Stars />
              <p
                className={`mt-4 leading-relaxed text-silk/90 ${
                  review.featured ? "text-lg font-serif italic" : "text-sm"
                }`}
              >
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3 border-t border-gold/10 pt-5">
                <span
                  aria-hidden
                  className="bg-metallic flex size-10 items-center justify-center rounded-full font-serif text-base font-semibold text-ink"
                >
                  {review.name[0]}
                </span>
                <div>
                  <p className="text-sm font-semibold text-silk">
                    {review.name}
                  </p>
                  <p className="text-xs text-mist">{review.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}

          {/* Google reviews invitation card */}
          <div
            data-reveal
            className="flex flex-col items-start justify-center rounded-2xl border border-dashed border-gold/30 p-7"
          >
            <Stars />
            <p className="mt-4 font-serif text-xl text-silk">
              Hundreds more grooms have told their story on Google.
            </p>
            <Button asChild variant="outline" size="md" className="mt-6">
              <a href={SITE.links.maps} target="_blank" rel="noopener">
                Read All Google Reviews
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
