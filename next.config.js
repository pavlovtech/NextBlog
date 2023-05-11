/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: true,
    serverComponentsExternalPackages: ["mysql2"]
  }
}

const { withAxiom } = require('next-axiom');

module.exports = withAxiom(nextConfig)