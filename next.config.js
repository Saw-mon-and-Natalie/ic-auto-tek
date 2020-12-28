const withOffline = require('next-offline')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  poweredByHeader: false,
  webpack: (config, options) => {
    config.module.rules.push(
        {},
    )
    
    return config
  },
  // for registering service-workers with next-offline
  generateInDevMode: true,
  workboxOpts: {
    clientsClaim: true,
    skipWaiting: true,
    cleanupOutdatedCaches: true,
    offlineGoogleAnalytics: true,
    runtimeCaching: [
      {
        urlPattern: /\.(jpg|png|svg|webp|json|ico)$/,
        handler: 'CacheFirst',
        method: 'GET',
        options: {
          cacheName: 'img-cache',
          expiration: {
            maxAgeSeconds: 60 * 60 * 24 * 365,
            maxEntries: 10000
          },
        },
      },
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offline-cache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
};

module.exports = withBundleAnalyzer(withOffline(nextConfig))
