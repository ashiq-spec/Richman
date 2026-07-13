import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/site/service-page";
import { getServicePage } from "@/lib/service-pages";

const page = getServicePage("corporate-suits");

export const metadata: Metadata = serviceMetadata(page);

export default function CorporateSuitsPage() {
  return <ServicePage page={page} />;
}
