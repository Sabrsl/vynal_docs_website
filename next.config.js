/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning instead of error during builds
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig; 