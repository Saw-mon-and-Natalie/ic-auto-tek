const sitemap = require('nextjs-sitemap-generator')
const path = require('path')

sitemap({
    baseUrl: "https://icautotek.com",
    pagesDirectory: path.resolve(__dirname, 'pages'),
    targetDirectory: path.resolve(__dirname, 'out'),
    ignoreIndexFiles: true,
    sitemapFilename: 'sitemap.xml',
    nextConfigPath: path.resolve(__dirname, 'next.config.js'),
    pagesConfig: {
        '/': {
          priority: '0.5',
          changefreq: 'daily'
        },
        '/contact': {
            priority: '0.5',
            changefreq: 'daily'
        },
        '/reviews': {
            priority: '0.5',
            changefreq: 'daily'
        },
        '/team': {
            priority: '0.5',
            changefreq: 'daily'
        },
        '/services': {
            priority: '0.5',
            changefreq: 'daily'
        },
    },
})

console.log(`✅ sitemap.xml generated!`)