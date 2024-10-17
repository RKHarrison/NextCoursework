import React from "react";
import SignInForm from "./SignInForm";

const SignInPage = () => {
  return (
    <div className=" px-20 pb-5 rounded-lg bg-slate-100">
      <div className="text-4xl font-bold text-center my-10 ">
        Please Sign In
      </div>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
