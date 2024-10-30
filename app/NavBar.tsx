"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-200 p-5 space-x-10">
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
      {status === "loading" && (
        <span className="loading loading-dots loading-sm"></span>
      )}
      {status === "authenticated" && (
        <div>
          <Link href="/dashboard">{session.user!.name}</Link>
          <Link href="/api/auth/signout" className="ml-5">
            Sign Out
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/sign-in" className="mr-5">
          Sign In
        </Link>
      )}
    </div>
  );
};

export default NavBar;
