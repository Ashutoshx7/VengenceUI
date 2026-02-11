/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.vengenceui.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    outDir: 'public',
    exclude: ['/404'],
}
