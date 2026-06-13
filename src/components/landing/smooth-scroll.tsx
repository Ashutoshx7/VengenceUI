'use client'
import { ReactNode, useEffect, useRef } from 'react'
import Lenis from 'lenis'

export interface SmoothScrollProps {
    children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
    const lenisRef = useRef<Lenis | null>(null)
    const rafRef = useRef<number>(0)

    useEffect(() => {
        const lenis = new Lenis({
            // Snappy, near-native feel — minimal interpolation overhead
            duration: 0.6,
            easing: (t) => 1 - Math.pow(1 - t, 2),  // quadratic-out, very fast settle
            smoothWheel: true,
            wheelMultiplier: 1.2,
            touchMultiplier: 2,
            infinite: false,
            autoResize: true,
            syncTouch: false,          // don't intercept touch — native is faster
        })
        lenisRef.current = lenis

        function raf(time: number) {
            lenis.raf(time)
            rafRef.current = requestAnimationFrame(raf)
        }

        rafRef.current = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(rafRef.current)
            lenis.destroy()
            lenisRef.current = null
        }
    }, [])

    return <>{children}</>
}

export default SmoothScroll
