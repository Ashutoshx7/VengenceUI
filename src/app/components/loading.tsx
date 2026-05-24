export default function ComponentsLoading() {
  return (
    <div className="mb-24 space-y-7 animate-pulse">
      {/* Header skeleton */}
      <div className="space-y-3">
        <div className="h-4 w-40 rounded bg-neutral-200 dark:bg-zinc-800" />
        <div className="h-8 w-64 rounded bg-neutral-200 dark:bg-zinc-800" />
        <div className="h-5 w-96 rounded bg-neutral-200 dark:bg-zinc-800" />
      </div>

      {/* Preview skeleton */}
      <div className="rounded-2xl border border-neutral-200 dark:border-[#222] bg-neutral-100 dark:bg-zinc-900 p-4">
        <div className="flex min-h-[700px] items-center justify-center rounded-xl border border-neutral-200 dark:border-[#222] bg-white dark:bg-black">
          <div className="flex flex-col items-center gap-3">
            <div className="h-8 w-8 rounded-full border-2 border-neutral-300 dark:border-zinc-700 border-t-transparent animate-spin" />
            <span className="text-xs text-neutral-400 dark:text-zinc-600">Loading component…</span>
          </div>
        </div>
      </div>
    </div>
  );
}
