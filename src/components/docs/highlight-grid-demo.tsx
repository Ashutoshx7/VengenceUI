"use client";

import { HighlightGrid } from "@/components/ui/highlight-grid";

/**
 * Preview for the Highlight Grid. Move the cursor across the cells — the
 * coloured highlight glides to sit behind whichever cell you're over. Adapts
 * to light and dark mode.
 */
export function HighlightGridDemo() {
  return (
    <HighlightGrid
      rows={[
        [{ label: "html" }, { label: "css" }, { label: "javascript" }],
        [
          { label: "gsap" },
          { label: "scrolltrigger" },
          { label: "react" },
          { label: "next.js" },
          { label: "three.js" },
        ],
      ]}
    />
  );
}

export default HighlightGridDemo;
