import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1.0 },
  { path: "/wedding-suits/", priority: 0.9 },
  { path: "/suit-rentals/", priority: 0.9 },
  { path: "/tuxedos/", priority: 0.9 },
  { path: "/custom-tailoring/", priority: 0.9 },
  { path: "/wedding-packages/", priority: 0.9 },
  { path: "/corporate-suits/", priority: 0.8 },
  { path: "/gallery/", priority: 0.7 },
  { path: "/about/", priority: 0.7 },
  { path: "/faqs/", priority: 0.7 },
  { path: "/contact/", priority: 0.8 },
  { path: "/blog/", priority: 0.7 },
  { path: "/privacy/", priority: 0.2 },
  { path: "/terms/", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages: MetadataRoute.Sitemap = ROUTES.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified,
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.priority,
  }));
  const posts: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));
  return [...pages, ...posts];
}
