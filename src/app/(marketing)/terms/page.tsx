import type { Metadata } from "next";
import MarketingPage from "@/components/marketing/marketing-page";
import { marketingPageMetadata, marketingPages } from "@/lib/marketing-pages";

export const metadata: Metadata = marketingPageMetadata("terms");

export default function TermsPage() {
  return <MarketingPage page={marketingPages.terms} />;
}
