"use server";

import { redirect } from "next/navigation";
import { createNewPost, getAllPosts } from "./_actions";
import Post from "./components/post";
import { getServerSession } from "next-auth/next";
import { authOptions } from "configs/auth-options";
import { LoginButton, LogoutButton, ProfileButton, RegisterButton } from "./components/buttons";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from "react";

const Admin = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  const posts = await getAllPosts();

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  return (
    <>
      {posts.map((post: { name: string }, idx: Key) => (
          <p key={idx}>{post.name}</p>
        ))}
      {/* @ts-expect-error Server Component */}
      <Post />
    </>

  )
}

export default Admin