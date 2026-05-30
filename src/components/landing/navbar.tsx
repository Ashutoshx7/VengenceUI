'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useMemo, memo, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { KitSwitcher } from '@/components/kit-switcher'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { Menu, X } from 'lucide-react'
import { Dialog, DialogClose, DialogTitle, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import LogoIcon from '@/assets/logo/logo-icon'
import { NavbarCommandSearch } from './navbar-command-search'

const GitHubIcon = memo(function GitHubIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16">
            <path
                fill="currentColor"
                d="M8 0c4.42 0 8 3.58 8 8a8.01 8.01 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38c0-.27.01-1.13.01-2.2c0-.75-.25-1.23-.54-1.48c1.78-.2 3.65-.88 3.65-3.95c0-.88-.31-1.59-.82-2.15c.08-.2.36-1.02-.08-2.12c0 0-.67-.22-2.2.82c-.64-.18-1.32-.27-2-.27s-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82c-.44 1.1-.16 1.92-.08 2.12c-.51.56-.82 1.28-.82 2.15c0 3.06 1.86 3.75 3.64 3.95c-.23.2-.44.55-.51 1.07c-.46.21-1.61.55-2.33-.66c-.15-.24-.6-.83-1.23-.82c-.67.01-.27.38.01.53c.34.19.73.9.82 1.13c.16.45.68 1.31 2.69.94c0 .67.01 1.3.01 1.49c0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8"
            />
        </svg>
    )
})

const XIcon = memo(function XIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            className="size-4">
            <g fill="none">
                <g clipPath="url(#primeTwitter0)">
                    <path
                        fill="currentColor"
                        d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                    />
                </g>
                <defs>
                    <clipPath id="primeTwitter0">
                        <path
                            fill="#fff"
                            d="M0 0h14v14H0z"
                        />
                    </clipPath>
                </defs>
            </g>
        </svg>
    )
})

export const Navbar = memo(function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const isActive = useCallback((path: string) => {
        return pathname === path || pathname.startsWith(`${path}/`)
    }, [pathname])

    const closeMenu = useCallback(() => setIsOpen(false), [])

    // Pre-compute active states to avoid recalculating in render
    const activeStates = useMemo(() => ({
        templates: isActive('/templates'),
        docs: isActive('/docs'),
    }), [isActive])

    return (
        <header className="sticky top-0 isolate z-[200] border-b border-neutral-200 bg-background/90 backdrop-blur-md dark:border-[#222] dark:bg-[#050608]/90" style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
            <div className="w-full px-4 md:px-8 xl:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 lg:py-4">
                        <Link
                            href="/"
                            className="flex w-fit items-center gap-3"
                            prefetch={true}>
                            <LogoIcon className="w-6 text-foreground rotate-180" />
                            <span className="font-orbitron text-xl font-bold tracking-tight -ml-2">Vengeance UI</span>
                        </Link>

                        <div className="-mr-2 hidden items-center gap-4 sm:flex">
                            <NavbarCommandSearch />

                            <div className="flex items-center gap-1">
                                <Button
                                    asChild
                                    size="sm"
                                    variant="ghost"
                                    className={cn('text-foreground/75 rounded-full', activeStates.templates && 'text-foreground')}>
                                    <Link
                                        href="/templates"
                                        prefetch={true}
                                        className="text-sm!">
                                        Templates
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    size="sm"
                                    variant="ghost"
                                    className={cn('text-foreground/75 rounded-full', activeStates.docs && 'text-foreground')}>
                                    <Link
                                        href="/docs"
                                        prefetch={true}
                                        className="text-sm!">
                                        Docs
                                    </Link>
                                </Button>
                            </div>

                            <div className="flex items-center gap-2">
                                <Button
                                    asChild
                                    variant="ghost"
                                    size="sm"
                                    className="size-8 rounded-full">
                                    <Link
                                        href="https://github.com/Ashutoshx7/VengeanceUI"
                                        target="_blank"
                                        aria-label="GitHub"
                                        rel="noreferrer"
                                        className="text-sm">
                                        <GitHubIcon />
                                    </Link>
                                </Button>
                                <ThemeToggle />
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center gap-2 sm:hidden">
                            <ThemeToggle />

                            <Dialog
                                open={isOpen}
                                onOpenChange={setIsOpen}>
                                <DialogTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className={cn('size-8', isOpen && 'opacity-0')}>
                                        <Menu className="size-5" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="inset-y-4 translate-y-0 px-0 py-2">
                                    <DialogTitle className="sr-only">Mobile menu</DialogTitle>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center justify-between pl-6 pr-3 pt-2">
                                            <Link
                                                href="/"
                                                className="flex w-fit items-center gap-0"
                                                onClick={closeMenu}>
                                                <Image
                                                    src="/logo/bg-less.png"
                                                    alt="Vengeance UI"
                                                    width={48}
                                                    height={48}
                                                    className="w-12 rotate-180"
                                                />
                                                <span className="font-orbitron font-bold tracking-tight -ml-3">Vengeance UI</span>
                                            </Link>
                                            <DialogClose asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="icon">
                                                    <X className="size-5!" />
                                                    <span className="sr-only">Close menu</span>
                                                </Button>
                                            </DialogClose>
                                        </div>

                                        <div className="pr-1.25 border-y py-2 pl-6">
                                            <KitSwitcher />
                                        </div>

                                        <div className="flex flex-col gap-2 px-3 pt-3">
                                            <Button
                                                asChild
                                                size="sm"
                                                variant="ghost"
                                                className={cn('justify-start', activeStates.templates && 'bg-accent')}>
                                                <Link
                                                    href="/templates"
                                                    className="text-sm!"
                                                    onClick={closeMenu}>
                                                    Templates
                                                </Link>
                                            </Button>
                                            <Button
                                                asChild
                                                size="sm"
                                                variant="ghost"
                                                className={cn('justify-start', activeStates.docs && 'bg-accent')}>
                                                <Link
                                                    href="/docs"
                                                    className="text-sm!"
                                                    onClick={closeMenu}>
                                                    Docs
                                                </Link>
                                            </Button>
                                        </div>

                                        <Separator className="my-2 border-t" />

                                        <div className="flex items-center gap-2 px-5">
                                            <Button
                                                asChild
                                                variant="ghost"
                                                size="sm"
                                                className="size-8 rounded-full">
                                                <Link
                                                    href="https://x.com/Ashutosh_7x7"
                                                    target="_blank"
                                                    aria-label="x/twitter"
                                                    rel="noreferrer"
                                                    className="text-sm">
                                                    <XIcon />
                                                </Link>
                                            </Button>
                                            <Button
                                                asChild
                                                variant="ghost"
                                                size="sm"
                                                className="size-8 rounded-full">
                                                <Link
                                                    href="https://github.com/Ashutoshx7/VengeanceUI"
                                                    target="_blank"
                                                    aria-label="GitHub"
                                                    rel="noreferrer"
                                                    className="text-sm">
                                                    <GitHubIcon />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
})
