import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "configs/auth-options";
import { getAllPosts } from "app/admin-backend";
import { LogoutButton } from "../components/buttons";
import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";

import { columns } from "../components/posts-list/columns"
import { DataTable } from "../components/posts-list/data-table"
import { buttonVariants } from "../components/button";
import { compareDesc } from "date-fns";
import { PostWithStatus } from "./post-with-status.model";

const Admin = async () => {
  
  const session = await getServerSession(authOptions);

  const postsFromGitHub = await getAllPosts();

  let posts = postsFromGitHub.map((p: any) => {

    let generatedPost = allPosts.filter((gp: any) => gp._id == p.name)[0];

    return {
      ...p,
      date: generatedPost.publishedAt,
      status: generatedPost ? 'published' : 'publising',
    }
  })
  .sort((a: any, b: any) => compareDesc(new Date(a.date), new Date(b.date)));

  // const generatedPosts = allPosts
  //   .filter(p => p.draft !== true)
  //   .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  //   .map(p => {

  //     let githubPost = postsFromGitHub.filter((gp: any) => gp.name == p._id)[0];

  //     return {
  //       ...p,
  //       status: githubPost ? 'published' : 'publising',
  //       sha: githubPost.sha
  //     } as PostWithStatus;
  //   });

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  return (
    <>
      <div className="pb-5 fload-right">
        <Link href='/admin/posts/create' className={buttonVariants({ variant: "outline" })}>Create a new post</Link>
        <LogoutButton />
      </div>

      <DataTable columns={columns} data={posts} />
    </>

  )
}

export default Admin