"use client";
import React from "react";
import { signIn } from "next-auth/react";

const ProvderSignInButtons = () => {
  return (
    <div className="join join-vertical space-y-5 items-center">
      <button 
        className="btn btn-primary btn-md min-w-52"
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      >
        Sign in with Google
      </button>
      <button
        className="btn btn-primary btn-md min-w-52"
        onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
      >
        Sign in with GitHub
      </button>
    </div>
  );
};

export default ProvderSignInButtons;
