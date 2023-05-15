import { redirect } from "next/navigation";
import { createNewPost, getAllPosts } from "./backend";
import Post from "./components/post";
import { getServerSession } from "next-auth/next";
import { authOptions } from "configs/auth-options";
import { LoginButton, LogoutButton, ProfileButton, RegisterButton } from "./components/buttons";
import { Key } from "react";

const Admin = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  const posts = await getAllPosts();

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  return (
    <>
      <div>
        <LogoutButton />
      </div>
      {posts.map((post: { name: string }, idx: Key) => (
          <p key={idx}>{post.name}</p>
        ))}
      {/* @ts-expect-error Server Component */}
      <Post />
    </>

  )
}

export default Admin