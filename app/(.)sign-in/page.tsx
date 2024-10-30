import React from "react";
import Modal from "@/app/components/Modal";
import SignInForm from "@/app/sign-in/SignInForm";
import ProvderSignInButtons from "../sign-in/ProvderSignInButtons";

const SignInModal = () => {
  return (
    <Modal title="Sign in">
      <SignInForm />
      <ProvderSignInButtons />
    </Modal>
  );
};

export default SignInModal;
