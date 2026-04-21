"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform } from "framer-motion";

const COMPONENTS = [
  { name: "My Animated Button", href: "/components/my-animated-button" },
  { name: "Reveal Loader", href: "/components/reveal-loader" },
  { name: "Bento Grid", href: "/components/bento-grid" },
  { name: "Dummy Component 1", href: "/components/dummy-component-1" },
  { name: "Dummy Component 2", href: "/components/dummy-component-2" },
  { name: "Dummy Component 3", href: "/components/dummy-component-3" },
  { name: "Dummy Component 4", href: "/components/dummy-component-4" },
  { name: "Dummy Component 5", href: "/components/dummy-component-5" },
  { name: "Dummy Component 6", href: "/components/dummy-component-6" },
  { name: "Dummy Component 7", href: "/components/dummy-component-7" },
  { name: "Dummy Component 8", href: "/components/dummy-component-8" },
  { name: "Dummy Component 9", href: "/components/dummy-component-9" },
  { name: "Dummy Component 10", href: "/components/dummy-component-10" },
  { name: "Dummy Component 11", href: "/components/dummy-component-11" },
  { name: "Dummy Component 12", href: "/components/dummy-component-12" },
  { name: "Dummy Component 13", href: "/components/dummy-component-13" },
  { name: "Dummy Component 14", href: "/components/dummy-component-14" },
  { name: "Dummy Component 15", href: "/components/dummy-component-15" },
  { name: "Dummy Component 16", href: "/components/dummy-component-16" },
  { name: "Dummy Component 17", href: "/components/dummy-component-17" },
  { name: "Dummy Component 18", href: "/components/dummy-component-18" },
  { name: "Dummy Component 19", href: "/components/dummy-component-19" },
  { name: "Dummy Component 20", href: "/components/dummy-component-20" },
];

function SidebarItem({ item }: { item: { name: string; href: string } }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="relative cursor-pointer"
    >
      <motion.div
        className="absolute inset-0 rounded-md bg-white/10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.012, ease: "linear" }}
        style={{
          x: useTransform(mouseX, [-100, 100], [3, -3]),
          y: useTransform(mouseY, [-100, 100], [2, -2]),
        }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 h-2.5 w-2.5 rounded-sm border border-white/35 bg-white/20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.016, ease: "linear" }}
        style={{
          x: useTransform(mouseX, (v) => v - 5),
          y: useTransform(mouseY, (v) => v - 5),
        }}
      />
      <Link
        href={item.href}
        className={cn(
          "relative z-10 flex w-full items-center rounded-md border border-transparent px-2 py-1.5 transition-none",
          isActive
            ? "font-medium text-white bg-white/10"
            : "text-zinc-400 hover:bg-white/10 hover:text-white"
        )}
      >
        {item.name}
      </Link>
    </motion.div>
  );
}

export function Sidebar() {
  return (
    <div className="w-full">
      <div className="pb-4">
        <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold text-white">
          Components
        </h4>
        <div className="grid grid-flow-row auto-rows-max gap-y-0.5 text-sm">
          {COMPONENTS.map((item) => (
            <SidebarItem key={item.href} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
