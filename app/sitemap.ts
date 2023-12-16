import { MetadataRoute } from 'next'
import { allPosts, allPages } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {

    const urls = allPosts.map(p => {
        return {
            url: `https://alexpavlov.dev/${p.url}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        } as any
    }).concat(
        allPages.map(p => {
            return {
                url: `https://alexpavlov.dev/${p._raw.flattenedPath}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 1,
            } as any
        }
    )).concat(
        [
            {
                url: `https://alexpavlov.dev/blog`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 1,
            } as any
        ]
    );

  return urls;
}