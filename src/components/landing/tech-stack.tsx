import NextIcon from "@/assets/icons/nextjs-icon";
import Container from "./container";
import Heading from "./heading";
import { IsometricStack } from "./ui/isometric-stack";
import TailwindIcon from "@/assets/icons/tailwind-icon";
import TypeScriptIcon from "@/assets/icons/typescript-icon";
import MotionIcon from "@/assets/icons/motion-icon";

export default function TechStack() {
    return (
        <section className="border-b">
            <Container>
                <div className="md:border-x">
                    <Heading className="py-4 text-center">Tech Stack</Heading>
                </div>
            </Container>
            
            <div className="border-t w-full">
                <Container>
                    <div className="md:border-x flex flex-col">
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x">

                        <div className="flex justify-center items-center py-6 hover:bg-muted/50 transition-colors duration-300">
                            <IsometricStack
                                className="md:w-20 w-16 h-auto"
                                backFillClass="fill-neutral-200 dark:fill-muted"
                                backStrokeClass="stroke-neutral-400 dark:stroke-neutral-600"
                                frontRectClass="fill-background stroke-neutral-400 dark:stroke-neutral-600"
                                linesClass="stroke-neutral-400 dark:stroke-neutral-600"
                                contentWrapperClass=""
                            >
                                <NextIcon className="w-5 h-5" />
                            </IsometricStack>
                        </div>

                        <div className="flex justify-center items-center py-6 hover:bg-muted/50 transition-colors duration-300">
                            <IsometricStack
                                className="md:w-20 w-16 h-auto"
                                backFillClass="fill-neutral-200 dark:fill-muted"
                                backStrokeClass="stroke-neutral-400 dark:stroke-neutral-600"
                                frontRectClass="fill-background stroke-neutral-400 dark:stroke-neutral-600"
                                linesClass="stroke-neutral-400 dark:stroke-neutral-600"
                                contentWrapperClass=""
                            >
                                <TailwindIcon className="w-5 h-5 text-sky-400" />
                            </IsometricStack>
                        </div>

                        <div className="flex justify-center items-center py-6 hover:bg-muted/50 transition-colors duration-300">
                            <IsometricStack
                                className="md:w-20 w-16 h-auto"
                                backFillClass="fill-neutral-200 dark:fill-muted"
                                backStrokeClass="stroke-neutral-400 dark:stroke-neutral-600"
                                frontRectClass="fill-background stroke-neutral-400 dark:stroke-neutral-600"
                                linesClass="stroke-neutral-400 dark:stroke-neutral-600"
                                contentWrapperClass=""
                            >
                                <TypeScriptIcon className="w-4.5 h-4.5" />
                            </IsometricStack>
                        </div>

                        <div className="flex justify-center items-center py-6 hover:bg-muted/50 transition-colors duration-300">
                            <IsometricStack
                                className="md:w-20 w-16 h-auto"
                                backFillClass="fill-neutral-200 dark:fill-muted"
                                backStrokeClass="stroke-neutral-400 dark:stroke-neutral-600"
                                frontRectClass="fill-background stroke-neutral-400 dark:stroke-neutral-600"
                                linesClass="stroke-neutral-400 dark:stroke-neutral-600"
                                contentWrapperClass=""
                            >
                                <MotionIcon className="w-4.5 h-4.5" />
                            </IsometricStack>
                        </div>

                    </div>
                </div>
            </Container>
            </div>
        </section>
    )
}