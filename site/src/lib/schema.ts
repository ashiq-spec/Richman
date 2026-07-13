import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import type { Faq } from "@/lib/faqs";

/**
 * schema.org structured data. Geo coordinates come from the verified
 * Google Business Profile listing for Richman Suits Gold.
 *
 * AggregateRating uses the REAL numbers the owner read from the GBP
 * dashboard (4.7 / 349 across showrooms, July 2026) and matches what
 * the pages visibly display — never inflate these.
 */

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ClothingStore", "Tailor"],
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    alternateName: SITE.shortName,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone.e164,
    priceRange: "₹₹₹",
    currenciesAccepted: "INR",
    image: [
      `${SITE.url}/images/storefront.jpg`,
      `${SITE.url}/images/og-image.jpg`,
    ],
    logo: `${SITE.url}/images/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    hasMap: SITE.links.maps,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: SITE.hoursSchema.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.dayOfWeek,
      opens: spec.opens,
      closes: spec.closes,
    })),
    sameAs: [SITE.links.instagram, SITE.links.maps],
    areaServed: SITE.serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, Chennai`,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone.e164,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["en", "ta"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Suit Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${SITE.url}${service.href}`,
          areaServed: "Chennai",
          provider: { "@id": `${SITE.url}/#business` },
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE.url}/#business` },
  };
}

export function faqSchema(faqs: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}
