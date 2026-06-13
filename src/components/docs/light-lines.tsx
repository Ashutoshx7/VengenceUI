"use client";

import { LightLines } from "@/components/ui/light-lines";

export function LightLinesDemo() {
    return (
        <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
            <LightLines>
                <div className="flex items-center justify-center h-full">
                    <h1 className="text-4xl font-bold text-white uppercase tracking-widest">
                        Welcome
                    </h1>
                </div>
            </LightLines>
        </div>
    );
}

export function LightLinesPurpleDemo() {
    return (
        <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
            <LightLines
                gradientFrom="#6B21A8"
                gradientTo="#A855F7"
                lightColor="#fff"
                speedMultiplier={0.5}
            >
                <div className="flex items-center justify-center h-full">
                    <h1 className="text-4xl font-bold text-white uppercase tracking-widest">
                        Purple Theme
                    </h1>
                </div>
            </LightLines>
        </div>
    );
}

export function LightLinesDarkDemo() {
    return (
        <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
            <LightLines
                gradientFrom="#0f0f0f"
                gradientTo="#1a1a2e"
                lightColor="#4ade80"
                lineColor="#4ade80"
                linesOpacity={0.1}
                lightsOpacity={0.7}
                speedMultiplier={1.5}
            >
                <div className="flex items-center justify-center h-full">
                    <h1 className="text-4xl font-bold text-green-400 uppercase tracking-widest">
                        Cyber Theme
                    </h1>
                </div>
            </LightLines>
        </div>
    );
}

export function LightLinesFastDemo() {
    return (
        <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
            <LightLines speedMultiplier={2}>
                <div className="flex items-center justify-center h-full">
                    <h1 className="text-4xl font-bold text-white uppercase tracking-widest">
                        Fast Mode
                    </h1>
                </div>
            </LightLines>
        </div>
    );
}
