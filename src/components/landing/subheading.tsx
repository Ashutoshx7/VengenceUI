import { cn } from "@/lib/utils";

export default function SubHeading({ children, as = "p", variant = "medium", className }: { children: React.ReactNode, as?: "p" | "h3" | "h2", variant?: "small" | "medium" | "big", className?: string }) {

    const variants = {
        big: "text-base md:text-lg",
        medium: "text-sm md:text-base",
        small: "text-xs md:text-sm",
    };
    const Tag = as;

    return <Tag className={cn("text-muted-foreground font-mono", variants[variant], className)}>{children}</Tag>
}