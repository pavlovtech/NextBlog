import { format, parseISO } from 'date-fns'
import { Post, allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import '../../../styles/prism-atom-dark.css';
import { headers } from 'next/headers';

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: any) => {
  const post: Post = allPosts.find((post) => post._raw.flattenedPath === params.slug)!
  return { title: post.title }
}

const PostPage = ({ params }: { params: { slug: string } }) => {
  
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)!;

  const Content = getMDXComponent(post.body.code);

  //console.log(post.body.code);

  return (
    <article className="py-4 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1>{post.title}</h1>
      </div>
      <div className='prose prose-dark prose-invert'>
        <Content />
      </div>
    </article>
  )
}

export default PostPage
