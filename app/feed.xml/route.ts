import { allPosts } from 'content-collections'
import { compareDesc } from 'date-fns'

export const dynamic = 'force-static'

const SITE = 'https://alexpavlov.dev'

const escapeXml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

export function GET() {
  const posts = allPosts
    .filter((p) => p.status === 'published')
    .sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)))

  const items = posts
    .map(
      (p) => `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${SITE}/${p.url}</link>
      <guid isPermaLink="true">${SITE}/${p.url}</guid>
      <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>
      <description>${escapeXml(p.description)}</description>
    </item>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Alex Pavlov — blog</title>
    <link>${SITE}/blog</link>
    <description>Alex Pavlov — blog about programming</description>
    <language>en-us</language>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}
