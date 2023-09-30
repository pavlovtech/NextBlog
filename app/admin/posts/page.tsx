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

  const generatedPosts = allPosts;

  let posts = postsFromGitHub.map((githubPost: any) => {

    let generatedPost = generatedPosts.filter((generatedPost: any) => {
      return generatedPost._raw.sourceFileName== githubPost.name;
    })[0];

    return {
      ...githubPost,
      date: generatedPost.publishedAt,
      status: generatedPost ? 'published' : 'publising',
    }
  })
  .sort((a: any, b: any) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));

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