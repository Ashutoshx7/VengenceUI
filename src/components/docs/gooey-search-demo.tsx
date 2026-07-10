"use client";

import { GooeySearch } from "@/components/ui/gooey-search";

const DEMO_ITEMS = [
  "React",
  "Vue",
  "Svelte",
  "Next.js",
  "Gatsby",
  "Angular",
  "Solid",
  "Astro",
  "Remix",
  "Nuxt",
  "TypeScript",
  "Tailwind CSS",
];

export function GooeySearchDemo() {
  return (
    <div className="relative flex items-center justify-center w-full min-h-[16rem] py-16">
      <GooeySearch
        items={DEMO_ITEMS}
        placeholder="Search frameworks..."
        buttonLabel="Search"
        maxResults={4}
        onSelect={(item) => console.log("Selected:", item)}
      />
    </div>
  );
}
