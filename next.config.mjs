/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisation de la compression
  compress: true,
  
  // Optimisation des images
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Optimisation des polices
  fontLoaders: [
    { loader: '@next/font/google', options: { subsets: ['latin'] } },
  ],
  
  // Optimisation du build
  swcMinify: true,
  
  // Optimisation du runtime
  reactStrictMode: true,
  
  // Optimisation du chargement statique
  experimental: {
    serverComponentsExternalPackages: ['sharp', 'ioredis'],
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  
  // Optimisation des paquets
  webpack: (config) => {
    // Optimization for larger bundles
    config.optimization.splitChunks = {
      chunks: 'all',
      maxInitialRequests: 25,
      minSize: 20000,
    };
    
    return config;
  },
  
  // Configuration des en-têtes pour optimiser la performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=31536000',
          },
        ],
      },
    ];
  },
};

export default nextConfig; 