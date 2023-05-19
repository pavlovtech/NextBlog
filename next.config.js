const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: false,
  },
  reactStrictMode: true
};

module.exports = withContentlayer(nextConfig);
