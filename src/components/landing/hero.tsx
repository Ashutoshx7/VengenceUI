'use client'

import Link from "next/link";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./subheading";
import { Button } from "./ui/button";
import { BorderBeam } from "./ui/border-beam";
import IsometricGrid from "./ui/isometric-grid";
import IsometricHeroBox from "./ui/isometric-hero-box";
import IsometricFrame from "./ui/isometric-frame";

export default function Hero() {
    return <section id="hero" className="relative isolate">
        <Container>
            <div className="flex md:divide-x md:border-x border-b flex-col pb-8 md:pb-0 md:flex-row overflow-hidden">
                <div className="flex flex-col gap-6 min-h-[55vh] md:min-h-[70vh] flex-1 px-4 md:px-8 pt-12 md:py-24">

                    <div className="w-fit relative rounded-md"
                    >
                        <VercelOSSProgramBadge />
                        <BorderBeam
                            size={40}
                            duration={3}
                            delay={0}
                            borderWidth={1.5}
                            colorFrom="rgba(255, 255, 255, 0.8)"
                            colorTo="transparent"
                            className="block dark:opacity-50 opacity-20"
                        />
                    </div>

                    <Heading variant="big" as="h1" className="text-start">
                        Next-Gen UI
                        <span className="dark:bg-linear-to-r dark:from-zinc-500 dark:via-zinc-300 dark:to-zinc-500 bg-linear-to-r from-zinc-700 via-zinc-900 to-zinc-700 bg-clip-text text-transparent"> Interactions</span>
                    </Heading>
                    <SubHeading variant="big" as="h2" className="">
                        Hover effects, animated tooltips, and scroll-driven layouts
                        designed for modern marketing websites.
                    </SubHeading>

                    <div className="flex items-center gap-4 mt-4">
                        <Button
                            asChild
                            variant={"default"}
                            size="lg"
                            className="rounded-md w-fit font-medium text-base">
                            <Link href="/docs">
                                Explore blocks
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant={"outline"}
                            size="lg"
                            className="rounded-md w-fit font-medium text-base shadow">
                            <Link href="https://github.com/Ashutoshx7/vengeance-ui-v2">
                                View github
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center min-h-[75vh] md:min-h-full relative flex-1 px-4 md:px-8 pb-4 md:py-8 bg-muted dark:bg-muted/60 overflow-hidden" style={{ contain: 'content', transform: 'translateZ(0)' }}>
                    <div className="absolute inset-0 border m-4 border-neutral-400 dark:border-neutral-600" />
                    <div className="flex flex-col items-center justify-center h-full max-w-[90%] lg:max-w-[70%] w-full relative">
                        <IsometricHeroBox
                            bgClassName="text-neutral-400 dark:text-neutral-900"
                            strokeClassName="text-background stroke-foreground"
                            strokeClassName2="text-background stroke-foreground"
                            primaryClassName="text-zinc-600 dark:text-zinc-400"
                            size={400}
                            className="mb-0 sm:mb-8 md:mb-0"
                        />

                        <IsometricFrame
                            boxClassName="text-background"
                            strokeClassName="text-foreground"
                            circleClassName="text-background"
                            gradientClassName="text-zinc-400 dark:text-zinc-600"
                            className="pointer-events-none absolute md:bottom-5 -bottom-20 sm:-bottom-15 scale-[1.05] z-10"
                        />

                        <IsometricGrid className="z-0 scale-[2.5] mask-radial-from-0% opacity-50" />


                    </div>
                </div>
            </div>
        </Container>
    </section>
}

export const VercelOSSProgramBadge = () => {
    return (
        <a className="flex h-8 items-center gap-2 rounded-md bg-muted dark:bg-muted/60 border px-4 text-sm font-medium" target="_blank" rel="noopener"><span className="text-muted-foreground">Backed by</span><span>▲ Vercel OSS Program</span></a>
    )
}
