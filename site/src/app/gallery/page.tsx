import type { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { InstagramIcon } from "@/components/site/instagram-icon";
import { JsonLd } from "@/components/site/json-ld";
import { Reveal } from "@/components/site/reveal";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery — Wedding Suits, Tuxedos & Sherwanis We've Crafted",
  description:
    "A look inside Richman Suits Gold, Chennai — custom wedding suits, tuxedos, sherwanis, premium fabrics and fittings from our Guindy atelier.",
  alternates: { canonical: "/gallery/" },
};

const ITEMS = [
  {
    src: "/images/hero-groom.jpg",
    alt: "Groom in a black peak-lapel suit with crisp white shirt",
    label: "The Groom Standard",
    className: "row-span-2",
  },
  {
    src: "/images/gal-sherwani.jpg",
    alt: "Ivory embroidered wedding sherwani with pearl haar on display",
    label: "Sherwanis & Embroidery",
    className: "",
  },
  {
    src: "/images/gal-fabric.jpg",
    alt: "Folded premium suiting fabrics in navy check and grey twill",
    label: "Premium Fabrics",
    className: "",
  },
  {
    src: "/images/craft-atelier.jpg",
    alt: "Bespoke jacket in progress beside a vintage sewing machine",
    label: "Inside the Atelier",
    className: "row-span-2",
  },
  {
    src: "/images/gal-custom.jpg",
    alt: "Man buttoning a custom-tailored charcoal suit",
    label: "Custom Suits",
    className: "",
  },
  {
    src: "/images/gal-tuxedo.jpg",
    alt: "All-black tuxedo look styled with round sunglasses",
    label: "Evening & Black Tie",
    className: "",
  },
  {
    src: "/images/groom-indian.jpg",
    alt: "Indian groom in ivory sherwani at a decorated wedding venue",
    label: "Wedding Mornings",
    className: "",
  },
  {
    src: "/images/gal-fitting.jpg",
    alt: "Suit and tie pinned on a tailor's mannequin",
    label: "Fitting Sessions",
    className: "",
  },
  {
    src: "/images/gal-groomsmen.jpg",
    alt: "Groom and groomsman in coordinated formal wear",
    label: "Groomsmen Looks",
    className: "sm:col-span-2",
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="pt-36 pb-12 md:pt-44">
        <div className="shell max-w-3xl text-center">
          <Reveal>
            <p data-reveal className="eyebrow mb-4">
              Our Work
            </p>
            <h1
              data-reveal
              className="font-serif text-4xl leading-[1.08] tracking-tight text-silk sm:text-5xl md:text-6xl"
            >
              Crafted for Men Who
              <span className="text-metallic block italic">
                Dress With Intent
              </span>
            </h1>
            <p data-reveal className="mt-5 leading-relaxed text-mist md:text-lg">
              Suits, sherwanis and the atelier that makes them — a glimpse of
              the Richman standard.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="shell">
          <Reveal
            className="grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.05}
          >
            {ITEMS.map((item) => (
              <figure
                key={item.src}
                data-reveal
                className={`group relative overflow-hidden rounded-2xl ${item.className}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/85 via-transparent to-transparent p-5">
                  <span className="text-[11px] font-bold tracking-[0.24em] text-champagne uppercase">
                    {item.label}
                  </span>
                </figcaption>
              </figure>
            ))}
          </Reveal>

          <Reveal className="mt-12 text-center">
            <p data-reveal className="text-sm text-mist">
              Fresh work every week on Instagram
            </p>
            <div data-reveal className="mt-4">
              <Button asChild variant="outline" size="lg">
                <a href={SITE.links.instagram} target="_blank" rel="noopener">
                  <InstagramIcon size={16} className="text-gold" />
                  Follow @richmansuits
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Your Turn"
        title="The Next Photograph Could Be Yours"
        sub="Book a consultation and see yourself in the Richman standard."
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery/" },
        ])}
      />
    </>
  );
}
