"use client";

import { motion } from "framer-motion";

export default function DummyComponent8() {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="p-8 rounded-xl bg-zinc-900 border border-white/10 text-white font-mono flex items-center justify-center shadow-2xl">
      Dummy Component 8 Live Preview
    </motion.div>
  );
}