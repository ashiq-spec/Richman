import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { Reveal } from "@/components/site/reveal";
import { breadcrumbSchema } from "@/lib/schema";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Style Journal — Wedding Suit Guides for Chennai Grooms",
  description:
    "Guides on wedding suits, tuxedos, fabrics, rentals and groom style — written by the team at Richman Suits Gold, Guindy, Chennai.",
  alternates: { canonical: "/blog/" },
};

const dateFormat = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function BlogIndexPage() {
  return (
    <>
      <section className="pt-36 pb-12 md:pt-44">
        <div className="shell max-w-3xl text-center">
          <Reveal>
            <p data-reveal className="eyebrow mb-4">
              Style Journal
            </p>
            <h1
              data-reveal
              className="font-serif text-4xl leading-[1.08] tracking-tight text-silk sm:text-5xl md:text-6xl"
            >
              Dress Like You
              <span className="text-metallic block italic">Mean It</span>
            </h1>
            <p data-reveal className="mt-5 leading-relaxed text-mist md:text-lg">
              Practical guides on wedding suits, fabrics and groom style — from
              the floor of our Guindy atelier.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="shell">
          <Reveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {POSTS.map((post) => (
              <article
                key={post.slug}
                data-reveal
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold/15 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-lift"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 92vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex grow flex-col p-6">
                  <p className="text-[11px] font-bold tracking-[0.24em] text-gold uppercase">
                    {post.category}
                  </p>
                  <h2 className="mt-3 font-serif text-xl leading-snug text-silk">
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="after:absolute after:inset-0 group-hover:text-champagne"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-mist">
                    {post.description}
                  </p>
                  <p className="mt-auto pt-5 text-xs text-mist/70">
                    {dateFormat.format(new Date(post.date))} ·{" "}
                    {post.readMinutes} min read
                  </p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Beyond Reading"
        title="An Hour at the Studio Beats a Week of Research"
        sub="Bring your questions to a stylist — consultation costs nothing but the visit."
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Style Journal", path: "/blog/" },
        ])}
      />
    </>
  );
}
