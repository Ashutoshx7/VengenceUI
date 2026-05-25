import { Sidebar } from "@/components/layout/sidebar";
import { AlignLeft } from "lucide-react";
import { TableOfContents } from "@/components/layout/toc";
export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full px-4 md:px-8 flex-1 items-start md:grid md:grid-cols-[220px_24px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_24px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[240px_24px_minmax(0,1fr)_200px]">
      <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-auto py-6 pr-4">
        <Sidebar />
      </aside>

      {/* Diagonal Striped Divider */}
      <div className="hidden md:block sticky top-14 h-[calc(100vh-3.5rem)] w-full opacity-60 relative">
        {/* Light mode stripes */}
        <div
          className="absolute inset-0 border-l border-r border-neutral-200 dark:hidden"
          style={{
            backgroundImage: "repeating-linear-gradient(-45deg, rgba(0,0,0,0.06), rgba(0,0,0,0.06) 1px, transparent 1px, transparent 6px)",
            backgroundSize: "16px 16px"
          }}
        />
        {/* Dark mode stripes */}
        <div
          className="absolute inset-0 border-l border-r border-white/10 hidden dark:block"
          style={{
            backgroundImage: "repeating-linear-gradient(-45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1) 1px, transparent 1px, transparent 6px)",
            backgroundSize: "16px 16px"
          }}
        />
      </div>

      <main className="relative py-3 lg:py-4 pr-2 md:pr-4 md:pl-8 lg:pl-12 xl:pl-20">
        <div className="w-full min-w-0 [&>div]:max-w-6xl">
          {children}
        </div>
      </main>

      <TableOfContents />
    </div>
  );
}
