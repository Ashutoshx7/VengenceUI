import type { ReactNode } from "react";
import Footer from "@/components/landing/footer";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
