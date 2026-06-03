import { format, parseISO } from 'date-fns'
import { allPosts } from 'content-collections'
import '../../../../styles/prism-atom-dark.css';
import { notFound } from 'next/navigation';
import { Giscus } from 'app/components/comments/giscus';
import Image from 'next/image'

const SITE = 'https://alexpavlov.dev'

export const dynamicParams = false

export const generateStaticParams = async () =>
  allPosts.filter((post) => post.status === 'published').map((post) => ({ slug: post.slug }))

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const post = allPosts.find((post) => post.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/${post.url}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/${post.url}`,
      publishedTime: post.publishedAt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {

  const { slug } = await params;

  const post = allPosts.find((post) => post.slug === slug);

  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { '@type': 'Person', name: post.author.name, url: SITE },
    image: post.coverImage ? `${SITE}${post.coverImage}` : undefined,
    url: `${SITE}/${post.url}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/${post.url}` },
  }

  return (
    <article className='flex flex-col justify-center'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mb-8 text-center">
        <time dateTime={post.publishedAt} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
        </time>
        <h1 className='text-3xl font-bold'>{post.title}</h1>
      </div>
      {post.coverImage && (
        <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}

      

      <div dangerouslySetInnerHTML={{ __html: post.html }} className='max-w-max prose prose-invert prose-lg mb-5 mt-5'>
      </div>
      <Giscus />
    </article>
  )
}

export default PostPage
