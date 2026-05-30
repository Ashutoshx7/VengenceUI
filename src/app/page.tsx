"use client";

import React from 'react'
import dynamic from 'next/dynamic'
import Hero from '@/components/landing/hero';
import { LazySection } from '@/components/landing/lazy-section';

// Below-the-fold sections loaded lazily for faster initial paint
const TechStack = dynamic(() => import('@/components/landing/tech-stack'), { ssr: false })
const ComponentsGrid = dynamic(() => import('@/components/landing/components-gird'), { ssr: false })
const Features = dynamic(() => import('@/components/landing/features'), { ssr: false })
const Testimonial = dynamic(() => import('@/components/landing/testimonial'), { ssr: false })
const CTA = dynamic(() => import('@/components/landing/cta'), { ssr: false })
const Footer = dynamic(() => import('@/components/landing/footer'), { ssr: false })

const SmoothScroll = dynamic(() => import('@/components/landing/smooth-scroll'), { ssr: false })

export default function Home(): React.ReactNode {
    return (
        <SmoothScroll>
            <main>
                <Hero />
                <TechStack />
                {/* Wrap animation-heavy sections so their CSS animations
                    are paused when scrolled out of view (saves CPU) */}
                <LazySection>
                    <ComponentsGrid />
                </LazySection>
                <LazySection>
                    <Features />
                </LazySection>
                <LazySection>
                    <Testimonial />
                </LazySection>
                <LazySection>
                    <CTA />
                </LazySection>
                <Footer />
            </main>
        </SmoothScroll>
    )
}
