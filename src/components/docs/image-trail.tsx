"use client";

import { ImageTrail } from "@/components/ui/image-trail";

export function ImageTrailDemo() {
  return (
    <>
      <style>{`@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap");`}</style>
      <ImageTrail
        threshold={74}
        minDelay={45}
        duration={1100}
        maxItems={9}
        rotationRange={34}
        imageClassName="w-32 rounded-md md:w-40"
        className="flex h-full w-full items-center justify-center bg-[#ececec] px-6 text-neutral-950 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-50"
        style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
      >
        <h2 className="pointer-events-none text-center text-4xl font-bold md:text-6xl">
          Image trail effect
        </h2>
      </ImageTrail>
    </>
  );
}

export default ImageTrailDemo;
