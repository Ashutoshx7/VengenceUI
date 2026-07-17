"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Layers, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Verse Cards
 *
 * A dock-style nav whose trigger fans a deck of cards up from below on a
 * staggered `power4.inOut` sweep. Once open, the deck behaves like a stack you
 * flip through: clicking the front card flings it away and the next card slides
 * forward to take its place. The close button (or re-triggering) sends the whole
 * stack back down and resets it.
 *
 * Ported from the vanilla "CodeGrid Verse Cards" (GSAP) into a single,
 * self-contained, prop-driven React component. Icons are passed as nodes, so
 * the only runtime dependency is GSAP (plus lucide-react for the defaults).
 */

export interface VerseNavItem {
  /** Label revealed under the icon on hover. */
  label: string;
  /** Icon node rendered inside the tile. */
  icon: React.ReactNode;
  /** Show the little notification dot in the corner. */
  badge?: boolean;
  /** When true, clicking this item opens/closes the card deck. */
  isTrigger?: boolean;
  /** Click handler for non-trigger items. */
  onClick?: () => void;
}

export interface VerseCard {
  /** Text shown on the card. */
  label: string;
  /** Extra classes for this specific card (e.g. a custom background). */
  className?: string;
}

export interface VerseCardsProps {
  /** Nav tiles. Mark one with `isTrigger` to open the deck. Defaults to a single "Work" trigger. */
  navItems?: VerseNavItem[];
  /** Cards in the deck. Strings are treated as labels. Defaults to a sample set. */
  cards?: (VerseCard | string)[];
  /** Caption shown under the open deck. */
  footerText?: string;
  /** Called whenever the deck opens (true) or closes (false). */
  onOpenChange?: (open: boolean) => void;
  /** Called when the front card is flicked away, with its index in the deck. */
  onDeal?: (index: number) => void;
  /** Extra classes for the root element. */
  className?: string;
}

const DEFAULT_NAV: VerseNavItem[] = [
  { label: "Work", icon: <Layers className="h-5 w-5" />, badge: true, isTrigger: true },
];

const DEFAULT_CARDS: VerseCard[] = [
  { label: "Sonyverse" },
  { label: "Nota" },
  { label: "Blinder" },
  { label: "Cinovas" },
  { label: "Uito" },
];

/** Resting transform for a card sitting at `depth` in the stack (0 = front). */
function stackTransform(depth: number) {
  return { x: depth * 12, y: depth * 8, rotation: depth * 3, opacity: 1 };
}

/** Transform for a card that's been dealt away — flung up and off to a side. */
function awayTransform(index: number) {
  const side = index % 2 === 0 ? -1 : 1;
  return { x: side * 460, y: -540, rotation: side * 34, opacity: 0 };
}

/** Where every card sits below the stage before it's revealed. */
const CLOSED = { x: 0, y: 1000, rotation: 0, opacity: 1 };

