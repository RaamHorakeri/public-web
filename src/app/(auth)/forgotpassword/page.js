"use client";

import { forgotPassword, setPasswordApi, verifyOtp } from "@/api/auth";
import Input from "@/components/Input";
import Spinner from "@/components/spinner";
import { Dialog, DialogPanel } from "@headlessui/react";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import LoginSection from "../_components/LoginSection";

const Page = () => {
  const [email, setEmail] = useState();
  const [activationId, setActivationId] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [activationCode, setActivationCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [isSwapped, setIsSwapped] = useState(false);

  const router = useRouter();

  const handlePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsSwapped(true);
    try {
      const result = await forgotPassword(email);

      if (result.activation_id) {
        setActivationId(result.activation_id);
        setStep(2);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setEmailError("Please enter valid email");
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

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    router.push("/");
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
    setLoading(true);

    const clientId = Cookies.get("clientId");

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
    <section className=" bg-[#ffffff] flex h-[100vh] items-center justify-center p-[40px] gap-4 ">
      <LoginSection isSwapped={!isSwapped} />

      <div
        className={`flex flex-col justify-between gap-5 w-[35%] h-[100%] transition-transform duration-500 ease-in-out transform ${
          isSwapped ? "order-2" : "order-1"
        }`}
      >
        <div className=" rounded-[20px] p-[32px] gap-[50px] h-[100%] flex flex-col justify-center ">
          <form
            onSubmit={
              step === 1
                ? handlePassword
                : step === 2
                  ? handleOtpVerification
                  : handleSetPassword
            }
            className="space-y-4 relative"
          >
            {step === 1 && (
              <div className="flex flex-col p-4 py-10 border border-[#D3D3D3] bg-[#FFFFFF] gap-[25px]  ">
                <p className=" text-[32px] font-extrabold leading-[43.65px] text-[#01010C] text-center ">
                  Email
                </p>
                <div>
                  <label className="text-[#01010C] text-[16px font-normal leading-[21.82px] ">
                    Enter Email to get OTP
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-[#F2F1F2] h-[50px] rounded-[22px] px-4 py-4 outline-none w-full mt-2"
                  />
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                </div>

                <button
                  type="submit"
                  className="w-full p-[10px] bg-[#1C1C1C] text-white rounded-[22px] text-[18px] font-bold leading-[24.55px] my-4 "
                >
                  {loading ? <Spinner /> : "Submit"}
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col p-4 py-10 border-[1px] border-[#D3D3D3] bg-[#FFFFFF] gap-[25px]  drop-shadow-custom ">
                <p className=" text-[32px] font-extrabold leading-[43.65px] text-[#01010C] text-center ">
                  2Factor Authentication
                </p>
                <div className="flex flex-col ">
                  <label className=" text-[#01010C] text-[16px font-normal leading-[21.82px] ] ">
                    Enter 6-digit Code that you recieved in your mail
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    className=" bg-[#F2F1F2] h-[50px] rounded-[22px] mt-2 px-4 py-4 outline-none"
                  />
                  <p className="text-red-500 text-sm mt-1">{otpError}</p>
                </div>

                <button
                  type="submit"
                  className=" bg-[#1C1C1C] h-[50px] text-[#FFFFFF] text-[18px] leading-[24.55px] font-bold rounded-[22px] "
                >
                  {loading ? <Spinner /> : "Submit"}
                </button>
              </div>
            )}

            {step === 3 && (
              <>
                <div className="flex flex-col gap-4 transition duration-500 ease-in-out transform opacity-100 border-[1px]  bg-[#FFFFFF] p-4 py-10 ">
                  <p className="text-[#01010C] text-[32px] leading-[43.65px] font-extrabold text-center ">
                    Set Password
                  </p>
                  <div className="">
                    <label className="block text-[16px] font-normal leading-[21.82px] text-[#1C1C1C] mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Password"
                        className="w-full bg-[#F2F1F2] rounded-[22px] px-[16px] py-[12px] h-[50px] outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                        className="absolute right-3 top-1/3 text-gray-400"
                      >
                        {passwordVisible ? (
                          <Image
                            src="/images/eyeClosedIcon.svg"
                            alt="toggle password visibility"
                            width={19}
                            height={19}
                          />
                        ) : (
                          <Image
                            src="/images/eye.svg"
                            width={19}
                            height={13}
                            alt="show"
                          />
                        )}
                      </button>
                    </div>
                    {passwordError && (
                      <p className="text-red-500 text-sm mt-1">
                        {passwordError}
                      </p>
                    )}
                  </div>
                  <div className="">
                    <label className="block text-[16px] font-normal leading-[21.82px] text-[#1C1C1C] mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={confirmPasswordVisible ? "text" : "password"}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        className="w-full bg-[#F2F1F2] rounded-[22px] px-[16px] py-[12px] h-[50px] outline-none"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setConfirmPasswordVisible(!confirmPasswordVisible)
                        }
                        className="absolute right-3 top-1/3 text-gray-400"
                      >
                        {confirmPasswordVisible ? (
                          <Image
                            src="/images/eyeClosedIcon.svg"
                            alt="toggle password visibility"
                            width={19}
                            height={19}
                          />
                        ) : (
                          <Image
                            src="/images/eye.svg"
                            width={19}
                            height={13}
                            alt="show"
                          />
                        )}
                      </button>
                    </div>
                    {confirmPasswordError && (
                      <p className="text-red-500 text-sm mt-1">
                        {confirmPasswordError}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className=" bg-[#1C1C1C] h-[50px] text-[#FFFFFF] text-[18px] leading-[24.55px] font-bold rounded-[22px] "
                  >
                    {loading ? <Spinner /> : "Set Password"}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className=" flex flex-col gap-3 text-center justify-center items-center w-full max-w-md rounded-xl bg-white p-10 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className=" flex flex-col items-center gap-3 ">
                <Image
                  src="/images/check_circle.svg"
                  alt="check_circle"
                  width={34}
                  height={34}
                />
                <p className="text-[#1A1A1A] font-bold text-[20px] leading-[27.28px] ">
                  Password Set Successfully
                </p>
              </div>
              <div className="  flex gap-3">
                <button
                  onClick={close}
                  className=" bg-[#1C1C1C] text-white h-[42px] px-3 text-[16px] font-bold leading-[21.82px] rounded-[12px] "
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
