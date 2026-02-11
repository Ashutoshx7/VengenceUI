"use client";

import React from "react";
import { LiquidMetalButton } from "@/components/ui/liquid-metal";
import { Sparkles, ArrowRight, Zap, Star, Crown } from "lucide-react";

export function LiquidMetalPreview() {
    return (
        <div className="flex items-center justify-center py-8">
            <LiquidMetalButton
                icon={
                    <div className="w-5 h-5 rounded border-2 border-current" />
                }
                size="lg"
                borderWidth={5}
                metalConfig={{
                    colorBack: "#888888",
                    colorTint: "#ffffff",
                    distortion: 0.15,
                    speed: 0.4,
                }}
            >
                Request access
            </LiquidMetalButton>
        </div>
    );
}

export function LiquidMetalThemesPreview() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-6 py-4">
            {/* Chrome */}
            <LiquidMetalButton
                icon={<Sparkles className="w-5 h-5" />}
                metalConfig={{
                    colorBack: "#888888",
                    colorTint: "#ffffff",
                }}
            >
                Chrome
            </LiquidMetalButton>

            {/* Blue */}
            <LiquidMetalButton
                icon={<Zap className="w-5 h-5" />}
                metalConfig={{
                    colorBack: "#1e3a5f",
                    colorTint: "#3b82f6",
                }}
            >
                Blue
            </LiquidMetalButton>

            {/* Gold */}
            <LiquidMetalButton
                icon={<Crown className="w-5 h-5" />}
                metalConfig={{
                    colorBack: "#78350f",
                    colorTint: "#fbbf24",
                }}
            >
                Gold
            </LiquidMetalButton>

            {/* Prism */}
            <LiquidMetalButton
                icon={<Star className="w-5 h-5" />}
                metalConfig={{
                    colorBack: "#374151",
                    colorTint: "#9ca3af",
                }}
            >
                Prism
            </LiquidMetalButton>

            {/* Emerald */}
            <LiquidMetalButton
                icon={<ArrowRight className="w-5 h-5" />}
                metalConfig={{
                    colorBack: "#064e3b",
                    colorTint: "#10b981",
                }}
            >
                Emerald
            </LiquidMetalButton>
        </div>
    );
}
