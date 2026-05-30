import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'unavatar.io' },
            { protocol: 'https', hostname: 'i.pravatar.cc' },
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'pbs.twimg.com' },
            { protocol: 'https', hostname: 'res.cloudinary.com' },
            { protocol: 'https', hostname: 'ik.imagekit.io' },
            { protocol: 'https', hostname: 'vengeance-ui.com' },
        ],
    },
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    experimental: {
        // Tree-shake barrel-export packages for faster builds & smaller bundles
        optimizePackageImports: [
            'framer-motion',
            'lucide-react',
            'gsap',
            '@gsap/react',
            'lenis',
            '@phosphor-icons/react',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-menubar',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-select',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-popover',
            '@radix-ui/react-hover-card',
            'class-variance-authority',
            'prism-react-renderer',
            'react-icons',
        ],
    },
};

export default nextConfig;
