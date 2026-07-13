import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/site/instagram-icon";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { SITE } from "@/lib/site";

const ITEMS = [
  {
    src: "/images/gal-custom.jpg",
    alt: "Man buttoning a custom-tailored charcoal suit in moody studio light",
    label: "Custom Suits",
    className: "row-span-2",
  },
  {
    src: "/images/gal-tuxedo.jpg",
    alt: "Black peak-lapel tuxedo look styled for an evening reception",
    label: "Wedding Tuxedos",
    className: "",
  },
  {
    src: "/images/gal-fabric.jpg",
    alt: "Folded premium suiting fabrics in navy check and grey twill",
    label: "Premium Fabrics",
    className: "",
  },
  {
    src: "/images/gal-fitting.jpg",
    alt: "Suit and tie pinned on a tailor's mannequin during fitting",
    label: "Fitting Sessions",
    className: "sm:col-span-2",
  },
  {
    src: "/images/gal-sherwani.jpg",
    alt: "Ivory embroidered wedding sherwani with pearl haar on a hanger",
    label: "Sherwanis & Embroidery",
    className: "",
  },
  {
    src: "/images/gal-groomsmen.jpg",
    alt: "Groom and groomsman in coordinated formal wear outdoors",
    label: "Groomsmen & Rentals",
    className: "",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-coal">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Our Work"
            title={
              <>
                Crafted for the
                <span className="text-metallic block italic">
                  Discerning Man
                </span>
              </>
            }
            sub="Every photograph is a man who chose to be extraordinary on his defining day."
          />
        </Reveal>

        <Reveal
          className="grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
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

        <Reveal className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild variant="outline" size="lg" data-reveal>
            <Link href="/gallery/">
              View Full Gallery
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg" data-reveal>
            <a href={SITE.links.instagram} target="_blank" rel="noopener">
              <InstagramIcon size={16} className="text-gold" />
              @richmansuits
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
