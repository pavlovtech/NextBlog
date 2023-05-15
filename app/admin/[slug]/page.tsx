import { format, parseISO } from 'date-fns'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { getServerSession } from 'next-auth';
import { authOptions } from 'configs/auth-options';

const PostPage = async({ params }: { params: { slug: string } }) => {
  
  const session = await getServerSession(authOptions);
  console.log(session);

  //console.log(post.body.code);

  return (
    <div className='flex justify-center'>
      
    </div>
  )
}

export default PostPage
