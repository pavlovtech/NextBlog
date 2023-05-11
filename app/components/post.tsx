import { redirect } from 'next/navigation'
import { revalidatePath, revalidateTag } from 'next/cache'
import { NewPost, Post } from '@/db/models'

const Post = async({ id }: { id?: number | undefined }) => {
  //const router = useRouter()

  let project: Post | undefined = undefined;


  const createView = !id;

  async function updateInDatabase(formData: any) {
    'use server';

    //await updateProject(formDataToProject(formData, id!));
    redirect('/posts');
  }

  async function saveToDatabase(formData: any) {
    'use server';
    redirect('/projects');
  }

  return (
    <div className='container'>
      <form
        className='w-full max-w-sm'
        action={(createView ? saveToDatabase : updateInDatabase) as any}
      >

        <div className='md:flex md:items-center'>
          <div className='md:w-1/3'></div>
          <div className='md:w-2/3'>
            <button
              type='submit'
              className='focus:shadow-outline rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none'
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
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
