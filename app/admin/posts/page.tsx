import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "configs/auth-options";
import { Key } from "react";
import { getAllPosts } from "app/admin-backend";
import { LogoutButton } from "../components/buttons";
import Link from "next/link";

import { PostItem, columns } from "../components/posts-list/columns"
import { DataTable } from "../components/posts-list/data-table"
import { buttonVariants } from "../components/button";

const Admin = async () => {
  const session = await getServerSession(authOptions);
  //console.log(session);

  const posts = await getAllPosts();

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  return (
    <>
      <div className="pb-5 fload-right">
        <Link href='/admin/posts/create' className={buttonVariants({ variant: "outline" })}>Create a new post</Link>
        <LogoutButton />
      </div>
      {/* <ul className="">
      {posts.map((post: { name: string }, idx: Key) => (
        <li key={idx}><Link href={`/admin/posts/${post.name}`} className='text-white'>{post.name}</Link></li>
      ))}
      </ul> */}

      <DataTable columns={columns} data={posts} />
    </>

  )
}

export default Admin