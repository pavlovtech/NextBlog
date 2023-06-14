import { format, parseISO } from 'date-fns'
import { Post, allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import '../../../../styles/prism-atom-dark.css';
import { notFound } from 'next/navigation';
import { Giscus } from 'app/components/comments/giscus';
import { Metadata, ResolvingMetadata } from 'next'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export async function generateMetadata(
  { params, searchParams }: any,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const post: Post = allPosts.find((post) => post._raw.flattenedPath === params.slug)!
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      images: post?.ogImage ? [post.ogImage!] : [],
    }
  }
}

const PostPage = ({ params }: { params: { slug: string } }) => {

  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)!;

  if (!post) notFound();

  const Content = getMDXComponent(post.body.code);
  
  return (
    <div className='flex flex-col justify-center'>
      <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1 className='text-3xl font-bold'>{post.title}</h1>
      </div>
      <div className='max-w-max prose prose-dark prose-invert prose-lg'>
        <Content />
      </div>
      <Giscus />
    </div>
    </div>
  )
}

export default PostPage
