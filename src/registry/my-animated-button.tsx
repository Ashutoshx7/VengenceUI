"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function MyAnimatedButton({ className }: { className?: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "px-6 py-3 rounded-full bg-white text-black font-semibold tracking-tight shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]",
        className
      )}
    >
      Initialize Vengeance
    </motion.button>
  );
}
