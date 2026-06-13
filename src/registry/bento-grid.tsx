"use client";

import { motion } from "framer-motion";

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="col-span-2 row-span-2 bg-zinc-900 border border-white/10 rounded-2xl p-6 h-48 flex flex-col justify-end"
      >
        <h3 className="text-xl font-semibold mb-2 text-white">Main Feature</h3>
        <p className="text-zinc-500 text-sm">The centerpiece of your design layout.</p>
      </motion.div>
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-zinc-900 border border-white/10 rounded-2xl p-6 h-24 flex items-center justify-center"
      >
        <div className="w-8 h-8 rounded-full bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
      </motion.div>
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-zinc-900 border border-white/10 rounded-2xl p-6 h-24 flex items-center justify-center"
      >
        <div className="w-8 h-8 rounded-full bg-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
      </motion.div>
    </div>
  );
}
