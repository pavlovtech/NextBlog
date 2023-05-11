import Post from '@/app/components/post';

const PostPage = async ({params}: { params: { slug: string } }) => {
  console.log('params',params);

  {/* @ts-expect-error Server Component */}
  return <Post slug={params.slug!} />
}

export default PostPage;
