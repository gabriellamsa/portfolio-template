import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['via.placeholder.com', 'images.unsplash.com', 'htmlcsstoimage.com', 'screenshot.tech', 'api.screenshotapi.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'htmlcsstoimage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'screenshot.tech',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.screenshotapi.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
