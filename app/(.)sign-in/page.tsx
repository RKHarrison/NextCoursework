"use client";
import React from "react";
import Modal from "@/app/components/Modal";
import SignInForm from "@/app/sign-in/SignInForm";

const SignInModal = () => {
  return (
    <Modal title="Sign in">
      <SignInForm/>
    </Modal>
  );
};

export default SignInModal;
