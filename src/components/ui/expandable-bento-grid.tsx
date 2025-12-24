'use client'

import React, { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useOutsideClick } from '@/hooks/use-outside-click'
import { X } from 'lucide-react'

export interface BentoGridProps {
    items: {
        id: string | number
        title: string
        subtitle?: string
        description?: string
        content: React.ReactNode
        icon?: React.ReactNode
        className?: string
    }[]
}

export default function ExpandableBentoGrid({ items }: BentoGridProps) {
    const [active, setActive] = useState<(typeof items)[number] | boolean | null>(null)
    const ref = useRef<HTMLDivElement>(null)
    const id = useId()

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setActive(false)
            }
        }

        if (active && typeof active === 'object') {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [active])

    useOutsideClick(ref, () => setActive(null))

    return (
        <>
            <AnimatePresence>
                {active && typeof active === 'object' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-[10000]"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === 'object' ? (
                    <div className=" fixed inset-0 top-16 grid place-items-center z-[10001] ">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            className="flex absolute top-2 right-2 md:right-10 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <X className="h-4 w-4 dark:text-white text-black" />
                            
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <div className="w-full h-40 md:h-50 lg:h-60 bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center perspective-distant transform-3d">
                                    {active.icon ? (
                                        <div className="scale-[2] text-blue-500">{active.icon}</div>
                                    ) : (
                                        <div className="w-full h-full bg-gray-200" />
                                    )}
                                </div>
                            </motion.div>

                            <div >
                                <div className="flex justify-between p-4  items-center">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-neutral-700 dark:text-neutral-200 md:text-sm "
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.title}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400 text-[14px] text-balance"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href="#"
                                        target="_blank"
                                        className="px-4 py-3 text-sm rounded-2xl font-bold bg-blue-100 dark:bg-blue-900/30 text-white"
                                    >
                                        Visit
                                    </motion.a>
                                </div>


                             
                                  <div className="pt-4  px-4  flex justify-center mx-auto overflow-auto">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-5 flex flex-col items-start gap-4  dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {active.content}
                                    </motion.div>
                                </div>
                              </div>
                          
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="max-w-4xl mx-auto w-full gap-2 lg:gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-start ">
                {items.map((item) => (
                    <motion.div
                        layoutId={`card-${item.title}-${id}`}
                        key={item.id}
                        onClick={() => setActive(item)}
                        className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer bg-blue-50/60 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 transition-colors"
                    >
                        <div className="flex gap-3 flex-row items-center justify-center mx-auto ">
                            <motion.div layoutId={`image-${item.title}-${id}`}>
                                <div className="h-14 w-14 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 p-1">
                                    {item.icon}
                                </div>
                            </motion.div>
                            <div className="">
                                <motion.h3
                                    layoutId={`title-${item.title}-${id}`}
                                    className="font-medium  text-neutral-800 dark:text-neutral-200  text-left"
                                >
                                    {item.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${item.title}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-left  text-xs md:text-[14px]"
                                >
                                    {item.subtitle}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    )
}
