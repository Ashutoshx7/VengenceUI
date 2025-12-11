"use client";

import * as React from "react";
import { LogoSlider } from "@/components/ui/logo-slider";

// ============================================
// Sample SVG Logos for Demo
// Clean, minimal tech/brand-style icons
// ============================================

const Logo1 = () => (
    <svg viewBox="0 0 120 40" className="h-8">
        <rect x="0" y="8" width="24" height="24" rx="4" fill="currentColor" />
        <text x="32" y="27" fontSize="16" fontWeight="600" fill="currentColor">
            Acme
        </text>
    </svg>
);

const Logo2 = () => (
    <svg viewBox="0 0 120 40" className="h-8">
        <circle cx="12" cy="20" r="12" fill="currentColor" />
        <text x="32" y="27" fontSize="16" fontWeight="600" fill="currentColor">
            Globex
        </text>
    </svg>
);

const Logo3 = () => (
    <svg viewBox="0 0 120 40" className="h-8">
        <polygon points="12,8 24,32 0,32" fill="currentColor" />
        <text x="32" y="27" fontSize="16" fontWeight="600" fill="currentColor">
            Initech
        </text>
    </svg>
);

const Logo4 = () => (
    <svg viewBox="0 0 120 40" className="h-8">
        <rect x="0" y="8" width="12" height="24" rx="2" fill="currentColor" />
        <rect x="14" y="14" width="12" height="18" rx="2" fill="currentColor" opacity="0.7" />
        <text x="32" y="27" fontSize="16" fontWeight="600" fill="currentColor">
            Stark
        </text>
    </svg>
);

const Logo5 = () => (
    <svg viewBox="0 0 120 40" className="h-8">
        <path d="M12 8 L24 20 L12 32 L0 20 Z" fill="currentColor" />
        <text x="32" y="27" fontSize="16" fontWeight="600" fill="currentColor">
            Wayne
        </text>
    </svg>
);

const Logo6 = () => (
    <svg viewBox="0 0 130 40" className="h-8">
        <circle cx="8" cy="20" r="6" fill="currentColor" />
        <circle cx="20" cy="20" r="6" fill="currentColor" opacity="0.7" />
        <text x="34" y="27" fontSize="16" fontWeight="600" fill="currentColor">
            Hooli
        </text>
    </svg>
);

const Logo7 = () => (
    <svg viewBox="0 0 140 40" className="h-8">
        <rect x="0" y="10" width="20" height="20" fill="currentColor" transform="rotate(45 10 20)" />
        <text x="28" y="27" fontSize="14" fontWeight="600" fill="currentColor">
            Pied Piper
        </text>
    </svg>
);

const Logo8 = () => (
    <svg viewBox="0 0 130 40" className="h-8">
        <path d="M0 20 Q12 8 24 20 Q12 32 0 20" fill="currentColor" />
        <text x="32" y="27" fontSize="16" fontWeight="600" fill="currentColor">
            Umbrella
        </text>
    </svg>
);

const sampleLogos = [
    <Logo1 key="1" />,
    <Logo2 key="2" />,
    <Logo3 key="3" />,
    <Logo4 key="4" />,
    <Logo5 key="5" />,
    <Logo6 key="6" />,
    <Logo7 key="7" />,
    <Logo8 key="8" />,
];

// ============================================
// Demo: Default (Left Direction)
// ============================================

export function LogoSliderDemo() {
    return (
        <div className="w-full py-12 bg-white dark:bg-black rounded-xl min-h-[200px]">
            <div className="text-center mb-8">
                <span className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                    Trusted by leading companies
                </span>
            </div>
            <LogoSlider logos={sampleLogos} speed={60} direction="left" />
        </div>
    );
}

// ============================================
// Demo: Right Direction
// ============================================

export function LogoSliderRight() {
    return (
        <div className="w-full py-12 bg-white dark:bg-black rounded-xl min-h-[200px]">
            <LogoSlider logos={sampleLogos} speed={50} direction="right" />
        </div>
    );
}

// ============================================
// Demo: Fast Speed
// ============================================

export function LogoSliderFast() {
    return (
        <div className="w-full py-12 bg-white dark:bg-black rounded-xl min-h-[200px]">
            <LogoSlider logos={sampleLogos} speed={30} direction="left" />
        </div>
    );
}

// ============================================
// Demo: Slow Speed with Pause on Hover
// ============================================

export function LogoSliderSlow() {
    return (
        <div className="w-full py-12 bg-white dark:bg-black rounded-xl min-h-[200px]">
            <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                    Hover to pause
                </span>
            </div>
            <LogoSlider logos={sampleLogos} speed={100} direction="left" pauseOnHover={true} />
        </div>
    );
}

// ============================================
// Demo: No Blur
// ============================================

export function LogoSliderNoBlur() {
    return (
        <div className="w-full py-12 bg-white dark:bg-black rounded-xl min-h-[200px]">
            <LogoSlider logos={sampleLogos} speed={45} direction="left" showBlur={false} />
        </div>
    );
}

// ============================================
// Demo: Double Row (Opposite Directions)
// ============================================

export function LogoSliderDouble() {
    return (
        <div className="w-full py-8 bg-white dark:bg-black rounded-xl space-y-4 min-h-[280px]">
            <LogoSlider logos={sampleLogos} speed={50} direction="left" />
            <LogoSlider logos={sampleLogos} speed={50} direction="right" />
        </div>
    );
}

export default LogoSliderDemo;
