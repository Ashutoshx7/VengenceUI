'use client'
import TestimonialsCard2 from "@/components/ui/testinomial-card2";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { useEffect, useRef } from "react";


const demoItems = [
    {
        title: "Aniket Pawar",
        company: "@alaymanguy",
        description: "The library is sick indeed, way to go 🤩",
        image: "https://unavatar.io/x/alaymanguy",
        href: "https://x.com/alaymanguy",
    },
    {
        title: "Akash Parmar",
        company: "@AkashDev001 · CTO MFF & Tradzu",
        description: "This library looks sick bro",
        image: "https://unavatar.io/x/AkashDev001",
        href: "https://x.com/AkashDev001",
    },
    {
        title: "Saïd Aitmbarek",
        company: "@SaidAitmbarek",
        description: "looks beautifully designed mate. impressive collection of components + visuals",
        image: "https://unavatar.io/x/SaidAitmbarek",
        href: "https://x.com/SaidAitmbarek",
    },
    {
        title: "Terry Carson",
        company: "@mrterrycarson",
        description: "Congrats on reaching the final stretch. Can't wait to try it out once it goes live.",
        image: "https://unavatar.io/x/mrterrycarson",
        href: "https://x.com/mrterrycarson",
    },
    {
        title: "Karan Singh",
        company: "@heykaran77",
        description: "can't wait to use it!",
        image: "https://unavatar.io/x/heykaran77",
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
        image: "https://unavatar.io/x/razlm10",
        href: "https://x.com/razlm10",
    },
    {
        title: "Dev Sharma",
        company: "@devsharmatwt",
        description: "that UI library is awesome",
        image: "https://unavatar.io/x/devsharmatwt",
        href: "https://x.com/devsharmatwt",
    },
    {
        title: "Arpit",
        company: "@Arpit_2023",
        description: "Ok that's impressive",
        image: "https://unavatar.io/x/Arpit_2023",
        href: "https://x.com/Arpit_2023",
    },
];

export const TestimonialSection = () => {
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    const base_speed = 35;
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });

    const direction = useTransform(smoothVelocity, v => {
        if (v > 0) return -1;
        if (v < 0) return 1;
        return -1;
    });

    const lastY = useRef(0);
    useEffect(() => {
        return scrollY.on('change', (y) => {
            const diff = y - lastY.current;
            if (diff > 0) direction.set(-1);
            else if (diff < 0) direction.set(1);
            lastY.current = y;
        });
    }, [scrollY, direction]);

    const x1 = useMotionValue(0);
    const x2 = useMotionValue(-200);
    const x3 = useMotionValue(0);

    useAnimationFrame((_t, delta) => {
        const autoMove = direction.get() * base_speed * (delta / 1000);
        const movedBy = direction.get() * (delta / 30);

        x1.set(x1.get() + movedBy + autoMove);
        x2.set(x2.get() - movedBy - autoMove);
        x3.set(x3.get() + movedBy * 0.6 + autoMove);
    });

    return (
        <section className="py-20 overflow-hidden">
            <div className="text-center mb-12 px-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">Testimonials</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by developers</h2>
                <p className="text-muted-foreground text-base max-w-md mx-auto">
                    Trusted by teams shipping fast and building beautiful products.
                </p>
            </div>

            <div className="relative flex flex-col gap-4">
                {/* Left/right fade masks */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />

                <motion.div style={{ x: x1 }} className="flex flex-row gap-4 will-change-transform">
                    <TestimonialsCard2 items={demoItems} />
                    <TestimonialsCard2 items={demoItems} />
                </motion.div>

                <motion.div style={{ x: x2 }} className="flex flex-row gap-4 will-change-transform">
                    <TestimonialsCard2 items={demoItems} />
                    <TestimonialsCard2 items={demoItems} />
                </motion.div>

                <motion.div style={{ x: x3 }} className="flex flex-row gap-4 will-change-transform">
                    <TestimonialsCard2 items={demoItems} />
                    <TestimonialsCard2 items={demoItems} />
                </motion.div>
            </div>
        </section>
    );
};
