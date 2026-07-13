import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/site/service-page";
import { getServicePage } from "@/lib/service-pages";

const page = getServicePage("custom-tailoring");

export const metadata: Metadata = serviceMetadata(page);

export default function CustomTailoringPage() {
  return <ServicePage page={page} />;
}
