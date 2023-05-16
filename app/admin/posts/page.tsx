import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "configs/auth-options";
import { Key } from "react";
import { getAllPosts } from "app/admin-backend";
import { LogoutButton } from "../components/buttons";
import Link from "next/link";

const Admin = async () => {
  const session = await getServerSession(authOptions);
  //console.log(session);

  const posts = await getAllPosts();

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  return (
    <>
      <div className="pb-5">
        <Link href='/admin/posts/create' className='bg-green-600 color p-4 mr-10 w-100 text-white'>Create a new post</Link>
        <LogoutButton />
      </div>
      <ul>
      {posts.map((post: { name: string }, idx: Key) => (
        <li key={idx}><Link href='{`/admin/posts/${post.name}`}' className='text-white'>{post.name}</Link></li>
      ))}
      </ul>
    </>

  )
}

export default Admin