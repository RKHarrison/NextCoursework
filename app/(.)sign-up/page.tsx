import React from "react";
import Modal from "@/app/components/Modal";
import SignUpForm from "@/app/sign-up/SignUpForm";

const SignUpModal = () => {
  return (
    <Modal title="Sign up for a new account">
      <SignUpForm/>
    </Modal>
  );
};

export default SignUpModal;
