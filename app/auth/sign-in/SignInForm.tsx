"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) =>
    await signIn("credentials", { email: data.Email, password: data.Password });
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="Email"
        {...register("Email", {
          required: "Your email is reuired to sign in.",
          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
        })}
      />
      <p>{errors.Email?.message}</p>
      <input
        type="password"
        placeholder="Password"
        {...register("Password", {
          required: "Your password is reuired to sign in.",
          maxLength: { value: 12, message: "Password is too long" },
          minLength: { value: 3, message: "Password is too short" },
        })}
      />
      <p>{errors.Password?.message}</p>
      <input type="submit" />
    </form>
  );
};

export default SignInForm;
