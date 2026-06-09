import LogoIcon from "@/assets/logo/logo-icon";
import Container from "./container";
import Link from "next/link";
import { VERCEL_OSS_PROGRAM_URL } from "./hero";
import { GITHUB_REPO_URL } from "@/lib/github";

const footerLinks = {
    Product: [
        { label: "Components", href: "/components" },
        { label: "Blocks", href: "/blocks" },
        { label: "Showcase", href: "/showcase" },
        { label: "Changelog", href: "/changelog" },
    ],
    Resources: [
        { label: "Documentation", href: "/docs" },
        { label: "GitHub", href: GITHUB_REPO_URL },
        { label: "Releases", href: "/releases" },
        { label: "Status", href: "/status" },
    ],
    Company: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
    ],
};

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    const isExternal = href.startsWith("http");

    return (
        <Link
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
            {children}
        </Link>
    );
}

export default function Footer() {
    return (
        <section className="border-t">
            <Container>
                <div className="md:border-x flex flex-col">
                    <div className="grid gap-10 px-4 py-10 border-b md:grid-cols-[minmax(0,360px)_minmax(0,1fr)] md:px-8 md:py-12 lg:gap-16">
                        <div className="flex flex-col gap-4 md:max-w-xs w-full">
                            <div className="flex items-center gap-2">
                                <LogoIcon className="h-7 w-7 text-foreground rotate-180" />
                                <span className="text-lg font-orbitron font-bold">Vengeance UI</span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Next-gen UI interactions. Hover effects, animated tooltips, and scroll-driven layouts for modern marketing websites.
                            </p>
                            <div className="flex flex-col gap-2">
                                <span className="text-sm font-medium text-muted-foreground">backed by</span>
                                <a href={VERCEL_OSS_PROGRAM_URL} className="flex h-8 items-center gap-2 rounded-md bg-muted dark:bg-muted/60 border px-4 text-sm font-medium w-fit"><span>▲ Vercel OSS Program</span></a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                            {Object.entries(footerLinks).map(([category, links]) => (
                                <div key={category} className="flex flex-col gap-3">
                                    <span className="text-sm font-semibold">{category}</span>
                                    <ul className="flex flex-col gap-2">
                                        {links.map((link) => (
                                            <li key={link.label}>
                                                <FooterLink href={link.href}>{link.label}</FooterLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-8 py-5 text-sm text-muted-foreground">
                        <span>© 2026 Vengeance UI. All rights reserved.</span>
                        <div className="flex items-center gap-6">
                            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
