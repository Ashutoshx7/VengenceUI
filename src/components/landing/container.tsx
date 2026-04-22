import { cn } from "@/lib/utils";

export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn("mx-auto max-w-8xl md:px-4 xl:px-20", className)}>
            {children}
        </div>
    )
} 