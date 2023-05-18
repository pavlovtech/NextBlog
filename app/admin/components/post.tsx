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
import { format } from "date-fns";

const setupOptions: BasicSetupOptions = {
  lineNumbers: false,
  foldGutter: false
}

export default function Post(props: { content: string, fileName: string, sha: string, path: string }) {

  const defaultTemplate = 
`---
date: ${format(Date.now(), 'LLLL d, yyyy')}
title: 
featured: true
draft: false
tags:
  - anki
  - zettelkasten
summary: You can’t have an async constructor in C#, but sometimes you need to have async initialization logic.
---
`;

  const [postMD, setPostMD] = useState(props.content || defaultTemplate);

  const [slug, setSlug] = useState(props.fileName);

  const [sha, setSha] = useState(props.sha);

  const router = useRouter();

  const onSubmit = () => {
    postData("/api/posts", {
      post: postMD,
      slug: slug,
      sha: sha
    });
    router.refresh();
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
      <Button className="mt-2" variant="outline" onClick={() => onSubmit()}>Post</Button>
    </div>
  );
}