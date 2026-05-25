"use client";

import { useState, useEffect } from "react";
import { X, Shrink } from "lucide-react";
import { createPortal } from "react-dom";

interface FullscreenPreviewProps {
  children: React.ReactNode;
}

export function FullscreenPreview({ children }: FullscreenPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const modal = isOpen
    ? createPortal(
        <div
          className="fixed inset-0 z-[9999] flex flex-col bg-black"
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen preview"
        >
          {/* Toolbar */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
            <button
              onClick={() => setIsOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 backdrop-blur transition-all hover:bg-white/10 hover:text-white"
              aria-label="Exit fullscreen"
            >
              <Shrink className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 backdrop-blur transition-all hover:bg-white/10 hover:text-white"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Fullscreen Content */}
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
            {children}
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-neutral-200 dark:border-white/10 bg-transparent text-neutral-400 dark:text-zinc-400 transition-colors hover:bg-neutral-100 dark:hover:bg-white/10 hover:text-neutral-700 dark:hover:text-zinc-200"
        aria-label="Expand to fullscreen"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 7V5a2 2 0 0 1 2-2h2" />
          <path d="M17 3h2a2 2 0 0 1 2 2v2" />
          <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
          <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        </svg>
      </button>
      {modal}
    </>
  );
}
