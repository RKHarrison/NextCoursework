import React from "react";
import SignInForm from "./SignInForm";
import ProvderSignInButtons from "./ProvderSignInButtons";

const SignInPage = () => {
  return (
    <div className="form-control space-y-5 items-center px-20 pb-5 rounded-lg bg-slate-100">
      <h1 className="text-4xl font-bold text-center mt-5 ">Sign In</h1>
      <SignInForm />
      <ProvderSignInButtons />
    </div>
  );
};

export default SignInPage;
