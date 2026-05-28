"use client";

import { ImageScatter } from "@/components/ui/image-scatter";

export function ImageScatterDemo() {

  const mockData = [
    {
      heading: "Order is temporary while you're passing through",
      images: [
        "https://picsum.photos/seed/1/400/500",
        "https://picsum.photos/seed/2/400/500",
        "https://picsum.photos/seed/3/400/500",
        "https://picsum.photos/seed/4/400/500",
        "https://picsum.photos/seed/5/400/500",
        "https://picsum.photos/seed/6/400/500",
        "https://picsum.photos/seed/7/400/500",
        "https://picsum.photos/seed/8/400/500",
      ],
    },
    {
      heading: "Memories shuffle like cards in an endless deck",
      images: [
        "https://picsum.photos/seed/9/400/500",
        "https://picsum.photos/seed/10/400/500",
        "https://picsum.photos/seed/11/400/500",
        "https://picsum.photos/seed/12/400/500",
        "https://picsum.photos/seed/13/400/500",
        "https://picsum.photos/seed/14/400/500",
        "https://picsum.photos/seed/15/400/500",
        "https://picsum.photos/seed/16/400/500",
      ],
    },
    {
      heading: "Each moment scatters as another takes its place",
      images: [
        "https://picsum.photos/seed/17/400/500",
        "https://picsum.photos/seed/18/400/500",
        "https://picsum.photos/seed/19/400/500",
        "https://picsum.photos/seed/20/400/500",
        "https://picsum.photos/seed/21/400/500",
        "https://picsum.photos/seed/22/400/500",
        "https://picsum.photos/seed/23/400/500",
        "https://picsum.photos/seed/24/400/500",
      ],
    },
    {
      heading: "The fragments float before settling once more",
      images: [
        "https://picsum.photos/seed/25/400/500",
        "https://picsum.photos/seed/26/400/500",
        "https://picsum.photos/seed/27/400/500",
        "https://picsum.photos/seed/28/400/500",
        "https://picsum.photos/seed/29/400/500",
        "https://picsum.photos/seed/30/400/500",
        "https://picsum.photos/seed/31/400/500",
        "https://picsum.photos/seed/32/400/500",
      ],
    },
  ];

  return (
    <div className="w-full h-full flex justify-center items-center">
      {/* The Scatter Component */}
      <ImageScatter
        data={mockData}
        cardWidth={200}
        cardHeight={250}
      />
    </div>
  );
}
