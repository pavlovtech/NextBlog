import { Textarea } from "./textarea";
import { getPost } from "app/admin-backend";

export default async function Post({ name }: { name?: string }) {

  if(!name) {
    return (<p>Error</p>);
  }

  const data = await getPost(name);

  const onSubmit = () => {
    // postData("/api/posts", {
    //   post: data,
    //   slug
    // });
    // router.push('/admin/posts');
  };


  // if(name) {
  //   const post = await getPost(name);

  //   console.log(post)

  //   setSlug(name);
  //   setSlug(post);
  // }

  // const onChange = useCallback((value: string) => {
  //   setPostMD(value);
  // }, []);

  return (
    <div className="container">
      <p>{data.fileName}</p>
      <div className='mb-6 md:flex md:items-center'>
        <div className=''>
          <label className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right' htmlFor="slug">Slug</label>
        </div>
        <div className='w-full'>
          <input
            className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
            id="slug"
            defaultValue={data.fileName}
          />
        </div>
      </div>
      <Textarea rows={100} cols={300} defaultValue={data.content} />
      <button className="mr-10 bg-blue-600 color p-3 text-white">
        Post
      </button>
      {/* <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-sm'>
      <div className='mb-6 md:flex md:items-center'>
        <div className='md:w-1/3'>
          <label className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right' htmlFor="slug">Slug</label>
        </div>
        <div className='md:w-2/3'>
          <input
          className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
            id="slug"
            aria-invalid={errors.slug ? "true" : "false"}
            {...register('slug', { required: true })}
          />
          {errors.slug && (
            <span role="alert">
              This field is required
            </span>
          )}
        </div>
      </div>

      <div className='mb-6 md:flex md:items-center'>
        <div className='md:w-1/3'>
          <label className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right' htmlFor="post">Post</label>
        </div>
        <div className='md:w-2/3'>
          <input
          className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
            id="slug"
            aria-invalid={errors.post ? "true" : "false"}
            {...register('post', { required: true })}
          />
          {errors.post && (
            <span role="alert">
              This field is required
            </span>
          )}
        </div>
       
      </div>
      <div className='md:w-1/3'></div>
      <input type="submit" />
    </form> */}
    </div>
  );
}