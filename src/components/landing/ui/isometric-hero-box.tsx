"use client";

import React, { useState, useEffect } from "react";
import AnimatedButton from "@/components/ui/animated-button";
import CandyButton from "@/components/ui/candy-button";
import CornerButton from "@/components/ui/corner-button";
import CreepyButton from "@/components/ui/creepy-button";
import FlipText from "@/components/ui/flip-text";
import GenerateButton from "@/components/ui/generate-button";
import MorphText from "@/components/ui/morph-text";
import RadialGlowButton from "@/components/ui/radial-glow-button";

const COMPONENT_LIST = [
  <div key="c0" className="w-full h-full flex items-center justify-center p-4">
    <AnimatedButton className="h-9 w-[118px] px-3 py-1 text-[11px] rounded-md bg-neutral-950 dark:bg-neutral-950 border-zinc-700 dark:border-zinc-700 text-zinc-100 dark:text-zinc-100 [--shine:rgba(244,63,94,.72)]">
      Hover
    </AnimatedButton>
  </div>,
  <div key="c1" className="w-full h-full flex items-center justify-center p-4">
    <CreepyButton
      className="text-[10px] min-w-[8.5em] rounded-md bg-zinc-100 dark:bg-neutral-950 shadow-[inset_0_0_0_1px_rgba(24,24,27,.14)] dark:shadow-none"
      coverClassName="rounded-md px-3 py-2 bg-white dark:bg-zinc-100 text-zinc-950 shadow-[inset_0_0_0_1px_rgba(244,63,94,.45),0_8px_18px_-14px_rgba(24,24,27,.75)]"
    >
      Click Me
    </CreepyButton>
  </div>,
  <div key="c2" className="w-full h-full flex items-center justify-center p-4">
    <FlipText className="text-lg font-bold text-zinc-900 dark:text-zinc-100 drop-shadow-[0_0_10px_rgba(244,63,94,.25)]" duration={1.8}>
      Flip
    </FlipText>
  </div>,
  <div key="c3" className="w-full h-full flex items-center justify-center p-4">
    <RadialGlowButton
      className="!min-w-[116px] !min-h-9 !px-3 !py-2 text-[11px] rounded-lg"
      style={{
        "--rg-color-1": "#09090b",
        "--rg-color-2": "#27272a",
        "--rg-color-3": "#7f1d1d",
        "--rg-color-4": "#fca5a5",
        "--rg-color-5": "#09090b",
        "--rg-border-color-1": "rgba(244,63,94,.55)",
        "--rg-border-color-2": "rgba(255,255,255,.18)",
      } as React.CSSProperties}
    >
      Glow
    </RadialGlowButton>
  </div>,
  <div key="c4" className="w-full h-full flex items-center justify-center p-4">
    <CandyButton className="px-5 py-2 text-[11px] rounded-lg border-zinc-700 bg-[radial-gradient(95%_60%_at_50%_75%,#18181b_0%,#3f3f46_100%)] shadow-[0_4px_34px_-14px_rgba(244,63,94,.72),inset_0_1px_8px_-4px_#fff] after:via-rose-200/50">
      Candy
    </CandyButton>
  </div>,
  <div key="c5" className="w-full h-full flex items-center justify-center p-4">
    <div className="scale-[0.58] origin-center">
      <CornerButton
        accentColor="#e4e4e7"
        showIcon={false}
        wrapperClassName="[--padding:0.45rem_0.55rem]"
        className="!px-5 !py-2 !text-sm !rounded-lg"
      >
        Corner
      </CornerButton>
    </div>
  </div>,
  <div key="c6" className="w-full h-full flex items-center justify-center p-4">
    <div className="scale-[0.56] origin-center">
      <GenerateButton
        isGenerating
        hue={342}
        aria-label="Generate preview"
      />
    </div>
  </div>,
  <div key="c7" className="w-full h-full flex items-center justify-center p-4">
    <div className="h-[70px] w-[136px] overflow-hidden flex items-center justify-center">
      <MorphText
        words={["MORPH", "TEXT", "BLUR"]}
        interval={1600}
        fontSize="1.28rem"
        className="scale-[0.86]"
        textClassName="text-zinc-900 dark:text-zinc-100 drop-shadow-[0_0_10px_rgba(244,63,94,.28)] dark:drop-shadow-[0_0_10px_rgba(244,63,94,.34)]"
      />
    </div>
  </div>,
];

