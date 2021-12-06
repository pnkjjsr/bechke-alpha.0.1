const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  distDir: '../.next',

  images: {
    domains: ['bechke.com', 'https://www.bechke.com'],
  },

  reactStrictMode: true,

  pwa: {
    dest: '../public', /*service working in public folder if .next not working.*/
    disable: process.env.NODE_ENV === 'development',
    register: true, // on/off PWA feature.
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/]
  },
});

module.exports = nextConfig;