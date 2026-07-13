import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/site/service-page";
import { getServicePage } from "@/lib/service-pages";

const page = getServicePage("wedding-packages");

export const metadata: Metadata = serviceMetadata(page);

export default function WeddingPackagesPage() {
  return <ServicePage page={page} />;
}
