"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ImageRevealListItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  number: string;
  href?: string;
}

export interface ImageRevealListProps {
  items: ImageRevealListItem[];
  className?: string;
}

export function ImageRevealList({ items, className }: ImageRevealListProps) {
  return (
    <div className={cn("relative max-w-[500px] w-full mx-auto", className)}>
      <ul className="list-none bg-white/60 dark:bg-black/40 rounded-xl p-2 backdrop-blur-md border border-neutral-200 dark:border-white/10">
        {items.map((item) => (
          <li key={item.id} className="relative">
            <a
              href={item.href || "#"}
              className="group flex items-center p-4 text-neutral-800 dark:text-neutral-200 no-underline text-[15px] font-medium rounded-lg transition-all duration-200 hover:bg-white/90 dark:hover:bg-white/10 hover:translate-x-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute -left-[100px] top-1/2 -translate-y-1/2 scale-90 w-[80px] h-[110px] rounded-md object-cover shadow-2xl opacity-0 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-[100] group-hover:opacity-100 group-hover:scale-100 group-hover:-left-[90px]"
              />
              <span className="text-neutral-400 dark:text-neutral-500 text-[13px] mr-4 min-w-[24px] font-normal">
                {item.number}
              </span>
              {item.title}
              {item.subtitle && (
                <span className="ml-auto text-neutral-400 dark:text-neutral-500 text-[13px] font-normal">
                  {item.subtitle}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageRevealList;
