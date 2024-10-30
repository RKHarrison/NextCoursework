import React from "react";
import Modal from "@/app/components/Modal";
import ChangePasswordForm from "@/app/dashboard/change-password/ChangePasswordForm";

const changePasswordModal = () => {
  return (
    <Modal title="Change password">
      <ChangePasswordForm />
    </Modal>
  );
};

export default changePasswordModal;
