"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Beam {
  id: string;
  left: string;
  background: string;
  duration: string;
  delay: string;
}

export interface BeamTunnelProps extends React.HTMLAttributes<HTMLDivElement> {
  beamCount?: number;
  beamColors?: string[];
}

export function BeamTunnel({ 
  className, 
  beamCount = 3, 
  beamColors = [
    "linear-gradient(#0A74FF, transparent)",
    "linear-gradient(#FF512F, transparent)",
    "linear-gradient(#7F00FF, transparent)",
    "linear-gradient(#22c55e, transparent)",
  ],
  children,
  ...props 
}: BeamTunnelProps) {
  const [sides, setSides] = useState<{ top: Beam[]; bottom: Beam[]; left: Beam[]; right: Beam[] }>({
    top: [], bottom: [], left: [], right: []
  });

  useEffect(() => {
    const generateBeams = () => {
      const generateSideBeams = (prefix: string) => {
        return Array.from({ length: beamCount }).map((_, i) => {
          // Very slow, meditative drift
          const duration = 25 + Math.random() * 15;
          return {
            id: `${prefix}-${i}`,
            left: `${i * 30 + Math.random() * 15}%`, 
            background: beamColors[Math.floor(Math.random() * beamColors.length)],
            duration: `${duration}s`,
            delay: `-${Math.random() * duration}s`,
          };
        });
      };

      setSides({
        top: generateSideBeams("top"),
        bottom: generateSideBeams("bottom"),
        left: generateSideBeams("left"),
        right: generateSideBeams("right"),
      });
    };

    generateBeams();
  }, [beamCount, beamColors]);

  return (
    <div 
      className={cn("relative w-full h-full overflow-hidden bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100", className)} 
      {...props}
    >
      <style>{`
        @keyframes tunnel-beam-move {
          0%   { transform: translateY(120%); opacity: 0; }
          15%  { opacity: 0.55; }
          50%  { opacity: 0.6; }
          85%  { opacity: 0.55; }
          100% { transform: translateY(-120%); opacity: 0; }
        }
      `}</style>
      
      {/* 3D Scene */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ perspective: "120px", transformStyle: "preserve-3d" }}
      >
        {/* Top */}
        <div 
          className="absolute w-full h-full origin-top"
          style={{ transform: "rotateX(-90deg)", transformStyle: "preserve-3d" }}
        >
          <Grid sideBeams={sides.top} />
        </div>
        
        {/* Bottom */}
        <div 
          className="absolute top-full w-full h-full origin-top"
          style={{ transform: "rotateX(-90deg)", transformStyle: "preserve-3d" }}
        >
          <Grid sideBeams={sides.bottom} />
        </div>

        {/* Left */}
        <div 
          className="absolute w-full h-full origin-top-left"
          style={{ transform: "rotate(90deg) rotateX(-90deg)", transformStyle: "preserve-3d" }}
        >
          <Grid sideBeams={sides.left} />
        </div>

        {/* Right */}
        <div 
          className="absolute w-full h-full origin-top-right"
          style={{ transform: "rotate(-90deg) rotateX(-90deg)", transformStyle: "preserve-3d" }}
        >
          <Grid sideBeams={sides.right} />
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

function Grid({ sideBeams }: { sideBeams: Beam[] }) {
  return (
    <div className="absolute inset-0 overflow-visible">
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />
      
      {/* Animated Beams */}
      {sideBeams.map((beam) => (
        <div
          key={beam.id}
          className="absolute top-0 w-[5%] aspect-[1/6] rounded-md opacity-0"
          style={{
            left: beam.left,
            background: beam.background,
            animation: `tunnel-beam-move ${beam.duration} linear infinite`,
            animationDelay: beam.delay,
          }}
        />
      ))}
    </div>
  );
}
