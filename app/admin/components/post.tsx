import { Octokit, App } from "octokit";

const Post = async({ slug } : {slug?: string}) => {
  
    return (
     <div className='container'>
        <form className='w-full max-w-sm'>
            <div className='mb-6 md:flex md:items-center'>
            <div className='md:w-1/3'>
            <label
                className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right'
                htmlFor='slug'
            >
                Slug
            </label>
            </div>
            <div className='md:w-2/3'>
            <input
                className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
                id='slug'
                name='slug'
                type='text'
                required
            />
            </div>
            </div>
            
            <div className='mb-6 md:flex md:items-center'>
            <div className='md:w-1/3'>
            <label
                className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right'
                htmlFor='post'
            >
                Post
            </label>
            </div>
            <div className='md:w-2/3'>
            <textarea
                className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
                id='post'
                name='post'
                rows={4} cols={40}
                required
            />
            </div>
            </div>
          
            <div className='md:flex md:items-center'>
          <div className='md:w-1/3'></div>
          <div className='md:w-2/3'>
            <button
              type='submit'
              className=''
            >
              Submit
            </button>
          </div>
        </div>
        </form>
     </div>
    )
  }
  
  export default Post