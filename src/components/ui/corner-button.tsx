"use client";

import React from "react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CornerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon rendered to the right of the label. Defaults to the pencil/design SVG. */
  icon?: React.ReactNode;
  /** Show the default pencil icon. Set to false to hide it entirely. @default true */
  showIcon?: boolean;
  /** Accent colour used for the button background and glow. @default "#e5ff00" */
  accentColor?: string;
  /** Extra classes applied to the outer wrapper div. */
  wrapperClassName?: string;
}

// ─── Default icon ─────────────────────────────────────────────────────────────

const PencilIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.6744 11.4075L15.7691 17.1233C15.7072 17.309 15.5586 17.4529 15.3709 17.5087L3.69348 20.9803C3.22819 21.1186 2.79978 20.676 2.95328 20.2155L6.74467 8.84131C6.79981 8.67588 6.92419 8.54263 7.08543 8.47624L12.472 6.25822C12.696 6.166 12.9535 6.21749 13.1248 6.38876L17.5294 10.7935C17.6901 10.9542 17.7463 11.1919 17.6744 11.4075Z" />
    <path d="M3.2959 20.6016L9.65986 14.2376" />
    <path d="M17.7917 11.0557L20.6202 8.22724C21.4012 7.44619 21.4012 6.17986 20.6202 5.39881L18.4989 3.27749C17.7178 2.49645 16.4515 2.49645 15.6704 3.27749L12.842 6.10592" />
    <path d="M11.7814 12.1163C11.1956 11.5305 10.2458 11.5305 9.66004 12.1163C9.07426 12.7021 9.07426 13.6519 9.66004 14.2376C10.2458 14.8234 11.1956 14.8234 11.7814 14.2376C12.3671 13.6519 12.3671 12.7021 11.7814 12.1163Z" />
  </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────

