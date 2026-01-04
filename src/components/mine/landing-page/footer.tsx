
"use client"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

import {
  FileText,
  Github,
  Instagram,
  LinkedinIcon,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

const Footer = () => {

  const icons = [
    {
      icon: Instagram,
      link: "https://www.instagram.com/epitome0.0/",
    }
  ]

  const firstLI = [
    {
      li: '01 Components',
      href: '/docs/components-overview'
    },
    {
      li: '02 Templates',
      href: '/templates'
    },
  ]

  const secondLI = [
    {
      li: '03 Playground',
      href: '/playground'
    },
    {
      li: '04 Pricing',
      href: "/pricing"
    },

  ]
  return (



    <div className="w-full flex justify-center items-center flex-col">
      {/* Top Section - Full Width Border Bottom */}
      <section className="w-full border-y border-foreground/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] min-h-[250px]">

          {/* Left: Description */}
          <div className="md:border-r border-foreground/10 p-8 flex flex-col justify-center">
            <p className="text-lg text-muted-foreground leading-relaxed font-light text-balance max-w-md">
              A carefully crafted React component library for building modern, responsive web applications.
              <br className="hidden md:block" /> Every component is designed with attention to detail.
            </p>
          </div>

          {/* Right: Links */}
          <div className="p-8 flex items-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full font-medium text-foreground/70">
              <ul className="space-y-4">
                {firstLI.map((el, id) => (
                  <Link href={el.href} key={id} className="block w-fit">
                    <li className="hover:text-foreground transition-colors">{el.li}</li>
                  </Link>
                ))}
              </ul>
              <ul className="space-y-4">
                {secondLI.map((el, id) => (
                  <Link href={el.href} key={id} className="block w-fit">
                    <li className="hover:text-foreground transition-colors">{el.li}</li>
                  </Link>
                ))}
              </ul>
              <div className="flex items-start justify-start md:justify-end">
                <Link href='https://github.com/Ashutoshx7/VengeanceUI' target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6 hover:text-foreground transition-colors" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] min-h-[250px]">

          {/* Left: Logo */}
          <div className="md:border-r border-foreground/10 p-8 flex items-center justify-center">
            <motion.img
              src="/logo/bg-less.png"
              alt="Logo"
              className="w-32 h-32 md:w-40 md:h-40 dark:invert object-contain"
              draggable={false}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Right: Big Text */}
          <div className="flex items-center justify-center p-8 overflow-hidden relative">
            <h1 className="vengeanceUI-text text-[15vw] md:text-[8rem] lg:text-[9rem] leading-none tracking-tighter text-center md:text-left select-none">
              VENGEANCEUI
            </h1>
          </div>

        </div>
      </section>
    </div>

  );
};

export default Footer;

