"use client";
import React from "react";
import { useForm } from "react-hook-form";

type formData = {
  currentPassword: string;
  newPassword: string;
};

const ChangePasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    const changePassword = await fetch("/api/auth/update-password", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      }),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form-control space-y-5 items-center"
    >
      <input
        type="password"
        placeholder="Current Password"
        {...register("currentPassword", { required: true })}
        className="input input-bordered"
      />
      <input
        type="password"
        placeholder="New Password"
        {...register("newPassword", { required: true })}
        className="input input-bordered"
      />
      <button type="submit" className="btn btn-primary">
        Change Password
      </button>
    </form>
  );
};

export default ChangePasswordPage;
