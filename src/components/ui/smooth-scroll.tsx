'use client'
import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'

export interface SmoothScrollProps {
    children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Remove loading class
        document.body.classList.remove('loading');

        return () => {
            lenis.destroy()
        }
    }, [])

    return <>{children}</>
}

export default SmoothScroll
