import { Sidebar } from "@/components/layout/sidebar";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full px-4 md:px-8 flex-1 items-start md:grid md:grid-cols-[220px_16px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_16px_minmax(0,1fr)] lg:gap-8">
      <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-auto py-6 pr-4">
        <Sidebar />
      </aside>

      {/* Diagonal Striped Divider */}
      <div 
        className="hidden md:block sticky top-14 h-[calc(100vh-3.5rem)] w-full border-l border-r border-white/10 opacity-60"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1) 1px, transparent 1px, transparent 6px)",
          backgroundSize: "16px 16px"
        }}
      />

      <main className="relative py-6 lg:py-8 pr-4 md:pr-8">
        <div className="w-full min-w-0">
          {children}
        </div>
      </main>
    </div>
  );
}
