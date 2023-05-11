export const runtime = 'edge';
import Posts from '@/app/components/posts'
import Link from 'next/link';

const BlogPage = async () => {
  return <>
    <div className='container'>
      {/* @ts-expect-error Server Component */}
      <Posts /> 
    </div>
  </>
}

export default BlogPage;

