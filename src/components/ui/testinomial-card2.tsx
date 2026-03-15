
import { cn } from "@/lib/utils";
import { FaXTwitter } from "react-icons/fa6";


interface TestimonialItem {
    title: string;
    company?: string;
    description: string;
    image: string;
    href?: string;
    big?: boolean;
}

interface TestimonialsCardProps {
    items: TestimonialItem[];
    className?: string;
}

export function TestimonialsCard2({ items, className }: TestimonialsCardProps) {
    return (
        <div className={cn("flex flex-row gap-4", className)}>
            {items?.length > 0 && items.map((el, idx) => (
                <div
                    key={idx}
                    className="flex flex-col justify-between flex-shrink-0 w-72 bg-foreground text-background rounded-xl px-5 py-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                    <div>
                        <p className="text-sm leading-relaxed opacity-90">{el.description}</p>
                    </div>
                    <div className="flex items-center gap-3 mt-4 pt-3 border-t border-background/10">
                        <div className="rounded-full overflow-hidden size-9 flex-shrink-0">
                            <img
                                src={el.image}
                                alt={el.title}
                                className="w-full h-full object-cover"
                                draggable={false}
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h1 className="text-sm font-semibold truncate">{el.title}</h1>
                            <p className="text-xs opacity-60 truncate">{el.company}</p>
                        </div>
                        {el.href && (
                            <a
                                href={el.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="opacity-50 hover:opacity-100 transition-opacity flex-shrink-0"
                                onClick={e => e.stopPropagation()}
                            >
                                <FaXTwitter className="size-3.5" />
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TestimonialsCard2;
