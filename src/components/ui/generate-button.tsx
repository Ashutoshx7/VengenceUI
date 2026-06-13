"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface GenerateButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 
   * The hue value (0-360) for the button's highlight color.
   * Default is 210 (Blue).
   */
  hue?: number;
  /**
   * If true, forces the button into its "Generating" state.
   * By default, the button also enters this state when focused or clicked.
   */
  isGenerating?: boolean;
}

export function GenerateButton({
  hue = 210,
  isGenerating: controlledIsGenerating,
  className,
  onClick,
  ...props
}: GenerateButtonProps) {
  const [isFocused, setIsFocused] = useState(false);
  
  const isGenerating = controlledIsGenerating !== undefined ? controlledIsGenerating : isFocused;

  return (
    <div className="relative inline-block group">
      <style>{`
        .gen-btn {
          --border-radius: 24px;
          --padding: 4px;
          --transition: 0.4s;
          --button-color: #101010;
          --highlight-color-hue: ${hue}deg;

          user-select: none;
          display: flex;
          justify-content: center;
          padding: 0.5em 0.5em 0.5em 1.1em;
          font-family: "Poppins", "Inter", "Segoe UI", sans-serif;
          font-size: 1em;
          font-weight: 400;

          background-color: var(--button-color);

          box-shadow:
            inset 0px 1px 1px rgba(255, 255, 255, 0.2),
            inset 0px 2px 2px rgba(255, 255, 255, 0.15),
            inset 0px 4px 4px rgba(255, 255, 255, 0.1),
            inset 0px 8px 8px rgba(255, 255, 255, 0.05),
            inset 0px 16px 16px rgba(255, 255, 255, 0.05),
            0px -1px 1px rgba(0, 0, 0, 0.02),
            0px -2px 2px rgba(0, 0, 0, 0.03), 
            0px -4px 4px rgba(0, 0, 0, 0.05),
            0px -8px 8px rgba(0, 0, 0, 0.06), 
            0px -16px 16px rgba(0, 0, 0, 0.08);

          border: solid 1px rgba(255, 255, 255, 0.133);
          border-radius: var(--border-radius);
          cursor: pointer;

          transition: box-shadow var(--transition), border var(--transition), background-color var(--transition);
        }
        
        .gen-btn::before {
          content: "";
          position: absolute;
          top: calc(0px - var(--padding));
          left: calc(0px - var(--padding));
          width: calc(100% + var(--padding) * 2);
          height: calc(100% + var(--padding) * 2);
          border-radius: calc(var(--border-radius) + var(--padding));
          pointer-events: none;
          background-image: linear-gradient(0deg, rgba(0,0,0,0.267), rgba(0,0,0,0.667));

          z-index: -1;
          transition: box-shadow var(--transition), filter var(--transition);
          box-shadow: 0 -8px 8px -6px rgba(0,0,0,0) inset, 
            0 -16px 16px -8px rgba(0,0,0,0) inset,
            1px 1px 1px rgba(255,255,255,0.133), 
            2px 2px 2px rgba(255,255,255,0.067), 
            -1px -1px 1px rgba(0,0,0,0.133),
            -2px -2px 2px rgba(0,0,0,0.067);
        }
        
        .gen-btn::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: inherit;
          pointer-events: none;
          background-image: linear-gradient(
            0deg,
            #fff,
            hsl(var(--highlight-color-hue), 100%, 70%),
            hsla(var(--highlight-color-hue), 100%, 70%, 50%),
            8%,
            transparent
          );
          background-position: 0 0;
          opacity: 0;
          transition: opacity var(--transition), filter var(--transition);
        }

        .gen-btn-letter {
          position: relative;
          display: inline-block;
          color: rgba(255,255,255,0.333);
          animation: gen-letter-anim 2s ease-in-out infinite;
          transition: color var(--transition), text-shadow var(--transition), opacity var(--transition);
        }

        @keyframes gen-letter-anim {
          50% {
            text-shadow: 0 0 3px rgba(255,255,255,0.533);
            color: #fff;
          }
        }

        .gen-btn-svg {
          flex-grow: 1;
          height: 24px;
          margin-right: 0.5rem;
          fill: #e8e8e8;
          animation: gen-flicker 2s linear infinite;
          animation-delay: 0.5s;
          filter: drop-shadow(0 0 2px rgba(255,255,255,0.6));
          transition: fill var(--transition), filter var(--transition), opacity var(--transition);
        }
        
        @keyframes gen-flicker {
          50% { opacity: 0.3; }
        }

        .gen-txt-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          min-width: 6.4em;
        }
        
        .gen-txt-1,
        .gen-txt-2 {
          position: absolute;
          word-spacing: -1em;
        }
        
        .gen-txt-1 {
          animation: gen-appear-anim 1s ease-in-out forwards;
        }
        
        .gen-txt-2 {
          opacity: 0;
        }
        
        @keyframes gen-appear-anim {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        /* Generating (Focus/Active) state */
        .gen-btn[data-generating="true"] .gen-txt-1 {
          animation: gen-opacity-anim 0.3s ease-in-out forwards;
          animation-delay: 1s;
        }
        .gen-btn[data-generating="true"] .gen-txt-2 {
          animation: gen-opacity-anim 0.3s ease-in-out reverse forwards;
          animation-delay: 1s;
        }
        
        @keyframes gen-opacity-anim {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }

        .gen-btn[data-generating="true"] .gen-btn-letter {
          animation: gen-focused-letter-anim 1s ease-in-out forwards, gen-letter-anim 1.2s ease-in-out infinite;
          animation-delay: 0s, 1s;
        }
        
        @keyframes gen-focused-letter-anim {
          0%, 100% { filter: blur(0px); }
          50% {
            transform: scale(2);
            filter: blur(10px) brightness(150%) drop-shadow(-36px 12px 12px hsl(var(--highlight-color-hue), 100%, 70%));
          }
        }
        
        .gen-btn[data-generating="true"] .gen-btn-svg {
          animation-duration: 1.2s;
          animation-delay: 0.2s;
        }

        .gen-btn[data-generating="true"]::before {
          box-shadow: 0 -8px 12px -6px rgba(255,255,255,0.2) inset,
            0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 70%, 20%) inset,
            1px 1px 1px rgba(255,255,255,0.2), 
            2px 2px 2px rgba(255,255,255,0.067), 
            -1px -1px 1px rgba(0,0,0,0.133),
            -2px -2px 2px rgba(0,0,0,0.067);
        }
        
        .gen-btn[data-generating="true"]::after {
          opacity: 0.6;
          mask-image: linear-gradient(0deg, #fff, transparent);
          filter: brightness(100%);
        }

        /* Animation delays for letters */
        .gen-btn-letter:nth-child(1), .gen-btn[data-generating="true"] .gen-btn-letter:nth-child(1) { animation-delay: 0s; }
        .gen-btn-letter:nth-child(2), .gen-btn[data-generating="true"] .gen-btn-letter:nth-child(2) { animation-delay: 0.08s; }
        .gen-btn-letter:nth-child(3), .gen-btn[data-generating="true"] .gen-btn-letter:nth-child(3) { animation-delay: 0.16s; }
        .gen-btn-letter:nth-child(4), .gen-btn[data-generating="true"] .gen-btn-letter:nth-child(4) { animation-delay: 0.24s; }
        .gen-btn-letter:nth-child(5), .gen-btn[data-generating="true"] .gen-btn-letter:nth-child(5) { animation-delay: 0.32s; }
        .gen-btn-letter:nth-child(6), .gen-btn[data-generating="true"] .gen-btn-letter:nth-child(6) { animation-delay: 0.4s; }
        .gen-btn-letter:nth-child(7), .gen-btn[data-generating="true"] .gen-btn-letter:nth-child(7) { animation-delay: 0.48s; }
        .gen-btn-letter:nth-child(8), .gen-btn[data-generating="true"] .gen-btn-letter:nth-child(8) { animation-delay: 0.56s; }
        .gen-btn-letter:nth-child(9), .gen-btn[data-generating="true"] .gen-btn-letter:nth-child(9) { animation-delay: 0.64s; }
        .gen-btn-letter:nth-child(10), .gen-btn[data-generating="true"] .gen-btn-letter:nth-child(10) { animation-delay: 0.72s; }
        .gen-btn-letter:nth-child(11), .gen-btn[data-generating="true"] .gen-btn-letter:nth-child(11) { animation-delay: 0.8s; }
        .gen-btn-letter:nth-child(12), .gen-btn[data-generating="true"] .gen-btn-letter:nth-child(12) { animation-delay: 0.88s; }
        .gen-btn-letter:nth-child(13), .gen-btn[data-generating="true"] .gen-btn-letter:nth-child(13) { animation-delay: 0.96s; }

        /* Hover & Active states */
        .gen-btn:active {
          border: solid 1px hsla(var(--highlight-color-hue), 100%, 80%, 70%);
          background-color: hsla(var(--highlight-color-hue), 50%, 20%, 0.5);
        }
        .gen-btn:active::before {
          box-shadow: 0 -8px 12px -6px rgba(255,255,255,0.667) inset,
            0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 70%, 80%) inset,
            1px 1px 1px rgba(255,255,255,0.267), 
            2px 2px 2px rgba(255,255,255,0.133), 
            -1px -1px 1px rgba(0,0,0,0.133),
            -2px -2px 2px rgba(0,0,0,0.067);
        }
        .gen-btn:active::after {
          opacity: 1;
          mask-image: linear-gradient(0deg, #fff, transparent);
          filter: brightness(200%);
        }
        .gen-btn:active .gen-btn-letter {
          text-shadow: 0 0 1px hsla(var(--highlight-color-hue), 100%, 90%, 90%);
          animation: none;
        }

        .gen-btn:hover {
          border: solid 1px hsla(var(--highlight-color-hue), 100%, 80%, 40%);
        }
        .gen-btn:hover::before {
          box-shadow: 0 -8px 8px -6px rgba(255,255,255,0.667) inset,
            0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 70%, 30%) inset,
            1px 1px 1px rgba(255,255,255,0.133), 
            2px 2px 2px rgba(255,255,255,0.067), 
            -1px -1px 1px rgba(0,0,0,0.133),
            -2px -2px 2px rgba(0,0,0,0.067);
        }
        .gen-btn:hover::after {
          opacity: 1;
          mask-image: linear-gradient(0deg, #fff, transparent);
        }
        .gen-btn:hover .gen-btn-svg {
          fill: #fff;
          filter: drop-shadow(0 0 3px hsl(var(--highlight-color-hue), 100%, 70%)) drop-shadow(0 -4px 6px rgba(0,0,0,0.6));
          animation: none;
        }
      `}</style>

      <button
        type="button"
        className={cn("gen-btn", className)}
        data-generating={isGenerating}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={(e) => {
          setIsFocused(true);
          onClick?.(e);
        }}
        {...props}
      >
        <svg className="gen-btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path>
        </svg>

        <div className="gen-txt-wrapper">
          <div className="gen-txt-1">
            {"Generate".split("").map((letter, i) => (
              <span key={`t1-${i}`} className="gen-btn-letter">{letter}</span>
            ))}
          </div>
          <div className="gen-txt-2">
            {"Generating".split("").map((letter, i) => (
              <span key={`t2-${i}`} className="gen-btn-letter">{letter}</span>
            ))}
          </div>
        </div>
      </button>
    </div>
  );
}

export default GenerateButton;
