"use client";
import { twMerge } from "tailwind-merge";
import React from "react";
import { TestimonialsType } from "../testimonial";
import TestimonialCard from "./testimonial-card";

export default function TestimonialColumn(props: {
  integrations: TestimonialsType;
  className?: string;
  reverse?: boolean;
}) {
  const { integrations, className, reverse } = props;

  // Use pure CSS animation (defined in globals.css) instead of framer-motion.
  // CSS animations run on the compositor thread and don't block the main thread.
  return (
    <div
      className={twMerge("flex flex-col gap-4 pb-4", className)}
      style={{
        animation: `testimonial-scroll 20s linear infinite`,
        animationDirection: reverse ? "reverse" : "normal",
        willChange: "transform",
      }}
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <React.Fragment key={index}>
          {integrations.map((integration, i) => (
            <TestimonialCard
              key={`${index}-${i}`}
              title={integration.title}
              company={integration.company}
              description={integration.description}
              image={integration.image}
              href={integration.href}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}