'use client'

import { startTransition, useCallback, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Code2, FileText, Home, LayoutGrid, Search, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from '@/components/ui/command'
import { COMPONENT_CATEGORIES } from '@/lib/components-catalog'
import { cn } from '@/lib/utils'

type PageLink = {
    title: string
    href: string
    description: string
    section: string
    icon: LucideIcon
}

const PAGE_LINKS: PageLink[] = [
    {
        title: 'Home',
        href: '/',
        description: 'Vengeance UI landing page and featured components.',
        section: 'Page',
        icon: Home,
    },
    {
        title: 'Templates',
        href: '/templates',
        description: 'Portfolio and product templates with screenshots and links.',
        section: 'Page',
        icon: Sparkles,
    },
    {
        title: 'Docs',
        href: '/docs',
        description: 'Start browsing component documentation.',
        section: 'Page',
        icon: FileText,
    },
    {
        title: 'Blocks',
        href: '/components/aurora-hero',
        description: 'Hero sections, backgrounds, and larger UI sections.',
        section: 'Library',
        icon: LayoutGrid,
    },
    {
        title: 'Snippets',
        href: '/components/my-animated-button',
        description: 'Small reusable component snippets and interactions.',
        section: 'Library',
        icon: Code2,
    },
]

export function NavbarCommandSearch() {
    const router = useRouter()
    const [open, setOpen] = useState(false)

    const componentGroups = useMemo(() => COMPONENT_CATEGORIES.map((category) => ({
        ...category,
        items: category.items.map((item) => ({
            ...item,
            href: `/components/${item.slug}`,
            keywords: `${item.name} ${item.description} ${item.componentName} ${category.name}`,
        })),
    })), [])

    const runCommand = useCallback((href: string) => {
        setOpen(false)
        startTransition(() => {
            router.push(href)
        })
    }, [router])

    useEffect(() => {
        const down = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
                event.preventDefault()
                setOpen((currentOpen) => !currentOpen)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className={cn(
                    'group flex h-9 w-[260px] items-center justify-between rounded-md border border-foreground/10 bg-foreground/[0.035] px-3 text-sm text-muted-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors hover:border-foreground/15 hover:bg-foreground/[0.055] hover:text-foreground',
                    'dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-white/15 dark:hover:bg-white/[0.06]'
                )}>
                <span className="flex min-w-0 items-center gap-2">
                    <Search className="size-4 shrink-0 opacity-65 transition-opacity group-hover:opacity-90" />
                    <span className="truncate">Search documentation...</span>
                </span>
                <kbd className="ml-3 rounded border border-foreground/10 bg-background/80 px-1.5 py-0.5 font-mono text-[11px] leading-none text-muted-foreground shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
                    ⌘ K
                </kbd>
            </button>

            <CommandDialog
                open={open}
                onOpenChange={setOpen}
                title="Search documentation"
                description="Search pages, components, blocks, and snippets."
                className="max-w-2xl border border-foreground/10 bg-background/95 shadow-2xl backdrop-blur-xl">
                <CommandInput placeholder="Search components, templates, docs..." />
                <CommandList className="max-h-[min(70vh,520px)]">
                    <CommandEmpty>No result found.</CommandEmpty>

                    <CommandGroup heading="Quick Links">
                        {PAGE_LINKS.map((page) => {
                            const Icon = page.icon

                            return (
                                <CommandItem
                                    key={page.href}
                                    value={`${page.title} ${page.description} ${page.section}`}
                                    onSelect={() => runCommand(page.href)}
                                    className="items-start gap-3 rounded-md">
                                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md border border-foreground/10 bg-foreground/[0.035]">
                                        <Icon className="size-4" />
                                    </span>
                                    <span className="min-w-0 flex-1">
                                        <span className="block font-medium">{page.title}</span>
                                        <span className="block truncate text-xs text-muted-foreground">{page.description}</span>
                                    </span>
                                    <CommandShortcut className="tracking-normal">{page.section}</CommandShortcut>
                                </CommandItem>
                            )
                        })}
                    </CommandGroup>

                    <CommandSeparator />

                    {componentGroups.map((category) => {
                        const Icon = category.icon

                        return (
                            <CommandGroup
                                key={category.name}
                                heading={category.name}>
                                {category.items.map((item) => (
                                    <CommandItem
                                        key={item.href}
                                        value={item.keywords}
                                        onSelect={() => runCommand(item.href)}
                                        className="items-start gap-3 rounded-md">
                                        <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md border border-foreground/10 bg-foreground/[0.035]">
                                            <Icon className="size-4" />
                                        </span>
                                        <span className="min-w-0 flex-1">
                                            <span className="block font-medium">{item.name}</span>
                                            <span className="block truncate text-xs text-muted-foreground">{item.description}</span>
                                        </span>
                                        <CommandShortcut className="tracking-normal">{category.name}</CommandShortcut>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        )
                    })}
                </CommandList>
            </CommandDialog>
        </>
    )
}
