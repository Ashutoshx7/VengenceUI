"use client";

import dynamic from "next/dynamic";

// Dynamically import to keep the pointer-driven DOM animation client-side.
const PixelatedImageTrail = dynamic(
    () => import("@/components/ui/pixelated-image-trail").then(mod => mod.PixelatedImageTrail),
    { ssr: false }
);

/**
 * Default demo showcasing the pixelated image trail effect
 * Uses locally cached images for instant loading and buttery-smooth performance
 */
export function PixelatedImageTrailDemo() {
    return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-black">
            <PixelatedImageTrail
                images={[
                    "/trail-images/image1.jpg",
                    "/trail-images/image4.jpg",
                    "/trail-images/image5.jpg",
                ]}
                slices={5}
                smoothing={0.32}
                spawnThreshold={32}
                imageSize={220}
                config={{
                    imageLifespan: 1500,
                    inDuration: 280,
                    outDuration: 620,
                    staggerIn: 12,
                    staggerOut: 9,
                    slideDuration: 1300,
                }}
            />
            <div className="pointer-events-none z-10 text-center">
                <h2 className="mb-2 text-4xl font-bold text-white">Pixel Trail</h2>
                <p className="text-zinc-400">Smooth sliced cursor trail</p>
            </div>
        </div>
    );
}

/**
 * Demo with custom timing configuration
 */
export function PixelatedImageTrailFastDemo() {
    return (
        <div className="relative w-full h-full bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 rounded-xl overflow-hidden flex items-center justify-center">
            <PixelatedImageTrail
                images={[
                    "/trail-images/image8.jpg",
                    "/trail-images/image9.jpg",
                    "/trail-images/image10.jpg",
                ]}
                config={{
                    imageLifespan: 820,
                    inDuration: 160,
                    outDuration: 320,
                    staggerIn: 7,
                    staggerOut: 5,
                    slideDuration: 760,
                }}
                spawnThreshold={26}
                smoothing={0.38}
                imageSize={205}
            />
            <div className="text-center z-10 pointer-events-none">
                <h2 className="text-4xl font-bold text-white mb-2">Fast Mode</h2>
                <p className="text-purple-300">Rapid trail with quick transitions</p>
            </div>
        </div>
    );
}

/**
 * Demo with more slices for finer pixelation
 */
export function PixelatedImageTrailFineDemo() {
    return (
        <div className="relative w-full h-full bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 rounded-xl overflow-hidden flex items-center justify-center">
            <PixelatedImageTrail
                images={[
                    "/trail-images/image11.jpg",
                    "/trail-images/image12.jpg",
                    "/trail-images/image1.jpg",
                ]}
                slices={20}
                smoothing={0.3}
                spawnThreshold={34}
                imageSize={210}
                config={{
                    imageLifespan: 1100,
                    staggerIn: 7,
                    staggerOut: 5,
                    inDuration: 200,
                    outDuration: 420,
                }}
            />
            <div className="text-center z-10 pointer-events-none">
                <h2 className="text-4xl font-bold text-white mb-2">Fine Slices</h2>
                <p className="text-emerald-300">20 slices for smoother transitions</p>
            </div>
        </div>
    );
}

/**
 * Demo with coarse slices for dramatic pixelation
 */
export function PixelatedImageTrailCoarseDemo() {
    return (
        <div className="relative w-full h-full bg-gradient-to-br from-orange-900 via-red-800 to-rose-900 rounded-xl overflow-hidden flex items-center justify-center">
            <PixelatedImageTrail
                images={[
                    "/trail-images/image2.jpg",
                    "/trail-images/image3.jpg",
                    "/trail-images/image4.jpg",
                ]}
                slices={5}
                smoothing={0.3}
                spawnThreshold={36}
                imageSize={240}
                config={{
                    imageLifespan: 1250,
                    staggerIn: 12,
                    staggerOut: 8,
                    inDuration: 240,
                    outDuration: 480,
                }}
            />
            <div className="text-center z-10 pointer-events-none">
                <h2 className="text-4xl font-bold text-white mb-2">Coarse Slices</h2>
                <p className="text-orange-300">5 slices for dramatic effect</p>
            </div>
        </div>
    );
}

export default PixelatedImageTrailDemo;
