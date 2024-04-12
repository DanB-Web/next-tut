/** @type {import('next').NextConfig} */
const nextConfig = {
  // Outputs only the files necessary for prod (reduce Docker image size)
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
