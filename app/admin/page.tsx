"use server";

import { redirect } from "next/navigation";
import { createNewPost } from "./_actions";
import Post from "./components/post";
import { getServerSession } from "next-auth/next";
import { authOptions } from "configs/auth-options";

const Admin = async({ params }: { params: { slug: string } }) => {
  const session = await getServerSession(authOptions);

  console.log('session', session)

  if (!session) {
    redirect('/admin/signin?callbackUrl=/')
  }
  
    return (<Post />)
  }
  
  export default Admin