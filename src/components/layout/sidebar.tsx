"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutGrid, MousePointerClick, Type } from "lucide-react";
import { motion } from "framer-motion";

const CATEGORIES = [
  {
    name: "Text Components",
    icon: Type,
    items: [
      { name: "My Animated Button", href: "/components/my-animated-button", isNew: true },
      { name: "Reveal Loader", href: "/components/reveal-loader" },
      { name: "Dummy Component 1", href: "/components/dummy-component-1" },
      { name: "Dummy Component 2", href: "/components/dummy-component-2", isNew: true },
      { name: "Dummy Component 3", href: "/components/dummy-component-3" },
    ],
  },
  {
    name: "Layout & Grids",
    icon: LayoutGrid,
    items: [
      { name: "Bento Grid", href: "/components/bento-grid", isNew: true },
      { name: "Dummy Component 4", href: "/components/dummy-component-4" },
      { name: "Dummy Component 5", href: "/components/dummy-component-5" },
      { name: "Dummy Component 6", href: "/components/dummy-component-6" },
    ],
  },
  {
    name: "Buttons & Interactions",
    icon: MousePointerClick,
    items: [
      { name: "Dummy Component 7", href: "/components/dummy-component-7" },
      { name: "Dummy Component 8", href: "/components/dummy-component-8" },
      { name: "Dummy Component 9", href: "/components/dummy-component-9", isNew: true },
      { name: "Dummy Component 10", href: "/components/dummy-component-10" },
      { name: "Dummy Component 11", href: "/components/dummy-component-11" },
    ],
  },
];

function SidebarItem({ 
  item, 
  hoveredPath, 
  setHoveredPath 
}: { 
  item: { name: string; href: string; isNew?: boolean };
  hoveredPath: string | null;
  setHoveredPath: (href: string | null) => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const isHovered = hoveredPath === item.href;

  return (
    <div
      onMouseEnter={() => setHoveredPath(item.href)}
      className="relative"
    >
      {isActive && (
        <div className="absolute inset-0 rounded-md bg-zinc-800/80 z-0" />
      )}
      {isHovered && (
        <motion.div
          layoutId="sidebar-hover-bg"
          className="absolute inset-0 rounded-md bg-zinc-800/40 z-0"
          transition={{
            type: "spring",
            stiffness: 600,
            damping: 35,
          }}
        />
      )}
      <Link
        href={item.href}
        className={cn(
          "relative z-10 flex w-full justify-between items-center rounded-md px-3 py-1.5 text-sm transition-colors",
          isActive
            ? "font-medium text-white"
            : "text-zinc-400 hover:text-zinc-200"
        )}
      >
        <span className="truncate">{item.name}</span>
        {item.isNew && (
          <span className="ml-2 rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium leading-none text-emerald-400">
            New
          </span>
        )}
      </Link>
    </div>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <div 
      className="w-full space-y-6 pb-8"
      onMouseLeave={() => setHoveredPath(null)}
    >
      {CATEGORIES.map((category) => {
        // Automatically expand category if one of its items is active
        const isCategoryActive = category.items.some((item) => pathname === item.href);

        return (
          <div key={category.name} className="flex flex-col">
            <button
              className={cn(
                "flex items-center gap-2.5 rounded-md px-2 py-2 text-sm font-medium transition-colors w-full text-left",
                isCategoryActive 
                  ? "bg-zinc-800/80 text-zinc-100" 
                  : "text-zinc-300 hover:bg-zinc-800/40 hover:text-zinc-100"
              )}
            >
              <category.icon className="h-4 w-4" />
              {category.name}
            </button>
            
            <div className="mt-1 ml-4 flex flex-col border-l border-zinc-800/80 pl-2 space-y-0.5">
              {category.items.map((item) => (
                <SidebarItem 
                  key={item.href} 
                  item={item} 
                  hoveredPath={hoveredPath}
                  setHoveredPath={setHoveredPath}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
