"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface KineticTextLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  maskColorClass?: string;
}

export function KineticTextLoader({ 
  className, 
  text = "Loading", 
  maskColorClass = "bg-white dark:bg-[#09090b]",
  ...props 
}: KineticTextLoaderProps) {
  const letters = text.split("");

  return (
    <div 
      className={cn("relative flex items-center justify-center font-light", className)} 
      style={{ fontFamily: "'Roboto', sans-serif" }}
      {...props}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
        
        @keyframes ktl-dotMove {
          0%, 100% { transform: rotate(180deg) translate(-110px, -10px) rotate(-180deg); }
          50% { transform: rotate(0deg) translate(-111px, 10px) rotate(0deg); }
        }
        @keyframes ktl-letterStretch {
          0%, 100% { transform: scale(1, 0.35); transform-origin: 100% 75%; }
          8%, 28% { transform: scale(1, 2.125); transform-origin: 100% 67%; }
          37% { transform: scale(1, 0.875); transform-origin: 100% 75%; }
          46% { transform: scale(1, 1.03); transform-origin: 100% 75%; }
          50%, 97% { transform: scale(1); transform-origin: 100% 75%; }
        }
        @keyframes ktl-lineStretch {
          0%, 45%, 70%, 100% { transform: scaleY(0.125); }
          49% { transform: scaleY(0.75); }
          50% { transform: scaleY(0.875); }
          53% { transform: scaleY(0.5); }
          60% { transform: scaleY(0); }
          68% { transform: scaleY(0.18); }
        }
      `}</style>
      
      <div className="relative scale-75 md:scale-90 lg:scale-100">
        {/* The moving dot */}
        <div 
          className="absolute z-10 top-[40px] left-[115px] w-[6px] h-[6px] bg-neutral-800 dark:bg-neutral-200 rounded-full"
          style={{ animation: "ktl-dotMove 1800ms cubic-bezier(0.25,0.25,0.75,0.75) infinite" }}
        />
        
        <p className="relative m-0 whitespace-nowrap text-[3.75rem] text-neutral-800 dark:text-neutral-200" aria-label={text}>
          {letters.map((char, index) => {
            if (index === 0 && char.toUpperCase() === 'L') {
              return (
                <span key={index} className="inline-block relative tracking-[8px] transform origin-[100%_70%] scale-y-[1.275]">
                  {char}
                  {/* L mask */}
                  <span 
                    className={cn("absolute top-[22px] left-0 w-[14px] h-[36px] origin-[100%_0]", maskColorClass)}
                    style={{ animation: "ktl-lineStretch 1800ms cubic-bezier(0.25,0.25,0.75,0.75) infinite" }}
                  />
                </span>
              );
            }
            
            if (index === 4 && char === 'i') {
              return (
                <span 
                  key={index} 
                  className="inline-block relative tracking-[8px] transform origin-[100%_70%]"
                  style={{ animation: "ktl-letterStretch 1800ms cubic-bezier(0.25,0.23,0.73,0.75) infinite" }}
                >
                  {char}
                  {/* i mask (covers the original dot of the i) */}
                  <span className={cn("absolute top-[15px] left-[2px] w-[9px] h-[15px]", maskColorClass)} />
                </span>
              );
            }

            return (
              <span key={index} className="inline-block relative tracking-[8px]">
                {char}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}

export default KineticTextLoader;
