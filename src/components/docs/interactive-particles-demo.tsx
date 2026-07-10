"use client";

import { InteractiveParticles } from "@/components/ui/interactive-particles";

export function InteractiveParticlesDemo() {
  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-xl bg-black">
      <InteractiveParticles src="/interactive-particles/particles.png" background="#000000" />
      <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/50">
        Move your cursor across the particles
      </p>
    </div>
  );
}
