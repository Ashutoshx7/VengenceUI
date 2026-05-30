"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

type PreviewPlaceholderProps = {
  children?: React.ReactNode;
  className?: string;
  text?: string;
};

// Keep the hero cube light by rendering static previews instead of full components.
const CreepyButton = ({ children, className }: PreviewPlaceholderProps) => <div className={className}>{children}</div>
const AnimatedButton = ({ children, className }: PreviewPlaceholderProps) => <div className={className}>{children}</div>
const FlipText = ({ children, className }: PreviewPlaceholderProps) => <div className={className}>{children}</div>
const LiquidText = ({ text, className }: PreviewPlaceholderProps) => <div className={className}>{text}</div>

const COMPONENT_LIST = [
  <div key="c0" className="w-full h-full flex items-center justify-center p-4"><AnimatedButton className="text-xs px-2 py-1 w-full flex items-center justify-center">Hover</AnimatedButton></div>,
  <div key="c1" className="w-full h-full flex items-center justify-center p-4"><CreepyButton className="text-xs shrink-0 px-2 py-1 flex items-center justify-center">Click Me</CreepyButton></div>,
  <div key="c2" className="w-full h-full flex items-center justify-center p-4"><FlipText className="text-base font-bold text-foreground">Flip</FlipText></div>,
  <div key="c3" className="w-full h-full flex items-center justify-center p-4"><div className="scale-75 origin-center text-center flex justify-center"><LiquidText text="Liquid" className="text-xs h-[80px] w-full" /></div></div>,
  <div key="c4" className="w-full h-full flex items-center justify-center p-4"><div className="bg-primary/20 shadow-[0_0_15px_rgba(150,150,150,0.3)] p-3 rounded-md border border-primary text-[10px] text-center w-full uppercase font-bold text-primary">Glow Box</div></div>,
];

interface IsometricCubeBoxProps {
  primaryClassName?: string;
  bgClassName?: string;
  strokeClassName?: string;
  strokeClassName2?: string;
  size?: number | string;
  className?: string;
  logoShadow?: string;
}

