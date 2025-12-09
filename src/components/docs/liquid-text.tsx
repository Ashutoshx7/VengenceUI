"use client";

import { LiquidText } from "@/components/ui/liquid-text";

export function LiquidTextDemo() {
    return (
        <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
            <LiquidText text="Hover Me" fontSize={220} className="h-[600px]" />
        </div>
    );
}

export function LiquidTextColorDemo() {
    return (
        <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
            <LiquidText text="Colorful" color="#ff6b6b" fontSize={180} className="h-[400px]" />
        </div>
    );
}

export function LiquidTextThemeDemo() {
    return (
        <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
            <LiquidText text="Theme" lightColor="#1a1a1a" darkColor="#f5f5f5" fontSize={180} className="h-[400px]" />
        </div>
    );
}

export function LiquidTextFontDemo() {
    return (
        <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
            <LiquidText text="Fancy" font="Georgia, serif" fontSize={200} className="h-[400px]" />
        </div>
    );
}
