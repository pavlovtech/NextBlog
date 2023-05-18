"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "./button";

export const LoginButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signIn()}>
      Sign in
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/register" style={{ marginRight: 10 }}>
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <Button className="ml-4" variant="destructive" onClick={() => signOut()}>Sign Out</Button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};
