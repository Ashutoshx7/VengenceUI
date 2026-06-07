import Link from "next/link";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./subheading";
import { Button } from "./ui/button";
import { CTAArt } from "./cta-art";

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
                        <CTAArt />
                    </div>
                </div>
            </div>
        </Container>
    </section >
}
