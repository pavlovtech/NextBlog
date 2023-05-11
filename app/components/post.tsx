import { redirect } from 'next/navigation'
import { revalidatePath, revalidateTag } from 'next/cache'
import dynamic from 'next/dynamic';
// import { NewPost, Post } from '@/db/models'

const Post = async({ slug }: { slug: string }) => {

  const MarkdownFile = dynamic(() => import('../../data/blog/test.mdx'));

  return (
    <MarkdownFile />
  )
}


// const formDataToProject = (formData: any, id?: number): NewProject | Project => {
//   const project = Object.fromEntries(formData);

//   return {
//     id: id!,
//     userId: '',
//     projectId: project.projectId!,
//     projectName: project.projectName!,
//     collectionUrl: project.collectionUrl!,
//     pat: project.pat!
//   }
// }

export default Post;
