import type { Metadata } from "next";

import { Craft } from "@/components/home/craft";
import { Faq } from "@/components/home/faq";
import { Gallery } from "@/components/home/gallery";
import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Stats } from "@/components/home/stats";
import { Testimonials } from "@/components/home/testimonials";
import { Visit } from "@/components/home/visit";
import { Why } from "@/components/home/why";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { HOME_FAQS } from "@/lib/faqs";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Craft />
      <Why />
      <Gallery />
      <Testimonials />
      <Faq />
      <Visit />
      <CtaBand />
      <JsonLd data={faqSchema(HOME_FAQS)} />
    </>
  );
}
