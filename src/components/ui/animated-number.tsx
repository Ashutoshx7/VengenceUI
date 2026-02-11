"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

function AnimatedNumber({ value, className }: { value: number, className?: string }) {
    return (
        <div className={cn("flex items-center", className)}>
            <div className="flex relative items-center">
                {value.toString().split("").map((digit, index) => (
                    <SingleNumberHolder key={index} value={digit} index={index} />
                ))}
            </div>
        </div>
    )
}

function SingleNumberHolder({ value, index }: { value: string, index: number }) {
    const [height, setHeight] = useState<string | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    let notANumber = false

    useEffect(() => {
        if (containerRef.current) {
            setHeight(getComputedStyle(containerRef.current).height)
        }
    }, [])

    if (index === 0) {
        notANumber = isNaN(Number.parseInt(value))
    }

    const vars = {
        init: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    }

    return (
        <div
            className="relative"
            style={{ height: height || "auto", overflowY: "hidden", overflowX: "clip" }}
            ref={containerRef}
        >
            {notANumber && (
                <motion.span
                    initial="init"
                    animate="animate"
                    exit="exit"
                    variants={vars}
                    key={value}
                    layout="size"
                >
                    {value}
                </motion.span>
            )}
            {!notANumber && <RenderStrip value={value} eleHeight={height} />}
        </div>
    )
}

const zeroToNine = Array.from({ length: 10 }, (_, k) => k)

function RenderStrip({ eleHeight, value }: { eleHeight: string | null, value: string }) {
    const heightInNumber = Number.parseInt(eleHeight?.replace("px", "") || "48")
    const negative = heightInNumber * -1
    const pos = heightInNumber
    const prev = useRef(value)

    // Convert string values to numbers for comparison
    const currentVal = parseInt(value)
    const prevVal = parseInt(prev.current)

    // Calculate direction based on value change
    const diff = prevVal - currentVal
    const dir = currentVal > prevVal ? pos * diff * -1 : negative * diff

    // Update ref after calculation
    useEffect(() => {
        prev.current = value
    }, [value])

    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key={value}
                initial={{ y: dir }}
                animate={{ y: 0 }}
                exit={{ y: 0, transition: { duration: 0.1 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className='flex relative flex-col'
            >
                {/* Numbers smaller than current */}
                <motion.span
                    layout
                    key={`negative-${value}`}
                    className={cn('flex flex-col items-center absolute bottom-full left-0')}
                >
                    {zeroToNine.filter(val => val < currentVal).map((val, idx) => (
                        <span key={`${val}_${idx}`}>{val}</span>
                    ))}
                </motion.span>

                {/* Current Number */}
                <span key={`current-${value}`}>{value}</span>

                {/* Numbers larger than current */}
                <motion.span
                    layout
                    key={`positive-${value}`}
                    className={cn('flex flex-col items-center absolute top-full left-0')}
                >
                    {zeroToNine.filter(val => val > currentVal).map((val, idx) => (
                        <span key={`${val}_${idx}`}>{val}</span>
                    ))}
                </motion.span>
            </motion.div>
        </AnimatePresence>
    )
}

// Score-style animated number with color feedback
function AnimatedScore({ value, duration = 0.2, className }: { value: number, duration?: number, className?: string }) {
    const prevValueRef = useRef(value)

    useEffect(() => {
        prevValueRef.current = value
    }, [value])

    const colors = {
        negative: "#37ff1a",
        positive: "#ff1a4b",
        neutral: "#fff"
    }

    const transforVal = 80
    const forwards = {
        init: { y: transforVal * -1, opacity: 0, scale: 0.5, color: colors.negative },
        animate: {
            y: 0,
            opacity: 1,
            scale: [1.7, 1],
            color: [colors.negative, colors.negative, colors.neutral],
            transition: { duration: 0.4, times: [0, 0.7, 1], color: { times: [0, 0.75, 0.9] } },
        },
        exit: {
            y: transforVal,
            opacity: 0,
            scale: 0.5,
            color: colors.positive
        },
    }

    const backwards = {
        init: { y: transforVal, opacity: 0, scale: 0.5, color: colors.positive },
        animate: {
            y: 0,
            opacity: 1,
            scale: [1.7, 1],
            color: [colors.positive, colors.positive, colors.neutral],
            transition: { duration: 0.4, times: [0, 0.7, 1], color: { times: [0, 0.75, 0.9] } },
        },
        exit: {
            y: transforVal * -1,
            opacity: 0,
            scale: 0.5,
            color: colors.negative
        }
    }

    const variants = value >= prevValueRef.current ? forwards : backwards
    const direction = value >= prevValueRef.current ? "forwards" : "backwards"

    return (
        <div className={cn("relative flex justify-center items-center py-1 px-2 w-full rounded-md", className)}>
            <motion.div layout="size" className='w-fit flex justify-center items-center'>
                {value.toString().split("").map((number, index) => (
                    <ScoreContainer
                        direction={direction}
                        duration={duration}
                        variants={variants}
                        number={number}
                        key={index}
                    />
                ))}
            </motion.div>
        </div>
    )
}

function ScoreContainer({ number, variants, duration = 0.7, direction }: {
    number: string,
    variants: any,
    duration?: number,
    direction: string
}) {
    const cached = React.useMemo(() => (
        <div className='relative'>
            <AnimatePresence mode='popLayout'>
                <motion.div
                    animate="animate"
                    className='flex justify-center items-center'
                    initial="init"
                    exit="exit"
                    variants={variants}
                    key={number.toString()}
                    layout="size"
                    transition={{ duration, ease: "backInOut" }}
                >
                    {number}
                </motion.div>
            </AnimatePresence>
        </div>
    ), [number, direction, variants, duration])

    return <React.Fragment>{cached}</React.Fragment>
}

export { AnimatedNumber, AnimatedScore }
