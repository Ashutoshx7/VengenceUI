"use client";

import { AnimatedHero } from "@/components/ui/animated-hero";

export function AnimatedHeroDemo() {
    return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
            <AnimatedHero title="YOUR TITLE" showThemeToggle={false} className="min-h-full" />
        </div>
    );
}

export function AnimatedHeroCustomTitleDemo() {
    return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
            <AnimatedHero title="HELLO WORLD" showThemeToggle={false} className="min-h-full" />
        </div>
    );
}

export function AnimatedHeroNoToggleDemo() {
    return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
            <AnimatedHero title="MY APP" showThemeToggle={false} className="min-h-full" />
        </div>
    );
}

export function AnimatedHeroCustomClassDemo() {
    return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
            <AnimatedHero title="STYLED" showThemeToggle={false} className="min-h-full" />
        </div>
    );
}
