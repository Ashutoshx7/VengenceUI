import type { Metadata } from "next";
import MarketingPage from "@/components/marketing/marketing-page";
import { marketingPageMetadata, marketingPages } from "@/lib/marketing-pages";

export const metadata: Metadata = marketingPageMetadata("releases");

export default function ReleasesPage() {
  return <MarketingPage page={marketingPages.releases} />;
}
