import '@/app/globals.css'
import type { AppProps } from 'next/app'
import { SidebarHoverIndicator } from '@/components/docs/sidebar-hover-indicator'
import { CommandMenuProvider } from '@/components/command-menu'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Analytics } from "@vercel/analytics/react"

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <CommandMenuProvider>
                <SidebarHoverIndicator />
                <Component {...pageProps} />
            </CommandMenuProvider>
            <Analytics />
        </ThemeProvider>
    )
}
