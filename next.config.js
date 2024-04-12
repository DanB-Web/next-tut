/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: {
      // Required to run next-auth in Docker
      allowedForwardedHosts: ['localhost:3000'],
      allowedOrigins: ['localhost:3000'],
    },
  },
};

module.exports = nextConfig;
