// next.config.js
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true }
const { withAxiom } = require('next-axiom');

module.exports = withAxiom(withContentlayer(nextConfig));