const IsometricHeroBox: React.FC<IsometricCubeBoxProps> = ({
  primaryClassName = "text-zinc-500",
  logoShadow = "text-neutral-300 dark:text-neutral-800",
  bgClassName = "text-[#202020]",
  strokeClassName = "text-white",
  strokeClassName2 = "text-white",
  size = 360,
  className = "",
}) => {
  const uid = React.useId().replace(/:/g, "");
  
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger initial fade-in
    const fadeTimer = setTimeout(() => setIsVisible(true), 100);

    // Start cycling components after a slight delay
    let interval: ReturnType<typeof setInterval> | undefined;
    const startDelay = setTimeout(() => {
      interval = setInterval(() => {
        setLeftIndex(prev => (prev + 1) % COMPONENT_LIST.length);
        setRightIndex(prev => (prev + 2) % COMPONENT_LIST.length);
      }, 3000);
    }, 1200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(startDelay);
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  const componentSpring = { type: "spring" as const, stiffness: 400, damping: 25 };

  return (
    <div 
      className={`relative z-20 inline-block ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        animation: isVisible ? 'hero-float 4s ease-in-out infinite' : 'none',
        willChange: 'transform',
      }}
    >
      <svg
        width={Number(size)}
        height={Number(size)}
        viewBox="0 0 360 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* ── Panel shadow borders ── */}
        <rect width="173.205" height="173.205"
          transform="matrix(0.866025 0.5 -0.866025 0.5 180 7)"
          fill="currentColor" stroke="currentColor"
          className={strokeClassName}
        />
        <rect width="173.205" height="173.21"
          transform="matrix(0.866025 0.5 0 1 30 93.6025)"
          fill="currentColor" stroke="currentColor"
          className={strokeClassName}
        />
        <rect width="173.205" height="173.21"
          transform="matrix(0.866025 -0.5 0 1 180 180.205)"
          fill="currentColor" stroke="currentColor"
          className={strokeClassName}
        />

        {/* ── Solid panels ── */}
        <rect width="160" height="160"
          transform="matrix(0.866025 0.5 -0.866025 0.5 179.564 14)"
          fill="currentColor" stroke="currentColor"
          className={strokeClassName2}
        />
        <rect width="160" height="160.005"
          transform="matrix(0.866025 0.5 0 1 36 104)"
          fill="currentColor" stroke="currentColor"
          className={strokeClassName2}
        />
        <rect width="160" height="160.005"
          transform="matrix(0.866025 -0.5 0 1 186 184)"
          fill="currentColor" stroke="currentColor"
          className={strokeClassName2}
        />

        {/* ── Left Face Content (perspective matched) ── */}
        <g transform="matrix(0.866025 0.5 0 1 36 104)">
          <foreignObject width="160" height="160">
            <div className="w-[160px] h-[160px] overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={leftIndex}
                  initial={{ opacity: 0, scale: 0.7, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.7, y: -15 }}
                  transition={componentSpring}
                  className="absolute inset-0 z-10 w-full h-full pointer-events-none"
                >
                  <div className="pointer-events-auto w-full h-full">
                    {COMPONENT_LIST[leftIndex]}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </foreignObject>
        </g>

        {/* ── Right Face Content (perspective matched) ── */}
        <g transform="matrix(0.866025 -0.5 0 1 186 184)">
          <foreignObject width="160" height="160">
            <div className="w-[160px] h-[160px] overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={rightIndex}
                  initial={{ opacity: 0, scale: 0.7, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.7, y: -15 }}
                  transition={componentSpring}
                  className="absolute inset-0 z-10 w-full h-full pointer-events-none"
                >
                  <div className="pointer-events-auto w-full h-full">
                     {COMPONENT_LIST[rightIndex]}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </foreignObject>
        </g>

        {/* ── Hexagon boundary with fade ── */}
        <path
          d="M335.385 90.2881V269.711L180 359.423L24.6152 269.711V90.2881L180 0.576172L335.385 90.2881Z"
          fill={`url(#p3_${uid})`} fillOpacity="0.3"
          stroke="currentColor" className={strokeClassName}
        />

        {/* ── Accent background layer (bg color) ── */}
        <g fill="currentColor" className={bgClassName}>
          <path d="M188.489 82.8034L174.002 76.9825L188.603 49L188.489 82.8034Z" />
          <path d="M214.757 113.9L160.728 91.6749L168.348 90.8536L207.979 96.5991L214.757 113.9Z" />
          <path d="M188.603 49L205.662 90.9079L173.913 87.6408L186.287 84.0752L171.415 82.1823L102 99L145.475 73.8996L174.002 76.9825L188.489 82.8034L188.603 49Z" />
          <path d="M214.757 113.9L102 99L160.728 91.6749L214.757 113.9Z" />
        </g>

        {/* ── Drop-shadow shapes ── */}
        <g filter={`url(#f0_${uid})`}>
          <path d="M188.489 82.8034L174.002 76.9825L188.603 49L188.489 82.8034Z" fill="#222222" />
          <path d="M214.757 113.9L160.728 91.6749L168.348 90.8536L207.979 96.5991L214.757 113.9Z" fill="#222222" />
          <path d="M188.603 49L205.662 90.9079L173.913 87.6408L186.287 84.0752L171.415 82.1823L102 99L145.475 73.8996L174.002 76.9825L188.489 82.8034L188.603 49Z" fill="#222222" />
          <path d="M214.757 113.9L102 99L160.728 91.6749L214.757 113.9Z" fill="#222222" />
        </g>

        {/* ── High-contrast detail ── */}
        <path
          d="M198.982 87.4131L207.5 91L202.349 95.6826L203.662 98.9082L192.71 97.7803L194.5 100L158.5 97L159.425 92.6025L133.204 98.9551L138.028 102.256L158.729 99.6748L166.349 98.8535L205.979 104.6L208.56 111.187L217 114L214.879 117.95L212.758 121.899L100 107L104 99L123.99 93.1484L143.476 81.8994L158.35 83.5068L157 81L175.02 79.1973L186.603 57L198.982 87.4131Z"
          fill="currentColor" className={logoShadow}
        />

        {/* ── Primary accent shapes (gradient) ── */}
        <path d="M190.489 82.8034L176.002 76.9825L190.603 49L190.489 82.8034Z" fill={`url(#pAcc_${uid})`} />
        <path d="M216.757 113.9L162.728 91.6749L170.348 90.8536L209.979 96.5991L216.757 113.9Z" fill={`url(#pAcc_${uid})`} />
        <path d="M190.603 49L207.662 90.9079L175.913 87.6408L188.287 84.0752L173.415 82.1823L104 99L147.475 73.8996L176.002 76.9825L190.489 82.8034L190.603 49Z" fill={`url(#pAcc_${uid})`} />
        <path d="M216.757 113.9L104 99L162.728 91.6749L216.757 113.9Z" fill={`url(#pAcc_${uid})`} />

        <defs>
          <filter id={`f0_${uid}`}
            x="94" y="41" width="120.757" height="72.8994"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"
            />
            <feOffset dx="-4" dy="-4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_524_96" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_524_96" result="shape" />
          </filter>

          <linearGradient id={`p3_${uid}`} x1="180" y1="242" x2="180" y2="367.5" gradientUnits="userSpaceOnUse">
            <stop offset="0" style={{ stopColor: "currentColor", stopOpacity: 0 }} className={strokeClassName} />
            <stop offset="1" style={{ stopColor: "currentColor" }} className={strokeClassName} />
          </linearGradient>

          <linearGradient id={`pAcc_${uid}`} x1="216.583" y1="114" x2="181.942" y2="54" gradientUnits="userSpaceOnUse">
            <stop offset="0" style={{ stopColor: "color-mix(in srgb, currentColor 50%, #000)" }} className={primaryClassName} />
            <stop offset="0.471154" style={{ stopColor: "currentColor" }} className={primaryClassName} />
            <stop offset="1" style={{ stopColor: "color-mix(in srgb, currentColor 50%, #000)" }} className={primaryClassName} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default IsometricHeroBox;
