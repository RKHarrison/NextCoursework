'use client'
import React from "react";
import { signOut } from "next-auth/react";

const SignOutPage = () => {
  return (
    <div className="join join-vertical space-y-5 mt-10">
      <h2>Are you sure you want to sign out?</h2>
      <button className="btn btn-outline"onClick={() => signOut()}>Yes, sign out</button>
    </div>
  );
};

export default SignOutPage;
