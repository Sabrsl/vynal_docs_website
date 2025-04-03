/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Completely disable ESLint during builds
    ignoreDuringBuilds: true,
    dirs: [],
  },
  typescript: {
    // Disable TypeScript checking during builds
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  output: 'standalone',
};

module.exports = nextConfig; 