export function CornerButton({
  children = "Start designing",
  icon,
  showIcon = true,
  accentColor = "#e5ff00",
  className,
  wrapperClassName,
  style,
  ...props
}: CornerButtonProps) {
  const resolvedIcon =
    icon ??
    (showIcon ? (
      <PencilIcon className="corner-btn-svg" />
    ) : null);

  return (
    <div
      className={cn("corner-btn-wrapper", wrapperClassName)}
      style={
        {
          "--accent": accentColor,
          "--accent-glow": `${accentColor}55`,
        } as React.CSSProperties
      }
    >
      {/* Animated corner lines */}
      <div className="corner-line horizontal top" aria-hidden="true" />
      <div className="corner-line vertical right" aria-hidden="true" />
      <div className="corner-line horizontal bottom" aria-hidden="true" />
      <div className="corner-line vertical left" aria-hidden="true" />

      {/* Animated corner dots */}
      <div className="corner-dot top left" aria-hidden="true" />
      <div className="corner-dot top right" aria-hidden="true" />
      <div className="corner-dot bottom right" aria-hidden="true" />
      <div className="corner-dot bottom left" aria-hidden="true" />

      <button
        className={cn("corner-btn", className)}
        style={style}
        {...props}
      >
        <span className="corner-btn-text">{children}</span>
        {resolvedIcon}
      </button>

      {/* Scoped styles — no global CSS pollution */}
      <style>{`
        .corner-btn-wrapper {
          --dot-size: 6px;
          --line-weight: 1px;
          --padding: 0.9rem 1.1rem;
          --speed: 0.35s;
          --dot-color: #666;
          --line-color: #999;

          position: relative;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          padding: var(--padding);
          background-color: transparent;
          transition: background-color 0.3s ease-in-out;
          user-select: none;
        }

        .corner-btn-wrapper:has(.corner-btn:hover) {
          animation: corner-bg-change calc(var(--speed) * 4) ease-in-out forwards;
        }
        @keyframes corner-bg-change {
          80%  { background-color: transparent; }
          100% { background-color: var(--accent-glow); }
        }

        /* ── Button ───────────────────────── */
        .corner-btn {
          position: relative;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.25rem;
          background-color: var(--accent);
          background-image: linear-gradient(#0000, #0004);
          border: none;
          color: #0008;
          font-family: "Inter", sans-serif;
          font-size: 1rem;
          font-weight: 600;
          text-transform: capitalize;
          border-radius: 30% / 200%;
          cursor: pointer;
          box-shadow:
            0 0 0px 1px #0003,
            0px 1px 1px rgba(3,7,18,.02),
            0px 5px 4px rgba(3,7,18,.04),
            0px 12px 9px rgba(3,7,18,.06),
            0px 20px 15px rgba(3,7,18,.08),
            0px 32px 24px rgba(3,7,18,.1);
          transition:
            background-color 0.2s ease-in-out,
            transform 0.2s ease-in-out,
            box-shadow 0.2s ease-in-out,
            border-radius 0.3s ease-in-out;
        }
        .corner-btn:hover {
          background-color: #fff;
          transform: scale(1.05);
          border-radius: 10% / 200%;
        }
        .corner-btn:active {
          background-color: var(--accent);
          transform: scale(0.98);
          border-radius: 20% / 200%;
        }
        .corner-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          pointer-events: none;
        }

        /* ── Icon ─────────────────────────── */
        .corner-btn-svg {
          height: 24px;
          width: 24px;
          flex-shrink: 0;
          stroke-width: 1;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke: #0007;
          fill: #fffa;
          transition: all 0.3s ease-in-out;
        }
        .corner-btn:hover .corner-btn-svg {
          stroke: #0008;
          fill: var(--accent);
        }
        .corner-btn:active .corner-btn-svg {
          stroke: #0009;
          fill: color-mix(in srgb, var(--accent) 80%, white);
        }

        /* ── Dots ─────────────────────────── */
        .corner-dot {
          position: absolute;
          width: var(--dot-size);
          aspect-ratio: 1;
          border-radius: 50%;
          background-color: var(--dot-color);
          opacity: 0;
          transition: all 0.3s ease-in-out;
        }
        .corner-btn-wrapper:has(.corner-btn:hover) .corner-dot.top.left {
          top: 50%; left: 20%;
          animation: corner-dot-tl var(--speed) ease-in-out forwards;
        }
        @keyframes corner-dot-tl {
          90%  { opacity: 0.6; }
          100% { top: calc(var(--dot-size) * -0.5); left: calc(var(--dot-size) * -0.5); opacity: 1; }
        }
        .corner-btn-wrapper:has(.corner-btn:hover) .corner-dot.top.right {
          top: 50%; right: 20%;
          animation: corner-dot-tr var(--speed) ease-in-out forwards;
          animation-delay: calc(var(--speed) * 0.6);
        }
        @keyframes corner-dot-tr {
          80%  { opacity: 0.6; }
          100% { top: calc(var(--dot-size) * -0.5); right: calc(var(--dot-size) * -0.5); opacity: 1; }
        }
        .corner-btn-wrapper:has(.corner-btn:hover) .corner-dot.bottom.right {
          bottom: 50%; right: 20%;
          animation: corner-dot-br var(--speed) ease-in-out forwards;
          animation-delay: calc(var(--speed) * 1.2);
        }
        @keyframes corner-dot-br {
          80%  { opacity: 0.6; }
          100% { bottom: calc(var(--dot-size) * -0.5); right: calc(var(--dot-size) * -0.5); opacity: 1; }
        }
        .corner-btn-wrapper:has(.corner-btn:hover) .corner-dot.bottom.left {
          bottom: 50%; left: 20%;
          animation: corner-dot-bl var(--speed) ease-in-out forwards;
          animation-delay: calc(var(--speed) * 1.8);
        }
        @keyframes corner-dot-bl {
          80%  { opacity: 0.6; }
          100% { bottom: calc(var(--dot-size) * -0.5); left: calc(var(--dot-size) * -0.5); opacity: 1; }
        }

        /* ── Lines ────────────────────────── */
        .corner-line {
          position: absolute;
          transition: all 0.3s ease-in-out;
        }
        .corner-line.horizontal {
          height: var(--line-weight);
          width: 100%;
          background-image: repeating-linear-gradient(
            90deg,
            #0000 0 calc(var(--line-weight) * 2),
            var(--line-color) calc(var(--line-weight) * 2) calc(var(--line-weight) * 4)
          );
        }
        .corner-line.vertical {
          width: var(--line-weight);
          height: 100%;
          background-image: repeating-linear-gradient(
            0deg,
            #0000 0 calc(var(--line-weight) * 2),
            var(--line-color) calc(var(--line-weight) * 2) calc(var(--line-weight) * 4)
          );
        }
        .corner-line.top    { top:    calc(var(--line-weight) * -0.5); transform-origin: top left;    transform: rotate(5deg) scaleX(0); }
        .corner-line.bottom { bottom: calc(var(--line-weight) * -0.5); transform-origin: bottom right; transform: rotate(5deg) scaleX(0); }
        .corner-line.left   { left:   calc(var(--line-weight) * -0.5); transform-origin: bottom left;  transform: scaleY(0); }
        .corner-line.right  { right:  calc(var(--line-weight) * -0.5); transform-origin: top right;    transform: rotate(5deg) scaleY(0); }

        .corner-btn-wrapper:has(.corner-btn:hover) .corner-line.top {
          animation: corner-line-top var(--speed) ease-in-out forwards;
          animation-delay: calc(var(--speed) * 0.8);
        }
        @keyframes corner-line-top    { 100% { transform: rotate(0deg) scaleX(1); } }

        .corner-btn-wrapper:has(.corner-btn:hover) .corner-line.bottom {
          animation: corner-line-bottom var(--speed) ease-in-out forwards;
          animation-delay: calc(var(--speed) * 2);
        }
        @keyframes corner-line-bottom { 100% { transform: rotate(0deg) scaleX(1); } }

        .corner-btn-wrapper:has(.corner-btn:hover) .corner-line.left {
          animation: corner-line-left var(--speed) ease-in-out forwards;
          animation-delay: calc(var(--speed) * 2.4);
        }
        @keyframes corner-line-left   { 100% { transform: scaleY(1); } }

        .corner-btn-wrapper:has(.corner-btn:hover) .corner-line.right {
          animation: corner-line-right var(--speed) ease-in-out forwards;
          animation-delay: calc(var(--speed) * 1.4);
        }
        @keyframes corner-line-right  { 100% { transform: rotate(0deg) scaleY(1); } }
      `}</style>
    </div>
  );
}

export default CornerButton;
