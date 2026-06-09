"use client"

import { FlipFadeText } from "@/components/ui/flip-fade-text"

export function FlipFadeTextDemo() {
    return (
        <div className="w-full h-full flex items-center justify-center bg-neutral-50 dark:bg-neutral-950">
            <FlipFadeText />
        </div>
    )
}

export function FlipFadeTextCustomWordsDemo() {
    return (
        <div className="w-full h-full flex items-center justify-center bg-neutral-50 dark:bg-neutral-950">
            <FlipFadeText
                words={["SYNCING", "PROCESSING", "ANALYZING", "OPTIMIZING"]}
                interval={2000}
            />
        </div>
    )
}

export function FlipFadeTextFastDemo() {
    return (
        <div className="w-full h-full flex items-center justify-center bg-neutral-50 dark:bg-neutral-950">
            <FlipFadeText
                words={["FAST", "QUICK", "RAPID", "SWIFT"]}
                interval={1500}
                letterDuration={0.3}
                staggerDelay={0.05}
                exitStaggerDelay={0.02}
            />
        </div>
    )
}

export function FlipFadeTextStyledDemo() {
    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900">
            <FlipFadeText
                words={["CREATING", "BUILDING", "DESIGNING", "CRAFTING"]}
                textClassName="text-white text-5xl md:text-7xl bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            />
        </div>
    )
}
