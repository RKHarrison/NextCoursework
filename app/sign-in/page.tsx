import React from "react";
import SignInForm from "./SignInForm";
import ProvderSignInButtons from "./ProvderSignInButtons";

const SignInPage = () => {
  return (
    <div className="form-control space-y-5 items-center px-20 pb-5 rounded-lg bg-slate-100">
      <div className="text-4xl font-bold text-center my-10 ">
        Please Sign In
      </div>
      <SignInForm />
      <ProvderSignInButtons />
    </div>
  );
};

export default SignInPage;
