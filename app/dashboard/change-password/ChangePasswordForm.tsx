'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import clsx from 'clsx'

type formData = {
    currentPassword: string;
    newPassword: string;
  };

const ChangePasswordForm = () => {
    const [apiError, setApiError] = React.useState<string | null>(null);
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<formData>();
  
    const onSubmit = async (data: formData) => {
      setApiError(null);
  
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
  
      if (changePassword.status !== 200) {
        const error = await changePassword.json();
        setApiError(error.message);
      }
      else alert("Password changed successfully")
    };
  
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-control space-y-5 items-center"
      >
        <label
          className={clsx(
            "input input-bordered flex items-center gap-2 min-w-full",
            errors.newPassword && "input-error border-x-8",
            apiError === "Incorrect password" && "input-error border-x-8"
          )}
        >
          Current:
          <input
            type="password"
            placeholder="Input current password"
            {...register("currentPassword", {
              required: "Please enter your current password.",
              maxLength: { value: 12, message: "Password is too long" },
              minLength: { value: 5, message: "Password is too short" },
            })}
            className="grow"
          />
        </label>
        <p className="text-error">{errors.currentPassword?.message as string}</p>
  
        <label
          className={clsx(
            "input input-bordered flex items-center gap-2 min-w-full",
            errors.newPassword && "input-error border-x-8"
          )}
        >
          New:
          <input
            type="password"
            placeholder="Input new password"
            {...register("newPassword", {
              required: "Please enter a new password.",
              maxLength: { value: 12, message: "Password is too long" },
              minLength: { value: 5, message: "Password is too short" },
            })}
            className="grow"
          />
        </label>
        <p className="text-error">{errors.newPassword?.message as string}</p>
  
        <button type="submit" className="btn btn-primary min-w-60">
          Change Password
        </button>
  
        <p className="text-error">{apiError}</p>
      </form>
    );
  };

export default ChangePasswordForm