export function VerseCards({
  navItems = DEFAULT_NAV,
  cards = DEFAULT_CARDS,
  footerText = "Click the front card to deal it away.",
  onOpenChange,
  onDeal,
  className,
}: VerseCardsProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [dealt, setDealt] = useState(0);
  const [ready, setReady] = useState(false);

  const mountedRef = useRef(false);
  const prevOpenRef = useRef(open);

  const onOpenChangeRef = useRef(onOpenChange);
  const onDealRef = useRef(onDeal);
  useEffect(() => {
    onOpenChangeRef.current = onOpenChange;
    onDealRef.current = onDeal;
  }, [onOpenChange, onDeal]);

  const normalizedCards: VerseCard[] = cards.map((c) =>
    typeof c === "string" ? { label: c } : c,
  );
  const cardCount = normalizedCards.length;

  // Drive the whole deck from (open, dealt): closed → below the stage; open →
  // front-to-back stack; dealt cards fling away and the rest slide forward.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cardEls = gsap.utils.toArray<HTMLElement>(root.querySelectorAll("[data-verse-card]"));
    const closeEl = root.querySelector("[data-verse-close]");
    const footerEl = root.querySelector("[data-verse-footer]");

    const target = (i: number) => {
      if (!open) return CLOSED;
      if (i < dealt) return awayTransform(i);
      return stackTransform(i - dealt);
    };

    if (!mountedRef.current) {
      // Seat everything in its closed state without animating, then reveal the
      // stage so the first paint never flashes the cards in view.
      cardEls.forEach((el, i) => gsap.set(el, target(i)));
      if (closeEl) gsap.set(closeEl, { scale: 0 });
      if (footerEl) gsap.set(footerEl, { opacity: 0 });
      mountedRef.current = true;
      prevOpenRef.current = open;
      setReady(true);
      return;
    }

    const isToggle = prevOpenRef.current !== open;
    prevOpenRef.current = open;

    gsap.to(cardEls, {
      x: (i) => target(i).x,
      y: (i) => target(i).y,
      rotation: (i) => target(i).rotation,
      opacity: (i) => target(i).opacity,
      duration: isToggle ? 0.9 : 0.6,
      ease: isToggle ? "power4.inOut" : "power3.out",
      stagger: isToggle ? { amount: 0.3, from: open ? "start" : "end" } : 0,
      overwrite: "auto",
    });

    if (closeEl) {
      gsap.to(closeEl, {
        scale: open ? 1 : 0,
        duration: 0.4,
        delay: isToggle && open ? 0.5 : 0,
        ease: "back.out(1.7)",
        overwrite: "auto",
      });
    }
    if (footerEl) {
      gsap.to(footerEl, { opacity: open ? 1 : 0, duration: 0.4, overwrite: "auto" });
    }
  }, [open, dealt, cardCount]);

  const openDeck = () => {
    setDealt(0);
    setOpen(true);
    onOpenChangeRef.current?.(true);
  };

  const closeDeck = () => {
    setOpen(false);
    setDealt(0);
    onOpenChangeRef.current?.(false);
  };

  const toggle = () => (open ? closeDeck() : openDeck());

  const dealFront = (index: number) => {
    if (!open || index !== dealt || dealt >= cardCount) return;
    onDealRef.current?.(index);
    setDealt((d) => d + 1);
  };

  return (
    <div
      ref={rootRef}
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-neutral-100 dark:bg-[#0c0c0c]",
        className,
      )}
    >
      {/* Nav dock */}
      <div className="flex gap-6">
        {navItems.map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            role="button"
            tabIndex={0}
            aria-label={item.label}
            aria-expanded={item.isTrigger ? open : undefined}
            onClick={item.isTrigger ? toggle : item.onClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                if (item.isTrigger) toggle();
                else item.onClick?.();
              }
            }}
            className="group relative flex cursor-pointer flex-col items-center gap-2.5"
          >
            <div className="relative flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-neutral-300 bg-gradient-to-b from-white to-neutral-200 text-neutral-800 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900 dark:text-white">
              {item.icon}
              {item.badge ? (
                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-neutral-900 dark:bg-white" />
              ) : null}
            </div>
            <span className="translate-y-2.5 text-xs font-medium tracking-wide text-neutral-600 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:text-neutral-400">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Card deck overlay */}
      <div
        style={{ pointerEvents: open ? "auto" : "none" }}
        className={cn("absolute inset-0", !ready && "invisible")}
      >
        <button
          type="button"
          data-verse-close
          onClick={closeDeck}
          aria-label="Close cards"
          className="absolute left-1/2 top-[6%] z-[200] flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-neutral-900 text-white shadow-lg transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-neutral-900"
        >
          <X className="h-5 w-5" />
        </button>

        {normalizedCards.map((card, i) => {
          const isFront = open && i === dealt;
          return (
            <div
              key={`${card.label}-${i}`}
              data-verse-card
              onClick={() => dealFront(i)}
              style={{
                zIndex: i < dealt ? 0 : 100 - (i - dealt),
                pointerEvents: isFront ? "auto" : "none",
                cursor: isFront ? "pointer" : "default",
              }}
              className={cn(
                "absolute left-1/2 top-1/2 flex h-[300px] w-[200px] -translate-x-1/2 -translate-y-1/2 select-none items-center justify-center rounded-[10px] bg-white text-[17px] font-medium tracking-tight text-neutral-800 shadow-[0_0_50px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-200 dark:text-neutral-900",
                card.className,
              )}
            >
              {card.label}
            </div>
          );
        })}

        <div
          data-verse-footer
          className="absolute bottom-[6%] left-1/2 z-[200] -translate-x-1/2 text-sm font-medium tracking-tight text-neutral-500"
        >
          {dealt >= cardCount ? "That's the whole deck — close to reset." : footerText}
        </div>
      </div>
    </div>
  );
}

export default VerseCards;
