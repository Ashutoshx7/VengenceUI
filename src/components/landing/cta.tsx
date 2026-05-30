"use client"

import Link from "next/link";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./subheading";
import { Button } from "./ui/button";
import { CTALogo } from "./ui/cta-logo";
import { CTABox } from "./ui/cta-box";

export default function CTA() {
    return <section>
        <Container>
            <div className="md:border-x flex flex-col p-4 md:p-8">
                <div className="flex gap-4 bg-muted dark:bg-muted/60 justify-center px-4 md:px-8 py-8 md:py-16 lg:py-24 border">
                    <div className="flex-3 flex flex-col gap-6">
                        <Heading variant="big" className="max-w-3xl">Ready to build something unique?</Heading>
                        <SubHeading variant="big" className="max-w-2xl">
                            Start using Vengeance UI today to create modern, animated, and interactive websites that stand out.
                        </SubHeading>
                        <div className="flex mt-2">
                            <Button
                                asChild
                                variant={"default"}
                                size="lg"
                                className="rounded-md w-fit font-medium text-base">
                                <Link href="/docs">
                                    Explore blocks
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="flex-2 relative min-h-[300px] hidden lg:flex items-center justify-center">
                        <div className="relative w-full h-full">

                            {/* Bottom Base Layer */}
                            <div
                                className="absolute top-1/2 left-1/2 opacity-20 dark:opacity-10"
                                style={{
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                                <CTABox size={320} className="text-primary/20" bgClassName="fill-primary/5" />
                            </div>

                            {/* Middle Layer: Floating Box */}
                            <div
                                className="absolute top-[40%] left-1/2 z-20 cta-float-box"
                                style={{
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                                <CTABox
                                    size={260}
                                    className="text-primary"
                                    bgClassName="fill-white dark:fill-neutral-900"
                                />
                            </div>

                            {/* Top Layer: The "Core" Logo */}
                            <div
                                className="absolute top-[30%] left-[50%] z-30 cta-float-logo"
                                style={{
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                                    <CTALogo
                                        size={100}
                                        className="text-primary rotate-180"
                                        fillClassName="text-zinc-500"
                                    />
                            </div>

                            {/* Abstract Decorative Blobs */}
                            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10"
                                style={{ transform: 'translate(-50%, -50%)' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section >
}