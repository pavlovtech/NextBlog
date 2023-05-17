import 'server-only';
import { format, parseISO } from 'date-fns'
import { Post, allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import '../../../../styles/prism-atom-dark.css';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: any) => {
  const post: Post = allPosts.find((post) => post._raw.flattenedPath === params.slug)!
  return { title: post.title }
}

const PostPage = ({ params }: { params: { slug: string } }) => {

  if (!params?.slug) notFound();

  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)!;

  if (!post) notFound();

  const Content = getMDXComponent(post.body.code);

  //console.log(post.body.code);

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
    </div>
    </div>
  )
}

export default PostPage
