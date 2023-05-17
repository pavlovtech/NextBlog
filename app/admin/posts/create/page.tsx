import { getServerSession } from 'next-auth';
import { authOptions } from 'configs/auth-options';
import Post from '../../components/post';
import { redirect } from 'next/navigation';

const PostPage = async() => {
  
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }
  //console.log(session);

  //console.log(post.body.code);

  return (
    <div className='flex justify-center'>
      {/* @ts-expect-error Server Component */}
      <Post />
    </div>
  )
}

export default PostPage
