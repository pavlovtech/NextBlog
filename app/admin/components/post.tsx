"use client"
import router from "next/router";
import { Textarea } from "./textarea";
import { getPost } from "app/admin-backend";

async function postData(url: string, data: any) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export default async function Post({ name }: { name?: string }) {

  let data = {
    content: '',
    fileName: '',
    path: '',
    sha: ''
  };

  if(name) {
    data = await getPost(name);
  }

  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    console.log(event.target);
 
    // Get data from the form.
    const data = {
      fileName: event.target.first.value,
      content: event.target.last.value,
    };
 
    const response = await postData("/api/posts", data);
 
    router.push('/admin/posts');
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
      
     <form onSubmit={handleSubmit}>
     <div className='mb-6 md:flex md:items-center'>
        <div className=''>
          <label className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right' htmlFor="slug">File name</label>
        </div>
        <div className='w-full'>
          <input
            className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
            id="fileName"
            name='fileName'
            defaultValue={data.fileName}
          />
        </div>
      </div>
      <Textarea id='post' name='post' rows={100} cols={300} defaultValue={data.content} />
      <input type="hidden" id="sha" name="sha" value={data.sha}></input>
      <button type="submit" className="mr-10 bg-blue-600 color p-3 text-white">
        Post
      </button>
     </form>
    
    </div>
  );
}