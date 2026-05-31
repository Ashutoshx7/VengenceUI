import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/landing/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const orbitron = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://vengeance-ui-v2.vercel.app"),
  title: "Vengeance UI",
  description: "The ultimate animated component library.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Vengeance UI",
    title: "Vengeance UI",
    description: "The ultimate animated component library.",
    images: [
      {
        url: "/og-image.png",
        width: 1672,
        height: 941,
        alt: "Vengeance UI - Next-Gen UI Interactions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vengeance UI",
    description: "The ultimate animated component library.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.className} ${orbitron.variable} antialiased selection:bg-foreground selection:text-background min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
