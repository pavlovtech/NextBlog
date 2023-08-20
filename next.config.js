const { withContentlayer } = require("next-contentlayer");
const { withAxiom } = require('next-axiom');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: false,
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

module.exports = withAxiom(withContentlayer(nextConfig));
