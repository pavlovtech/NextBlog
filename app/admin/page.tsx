import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "configs/auth-options";
import { Key } from "react";

const Admin = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  redirect('/admin/posts');
}

export default Admin