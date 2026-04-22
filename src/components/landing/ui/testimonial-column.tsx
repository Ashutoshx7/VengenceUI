"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";
import { TestimonialsType } from "../testimonial";
import TestimonialCard from "./testimonial-card";

export default function TestimonialColumn(props: {
  integrations: TestimonialsType;
  className?: string;
  reverse?: boolean;
}) {
  const { integrations, className, reverse } = props;
  return (
    <motion.div
      initial={{
        y:  reverse ? "-50%" : 0,
      }}
      animate={{
        y: reverse ? 0 : "-50%",
      }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
      className={twMerge("flex flex-col gap-4 pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <React.Fragment key={index}>
          {integrations.map((integration, index) => (
            <TestimonialCard
              key={index}
              title={integration.title}
              company={integration.company}
              description={integration.description}
              image={integration.image}
              href={integration.href}
            />
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  );
}