"use client";

import { ImageCollage } from "@/components/ui/image-collage";

const IMAGES = [
  { src: 'https://i.imgur.com/204kqgz.jpeg', x: 10, y: -15, rotate: 15 },
  { src: 'https://i.imgur.com/nBksCod.jpeg', x: 0, y: 10, rotate: -20 },
  { src: 'https://i.imgur.com/JDLYJFm.jpeg', x: -10, y: -30, rotate: 10 },
  { src: 'https://i.imgur.com/7c4BovS.jpeg', x: 10, y: -10, rotate: -15 },
  { src: 'https://i.imgur.com/38W5F3l.jpeg', x: 5, y: 10, rotate: 5 },
  { src: 'https://i.imgur.com/ndwsoNf.jpeg', x: 10, y: -20, rotate: -10 },
  { src: 'https://i.imgur.com/HRiPI1C.jpeg', x: 20, y: 40, rotate: 10 },
  { src: 'https://i.imgur.com/Aznco02.jpeg', x: 0, y: -20, rotate: -20 },
];

export function ImageCollageDemo() {
  return (
    <div className="w-full flex items-center justify-center overflow-hidden py-10">
      <ImageCollage images={IMAGES} />
    </div>
  );
}
