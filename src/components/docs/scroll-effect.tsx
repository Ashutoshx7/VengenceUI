"use client"

import { ScrollEffect } from "../ui/scroll-effect"

// dummy images
const images = {

    start: ['https://images.unsplash.com/photo-1759776054700-e6912d243d49?w=600', 'https://images.unsplash.com/photo-1761991062157-df67faab3a23?w=600'],
    // start: ['/Avatar11.jpg', '/Avatar4.svg'],

    middle: ['https://images.unsplash.com/photo-1762029261747-e9dea65803fb?w=600', 'https://images.unsplash.com/photo-1760159201322-8a0574c1296c?w=600'],
    // middle: ['/Avatar6.jpg', '/Avatar11.jpg'],
    featured: 'https://images.unsplash.com/photo-1760867191563-791f803e1bcd?w=1600'
    // featured: '/Avatar11.jpg'

}

export function ScrollEffectDemo() {
    return (
        <div className=" w-full   h-[110vh]  sticky top-0  bg-neutral-50 dark:bg-black  border-neutral-200 dark:border-neutral-800">
            <ScrollEffect images={images} className="h-[110dvh] relative"/>
        </div> 
    )
}

