'use client'

import { useEffect, useRef, type ReactNode } from 'react'

/**
 * Pauses CSS animations inside children when this wrapper scrolls
 * out of the viewport. Uses IntersectionObserver which is nearly
 * free on the main thread. Animations resume when back in view.
 */
export function LazySection({ children, className }: { children: ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                // When out of viewport, pause all descendant animations
                if (entry.isIntersecting) {
                    el.style.animationPlayState = ''
                    el.classList.remove('paused-section')
                } else {
                    el.style.animationPlayState = 'paused'
                    el.classList.add('paused-section')
                }
            },
            {
                // Start pausing when section is 200px away from viewport
                rootMargin: '200px 0px',
                threshold: 0,
            }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    )
}

export default LazySection
