"use client";

import { AnimatedHero } from "@/components/ui/animated-hero";

export function AnimatedHeroDemo() {
    return (
        <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
            <AnimatedHero title="YOUR TITLE" showThemeToggle={false} />
        </div>
    );
}

export function AnimatedHeroCustomTitleDemo() {
    return (
        <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
            <AnimatedHero title="HELLO WORLD" showThemeToggle={false} />
        </div>
    );
}

export function AnimatedHeroNoToggleDemo() {
    return (
        <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
            <AnimatedHero title="MY APP" showThemeToggle={false} />
        </div>
    );
}

export function AnimatedHeroCustomClassDemo() {
    return (
        <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
            <AnimatedHero title="STYLED" showThemeToggle={false} className="min-h-[600px]" />
        </div>
    );
}
