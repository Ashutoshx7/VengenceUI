"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export const TabsContext = React.createContext<{
  activeTab: string;
  setActiveTab: (v: string) => void;
}>({ activeTab: "", setActiveTab: () => {} });

export function Tabs({ children, defaultValue, className }: { children: React.ReactNode; defaultValue: string; className?: string }) {
  const [activeTab, setActiveTab] = React.useState(defaultValue);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center space-x-4 border-b border-white/10 mb-4", className)}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children }: { value: string; children: React.ReactNode }) {
  const { activeTab, setActiveTab } = React.useContext(TabsContext);

  const mouseX = useMotionValue(0);

  return (
    <div className="relative">
      <motion.div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - rect.left - rect.width / 2);
        }}
        onMouseLeave={() => mouseX.set(0)}
        className="absolute inset-0 z-0 rounded-md"
        whileHover={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        style={{
          x: useTransform(mouseX, [-100, 100], [4, -4]),
        }}
      >
        <div className="absolute inset-0 bg-white/10" />
      </motion.div>
      <button
        onClick={() => setActiveTab(value)}
        className="relative z-10 pb-3 text-sm font-medium border-b-2 -mb-[1px] border-white text-white cursor-pointer"
      >
        {children}
      </button>
    </div>
  );
}

export function TabsContent({ value, children }: { value: string; children: React.ReactNode }) {
  const { activeTab } = React.useContext(TabsContext);
  const isActive = activeTab === value;
  
  return (
    <div 
      className={cn(
        "mt-4 outline-none",
        isActive ? "block" : "hidden"
      )}
    >
      {children}
    </div>
  );
}
