/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['upload.wikimedia.org', 'flagcdn.com'],
  },
  distDir: 'build',
}

module.exports = nextConfig
