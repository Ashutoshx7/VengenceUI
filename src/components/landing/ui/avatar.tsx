import { cn } from "@/lib/utils";
import Image from "next/image";

export function Avatar({ image, className }: { image: string, className?: string }) {
    return <div className={cn("lg:w-18 lg:h-18 w-12 h-12 md:w-16 md:h-16 rounded-md shadow border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-muted p-1 flex", className)}>
        <div className="h-full w-full overflow-hidden rounded-sm">
            <Image src={image} alt="avatar" width={40} height={40} className="object-cover rounded-sm h-full w-full" />
        </div>
    </div>
}   