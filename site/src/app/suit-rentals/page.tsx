import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/site/service-page";
import { getServicePage } from "@/lib/service-pages";

const page = getServicePage("suit-rentals");

export const metadata: Metadata = serviceMetadata(page);

export default function SuitRentalsPage() {
  return <ServicePage page={page} />;
}
