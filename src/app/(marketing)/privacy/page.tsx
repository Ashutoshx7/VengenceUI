import type { Metadata } from "next";
import MarketingPage from "@/components/marketing/marketing-page";
import { marketingPageMetadata, marketingPages } from "@/lib/marketing-pages";

export const metadata: Metadata = marketingPageMetadata("privacy");

export default function PrivacyPage() {
  return <MarketingPage page={marketingPages.privacy} />;
}
