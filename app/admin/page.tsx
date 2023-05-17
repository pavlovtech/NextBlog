import 'server-only';
import { redirect } from "next/navigation";
import { getAllPosts } from "../admin-backend";
import { getServerSession } from "next-auth/next";
import { authOptions } from "configs/auth-options";
import { LoginButton, LogoutButton, ProfileButton, RegisterButton } from "../../components/admin-components/components/buttons";
import { Key } from "react";

const Admin = async () => {
  const session = await getServerSession(authOptions);
  //console.log(session);

  const posts = await getAllPosts();

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  return (
    <>
      <div>
        <LogoutButton />
      </div>
      <p>Hello to Admin Panel!</p>
    </>

  )
}

export default Admin