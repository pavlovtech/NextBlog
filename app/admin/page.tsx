"use server";

import { createNewPost } from "./_actions";
import Post from "./components/post";

const Admin = async({ params }: { params: { slug: string } }) => {
    return (<Post />)
  }
  
  export default Admin