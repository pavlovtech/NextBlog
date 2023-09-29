import { format, parseISO } from 'date-fns'
import { Post, allPosts } from 'contentlayer/generated'
import '../../../../styles/prism-atom-dark.css';
import { notFound } from 'next/navigation';
import { Giscus } from 'app/components/comments/giscus';
import Image from 'next/image'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post.slug }))

export async function generateMetadata(
  { params, searchParams }: any,
  parent?: any
) {
  const post: Post = allPosts.find((post) => post.slug === params.slug)!
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      images: post?.coverImage ? [post.coverImage!] : [],
    }
  }
}

const PostPage = ({ params }: { params: { slug: string } }) => {

  const post = allPosts.find((post) => post.slug === params.slug)!;

  if (!post) notFound();
  
  return (
    <article className='flex flex-col justify-center'>
      <div className="mb-8 text-center">
        <time dateTime={post.publishedAt} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
        </time>
        <h1 className='text-3xl font-bold'>{post.title}</h1>
      </div>
      {post.coverImage && (<Image
        src={post.coverImage}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
        width={300}
        height={300}
        alt="Cover"
      />)}

      

      <div dangerouslySetInnerHTML={{ __html: post.body.html }} className='max-w-max prose prose-dark prose-invert prose-lg mb-5 mt-5'>
      </div>
      <Giscus />
    </article>
  )
}

export default PostPage
