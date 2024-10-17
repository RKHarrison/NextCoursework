"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

type formData = {
  Email: string;
  Password: string;
};

const SignInForm = () => {
  const [loginError, setLoginError] = React.useState<string | null>(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    const loginAttempt = await signIn("credentials", {
      redirect: false,
      email: data.Email,
      password: data.Password,
    });

    loginAttempt?.error
      ? setLoginError("Sign in failed, please try again!")
      : router.back();
  };

  console.log(errors);

  return (
    <>
    <form
      onSubmit={handleSubmit(onSubmit)}
      onChange={() => setLoginError(null)}
      className="form-control space-y-5 items-center"
    >
      {/* The email input field */}
      <label
        className={clsx(
          "input input-bordered flex items-center gap-2 min-w-full",
          errors.Email && "input-error border-x-8"
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
            required: "Your email is required to sign in.",
            pattern: { value: /^\S+@\S+\.\S{2,}$/i, message: "Invalid email address" },
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
            required: "Your password is required to sign in.",
            maxLength: { value: 12, message: "Password is too long" },
            minLength: { value: 5, message: "Password is too short" },
          })}
        />
      </label>
      <p className="text-error">{errors.Password?.message as string}</p>

      {/* The link to the sign-up page */}
      <Link href='/sign-up' className='link link- link-hover'>New user? Sign up here.</Link>
      
      {/* The submit button */}
      <input type="submit" className="btn btn-primary btn-md min-w-52" />

      {/* The login error message */}
      {loginError && <p className="text-red-500">{loginError}</p>}
    </form>
    </>
  );
};

export default SignInForm;
