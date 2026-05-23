"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { COMPONENT_CATEGORIES } from "@/lib/components-catalog";

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
        <div className="absolute inset-0 rounded-md bg-neutral-100 dark:bg-zinc-800/80 z-0" />
      )}
      {isHovered && (
        <motion.div
          layoutId="sidebar-hover-bg"
          className="absolute inset-0 rounded-md bg-neutral-100 dark:bg-zinc-800/40 z-0"
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
            ? "font-medium text-neutral-900 dark:text-white"
            : "text-neutral-500 dark:text-zinc-400 hover:text-neutral-900 dark:hover:text-zinc-200"
        )}
      >
        <span className="truncate">{item.name}</span>
        {item.isNew && (
          <span className="ml-2 rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium leading-none text-emerald-500 dark:text-emerald-400">
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
      {COMPONENT_CATEGORIES.map((category) => {
        // Automatically expand category if one of its items is active
        const isCategoryActive = category.items.some((item) => pathname === `/components/${item.slug}`);

        return (
          <div key={category.name} className="flex flex-col">
            <button
              className={cn(
                "flex items-center gap-2.5 rounded-md px-2 py-2 text-sm font-medium transition-colors w-full text-left",
                isCategoryActive 
                  ? "bg-neutral-100 dark:bg-zinc-800/80 text-neutral-900 dark:text-zinc-100" 
                  : "text-neutral-600 dark:text-zinc-300 hover:bg-neutral-100 dark:hover:bg-zinc-800/40 hover:text-neutral-900 dark:hover:text-zinc-100"
              )}
            >
              <category.icon className="h-4 w-4" />
              {category.name}
            </button>
            
            <div className="mt-1 ml-4 flex flex-col border-l border-neutral-200 dark:border-[#222]/80 pl-2 space-y-0.5">
              {category.items.map((item) => (
                <SidebarItem 
                  key={item.slug}
                  item={{
                    name: item.name,
                    href: `/components/${item.slug}`,
                    isNew: item.isNew,
                  }}
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
