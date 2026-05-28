"use client";

import { FluidMorphBg } from "@/components/ui/fluid-morph-bg";

export function FluidMorphBgDemo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <FluidMorphBg className="absolute inset-0" />
      <h2 className="relative z-10 text-white text-5xl md:text-7xl font-serif tracking-tighter opacity-90 drop-shadow-lg pointer-events-none">
        Fluid Life
      </h2>
    </div>
  );
}
