
import nextra from 'nextra';

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 2678400,
        remotePatterns: [
            { protocol: 'https', hostname: 'unavatar.io' },
            { protocol: 'https', hostname: 'i.pravatar.cc' },
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'pbs.twimg.com' },
            { protocol: 'https', hostname: 'res.cloudinary.com' },
            { protocol: 'https', hostname: 'ik.imagekit.io' },
            { protocol: 'https', hostname: 'www.vengenceui.com' },
            { protocol: 'https', hostname: 'vengeance-ui-v2.vercel.app' },
        ],
    },
    compress: true,
    poweredByHeader: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'vengeance-ui-v2.vercel.app' }],
                destination: 'https://www.vengenceui.com/:path*',
                permanent: true,
            },
            {
                source: '/test',
                destination: '/',
                permanent: true,
            },
        ];
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
                ],
            },
            {
                source: '/r/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    { key: 'Cache-Control', value: 'public, max-age=300, s-maxage=86400, stale-while-revalidate=604800' },
                ],
            },
        ];
    },
};

export default withNextra(nextConfig);