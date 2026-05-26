import { CornerButton } from "@/components/ui/corner-button";

export function CornerButtonDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 w-full min-h-[300px] bg-white dark:bg-neutral-950 p-10">
      {/* Default */}
      <CornerButton>Start designing</CornerButton>

      {/* Custom accent */}
      <CornerButton accentColor="#00e5ff">Get started</CornerButton>

      {/* No icon */}
      <CornerButton showIcon={false} accentColor="#a855f7">
        Let&apos;s go
      </CornerButton>
    </div>
  );
}
