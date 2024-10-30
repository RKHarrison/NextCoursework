import React from "react";
import Modal from "@/app/components/Modal";
import SignOutForm from "../sign-out/SignOutForm";

const signOutMModal = () => {
  return (
    <Modal title="Sign out">
      <SignOutForm />
    </Modal>
  );
};

export default signOutMModal;
