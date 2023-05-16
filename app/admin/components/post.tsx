"use client";

import { redirect, useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

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

export default function Post() {
  const router = useRouter();
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => {
    postData("/api/posts", data);
    router.push('/admin/posts');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-sm'>
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
    </form>
    </div>
  );
}