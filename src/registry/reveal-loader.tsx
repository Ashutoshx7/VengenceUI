"use client";

import { motion } from "framer-motion";

export default function RevealLoader() {
  return (
    <div className="relative w-64 h-24 flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black">
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        className="absolute left-0 top-0 h-full bg-white/10"
      />
      <motion.p 
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="z-10 font-mono text-sm tracking-widest text-zinc-300"
      >
        LOADING...
      </motion.p>
    </div>
  );
}
