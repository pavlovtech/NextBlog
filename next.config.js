const { withContentlayer } = require("next-contentlayer");
const { withAxiom } = require('next-axiom');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: false,
  },
  reactStrictMode: true
};

module.exports = withAxiom(withContentlayer(nextConfig));
