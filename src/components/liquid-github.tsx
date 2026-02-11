"use client";

import React from "react";
import { Github } from "lucide-react";
import { LiquidMetal } from "@/components/ui/liquid-metal";

export function LiquidGithub() {
    return (
        <div className="relative w-9 h-9 flex items-center justify-center rounded-lg overflow-hidden group shadow-sm border border-white/10">
            {/* Dark Chrome Metallic Background - Continuous Animation */}
            <LiquidMetal
                className="absolute inset-0 z-0 opacity-100"
                scale={1.2}
                speed={0.4} // Continuous gentle movement
                repetition={1.5} // Cleaner, less noisy pattern
                distortion={0.25}
                colorBack="#0a0a0a" // Deep black base
                colorTint="#666666" // Silver highlights
            />

            {/* High Contrast Icon */}
            <Github
                className="relative z-10 w-5 h-5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] fill-white/10 transition-transform duration-300 group-hover:scale-110"
                strokeWidth={2}
            />

            {/* Subtle Inner Highlight for Glassy/Gem effect */}
            <div className="absolute inset-0 z-20 rounded-lg ring-1 ring-inset ring-white/10 pointer-events-none" />
        </div>
    );
}
