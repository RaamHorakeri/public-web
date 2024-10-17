"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  getOAuthUrl,
  registerUser,
  setPasswordApi,
  verifyOtp,
} from "@/api/auth";
import Cookies from "js-cookie";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";

import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Spinner from "@/components/spinner";
import JoinUsers from "../_components/JoinUsers";

const Page = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [activationId, setActivationId] = useState("");
  const [activationCode, setActivationCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [socialError, setSocialError] = useState("");

  const [isSwapped, setIsSwapped] = useState(false);
  const [loading, setLoading] = useState(false);

  const [publicWebCustomId, setPublicWebCustomId] = useState("");

  const router = useRouter();

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    router.push("/");
  }

  const googleHandler = async (e) => {
    e.preventDefault();
    try {
      const oauthUrl = await getOAuthUrl("google", "signup");
      window.location.href = oauthUrl;
    } catch (error) {
      setSocialError("Failed to signup with google, try again");
    }
  };

  const gitHubHandler = async (e) => {
    e.preventDefault();
    try {
      const oauthUrl = await getOAuthUrl("github", "signup");
      window.location.href = oauthUrl;
    } catch (error) {
      setSocialError("Failed to signup with github, try again");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await registerUser(name, email);
      setActivationId(result.activation_id);
      setIsSwapped(!isSwapped);
      setStep(2);
      setLoading(false);
    } catch (error) {
      if (error) {
        setLoading(false);
        setEmailError("User already registered, Please Login");
      }
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await verifyOtp(activationId, otp);
      setActivationId(result.activation_id);
      setActivationCode(result.activation_code);
      setStep(3);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setOtpError("OTP verification failed, please try again.");
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
    if (confirmPassword && e.target.value !== confirmPassword) {
      setPasswordError("Passwords do not match.");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    if (password && e.target.value !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSetPassword = async (e) => {
    e.preventDefault();

    setPasswordError("");
    setConfirmPasswordError("");

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      return;
    }

    setLoading(true);
    const clientId = nanoid();

    try {
      const result = await setPasswordApi(
        activationId,
        activationCode,
        clientId,
        password,
      );
      const expiresAt = new Date(result.expires_at);
      Cookies.set("access_token", result.access_token, {
        expires: expiresAt,
        path: "/",
      });

      open();

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setPasswordError(error.message);
    }
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
            step === 1 ? "bg-[#F3F3F3]" : ""
          } rounded-[20px] p-[20px] gap-[30px] h-[90%] flex flex-col justify-center`}
        >
          {step === 1 && (
            <p className="text-[14px] font-normal leading-[20px] text-[#777777]">
              Sign up now to unlock a world of learning opportunities and take
              the first step towards becoming a software engineer.
            </p>
          )}

          <form
            onSubmit={
              step === 1
                ? handleRegister
                : step === 2
                  ? handleOtpVerification
                  : handleSetPassword
            }
            className="space-y-4 relative"
          >
            {step === 1 && (
              <>
                <div>
                  <label className="block text-[14px] font-normal leading-[21.82px] text-[#1C1C1C] mb-2 ">
                    Username
                  </label>
                  <div className="flex items-center bg-[#ffffff] mb-2 rounded-[22px] px-[12px] py-[8px] h-[45px] border border-[#e2e2e2]">
                    <Image
                      src="/images/person.svg"
                      alt="email icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full bg-[#ffffff]   outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[14px] font-normal leading-[20px] text-[#1C1C1C] mb-2">
                    Email
                  </label>
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
                        setEmailError("");
                      }}
                      placeholder="hello@gmail.com"
                      className="w-full bg-[#ffffff]   outline-none"
                      required
                    />
                  </div>

                  {emailError && (
                    <p className="text-red-500 text-sm ">{emailError}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={!name || !email || emailError}
                  className={`w-full p-[8px] text-white rounded-[16px] text-[16px] font-bold leading-[22px] my-3 
                    ${
                      !email || !name || emailError
                        ? "bg-gray-400 cursor-not-allowed opacity-50"
                        : "bg-[#1C1C1C] hover:bg-[#333333]"
                    }          
                  `}
                >
                  {loading ? <Spinner /> : "Register"}
                </button>

                <div className="flex items-center justify-between">
                  <hr className="w-full border-[#CFCFCF]" />
                  <span className="mx-2 text-[#A4A4A4] text-[16px] font-normal leading-[19.2px]">
                    or
                  </span>
                  <hr className="w-full border-[#CFCFCF]" />
                </div>

                <div className="flex space-x-8">
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
                    Sign up with Google
                  </button>
                  <button
                    onClick={gitHubHandler}
                    className="w-1/2 p-3 border border-[#A4A4A4] flex items-center justify-center rounded-[22px] text-[18px] leading-[24.55px] font-normal"
                  >
                    <Image
                      src="/images/Github.png"
                      width={20}
                      height={20}
                      alt="githubLogo"
                      className="mr-2"
                    />
                    Sign up with Github
                  </button>
                </div>

                <p className="text-center mt-8 text-[16px] leading-[24.55px] font-normal text-[#4A4A4A]">
                  Already have an account?{" "}
                  <Link href="/login" className="text-[#1C1C1C]">
                    Login Here
                  </Link>
                </p>
              </>
            )}

            {step === 2 && (
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
                    onChange={(e) => {
                      setOtp(e.target.value);
                      setOtpError("");
                    }}
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
                  className={`w-full p-[8px] text-white rounded-[16px] text-[16px] font-bold leading-[22px] my-3 
                    ${
                      !otp || otpError
                        ? "bg-gray-400 cursor-not-allowed opacity-50"
                        : "bg-[#1C1C1C] hover:bg-[#333333]"
                    }          
                  `}
                >
                  {loading ? <Spinner /> : "Submit"}
                </button>
              </div>
            )}

            {step === 3 && (
              <>
                <div className="flex flex-col gap-4 transition duration-500 ease-in-out transform opacity-100 border-[1px]  bg-[#FFFFFF] p-4 py-10  ">
                  <p className="text-[#01010C] text-[32px] leading-[43.65px] font-extrabold text-center ">
                    Set Password
                  </p>
                  <div className="">
                    <label className="block text-[16px] font-normal leading-[21.82px] text-[#1C1C1C] mb-2">
                      Password
                    </label>
                    <div className="flex relative items-center bg-[#F2F1F2] rounded-[22px] px-[12px] py-[8px] h-[45px] border border-[#e2e2e2]">
                      <Image
                        src="/images/passwordIcon.svg"
                        alt="password icon"
                        width={20}
                        height={20}
                        className="mr-2"
                      />

                      <input
                        type={passwordVisible ? "text" : "password"}
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                        className="w-full bg-[#F2F1F2] outline-none"
                        required
                      />

                      <button
                        type="button"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                        className="absolute right-3"
                      >
                        <Image
                          src={
                            passwordVisible
                              ? "/images/eyeClosedIcon.svg"
                              : "/images/eyeOpenIcon.svg"
                          }
                          alt="toggle password visibility"
                          width={19}
                          height={19}
                        />
                      </button>
                    </div>
                    {passwordError && (
                      <p className="text-red-500 text-sm mt-2">
                        {passwordError}
                      </p>
                    )}
                  </div>
                  <div className="">
                    <label className="block text-[16px] font-normal leading-[21.82px] text-[#1C1C1C] mb-2">
                      Confirm Password
                    </label>
                    <div className="flex relative items-center bg-[#F2F1F2] rounded-[22px] px-[12px] py-[8px] h-[45px] border border-[#e2e2e2]">
                      <Image
                        src="/images/passwordIcon.svg"
                        alt="password icon"
                        width={20}
                        height={20}
                        className="mr-2"
                      />

                      <input
                        type={confirmPasswordVisible ? "text" : "password"}
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        placeholder="Password"
                        className="w-full bg-[#F2F1F2] outline-none"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setConfirmPasswordVisible(!confirmPasswordVisible)
                        }
                        className="absolute right-3"
                      >
                        <Image
                          src={
                            confirmPasswordVisible
                              ? "/images/eyeClosedIcon.svg"
                              : "/images/eyeOpenIcon.svg"
                          }
                          alt="toggle password visibility"
                          width={19}
                          height={19}
                        />
                      </button>
                    </div>
                    {confirmPasswordError && (
                      <p className="text-red-500 text-sm mt-2">
                        {confirmPasswordError}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={confirmPasswordError || passwordError}
                    className={`w-full p-[8px] text-white rounded-[16px] text-[16px] font-bold leading-[22px] my-3 
                      ${
                        !confirmPassword ||
                        confirmPasswordError ||
                        !password ||
                        passwordError
                          ? "bg-gray-400 cursor-not-allowed opacity-50"
                          : "bg-[#1C1C1C] hover:bg-[#333333]"
                      }          
                    `}
                  >
                    {loading ? <Spinner /> : "Set Password"}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>

        {step === 1 && <JoinUsers />}
      </div>
      <div
        className={`flex flex-col justify-between w-[35%] h-[100%] bg-[url('/images/loginBg.png')] bg-cover bg-center rounded-[20px] p-[20px] transition-transform duration-500 ease-in-out transform ${
          isSwapped ? "order-1" : "order-2"
        }`}
      >
        <p className="text-[#ffffff] text-[28px] leading-[36px] font-bold">
          Revolutionizing the way we create, render, and experience content.
        </p>
        <div className="flex flex-col justify-between bg-[#8967D4A3] w-[100%] h-[160px] p-[20px] rounded-[16px]">
          <div className="flex justify-between items-center">
            <div className="flex">
              <Image
                src="/images/Ellipse8.svg"
                alt="circleIcon"
                width={45}
                height={45}
              />
              <p className="-ml-4 border-[2px] border-[#fafafa] text-center py-[12px] rounded-[16px] w-[140px] text-[14px] font-normal leading-[20px] text-[#fafafa]">
                Creating
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/topArrowLeft.svg"
                alt="topLeftArrow"
                width={45}
                height={45}
              />
              <Image
                src="/images/topArrowRigth.svg"
                alt="topRightArrow"
                width={45}
                height={45}
              />
            </div>
          </div>

          <p className="text-[#FAFAFA] font-normal text-[12px] leading-[16px]">
            Create design brief with AI voice command to make awesome 3D images
            that suit your needs.
          </p>
        </div>
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10   focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="flex flex-col gap-3 text-center justify-center items-center w-full max-w-md rounded-[16px] border-2 border-[#1A1A1A1A] bg-white p-10 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="flex flex-col items-center gap-3">
                <Image
                  src="/images/check_circle.svg"
                  alt="check_circle"
                  width={34}
                  height={34}
                />
                <p className="text-[#1A1A1A] font-bold text-[20px] leading-[27.28px]">
                  Registered Successfully
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={close}
                  className="bg-[#1C1C1C] text-white h-[42px] px-3 text-[16px] font-bold leading-[21.82px] rounded-[12px]"
                >
                  Proceed
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </section>
  );
};

export default Page;
