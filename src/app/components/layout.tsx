import { Sidebar } from "@/components/layout/sidebar";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto max-w-7xl px-6 flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-auto border-r border-white/10 py-6 pr-6">
        <Sidebar />
      </aside>
      <main className="relative py-6 lg:gap-10 lg:py-8">
        <div className="mx-auto w-full min-w-0">
          {children}
        </div>
      </main>
    </div>
  );
}
