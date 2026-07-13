import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { POSTS, getPost } from "@/lib/posts";
import { SITE } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}/`,
      images: [{ url: post.image.src, alt: post.image.alt }],
      publishedTime: post.date,
    },
  };
}

const dateFormat = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="shell max-w-3xl">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs tracking-wide text-mist">
              <li>
                <Link href="/" className="transition-colors hover:text-champagne">
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-gold">
                /
              </li>
              <li>
                <Link
                  href="/blog/"
                  className="transition-colors hover:text-champagne"
                >
                  Style Journal
                </Link>
              </li>
            </ol>
          </nav>

          <p className="mt-8 text-[11px] font-bold tracking-[0.24em] text-gold uppercase">
            {post.category}
          </p>
          <h1 className="mt-3 font-serif text-3xl leading-[1.1] tracking-tight text-silk sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-mist">
            {dateFormat.format(new Date(post.date))} · {post.readMinutes} min
            read · {SITE.name}
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-gold/15">
            <Image
              src={post.image.src}
              alt={post.image.alt}
              width={1200}
              height={700}
              priority
              sizes="(min-width: 768px) 720px, 92vw"
              className="h-auto max-h-[420px] w-full object-cover"
            />
          </div>

          <div className="mt-10 space-y-8">
            {post.sections.map((section, i) => (
              <section key={i}>
                {section.heading ? (
                  <h2 className="mb-4 font-serif text-2xl tracking-tight text-silk">
                    {section.heading}
                  </h2>
                ) : null}
                {section.paragraphs.map((para) => (
                  <p
                    key={para.slice(0, 32)}
                    className="mt-4 leading-relaxed text-mist first:mt-0 md:text-lg"
                  >
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-gold/15 bg-card p-7 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-serif text-lg text-silk">
                Planning a wedding look?
              </p>
              <p className="mt-1 text-sm text-mist">
                Talk to a stylist at the Guindy studio — open every day.
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <a href={SITE.phone.href}>
                <Phone className="size-4" aria-hidden />
                {SITE.phone.display}
              </a>
            </Button>
          </div>

          <aside className="mt-14">
            <p className="eyebrow mb-5 text-[11px]">Keep Reading</p>
            <ul className="space-y-3">
              {related.map((rel) => (
                <li key={rel.slug}>
                  <Link
                    href={`/blog/${rel.slug}/`}
                    className="font-serif text-lg text-silk underline-offset-4 transition-colors hover:text-champagne hover:underline"
                  >
                    {rel.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </article>

      <CtaBand />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          image: `${SITE.url}${post.image.src}`,
          url: `${SITE.url}/blog/${post.slug}/`,
          inLanguage: "en-IN",
          author: { "@type": "Organization", name: SITE.name },
          publisher: { "@id": `${SITE.url}/#business` },
          mainEntityOfPage: `${SITE.url}/blog/${post.slug}/`,
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Style Journal", path: "/blog/" },
          { name: post.title, path: `/blog/${post.slug}/` },
        ])}
      />
    </>
  );
}
