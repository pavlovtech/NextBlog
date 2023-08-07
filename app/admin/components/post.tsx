"use client";

import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import CodeMirror, { BasicSetupOptions } from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { githubDark } from '@uiw/codemirror-theme-github';
import { EditorView } from "@codemirror/view";
import { Button } from "./button";
import { Input } from "./input"
import { Label } from "./label";
import { defaultTemplate } from "configs/frontmatter-template";
import { postData } from "lib/http-post";

const setupOptions: BasicSetupOptions = {
  lineNumbers: false,
  foldGutter: false
}

export default function Post(props: { content: string, fileName: string, sha: string, path: string }) {

  const [postMD, setPostMD] = useState(props.content || defaultTemplate);

  const [slug, setSlug] = useState(props.fileName);

  const [sha, setSha] = useState(props.sha);

  const router = useRouter();

  const onSubmit = () => {

    const finalSlug = slug.endsWith(".mdx") ? slug : slug + '.mdx'

    postData("/api/posts", {
      post: postMD,
      slug: finalSlug,
      sha: sha
    });
    router.refresh();
    router.push('/admin/posts');
  };

  return (
    <div className="container">
      <Button className="mt-2 mb-4 w-40 float-right" onClick={() => onSubmit()}>Post</Button>
      <div className="grid w-full items-center gap-1.5 mb-5">
        <Label htmlFor="slug">Slug</Label>
        <Input type="slug" id="slug" placeholder="slug" value={slug} onChange={e => setSlug(e.target.value)}  />
       </div>
      <CodeMirror
        value={postMD}
        theme={githubDark}
        minHeight="400px"
        extensions={[markdown({ base: markdownLanguage, codeLanguages: languages }), EditorView.lineWrapping]}
        basicSetup={setupOptions}
        onChange={e => setPostMD(e)}
      />
    </div>
  );
}