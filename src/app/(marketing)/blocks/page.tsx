import type { Metadata } from "next";
import MarketingPage from "@/components/marketing/marketing-page";
import { marketingPageMetadata, marketingPages } from "@/lib/marketing-pages";

export const metadata: Metadata = marketingPageMetadata("blocks");

export default function BlocksPage() {
  return <MarketingPage page={marketingPages.blocks} />;
}
