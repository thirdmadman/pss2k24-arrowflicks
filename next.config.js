/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  images: {
    minimumCacheTTL: 2678400, // 31 days
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.tmdb.org',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
