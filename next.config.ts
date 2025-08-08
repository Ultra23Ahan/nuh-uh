import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'persistent.oaistatic.com',
        port: '',
        pathname: '/burrito-nux/**',
      },
    ],
  },
};

export default nextConfig;
