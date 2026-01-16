"use client";

import React from "react";
import { Github } from "lucide-react";
import { LiquidMetal } from "@/components/ui/liquid-metal";

export function LiquidGithub() {
    return (
        <div className="relative w-9 h-9 flex items-center justify-center rounded-lg overflow-hidden group">
            {/* Metallic Shader Background */}
            <LiquidMetal
                className="absolute inset-0 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                scale={1.5}
                speed={0.3}
                repetition={2}
                distortion={0.3}
                colorBack="#111111"
                colorTint="#ffffff"
            />

            {/* Icon */}
            <Github className="relative z-10 w-5 h-5 text-white drop-shadow-md" />
        </div>
    );
}
