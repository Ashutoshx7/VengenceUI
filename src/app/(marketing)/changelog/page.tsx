import type { Metadata } from "next";
import MarketingPage from "@/components/marketing/marketing-page";
import { marketingPageMetadata, marketingPages } from "@/lib/marketing-pages";

export const metadata: Metadata = marketingPageMetadata("changelog");

export default function ChangelogPage() {
  return <MarketingPage page={marketingPages.changelog} />;
}
