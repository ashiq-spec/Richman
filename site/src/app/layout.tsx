import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { JsonLd } from "@/components/site/json-ld";
import { MobileBar } from "@/components/site/mobile-bar";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Luxury Wedding Suits in Chennai | Richman Suits Gold",
    template: "%s | Richman Suits Gold",
  },
  description: SITE.description,
  keywords: [
    "wedding suits Chennai",
    "wedding suits Guindy",
    "luxury suits Chennai",
    "groom suit Chennai",
    "suit rental Chennai",
    "tuxedo Chennai",
    "custom tailoring Chennai",
    "custom suits Chennai",
    "reception suits Chennai",
    "corporate suits Chennai",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title: "Luxury Wedding Suits in Chennai | Richman Suits Gold",
    description: SITE.description,
    url: SITE.url,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — luxury wedding suits in Chennai`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Wedding Suits in Chennai | Richman Suits Gold",
    description: SITE.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} antialiased`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-metallic focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>

        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileBar />

        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
      </body>
    </html>
  );
}
