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
    src: "/images/gallery_1.jpg",
    alt: "Bespoke custom-tailored suit crafted at Richman Suits Gold, Chennai",
    label: "Custom Suits",
    className: "row-span-2",
  },
  {
    src: "/images/gallery_2.jpg",
    alt: "Groom's wedding tuxedo tailored in Guindy, Chennai",
    label: "Wedding Tuxedos",
    className: "",
  },
  {
    src: "/images/gallery_3.jpg",
    alt: "Premium imported suiting fabrics at the Richman Suits fabric library",
    label: "Premium Fabrics",
    className: "",
  },
  {
    src: "/images/gallery_4.jpg",
    alt: "Private fitting session for a bespoke suit in Chennai",
    label: "Fitting Sessions",
    className: "sm:col-span-2",
  },
  {
    src: "/images/gallery_5.jpg",
    alt: "Handcrafted Aari embroidery detail on a wedding sherwani",
    label: "Aari Embroidery",
    className: "",
  },
  {
    src: "/images/gallery_6.jpg",
    alt: "Premium rental blazers and event wear collection in Chennai",
    label: "Rental Blazers",
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
