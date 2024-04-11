"use client";
import React from "react";
import Image from "next/image";
import { Noto_Sans_Hebrew } from "next/font/google";
import logo from "@/public/images/logoPart.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import validator from "validator";

const passwordLength = 20;

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" })
    .refine(
      (email) =>
        validator.isEmail(email, {
          host_whitelist: ["masteradv.vip"],
        }),
      {
        message: "Email must end with @masteradv.vip",
      }
    ),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(passwordLength, {
      message: "Password must be at least 20 characters long",
    }),
});

type LoginSchema = z.infer<typeof loginSchema>;
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

const notoTitle = Noto_Sans_Hebrew({ subsets: ["hebrew"], weight: ["700"] });
const notoformBody = Noto_Sans_Hebrew({ subsets: ["hebrew"], weight: ["600"] });

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    console.log(data);

    try {
      const response = await fetch("http://localhost:4000/checkUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    reset();
  };

  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-black">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src={logo}
            alt="Your Company"
            width={60}
            height={60}
          />
          {/* Title */}
          <h2
            className={`mt-10 text-white text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ${notoTitle.className}`}
          >
            כניסה למערכת מנהל
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className={`space-y-6 ${notoformBody.className}`}
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium leading-6 text-white"
              >
                מייל
              </label>
              <div className="mt-2">
                <input
                  {...register("email")}
                  id="email"
                  name="email"
                  // type="email"
                  type="text"
                  autoComplete="email"
                  spellCheck="false"
                  // required
                  className="block w-full text-black rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <div className="bg-red-300 rounded-md h-[2.2rem] mt-1 flex items-center">
                    <p className="text-red-600 mr-2">{errors.email.message}</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg font-medium leading-6 text-white"
                >
                  סיסמה
                </label>
                {/* <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  {...register("password")}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  // required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <div className="bg-red-300 rounded-md h-[2.2rem] mt-1 flex items-center">
                    <p className="text-red-600 mr-2">
                      {errors.password.message}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex items-center h-[3rem] w-full justify-center rounded-md bg-primary px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                כניסה
              </button>
            </div>
          </form>

          {/* <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p> */}
        </div>
      </div>
    </>
  );
}
