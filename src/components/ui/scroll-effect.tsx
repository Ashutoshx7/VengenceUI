"use client";
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'


type ImageProps = {

        start: string[];
        middle: string[];
        featured: string
}

interface ScrollEffectProps{
    images: ImageProps;
    className?: string
}

 export function ScrollEffect  ({ images , className }: ScrollEffectProps)  {



    const sectionRef = useRef<HTMLDivElement>(null);


    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start']
    })



    const k = useTransform(scrollYProgress, [0, 1], [0, 1])

    const {start , middle , featured}= images




    return (

        <section ref={sectionRef}
            className={cn('relative h-[400dvh]' , className)}
        >

            <motion.main className='clip-root' style={{
                ['--k' as any]: k
            }}>

                {start.map((src, i) => (

                    <img key={`start-${i}`}
                        src={src}
                        className={cn('clip-img end')}
                        style={{
                            ['--i' as any]: i,
                            ['--j' as any]: 0
                        }}
                        alt={`start-image${i}`}
                    />
                ))
                }

              


                {/* featured image */}
                <img src={featured}
                    className='clip-img feat'
                    alt='featured-image'
                />

                {/* middle images */}


                {
                    middle.map((src, i) =>

                    (
                        <img key={`mid-${i}`}
                            src={src}
                            className={cn('clip-img mid' , 
                               
                            )}
                            style={{
                                ['--i' as any]: i + start.length,
                                ['--j' as any]: 1
                            }}
                            alt={`middle-image${i}`}

                        />
                    ))
                }
            </motion.main>

        </section>

    );
};



