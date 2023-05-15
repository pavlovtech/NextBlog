"use server";

import { redirect } from "next/navigation";
import { createNewPost, getAllPosts } from "./_actions";
import Post from "./components/post";
import { getServerSession } from "next-auth/next";
import { authOptions } from "configs/auth-options";
import { LoginButton, LogoutButton, ProfileButton, RegisterButton } from "./components/buttons";

const Admin = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  const posts = await getAllPosts();

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  return (
    <>
      {posts.map((post, idx) => (
          <p key={idx}>{post.name}</p>
        ))}
      <Post />
    </>

  )
}

export default Admin