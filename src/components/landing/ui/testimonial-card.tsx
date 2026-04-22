import XIcon from "@/assets/icons/x-icon";
import Image from "next/image";
import Link from "next/link";

export default function TestimonialCard({ title, company, description, image, href }: { title: string, company: string, description: string, image?: string, href: string }) {
    return <div className="bg-background border rounded-xl shadow w-full md:max-w-64 min-h-60 p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
                <Image src={image ? image : "/avatars/fallback-avatar.webp"} alt={title} width={40} height={40} className="rounded-full h-10 w-10 ring ring-black/10 dark:ring-white/10" />
                <div className="flex flex-col">
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-sm text-muted-foreground">{company}</p>
                </div>
            </div>

            <a target="_blank" rel="noopener noreferrer" href={href} className="flex items-center gap-2 rounded-md p-1.5 group hover:bg-muted transition-colors duration-300 cursor-pointer">
                <XIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
        </div>
        <p className="text-muted-foreground line-clamp-6">{description}</p>
    </div>
}

