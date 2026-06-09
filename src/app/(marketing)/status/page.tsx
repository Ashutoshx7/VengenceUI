import type { Metadata } from "next";
import MarketingPage from "@/components/marketing/marketing-page";
import { marketingPageMetadata, marketingPages } from "@/lib/marketing-pages";

export const metadata: Metadata = marketingPageMetadata("status");

export default function StatusPage() {
  return <MarketingPage page={marketingPages.status} />;
}
