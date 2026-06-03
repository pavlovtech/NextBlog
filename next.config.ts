import type { NextConfig } from 'next'
import { withContentCollections } from '@content-collections/next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: { root: __dirname },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
  },
  redirects: async () => [
    { source: '/', destination: '/blog', permanent: true },
  ],
}

export default withContentCollections(nextConfig)
