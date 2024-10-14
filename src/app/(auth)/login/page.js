"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { getOAuthUrl, loginApi, twoFA_Api } from "@/api/auth";
import { nanoid } from "nanoid";
import Cookies from "js-cookie";
import Spinner from "@/components/spinner";
import LoginSection from "../_components/LoginSection";
import JoinUsers from "../_components/JoinUsers";

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
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSwapped, setIsSwapped] = useState(false);

  const searchParams = useSearchParams();

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

    const redirect = searchParams.get("redirect");

    try {
      if (!activationId) {
        // First step: login attempt
        const result = await loginApi(email, password, clientId);
        if (result.activation_id) {
          setActivationId(result.activation_id); // Store activation ID to ask for OTP
          setLoading(false);
          setIsSwapped(true);
          setOtpMsg("OTP sent to your email, please enter it.");
        } else {
          // No OTP needed, directly login (this might vary based on backend response)
          storeAccessToken(result);
          setLoading(false);

          if (redirect) {
            window.location.href = redirect;
          } else {
            window.location.href = "/";
          }
        }
      } else {
        setLoading(false);
        // Second step: submit OTP
        const result = await twoFA_Api(
          email,
          password,
          clientId,
          activationId,
          otp,
        );
        storeAccessToken(result); // Store token once OTP is verified

        if (redirect) {
          window.location.href = redirect;
        } else {
          window.location.href = "/";
        }
      }
    } catch (error) {
      // console.log(error.message)
      setOtpError(error.message);
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
    <section className="bg-[#ffffff] flex h-[100vh] items-center justify-center p-[40px] gap-4">
      <div
        className={`flex flex-col justify-between gap-5 w-[35%] h-[100%] transition-transform duration-500 ease-in-out transform ${
          isSwapped ? "order-2" : "order-1"
        }`}
      >
        <div
          className={`${
            !activationId ? "bg-[#F3F3F3]" : ""
          } rounded-[20px] p-[20px] gap-[30px] h-[90%] flex flex-col justify-center`}
        >
          {!activationId && (
            <p className="text-[14px] font-normal leading-[20px] text-[#777777]">
              Sign up now to unlock a world of learning opportunities and take
              the first step towards becoming a software engineer.
            </p>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            {!activationId && (
              <div>
                {errorMsg && (
                  <p className="text-red-500 text-sm mb-1">{errorMsg}</p>
                )}
                <div className="flex items-center bg-[#ffffff] mb-2 rounded-[22px] px-[12px] py-[8px] h-[45px] border border-[#e2e2e2]">
                  <Image
                    src="/images/emialIcon.svg"
                    alt="email icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrorMsg("");
                    }}
                    placeholder="hello@gmail.com"
                    className="w-full bg-[#ffffff]  outline-none"
                    disabled={!!activationId}
                  />
                </div>
                <div>
                  <div className="flex relative items-center bg-[#ffffff] rounded-[22px] px-[12px] py-[8px] h-[45px] border border-[#e2e2e2]">
                    <Image
                      src="/images/passwordIcon.svg"
                      alt="password icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />

                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setErrorMsg("");
                      }}
                      placeholder="Password"
                      className="w-full bg-[#ffffff]  outline-none"
                      disabled={!!activationId}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3"
                    >
                      <Image
                        src={
                          showPassword
                            ? "/images/eyeClosedIcon.svg"
                            : "/images/eyeOpenIcon.svg"
                        }
                        alt="toggle password visibility"
                        width={19}
                        height={19}
                      />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-2 mb-10">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        className="mr-2 w-[15px] h-[15px]  "
                      />
                      <span className="text-[#B7B7B7] font-normal text-[16px] leading-[21.82px]">
                        Remember me
                      </span>
                    </div>

                    <Link
                      href="/forgotpassword"
                      className="text-[#1C1C1C] font-normal text-[14px] leading-[20px]"
                    >
                      Forgot password
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activationId && (
              <div className="flex flex-col p-4 py-10 border-[2px]  bg-[#FFFFFF] gap-[25px] ">
                <p className="text-[32px] font-extrabold leading-[43.65px] text-[#01010C] text-center">
                  2-Factor Authentication
                </p>
                <div className="flex flex-col ">
                  <label className="text-[#01010C] text-[16px] font-normal leading-[21.82px]">
                    Enter 6-digit Code that you received in your mail
                  </label>
                  <input
                    type="text"
                    placeholder="OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    className="bg-[#F2F1F2] h-[50px] rounded-[22px] mt-2 px-4 py-4 outline-none"
                  />
                  {otpError && (
                    <p className="text-red-500 mt-1 text-sm">{otpError}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={!otp || otpError}
                  className="bg-[#1C1C1C] h-[50px] text-[#FFFFFF] text-[18px] leading-[24.55px] font-bold rounded-[22px]"
                >
                  {loading ? <Spinner /> : "Submit"}
                </button>
              </div>
            )}
            {!activationId && (
              <button
                type="submit"
                disabled={!email || !password || errorMsg}
                className={`w-full p-[8px] text-white rounded-[16px] text-[16px] font-bold leading-[22px] my-3 
                  ${
                    !email || !password || errorMsg
                      ? "bg-gray-400 cursor-not-allowed opacity-50"
                      : "bg-[#1C1C1C] hover:bg-[#333333]"
                  }          
                `}
              >
                {loading ? <Spinner /> : "Sign In"}
              </button>
            )}

            {!activationId && (
              <div>
                <div className="flex items-center justify-between">
                  <hr className="w-full border-[#CFCFCF]" />
                  <span className="mx-2 text-[#A4A4A4] text-[14px] font-normal leading-[20px]">
                    or
                  </span>
                  <hr className="w-full border-[#CFCFCF]" />
                </div>

                <div className="mt-3 flex space-x-8">
                  <button
                    onClick={googleHandler}
                    className="w-1/2 p-[8px] border border-[#A4A4A4] flex items-center justify-center rounded-[16px] text-[14px] leading-[20px] font-normal"
                  >
                    <Image
                      src="/images/google.png"
                      width={16}
                      height={16}
                      alt="googleLogo"
                      className="mr-1"
                    />
                    Sign in with Google
                  </button>
                  <button
                    onClick={gitHubHandler}
                    className="w-1/2 p-[8px] border border-[#A4A4A4] flex items-center justify-center rounded-[16px] text-[14px] leading-[20px] font-normal"
                  >
                    <Image
                      src="/images/Github.png"
                      width={16}
                      height={16}
                      alt="githubLogo"
                      className="mr-1"
                    />
                    Sign in with Github
                  </button>
                </div>
              </div>
            )}
          </form>
          {!activationId && (
            <p className="text-center text-[14px] leading-[20px] font-normal mt-2 text-[#4A4A4A]">
              Didn&apos;t have an account?{" "}
              <Link href="/signup" className="text-[#1C1C1C]">
                Sign Up Here
              </Link>
            </p>
          )}
        </div>
        {!activationId && <JoinUsers />}
      </div>

      <LoginSection isSwapped={isSwapped} />
    </section>
  );
};

export default Page;
