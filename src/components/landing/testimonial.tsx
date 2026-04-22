import Container from "./container";
import Heading from "./heading";
import SubHeading from "./subheading";
import TestimonialCard from "./ui/testimonial-card";
import TestimonialColumn from "./ui/testimonial-column";

const testimonials = [
    {
        title: "Aniket Pawar",
        company: "@alaymanguy",
        description: "The library is sick indeed, way to go 🤩",
        image: "",
        href: "https://x.com/alaymanguy",
    },
    {
        title: "Akash Parmar",
        company: "@AkashDev001 · CTO MFF & Tradzu",
        description: "This library looks sick bro",
        image: "",
        href: "https://x.com/AkashDev001",
    },
    {
        title: "Saïd Aitmbarek",
        company: "@SaidAitmbarek",
        description: "looks beautifully designed mate. impressive collection of components + visuals",
        image: "",
        href: "https://x.com/SaidAitmbarek",
    },
    {
        title: "Terry Carson",
        company: "@mrterrycarson",
        description: "Congrats on reaching the final stretch. Can't wait to try it out once it goes live.",
        image: "",
        href: "https://x.com/mrterrycarson",
    },
    {
        title: "Karan Singh",
        company: "@heykaran77",
        description: "can't wait to use it!",
        image: "",
        href: "https://x.com/heykaran77",
    },
    {
        title: "Zahid Mushtaq",
        company: "@zahid19_19",
        description: "your designs are really good",
        image: "https://unavatar.io/x/zahid19_19",
        href: "https://x.com/zahid19_19",
    },
    {
        title: "Raz",
        company: "@razlm10",
        description: "VengenceUI is insane af. You should add a premium paywall 🚀",
        image: "",
        href: "https://x.com/razlm10",
    },
    {
        title: "Dev Sharma",
        company: "@devsharmatwt",
        description: "that UI library is awesome",
        image: "",
        href: "https://x.com/devsharmatwt",
    },
    {
        title: "Arpit",
        company: "@Arpit_2023",
        description: "Ok that's impressive",
        image: "",
        href: "https://x.com/Arpit_2023",
    },
];

export type TestimonialsType = typeof testimonials;

export default function Testimonial() {

    return <section className="border-b">
        <Container>
            <div className="md:border-x flex flex-col">
                <div className="flex-1 flex flex-col gap-4 justify-center px-4 md:px-8 py-8 md:py-16 lg:py-24">
                    <Heading variant="big" className="text-center">Testimonials</Heading>
                    <SubHeading variant="big" className="text-center mx-auto w-full max-w-2xl">
                        Trusted by developers building modern, high-quality interfaces.
                    </SubHeading>
                </div>
            </div>
        </Container>

        <div className="border-t w-full">
            <Container>
                <div className="md:border-x flex flex-col">
                    <div className="flex-1 flex flex-col md:flex-row items-stretch gap-4 md:gap-0 md:divide-x max-h-[600px] md:max-h-full lg:h-[800px]">

                    <div className="flex-1 flex flex-col justify-center items-start gap-4 p-4 md:p-8">
                        <Heading as="h2">
                            Loved by frontend developers
                        </Heading>
                        <SubHeading>
                            Loved by developers building modern marketing websites with animated, interactive UI components.
                        </SubHeading>
                    </div>

                    <div className="flex-1 bg-muted dark:bg-muted/60 h-[400px] lg:h-[800px] mt-8 md:mt-0 overflow-hidden relative border-t p-4">
                        <div className="flex justify-center gap-4 h-full w-full md:mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">

                            <TestimonialColumn integrations={testimonials} />

                            <TestimonialColumn
                                integrations={testimonials.slice().reverse()}
                                className="hidden lg:flex"
                                reverse={true}
                            />

                        </div>
                    </div>

                </div>
            </div>
        </Container>
        </div>
    </section>
}
