/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  experimental: {
    appDir: false
  }
}

module.exports = nextConfig

