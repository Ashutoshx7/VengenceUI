"use client";

import * as React from "react";
import { StackedLogos } from "@/components/ui/stacked-logos";

// ============================================
// Sample SVG Logos for Demo
// ============================================

const Acme = () => (
  <svg viewBox="0 0 80 40" className="h-8">
    <rect x="4" y="8" width="24" height="24" rx="4" fill="currentColor" />
    <text x="34" y="26" fontSize="14" fontWeight="600" fill="currentColor">
      Acme
    </text>
  </svg>
);

const Globex = () => (
  <svg viewBox="0 0 90 40" className="h-8">
    <circle cx="14" cy="20" r="12" fill="currentColor" />
    <text x="32" y="26" fontSize="14" fontWeight="600" fill="currentColor">
      Globex
    </text>
  </svg>
);

const Initech = () => (
  <svg viewBox="0 0 90 40" className="h-8">
    <polygon points="14,8 26,32 2,32" fill="currentColor" />
    <text x="32" y="26" fontSize="14" fontWeight="600" fill="currentColor">
      Initech
    </text>
  </svg>
);

const Stark = () => (
  <svg viewBox="0 0 80 40" className="h-8">
    <rect x="2" y="8" width="12" height="24" rx="2" fill="currentColor" />
    <rect
      x="16"
      y="14"
      width="10"
      height="18"
      rx="2"
      fill="currentColor"
      opacity="0.7"
    />
    <text x="32" y="26" fontSize="14" fontWeight="600" fill="currentColor">
      Stark
    </text>
  </svg>
);

const Wayne = () => (
  <svg viewBox="0 0 90 40" className="h-8">
    <path d="M14 8 L26 20 L14 32 L2 20 Z" fill="currentColor" />
    <text x="32" y="26" fontSize="14" fontWeight="600" fill="currentColor">
      Wayne
    </text>
  </svg>
);

const Hooli = () => (
  <svg viewBox="0 0 80 40" className="h-8">
    <circle cx="8" cy="20" r="6" fill="currentColor" />
    <circle cx="22" cy="20" r="6" fill="currentColor" opacity="0.7" />
    <text x="34" y="26" fontSize="14" fontWeight="600" fill="currentColor">
      Hooli
    </text>
  </svg>
);

const Umbrella = () => (
  <svg viewBox="0 0 100 40" className="h-8">
    <path d="M2 20 Q14 8 26 20 Q14 32 2 20" fill="currentColor" />
    <text x="30" y="26" fontSize="14" fontWeight="600" fill="currentColor">
      Umbrella
    </text>
  </svg>
);

const Oscorp = () => (
  <svg viewBox="0 0 90 40" className="h-8">
    <circle
      cx="14"
      cy="20"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    />
    <text x="32" y="26" fontSize="14" fontWeight="600" fill="currentColor">
      Oscorp
    </text>
  </svg>
);

// 4 groups of logos
const logoGroup1 = [
  <Acme key="1" />,
  <Globex key="2" />,
  <Initech key="3" />,
  <Stark key="4" />,
];
const logoGroup2 = [
  <Wayne key="1" />,
  <Hooli key="2" />,
  <Umbrella key="3" />,
  <Oscorp key="4" />,
];
const logoGroup3 = [
  <Globex key="1" />,
  <Stark key="2" />,
  <Wayne key="3" />,
  <Acme key="4" />,
];
const logoGroup4 = [
  <Umbrella key="1" />,
  <Oscorp key="2" />,
  <Hooli key="3" />,
  <Initech key="4" />,
];

// ============================================
// Demo: Default
// ============================================

export function StackedLogosDemo() {
  return (
    <div className="w-full h-full flex items-center justify-center py-16 bg-neutral-50 dark:bg-black rounded-xl min-h-[250px] border border-neutral-200 dark:border-neutral-800">
      <StackedLogos
        logoGroups={[logoGroup1, logoGroup2, logoGroup3, logoGroup4]}
        duration={20}
        stagger={2}
      />
    </div>
  );
}

// ============================================
// Demo: Fast Animation
// ============================================

export function StackedLogosFast() {
  return (
    <div className="w-full py-16 bg-neutral-50 dark:bg-black rounded-xl min-h-[250px] flex items-center justify-center border border-neutral-200 dark:border-neutral-800">
      <StackedLogos
        logoGroups={[logoGroup1, logoGroup2, logoGroup3, logoGroup4]}
        duration={10}
        stagger={1}
      />
    </div>
  );
}

// ============================================
// Demo: Slow Animation
// ============================================

export function StackedLogosSlow() {
  return (
    <div className="w-full py-16 bg-neutral-50 dark:bg-black rounded-xl min-h-[280px] flex items-center justify-center border border-neutral-200 dark:border-neutral-800">
      <StackedLogos
        logoGroups={[logoGroup1, logoGroup2, logoGroup3, logoGroup4]}
        duration={40}
        stagger={3}
      />
    </div>
  );
}

// ============================================
// Demo: Two Groups
// ============================================

export function StackedLogosTwoGroups() {
  return (
    <div className="w-full py-16 bg-neutral-50 dark:bg-black rounded-xl min-h-[250px] flex items-center justify-center border border-neutral-200 dark:border-neutral-800">
      <StackedLogos
        logoGroups={[logoGroup1, logoGroup2]}
        duration={15}
        logoWidth="140px"
      />
    </div>
  );
}

// ============================================
// Demo: Custom Width
// ============================================

export function StackedLogosWide() {
  return (
    <div className="w-full py-16 bg-neutral-50 dark:bg-black rounded-xl min-h-[250px] flex items-center justify-center border border-neutral-200 dark:border-neutral-800">
      <StackedLogos
        logoGroups={[logoGroup1, logoGroup2, logoGroup3]}
        duration={25}
        logoWidth="150px"
        stagger={1.5}
      />
    </div>
  );
}

export default StackedLogosDemo;
