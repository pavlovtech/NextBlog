import Post from '@/app/components/post';

const PostPage = async ({params}: { params: { slug: string } }) => {
  {/* @ts-expect-error Server Component */}
  return <Post projectId={params.slug!} />
}

export default PostPage;
