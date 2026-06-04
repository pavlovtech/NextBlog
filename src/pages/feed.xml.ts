import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { compareDesc } from 'date-fns'
import type { APIContext } from 'astro'
import { SITE } from '../consts'

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts'))
    .filter((p) => p.data.status === 'published')
    .sort((a, b) => compareDesc(a.data.publishedAt, b.data.publishedAt))

  return rss({
    title: 'Alex Pavlov — blog',
    description: 'Alex Pavlov - blog about programming',
    site: context.site?.href ?? SITE,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.publishedAt,
      link: `/blog/posts/${p.data.slug}`,
    })),
  })
}
