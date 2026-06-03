import type { NextConfig } from 'next'
import { withContentCollections } from '@content-collections/next'

// Permissive-but-real CSP: allows the site's known third parties (Giscus
// comments, Vercel Analytics/Speed Insights, Vercel Live preview toolbar) and
// https images. 'unsafe-inline' is required for Next's inline bootstrap scripts
// and next/font styles without a nonce setup.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://giscus.app https://va.vercel-scripts.com https://vercel.live",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "frame-src https://giscus.app https://vercel.live",
  "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com https://giscus.app https://vercel.live",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
]

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: { root: __dirname },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
  redirects: async () => [
    { source: '/', destination: '/blog', permanent: true },
  ],
}

export default withContentCollections(nextConfig)
