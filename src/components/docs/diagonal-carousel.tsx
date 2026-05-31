"use client";

import { DiagonalCarousel } from "@/components/ui/diagonal-carousel";

const items = [
  { src: "/trail-images/image1.jpg", title: "urban exploration" },
  { src: "/trail-images/image4.jpg", title: "night scene" },
  { src: "/trail-images/image5.jpg", title: "yellow wildflowers" },
  { src: "/trail-images/image8.jpg", title: "street with mount fuji" },
  { src: "/trail-images/image9.jpg", title: "bicycle shop" },
  { src: "/trail-images/image10.jpg", title: "train window view" },
  { src: "/trail-images/image11.jpg", title: "quiet afternoon" },
];

export function DiagonalCarouselDemo() {
  return (
    <>
      <style>{`@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap");`}</style>
      <DiagonalCarousel
        items={items}
        defaultActiveIndex={3}
        slideSize={250}
        className="bg-[#ececec] text-neutral-800 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100"
        style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
      />
    </>
  );
}

export default DiagonalCarouselDemo;
