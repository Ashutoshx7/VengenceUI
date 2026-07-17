"use client";

import { Layers } from "lucide-react";
import { FaTwitch, FaXTwitter } from "react-icons/fa6";
import { VerseCards, type VerseNavItem } from "@/components/ui/verse-cards";

/**
 * Preview for Verse Cards. Click the "Work" tile to fan the deck up; use the
 * close button to send it back. The surface adapts to light and dark mode.
 */
const NAV_ITEMS: VerseNavItem[] = [
  { label: "Work", icon: <Layers className="h-5 w-5" />, badge: true, isTrigger: true },
  { label: "Twitter", icon: <FaXTwitter className="h-5 w-5" /> },
  { label: "Twitch", icon: <FaTwitch className="h-5 w-5" /> },
];

export function VerseCardsDemo() {
  return <VerseCards navItems={NAV_ITEMS} />;
}

export default VerseCardsDemo;
