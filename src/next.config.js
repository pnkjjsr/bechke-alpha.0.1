const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '../.next',

  reactStrictMode: true,

  pwa: {
    dest: '../public', /*service working in public folder if .next not working.*/
    disable: process.env.NODE_ENV === 'development',
    register: true, // on/off PWA feature.
    runtimeCaching,
  },
}


module.exports = withPWA(nextConfig);