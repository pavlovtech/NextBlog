"use client";

import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import CodeMirror, { BasicSetupOptions } from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { githubDark } from '@uiw/codemirror-theme-github';
import { EditorView } from "@codemirror/view";

// const SimpleMdeReact = dynamic(() => import("react-simplemde-editor"), {
//   loading: () => <p>Loading...</p>,
//   ssr: false
// });

const setupOptions: BasicSetupOptions = {
  lineNumbers: false,
  foldGutter: false
}

export default function Post(data: { content: string, fileName: string, sha: string, path: string }) {

  console.log('fileName', data.fileName);

  const [postMD, setPostMD] = useState(data.content);

  const [slug, setSlug] = useState(data.fileName);

  const [sha, setSha] = useState(data.sha);

  const router = useRouter();

  const onSubmit = () => {
    postData("/api/posts", {
      post: postMD,
      slug: slug,
      sha: sha
    });
    router.push('/admin/posts');
  };

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

  return (
    <div className="container">
      <div className='mb-6 md:flex md:items-center'>
        <div className=''>
          <label className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right' htmlFor="slug">Slug</label>
        </div>
        <div className='w-full'>
          <input
            className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
            id="slug"
            name="slug"
            value={slug}
            onChange={e => setSlug(e.target.value)}
          />
        </div>
      </div>
      {/* <SimpleMdeReact value={postMD} onChange={e => setPostMD(e)} /> */}
      <CodeMirror
        value={postMD}
        theme={githubDark}
        extensions={[markdown({ base: markdownLanguage, codeLanguages: languages }), EditorView.lineWrapping]}
        basicSetup={setupOptions}
        onChange={e => setPostMD(e)}
      />
      <button className="mr-10 bg-blue-600 color p-3 text-white" onClick={() => onSubmit()}>
        Post
      </button>
    </div>
  );
}