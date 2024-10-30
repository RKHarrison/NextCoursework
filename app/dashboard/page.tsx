"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const DashboardPage = () => {
  const { status, data: session } = useSession();

  return (
    <div className='flex flex-col'>
      <div> {session?.user && `${session.user.name}'s Dashboard`} </div>
      <Link href="/dashboard/change-password" className="link link-primary link-hover">Change Password</Link>
    </div>
  );
};

export default DashboardPage;
