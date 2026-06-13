import type { Metadata } from "next";
import MarketingPage from "@/components/marketing/marketing-page";
import { marketingPageMetadata, marketingPages } from "@/lib/marketing-pages";

export const metadata: Metadata = marketingPageMetadata("contact");

export default function ContactPage() {
  return <MarketingPage page={marketingPages.contact} />;
}
