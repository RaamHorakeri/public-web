"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";

const defaultErrorMsg = {
  email: null,
  password: null,
};
const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(defaultErrorMsg);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage(defaultErrorMsg);
    let errors = {};
    if (!email) {
      errors.email = "email should not be empty.";
    }

    if (!password) {
      errors.password = "password should not be empty.";
    }

    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors);
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3050/api/v1/account/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        },
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        router.push("/");
      } else {
        const errorData = await response.json();

        setErrorMessage(errorData.message || "login failed. Please try again.");
        console.error("Login failed:", data.error);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
      console.error("Error:", error);
    }
  };

  const handleGoogleLogin = () => {
    // window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=http://localhost:3000/&response_type=code&scope=openid%20email%20profile`;
  };

  const handleGitHubLogin = () => {
    // window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=http://localhost:3000/&scope=user:email`;
  };

  return (
    <section className="flex justify-center items-center h-screen mt-12 mb-20">
      <div className="w-[680px] h-auto bg-[#F3F3F3] p-[80px] gap-[24px] border border-secondary-100">
        <h1 className="w-[520px] h-[35px] mx-auto font-roboto font-bold text-m leading-[35.2px] text-center text-[#21272A]">
          Login
        </h1>
        <form
          className="mt-[40px] flex flex-col items-center gap-1"
          onSubmit={handleSubmit}
        >
          <label className="w-[520px] text-left font-roboto font-normal text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
            User Name / Email
          </label>
          <Input
            type="text"
            value={email}
            onChange={(e) => {
              const email = e.target.value;
              setEmail(email);
              if (errorMessage.email && email.length > 0) {
                setErrorMessage((error) => {
                  return { ...error, email: null };
                });
              }
            }}
          />
          {errorMessage.email && (
            <div className="w-[520px] mt-1  text-red-500 text-[12px]">
              *{errorMessage.email}
            </div>
          )}

          <label className="w-[520px] text-left font-roboto font-normal text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
            Password
          </label>
          <Input
            type="password"
            value={password}
            onChange={(e) => {
              const password = e.target.value;
              setPassword(password);
              if (errorMessage.password && password.length > 0) {
                setErrorMessage((error) => {
                  return { ...error, password: null };
                });
              }
            }}
          />

          {errorMessage.password && (
            <div className="w-[520px] mt-1  text-red-500 text-[12px]">
              *{errorMessage.password}
            </div>
          )}
          <div className="w-[520px] h-[20px] flex justify-between items-center mb-[24px]">
            <div className="flex items-center">
              <Input
                type="checkbox"
                id="rememberMe"
                className="mr-[8px]"
                width="w-[15px]"
                height="h-[15px]"
              />

              <label
                htmlFor="rememberMe"
                className="font-roboto text-[14px] leading-[16.8px] font-normal text-[#B7B7B7]"
              >
                Remember me
              </label>
            </div>
            <Link
              href="/forgotpassword"
              className="font-roboto text-[14px] leading-[16.8px] font-normal text-primary"
            >
              Forgot password?
            </Link>
          </div>

          <p className="w-[520px] text-center text-xs font-roboto font-normal leading-[19.2px] text-[#CFCFCF] mb-[24px]">
            or
          </p>

          <div className="w-[520px] flex justify-between mb-[24px]">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center space-x-2 w-[244px] h-[50px] rounded-3xl p-3 bg-white border border-[#B7B7B7]"
            >
              <Image
                src="/images/google.png"
                width={20}
                height={20}
                alt="googleLogo"
              />
              <span className="text-[#0A0A0B] font-roboto text-xs leading-[19.2px] font-normal">
                Sign in with Google
              </span>
            </button>
            <button
              type="button"
              onClick={handleGitHubLogin}
              className="flex items-center justify-center space-x-2 w-[244px] h-[50px] rounded-3xl p-3 bg-white border border-[#B7B7B7]"
            >
              <Image
                src="/images/Github.png"
                width={20}
                height={20}
                alt="githubLogo"
              />
              <span className="text-[#0A0A0B] font-roboto text-xs leading-[19.2px] font-normal">
                Sign in with GitHub
              </span>
            </button>
          </div>

          <button className="w-[520px] h-[48px] bg-primary text-secondary-100 font-roboto font-medium text-xs leading-[16px] mt-6">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Page;
