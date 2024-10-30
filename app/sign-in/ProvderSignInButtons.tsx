"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

const ProvderSignInButtons = () => {
  return (
    <div className="join join-vertical space-y-3 items-center  ">
      <div className="divider mt-5">or</div>
      <button
        className="btn btn-outline btn-md min-w-60"
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      >
        <Image
          src="/icons8-google-48.png"
          alt="GitHub logo"
          width={32}
          height={32}
        />
        Sign in with Google
      </button>
      <button
        className="btn btn-outline btn-md min-w-60"
        onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
      >
        <Image
          src="/icons8-github-48.png"
          alt="GitHub logo"
          width={32}
          height={32}
        />
        Sign in with GitHub
      </button>
    </div>
  );
};

export default ProvderSignInButtons;
