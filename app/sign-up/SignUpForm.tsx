"use client";
import clsx from "clsx";
import { sign } from "crypto";
import Link from "next/link";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

type formData = {
  Email: string;
  Password: string;
  Name: string;
};

const SignUpForm = () => {
  const [userExistsError, setUserExistsError] = React.useState<string | null>(
    null
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    console.log(data);
    const signUpAttempt = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.Email,
        password: data.Password,
        name: data.Name,
      }),
    });
    const signUpResponse = await signUpAttempt.json();

    signUpAttempt.ok && console.log("Sign up successful");
    signUpResponse.message === 'User already exists' &&
      setUserExistsError(signUpResponse.message);
  };

  useEffect(() => {
    console.log(userExistsError);
  }, [userExistsError]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form-control space-y-5 items-center"
    >
      {/* The email input field */}
      <label
        className={clsx(
          "input input-bordered flex items-center gap-2 min-w-full",
          errors.Email && "input-error border-x-8",
          userExistsError && "input-error border-x-8"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input
          type="text"
          className="grow"
          placeholder="Email"
          {...register("Email", {
            required:
              "Please provide a valid email address to create an account.",
            pattern: {
              value: /^\S+@\S+\.\S{2,}$/i,
              message: "Invalid email address",
            },
            onChange: () => setUserExistsError(null),
          })}
        />
      </label>
      <p className="text-error">{errors.Email?.message as string}</p>

      {/* The password input field */}
      <label
        className={clsx(
          "input input-bordered flex items-center gap-2 min-w-full",
          errors.Password && "input-error border-x-8"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="password"
          className="grow"
          placeholder="Password"
          {...register("Password", {
            required: "Please provide a valid password to create the account.",
            maxLength: { value: 12, message: "Password is too long" },
            minLength: { value: 5, message: "Password is too short" },
          })}
        />
      </label>

      <p className="text-error">{errors.Password?.message as string}</p>

      {/* The name input field */}
      <label
        className={clsx(
          "input input-bordered flex items-center gap-2 min-w-full",
          errors.Name && "input-error border-x-8"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input
          type="text"
          className="grow"
          placeholder="Your name"
          {...register("Name", {
            required: "Please provide the name of the owner of this account.",
            maxLength: { value: 70, message: "Provided name is too long." },
            minLength: { value: 2, message: "Provided name is two short" },
            pattern: {
              value: /^[\p{L}\p{M}'\-\. ]+$/u,
              message: "Invalid name provided.",
            },
          })}
        />
      </label>
      <p className="text-error">{errors.Name?.message as string}</p>

      {/* The error message for user already exists */}
      {userExistsError && <p className="text-error">{userExistsError}</p>}

      {/* The link to the sign-in page */}
      <Link href="/sign-in" className="link link- link-hover">Already have an account? Sign in here.</Link>

      {/* The submit button */}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignUpForm;
