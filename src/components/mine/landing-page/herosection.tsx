"use client";
import AnimatedButton from "@/components/ui/animated-button";
import { FlipText } from "@/components/ui/flip-text";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MaskedAvatars } from "@/components/ui/masked-avatars";
import { CreepyButton } from "@/components/ui/creepy-button";
import SocialFlipButton from "@/components/ui/social-flip-button";
import InteractiveBook from "@/components/ui/interactive-book";
import { FolderPreview } from "@/components/ui/folder-preview";
import { GlassDock } from "@/components/ui/glass-dock";
import { TestimonialsCard } from "@/components/ui/testimonials-card";
import { GradientTiles } from "@/components/ui/gradient-tiles";
import { Home, Terminal, PenTool, Layout, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">

      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center">

        {/* Center Content - Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center z-30 relative max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-medium text-muted-foreground mb-8"
          >
            <Zap className="w-3 h-3" />
            <span className="tracking-widest uppercase">Vengeance UI 2.0</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-6">
            Build beautiful <br /> interfaces
            <FlipText
              className="block mt-2 text-muted-foreground font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]"
              delay={0.5}
              together={true}
            >
              with precision and speed
            </FlipText>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            A curated collection of beautifully crafted React components.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link href="/docs/components-overview">
              <AnimatedButton
                as="div"
                className="group relative overflow-hidden rounded-lg bg-foreground text-background px-8 py-3.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <span className="relative z-10 font-medium text-sm">
                  Browse Components
                </span>
              </AnimatedButton>
            </Link>
          </div>
        </motion.div>

        {/* Floating Components */}

        {/* Top Left - Folder Preview */}
        <motion.div
          initial={{ opacity: 0, x: -50, y: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute top-[15%] left-[5%] z-20 hidden lg:block"
        >
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <FolderPreview
              variant="ravi"
              label="Assets"
              images={[
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=400&auto=format&fit=crop",
              ]}
            />
          </motion.div>
        </motion.div>

        {/* Top Right - Testimonials */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="absolute top-[12%] right-[5%] z-20 hidden lg:block"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
            <TestimonialsCard
              items={[
                {
                  id: 1,
                  title: "Sarah Chen",
                  description: "Beautiful components.",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
                },
                {
                  id: 2,
                  title: "Alex R.",
                  description: "Workflow improved.",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                }
              ]}
              width={220}
              showNavigation={true}
              showCounter={false}
              className="scale-[0.75]"
            />
          </motion.div>
        </motion.div>

        {/* Middle Left - Creepy Button */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="absolute top-[45%] left-[3%] z-20 hidden xl:block"
        >
          <motion.div animate={{ x: [0, 5, 0], y: [0, -5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <CreepyButton className="scale-[0.8]" coverClassName="bg-foreground text-background">Hover Me</CreepyButton>
          </motion.div>
        </motion.div>

        {/* Middle Right - Book */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="absolute top-[40%] right-[3%] z-20 hidden xl:block"
        >
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <InteractiveBook
              coverImage="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=400&auto=format&fit=crop"
              bookTitle="Vengeance"
              bookAuthor="The Dark Knight"
              width={140}
              height={180}
              pages={[{ pageNumber: 1, title: "Intro", content: <p className="text-xs">Components.</p> }]}
            />
          </motion.div>
        </motion.div>

        {/* Bottom Left - Social Flip */}
        <motion.div
          initial={{ opacity: 0, x: -40, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="absolute bottom-[18%] left-[8%] z-20 hidden lg:block"
        >
          <motion.div animate={{ y: [0, 8, 0], x: [0, -3, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
            <div className="scale-[0.55]">
              <SocialFlipButton />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Center Left - Masked Avatars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: "easeOut" }}
          className="absolute bottom-[25%] left-[25%] z-20 hidden xl:block"
        >
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
            <MaskedAvatars size={45} />
          </motion.div>
        </motion.div>

        {/* Bottom Center - Glass Dock */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="absolute bottom-[8%] left-1/2 -translate-x-1/2 z-20 hidden md:block"
        >
          <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
            <GlassDock
              className="scale-[0.85] origin-center"
              items={[
                { title: "Home", icon: Home, href: "#" },
                { title: "Github", icon: Terminal, href: "#" },
                { title: "X", icon: Layout, href: "#" },
                { title: "Blog", icon: PenTool, href: "#" },
              ]}
            />
          </motion.div>
        </motion.div>

        {/* Animated line below dock */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Bottom Right - Folder Preview 2 */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="absolute bottom-[20%] right-[6%] z-20 hidden lg:block"
        >
          <motion.div animate={{ y: [0, -10, 0], rotate: [0, -1, 0, 1, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}>
            <FolderPreview
              variant="ravi"
              label="Design"
              images={[
                "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=400&auto=format&fit=crop",
              ]}
            />
          </motion.div>
        </motion.div>

        {/* Left Side - Gradient Tiles */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
          className="absolute top-[58%] left-[2%] z-20 hidden xl:block"
        >
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            <GradientTiles className="w-[150px] h-[100px] rounded-xl" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
