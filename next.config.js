const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  redirects: async () => {
    return [
        {
            source: '/',
            destination: '/blog',
            permanent: true,
        }
    ];
 },
};

module.exports = withContentlayer(nextConfig);
