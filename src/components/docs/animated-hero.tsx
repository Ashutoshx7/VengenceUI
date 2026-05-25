"use client";

import { AnimatedHero } from "@/components/ui/animated-hero";

export function AnimatedHeroDemo() {
    return (
        <div className="relative h-full w-full overflow-hidden">
            <AnimatedHero title="VENGEANCE UI" showThemeToggle={true} className="h-full" />
        </div>
    );
}

export function AnimatedHeroCustomTitleDemo() {
    return (
        <div className="relative h-full w-full overflow-hidden">
            <AnimatedHero title="HELLO WORLD" showThemeToggle={false} className="h-full" />
        </div>
    );
}

export function AnimatedHeroNoToggleDemo() {
    return (
        <div className="relative h-full w-full overflow-hidden">
            <AnimatedHero title="MY APP" showThemeToggle={false} className="h-full" />
        </div>
    );
}

export function AnimatedHeroCustomClassDemo() {
    return (
        <div className="relative h-full w-full overflow-hidden">
            <AnimatedHero title="STYLED" showThemeToggle={false} className="h-full" />
        </div>
    );
}
