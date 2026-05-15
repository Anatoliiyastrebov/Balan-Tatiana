/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      { source: '/impressum', destination: '/privacy', permanent: true },
      { source: '/data-request', destination: '/privacy', permanent: true },
    ];
  },
  // Stabilize dev server HMR to prevent CSS from disappearing
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
