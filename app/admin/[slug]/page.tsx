import { format, parseISO } from 'date-fns'
import { Post, allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from 'configs/auth-options';

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: any) => {
  const post: Post = allPosts.find((post) => post._raw.flattenedPath === params.slug)!
  return { title: post?.title }
}

const PostPage = async({ params }: { params: { slug: string } }) => {
  
  const session = await getServerSession(authOptions);
  console.log(session);

  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)!;

  const Content = getMDXComponent(post.body.code);

  //console.log(post.body.code);

  return (
    <div className='flex justify-center'>
      <article className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1 className='text-2xl font-bold'>{post?.title}</h1>
      </div>
      <div className='prose prose-dark prose-invert'>
        <Content />
      </div>
    </article>
    </div>
  )
}

export default PostPage
