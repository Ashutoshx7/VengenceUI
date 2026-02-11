"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedNumber, AnimatedScore } from "@/components/ui/animated-number";

export function AnimatedNumberDemo() {
    const [num, setNum] = useState(100);

    function minus() {
        setNum(prev => prev - 10);
    }
    function add() {
        setNum(prev => prev + 10);
    }

    return (
        <div className="flex bg-zinc-950 py-2.5 px-5 rounded-full items-center justify-center border border-zinc-800">
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={minus}
                style={{ cursor: "pointer", backgroundColor: "#27272a " }}
                className="bg-zinc-800 text-zinc-400 hover:text-white h-11 w-11 flex justify-center items-center rounded-full transition-colors"
            >
                <Minus className="h-6 w-6" />
            </motion.button>
            <div className="flex relative px-6 text-5xl items-center font-mono text-white">
                <AnimatedNumber value={num} />
            </div>
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={add}
                style={{ cursor: "pointer", backgroundColor: "#27272a " }}
                className="bg-zinc-800 text-zinc-400 hover:text-white h-11 w-11 flex justify-center items-center rounded-full transition-colors"
            >
                <Plus className="h-6 w-6" />
            </motion.button>
        </div>
    );
}

export function AnimatedScoreDemo() {
    const [score, setScore] = useState(100);

    function decrease() {
        setScore(prev => prev - 10);
    }
    function increase() {
        setScore(prev => prev + 10);
    }

    return (
        <div className="flex bg-zinc-950 py-2.5 px-5 rounded-full items-center justify-center border border-zinc-800">
            <motion.button
                whileTap={{ scale: 0.9 }}
                style={{ cursor: "pointer", backgroundColor: "#27272a " }}
                onClick={decrease}
                className="bg-zinc-800 text-zinc-400 hover:text-white h-11 w-11 flex justify-center items-center rounded-full transition-colors"
            >
                <Minus className="h-6 w-6" />
            </motion.button>
            <div className="flex relative px-6 text-5xl items-center font-mono">
                <AnimatedScore value={score} />
            </div>
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={increase}
                style={{ cursor: "pointer", backgroundColor: "#27272a " }}
                className="bg-zinc-800 text-zinc-400 hover:text-white h-11 w-11 flex justify-center items-center rounded-full transition-colors"
            >
                <Plus className="h-6 w-6" />
            </motion.button>
        </div>
    );
}
