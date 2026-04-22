"use client";

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Hero from '@/components/landing/hero';
import ComponentsGrid from '@/components/landing/components-gird';
import TechStack from '@/components/landing/tech-stack';
import Features from '@/components/landing/features';
import Testimonial from '@/components/landing/testimonial';
import CTA from '@/components/landing/cta';
import Footer from '@/components/landing/footer';

const LandingPageGrid = dynamic(() => import('@/components/landing/landing-page-grid'), { ssr: false })
const SmoothScroll = dynamic(() => import('@/components/landing/smooth-scroll'), { ssr: false })

export default function Home(): React.ReactNode {
    return (
        <SmoothScroll>
            {/* <div className="flex flex-col min-h-screen">
                <section className="overflow-hidden">
                    <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
                        <div className="max-w-md">
                            <h1 className="text-foreground text-balance text-4xl font-semibold leading-10 tracking-tight">
                                Build modern marketing websites with Vengeance UI blocks
                            </h1>
                            <Button
                                asChild
                                className="mt-5 rounded-full">
                                <Link href="/hero-section">
                                    Explore blocks <span className="border-l-primary-foreground/50 ml-0.5 block size-0 border-y-4 border-l-4 border-y-transparent" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <LandingPageGrid
                    centerText="Components"
                    className="mt-60 md:mt-96"
                />
            </div> */}

            <main>
                <Hero />
                <TechStack />
                <ComponentsGrid />
                <Features />
                <Testimonial />
                <CTA />
                <Footer />
            </main>
        </SmoothScroll>
    )
}

