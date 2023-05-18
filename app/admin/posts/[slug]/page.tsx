import { getServerSession } from 'next-auth';
import { authOptions } from 'configs/auth-options';
import Post from '../../components/post';
import { redirect } from 'next/navigation';
import { getPost } from 'app/admin-backend';

const PostPage = async({ params }: { params: { slug: string } }) => {
  
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  const post = await getPost(params.slug);

  return (
    <div className='flex justify-center'>
       <Post {...post} />
    </div>
  )
}

export default PostPage