interface IsometricCubeBoxProps {
  primaryClassName?: string;
  bgClassName?: string;
  stageClassName?: string;
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
  stageClassName = bgClassName,
  strokeClassName = "text-white",
  strokeClassName2 = "text-white",
  size = 360,
  className = "",
}) => {
  const uid = React.useId().replace(/:/g, "");
  const numericSize = Number(size);
  const svgWidth = Number.isFinite(numericSize) ? numericSize : 360;
  const svgHeight = (svgWidth * 488) / 360;
  
  const [pairStartIndex, setPairStartIndex] = useState(0);
  const leftIndex = pairStartIndex;
  const rightIndex = (pairStartIndex + 1) % COMPONENT_LIST.length;
  
  useEffect(() => {
    // Start cycling components after a slight delay
    let interval: ReturnType<typeof setInterval> | undefined;
    const startDelay = setTimeout(() => {
      interval = setInterval(() => {
        setPairStartIndex(prev => (prev + 2) % COMPONENT_LIST.length);
      }, 3000);
    }, 1200);

    return () => {
      clearTimeout(startDelay);
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  return (
    <div 
      className={`relative z-20 inline-block ${className}`}
    >
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox="0 0 360 488"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
      >
        {/* ── Stage base ── */}
        <rect
          x="0.866026"
          width="205.158"
          height="205.158"
          transform="matrix(0.866026 -0.499999 0.866026 0.499999 1.11603 304.511)"
          fill="currentColor"
          className={stageClassName}
        />
        <rect
          x="0.866026"
          width="205.158"
          height="205.158"
          transform="matrix(0.866026 -0.499999 0.866026 0.499999 1.11603 304.511)"
          fill={`url(#stageTop_${uid})`}
          className="hidden dark:block"
        />
        <rect
          x="0.866026"
          width="205.158"
          height="205.158"
          transform="matrix(0.866026 -0.499999 0.866026 0.499999 1.11603 304.511)"
          fill="none"
          stroke="currentColor"
          className={strokeClassName}
        />
        <path
          d="M1.98828 304.71L179.781 407.358V486.377L1.98828 383.729V304.71Z"
          fill="currentColor"
          className={stageClassName}
        />
        <path
          d="M1.98828 304.71L179.781 407.358V486.377L1.98828 383.729V304.71Z"
          fill="none"
          stroke="currentColor"
          className={strokeClassName}
        />
        <rect
          width="205.297"
          height="79.0189"
          transform="matrix(0.866026 -0.499999 0 1 179.781 407.359)"
          fill="currentColor"
          className={stageClassName}
        />
        <rect
          width="205.297"
          height="79.0189"
          transform="matrix(0.866026 -0.499999 0 1 179.781 407.359)"
          fill="none"
          stroke="currentColor"
          className={strokeClassName}
        />
        {([
          "M191.959 409.418C194.082 408.193 195.803 409.186 195.803 411.638C195.803 414.089 194.082 417.07 191.959 418.295C189.837 419.521 188.116 418.528 188.116 416.076C188.116 413.625 189.837 410.644 191.959 409.418Z",
          "M12.1909 319.534C14.3138 320.759 16.0347 323.74 16.0347 326.191C16.0347 328.643 14.3139 329.636 12.1909 328.411C10.068 327.185 8.34708 324.204 8.34708 321.753C8.34717 319.302 10.0681 318.308 12.1909 319.534Z",
          "M167.266 409.417C169.389 410.643 171.109 413.624 171.109 416.075C171.109 418.527 169.389 419.52 167.266 418.294C165.143 417.069 163.422 414.088 163.422 411.637C163.422 409.186 165.143 408.192 167.266 409.417Z",
          "M167.266 461.766C169.389 462.992 171.109 465.972 171.109 468.424C171.109 470.875 169.389 471.869 167.266 470.643C165.143 469.417 163.422 466.437 163.422 463.985C163.422 461.534 165.143 460.541 167.266 461.766Z",
          "M12.1909 371.883C14.3138 373.109 16.0347 376.09 16.0347 378.541C16.0347 380.992 14.3139 381.986 12.1909 380.76C10.068 379.534 8.34708 376.554 8.34708 374.103C8.34717 371.651 10.0681 370.658 12.1909 371.883Z",
          "M191.959 461.767C194.082 460.541 195.803 461.535 195.803 463.986C195.803 466.438 194.082 469.418 191.959 470.644C189.837 471.87 188.116 470.876 188.116 468.425C188.116 465.974 189.837 462.993 191.959 461.767Z",
          "M348.022 373.859C350.145 372.633 351.866 373.627 351.866 376.078C351.866 378.53 350.145 381.51 348.022 382.736C345.899 383.961 344.178 382.968 344.178 380.517C344.178 378.065 345.899 375.085 348.022 373.859Z",
          "M348.022 317.558C350.145 316.332 351.866 317.326 351.866 319.777C351.866 322.229 350.145 325.209 348.022 326.435C345.899 327.661 344.178 326.667 344.178 324.216C344.178 321.765 345.899 318.784 348.022 317.558Z",
        ] as const).map((d, i) => (
          <React.Fragment key={i}>
            <path
              d={d}
              fill="currentColor"
              className={stageClassName}
            />
            <path
              d={d}
              fill="none"
              stroke="currentColor"
              className={strokeClassName}
            />
          </React.Fragment>
        ))}
        <path
          d="M16.3101 326.936L163.483 411.881"
          stroke="currentColor"
          className={strokeClassName}
          strokeDasharray="4 4"
        />
        <path
          d="M15.8164 379.78L163.483 463.737M196.079 411.387L344.239 325.454M196.079 463.737L344.239 381.261"
          stroke="currentColor"
          className={strokeClassName}
          strokeDasharray="4 4"
        />
        <ellipse
          cx="180"
          cy="337"
          rx="92"
          ry="34"
          fill="black"
          opacity="0.42"
          filter={`url(#platformShadow_${uid})`}
          className="hidden dark:block"
        />
        <g
          className="hidden dark:block text-white"
          opacity="0.4"
          filter={`url(#stageEdgeGlow_${uid})`}
        >
          <rect
            x="0.866026"
            width="205.158"
            height="205.158"
            transform="matrix(0.866026 -0.499999 0.866026 0.499999 1.11603 304.511)"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M1.98828 304.71L179.781 407.358V486.377L1.98828 383.729V304.71Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <rect
            width="205.297"
            height="79.0189"
            transform="matrix(0.866026 -0.499999 0 1 179.781 407.359)"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </g>

        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 -6; 0 -18; 0 -6"
            dur="4s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          />

        <g
          className="hidden dark:block text-white"
          opacity="0.2"
          filter={`url(#floatingCubeAura_${uid})`}
        >
          <rect
            width="173.205"
            height="173.205"
            transform="matrix(0.866025 0.5 -0.866025 0.5 180 7)"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
          />
          <rect
            width="173.205"
            height="173.21"
            transform="matrix(0.866025 0.5 0 1 30 93.6025)"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
          />
          <rect
            width="173.205"
            height="173.21"
            transform="matrix(0.866025 -0.5 0 1 180 180.205)"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
          />
        </g>

        <path
          d="M335.385 90.2881V269.711L180 359.423L24.6152 269.711V90.2881L180 0.576172L335.385 90.2881Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="hidden dark:block text-white"
          opacity="0.42"
          filter={`url(#cubeGlow_${uid})`}
        />
        <g
          className="hidden dark:block text-white"
          opacity="0.32"
          filter={`url(#cubeEdgeGlow_${uid})`}
        >
          <rect
            width="173.205"
            height="173.205"
            transform="matrix(0.866025 0.5 -0.866025 0.5 180 7)"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <rect
            width="173.205"
            height="173.21"
            transform="matrix(0.866025 0.5 0 1 30 93.6025)"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <rect
            width="173.205"
            height="173.21"
            transform="matrix(0.866025 -0.5 0 1 180 180.205)"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <rect
            width="160"
            height="160"
            transform="matrix(0.866025 0.5 -0.866025 0.5 179.564 14)"
            fill="none"
            stroke="currentColor"
          />
          <rect
            width="160"
            height="160.005"
            transform="matrix(0.866025 0.5 0 1 36 104)"
            fill="none"
            stroke="currentColor"
          />
          <rect
            width="160"
            height="160.005"
            transform="matrix(0.866025 -0.5 0 1 186 184)"
            fill="none"
            stroke="currentColor"
          />
        </g>

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

        {/* ── Left Face Content — CSS crossfade instead of AnimatePresence ── */}
        <g transform="matrix(0.866025 0.5 0 1 36 104)">
          <foreignObject width="160" height="160">
            <div className="w-[160px] h-[160px] overflow-hidden relative">
              <div
                key={`left-${leftIndex}`}
                className="absolute inset-0 w-full h-full pointer-events-none hero-face-preview"
              >
                <div className="pointer-events-auto w-full h-full">
                  {COMPONENT_LIST[leftIndex]}
                </div>
              </div>
            </div>
          </foreignObject>
        </g>

        {/* ── Right Face Content — CSS crossfade instead of AnimatePresence ── */}
        <g transform="matrix(0.866025 -0.5 0 1 186 184)">
          <foreignObject width="160" height="160">
            <div className="w-[160px] h-[160px] overflow-hidden relative">
              <div
                key={`right-${rightIndex}`}
                className="absolute inset-0 w-full h-full pointer-events-none hero-face-preview"
              >
                <div className="pointer-events-auto w-full h-full">
                  {COMPONENT_LIST[rightIndex]}
                </div>
              </div>
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
        <g fill="currentColor" className={`${bgClassName} opacity-55 dark:opacity-35`}>
          <path d="M188.489 82.8034L174.002 76.9825L188.603 49L188.489 82.8034Z" />
          <path d="M214.757 113.9L160.728 91.6749L168.348 90.8536L207.979 96.5991L214.757 113.9Z" />
          <path d="M188.603 49L205.662 90.9079L173.913 87.6408L186.287 84.0752L171.415 82.1823L102 99L145.475 73.8996L174.002 76.9825L188.489 82.8034L188.603 49Z" />
          <path d="M214.757 113.9L102 99L160.728 91.6749L214.757 113.9Z" />
        </g>

        {/* ── Drop-shadow shapes ── */}
        <g filter={`url(#f0_${uid})`} className="opacity-50 dark:opacity-35">
          <path d="M188.489 82.8034L174.002 76.9825L188.603 49L188.489 82.8034Z" fill="#222222" />
          <path d="M214.757 113.9L160.728 91.6749L168.348 90.8536L207.979 96.5991L214.757 113.9Z" fill="#222222" />
          <path d="M188.603 49L205.662 90.9079L173.913 87.6408L186.287 84.0752L171.415 82.1823L102 99L145.475 73.8996L174.002 76.9825L188.489 82.8034L188.603 49Z" fill="#222222" />
          <path d="M214.757 113.9L102 99L160.728 91.6749L214.757 113.9Z" fill="#222222" />
        </g>

        <path
          d="M198.982 87.4131L207.5 91L202.349 95.6826L203.662 98.9082L192.71 97.7803L194.5 100L158.5 97L159.425 92.6025L133.204 98.9551L138.028 102.256L158.729 99.6748L166.349 98.8535L205.979 104.6L208.56 111.187L217 114L214.879 117.95L212.758 121.899L100 107L104 99L123.99 93.1484L143.476 81.8994L158.35 83.5068L157 81L175.02 79.1973L186.603 57L198.982 87.4131Z"
          fill="black"
          opacity="0.22"
          filter={`url(#logoLightShadow_${uid})`}
          className="dark:hidden"
        />

        {/* ── High-contrast detail ── */}
        <path
          d="M198.982 87.4131L207.5 91L202.349 95.6826L203.662 98.9082L192.71 97.7803L194.5 100L158.5 97L159.425 92.6025L133.204 98.9551L138.028 102.256L158.729 99.6748L166.349 98.8535L205.979 104.6L208.56 111.187L217 114L214.879 117.95L212.758 121.899L100 107L104 99L123.99 93.1484L143.476 81.8994L158.35 83.5068L157 81L175.02 79.1973L186.603 57L198.982 87.4131Z"
          fill="currentColor" className={`${logoShadow} opacity-70 dark:opacity-45`}
        />

        {/* ── Primary accent shapes (gradient) ── */}
        <g className="opacity-75 dark:opacity-58" filter={`url(#logoMetal_${uid})`}>
          <path d="M190.489 82.8034L176.002 76.9825L190.603 49L190.489 82.8034Z" fill={`url(#pAcc_${uid})`} />
          <path d="M216.757 113.9L162.728 91.6749L170.348 90.8536L209.979 96.5991L216.757 113.9Z" fill={`url(#pAcc_${uid})`} />
          <path d="M190.603 49L207.662 90.9079L175.913 87.6408L188.287 84.0752L173.415 82.1823L104 99L147.475 73.8996L176.002 76.9825L190.489 82.8034L190.603 49Z" fill={`url(#pAcc_${uid})`} />
          <path d="M216.757 113.9L104 99L162.728 91.6749L216.757 113.9Z" fill={`url(#pAcc_${uid})`} />
        </g>
        </g>

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

          <filter
            id={`cubeGlow_${uid}`}
            x="-28"
            y="-28"
            width="416"
            height="430"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="currentColor" floodOpacity="0.16" />
            <feDropShadow dx="0" dy="0" stdDeviation="1.3" floodColor="currentColor" floodOpacity="0.34" />
          </filter>

          <filter
            id={`cubeEdgeGlow_${uid}`}
            x="-28"
            y="-28"
            width="416"
            height="430"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter
            id={`floatingCubeAura_${uid}`}
            x="-38"
            y="-38"
            width="436"
            height="450"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="7" />
          </filter>

          <filter
            id={`platformShadow_${uid}`}
            x="58"
            y="277"
            width="244"
            height="120"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="10" />
          </filter>

          <filter
            id={`stageEdgeGlow_${uid}`}
            x="-22"
            y="266"
            width="404"
            height="244"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="2.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter
            id={`logoMetal_${uid}`}
            x="92"
            y="42"
            width="132"
            height="86"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feDropShadow dx="0" dy="5" stdDeviation="3" floodColor="black" floodOpacity="0.42" />
            <feDropShadow dx="0" dy="-1" stdDeviation="0.8" floodColor="white" floodOpacity="0.18" />
          </filter>

          <filter
            id={`logoLightShadow_${uid}`}
            x="86"
            y="54"
            width="144"
            height="92"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feOffset dx="-12" dy="16" />
            <feGaussianBlur stdDeviation="4.5" />
          </filter>

          <linearGradient id={`p3_${uid}`} x1="180" y1="242" x2="180" y2="367.5" gradientUnits="userSpaceOnUse">
            <stop offset="0" style={{ stopColor: "currentColor", stopOpacity: 0 }} className={strokeClassName} />
            <stop offset="1" style={{ stopColor: "currentColor" }} className={strokeClassName} />
          </linearGradient>

          <linearGradient id={`stageTop_${uid}`} x1="180" y1="304" x2="180" y2="486" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="white" stopOpacity="0.08" />
            <stop offset="0.55" stopColor="white" stopOpacity="0.02" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
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
