import { MetadataRoute } from 'next'
import { allPosts } from 'content-collections'

const SITE = 'https://alexpavlov.dev'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts
    .filter((p) => p.status === 'published')
    .map((p) => ({
      url: `${SITE}/${p.url}`,
      lastModified: new Date(p.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  return [
    {
      url: `${SITE}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...posts,
  ]
}
