import type { Metadata } from "next";
import MarketingPage from "@/components/marketing/marketing-page";
import { marketingPageMetadata, marketingPages } from "@/lib/marketing-pages";

export const metadata: Metadata = marketingPageMetadata("blog");

export default function BlogPage() {
  return <MarketingPage page={marketingPages.blog} />;
}
