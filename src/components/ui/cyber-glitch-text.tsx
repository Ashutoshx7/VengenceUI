"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const CHARS = "!<>-_\\/[]{}—=+*^?#_";

interface CyberGlitchTextProps {
  text: string;
  className?: string;
  scrambleOnMount?: boolean;
  scrambleDuration?: number;
}

export function CyberGlitchText({
  text,
  className,
  scrambleOnMount = true,
  scrambleDuration = 40,
}: CyberGlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = () => {
    let iteration = 0;
    clearInterval(intervalRef.current as NodeJS.Timeout);

    intervalRef.current = setInterval(() => {
      setDisplayText((currentText) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }

      iteration += 1 / 3;
    }, scrambleDuration);
  };

  useEffect(() => {
    if (scrambleOnMount) {
      scramble();
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [text, scrambleOnMount]);

  return (
    <div
      className={cn("relative inline-block group", className)}
      onMouseEnter={() => {
        setIsHovered(true);
        scramble();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base Text */}
      <span className="relative z-10">{displayText}</span>

      {/* Glitch Layers for Chromatic Aberration */}
      {isHovered && (
        <>
          <motion.span
            className="absolute top-0 left-[-2px] z-0 text-red-500 opacity-70 mix-blend-screen"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: [-2, 2, -1, 3, 0], opacity: [0, 0.8, 0.4, 0.9, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
            aria-hidden="true"
          >
            {displayText}
          </motion.span>
          <motion.span
            className="absolute top-0 left-[2px] z-0 text-blue-500 opacity-70 mix-blend-screen"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: [2, -2, 1, -3, 0], opacity: [0, 0.8, 0.4, 0.9, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror", delay: 0.05 }}
            aria-hidden="true"
          >
            {displayText}
          </motion.span>
          
          {/* Slice Glitch Overlay */}
          <motion.div
            className="absolute inset-0 bg-white/10 dark:bg-black/10 z-20 pointer-events-none mix-blend-overlay"
            initial={{ top: "0%", height: "0%" }}
            animate={{ top: ["0%", "40%", "80%", "0%"], height: ["2px", "5px", "1px", "0px"] }}
            transition={{ duration: 0.3, repeat: Infinity }}
          />
        </>
      )}
    </div>
  );
}
