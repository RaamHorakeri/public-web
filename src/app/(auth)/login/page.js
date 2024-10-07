"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getOAuthUrl, loginApi, twoFA_Api } from "@/api/auth";
import { nanoid } from "nanoid";
import Cookies from "js-cookie";
import Spinner from "@/components/spinner";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [activationId, setActivationId] = useState("");
  const [clientId] = useState(nanoid());

  const [errorMsg, setErrorMsg] = useState("");
  const [otpMsg, setOtpMsg] = useState("");
  const [otpError, setOtpError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const googleHandler = async (e) => {
    e.preventDefault();
    try {
      const oauthUrl = await getOAuthUrl("google", "login");
      window.location.href = oauthUrl;
    } catch (error) {
      alert(
        "An error occurred while trying to sign in with Google. Please try again.",
      );
    }
  };

  const gitHubHandler = async (e) => {
    e.preventDefault();
    try {
      const oauthUrl = await getOAuthUrl("github", "login");
      window.location.href = oauthUrl;
    } catch (error) {
      alert(
        "An error occurred while trying to sign in with GitHub. Please try again.",
      );
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!activationId) {
        // First step: login attempt
        const result = await loginApi(email, password, clientId);
        if (result.activation_id) {
          setActivationId(result.activation_id); // Store activation ID to ask for OTP

          setOtpMsg("OTP sent to your email, please enter it.");
        } else {
          // No OTP needed, directly login (this might vary based on backend response)
          storeAccessToken(result);
          setLoading(true);

          router.push("/");
        }
      } else {
        // Second step: submit OTP
        const result = await twoFA_Api(
          email,
          password,
          clientId,
          activationId,
          otp,
        );
        storeAccessToken(result); // Store token once OTP is verified

        setLoading(true);
        router.push("/");
      }
    } catch (error) {
      // console.log(error.message)
      setErrorMsg(error.message);
      setLoading(false);
      // if(error.message.includes("Unauthorized")){
      //   setLoading(false)
      //   setErrorMsg("")
      //   setOtpError("Incorrect OTP")
      // }else{
      //   setLoading(false)
      // setErrorMsg("Invalid Credentials, Please enter correct details")
      // }
    }
  };

  const storeAccessToken = (result) => {
    const expiresAt = new Date(result.expires_at);

    Cookies.set("access_token", result.access_token, { expires: expiresAt });
    // Cookies.set('refresh_token', result.refresh_token, { expires: expiresAt });
  };

  return (
    <section className=" bg-[#ffffff] flex h-[1024px] items-center justify-center p-[80px] gap-4 ">
      <div className="flex flex-col justify-between w-[44%] h-[100%]">
        <div className=" bg-[#F3F3F3] rounded-[20px] p-[32px] gap-[50px] h-[80%] flex flex-col ">
          <p className=" text-[18px] font-normal leading-[24.55px] text-[#777777] ">
            Sign in now to unlock a world of lettarning opportunities and take
            the first step towards becoming a software engineer.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            {errorMsg && (
              <p className="text-red-500 text-sm mt-2">{errorMsg}</p>
            )}
            <div>
              <label className="block text-[16px] font-normal leading-[21.82px] text-[#1C1C1C] mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-[#ffffff] rounded-[22px] px-[16px] py-[12px] h-[50px] outline-none"
                disabled={!!activationId}
              />
            </div>
            <div>
              <label className="block text-[16px] font-normal leading-[21.82px] text-[#1C1C1C] mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-[#ffffff] rounded-[22px] px-[16px] py-[12px] h-[50px] outline-none"
                disabled={!!activationId}
              />
              <Link
                href="/forgotpassword"
                className=" float-right mt-2 text-[#1C1C1C] font-normal text-[16px] leading-[21.82px] "
              >
                Forgot password
              </Link>
            </div>
            {activationId && (
              <div>
                <p className="text-green-600 text-sm mt-2">{otpMsg}</p>
                <label className="block text-[16px] font-normal leading-[21.82px] text-[#1C1C1C] mb-2">
                  OTP
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter the OTP sent to your email"
                  className="w-full bg-[#ffffff] rounded-[22px] px-[16px] py-[12px] h-[50px] outline-none"
                />
                <p className="text-red-500 text-sm mt-2">{otpError}</p>
              </div>
            )}
            <button
              type="submit"
              className="w-full p-[10px] bg-[#1C1C1C] text-white rounded-[22px] text-[18px] font-bold leading-[24.55px] my-4"
            >
              {loading && <Spinner />}
              {activationId ? "Submit OTP" : "Sign In"}
            </button>

            <div className="flex items-center justify-between">
              <hr className="w-full border-[#CFCFCF]" />
              <span className="mx-2 text-[#A4A4A4] text-[16px] font-normal leading-[19.2px]">
                or
              </span>
              <hr className="w-full border-[#CFCFCF]" />
            </div>

            <div className="flex space-x-4">
              <button
                onClick={googleHandler}
                className="w-1/2 p-3 border border-[#A4A4A4] flex items-center justify-center rounded-[22px] text-[18px] leading-[24.55px] font-normal"
              >
                <Image
                  src="/images/google.png"
                  width={20}
                  height={20}
                  alt="googleLogo"
                  className="mr-2"
                />
                Sign in with Google
              </button>
              <button
                onClick={gitHubHandler}
                className="w-1/2 p-3 border border-[#A4A4A4] flex items-center justify-center rounded-[22px] text-[18px] leading-[24.55px] font-normal "
              >
                <Image
                  src="/images/Github.png"
                  width={20}
                  height={20}
                  alt="githubLogo"
                  className="mr-2"
                />
                Sign in with Github
              </button>
            </div>

            <p className="text-center mt-4 text-[18px] leading-[24.55px] font-normal text-[#4A4A4A] ">
              Didn&apos;t have an account?{" "}
              <Link href="/signup" className="text-[#1C1C1C]">
                Sign Up Here
              </Link>
            </p>
          </form>
        </div>
        <div className=" bg-[#F3F3F3] flex items-center justify-between rounded-[20px] h-[15%]  p-[20px]">
          <div className="flex items-center">
            <div className="flex relative mr-10 w-[75px] h-[45px]">
              <Image
                src="/images/ellipse6.svg"
                alt="userIcon"
                width={45}
                height={45}
                className="absolute left-0 rounded-full z-10"
              />
              <Image
                src="/images/ellipse7.svg"
                alt="userIcon"
                width={45}
                height={45}
                className="absolute left-[25px] rounded-full z-20"
              />
              <Image
                src="/images/ellipse6.svg"
                alt="userIcon"
                width={45}
                height={45}
                className="absolute left-[50px] rounded-full z-30"
              />
            </div>

            <div>
              <p className="text-[#262626] text-[20px] leading-[27.28px] font-bold">
                Join with 20k+ Users!
              </p>
              <p className="text-[#B7B7B7] text-[14px] leading-[19.1px] font-normal">
                Let&apos;s see our happy customer
              </p>
            </div>
          </div>
          <button className="p-3 rounded-full">
            <Image
              src="/images/topArrowRigth.svg"
              alt="topRightArrow"
              width={48}
              height={48}
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between w-[44%] h-[100%] bg-[url('/images/loginBg.png')] bg-cover bg-center rounded-[20px] p-[28px] ">
        <p className=" text-[#ffffff] text-[36px] leading-[42px] font-bold ">
          Al Revolutionizing the way we create, render, and experience content.
        </p>
        <div className="flex flex-col justify-between bg-[#8967D4A3] w-[100%] h-[200px] p-[30px] rounded-[20px] ">
          <div className="  flex justify-between items-center  ">
            <div className="flex">
              <Image
                src="/images/Ellipse8.svg"
                alt="circleIcon"
                width={55}
                height={55}
              />
              <p className="-ml-5 border-[2px] border-[#fafafa]  text-center py-[16px] rounded-[20px] w-[170px] text-[16px] font-normal leading-[21.82px] text-[#fafafa] ">
                Creating
              </p>
            </div>
            <div className=" flex items-center justify-center ">
              <Image
                src="/images/topArrowleft.svg"
                alt="topRightArrow"
                width={55}
                height={55}
              />
              <Image
                src="/images/topArrowRigth.svg"
                alt="topRightArrow"
                width={55}
                height={55}
              />
            </div>
          </div>

          <p className=" text-[#FAFAFA] font-normal text-[14px] leading-[19.1px] ">
            Create design brief with Al voice command to make awesome <br />
            3d images that suits your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
