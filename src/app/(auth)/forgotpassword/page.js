"use client";

import { forgotPassword, setPasswordApi, verifyOtp } from "@/api/auth";
import Input from "@/components/Input";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState();
  const [activationId, setActivationId] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [activationCode, setActivationCode] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handlePassword = async (e) => {
    e.preventDefault();

    try {
      //   console.log(email);
      const result = await forgotPassword(email);

      if (result.activation_id) {
        setActivationId(result.activation_id);
        alert("OTP sent to your email, please enter it.");
        setStep(2);
      }
    } catch (error) {
      //   console.log(error.message);
      alert(error.message || "Login failed, please try again.");
    }
  };
  const handleOtpVerification = async (e) => {
    e.preventDefault();

    try {
      const result = await verifyOtp(activationId, otp);
      setActivationId(result.activation_id);
      setActivationCode(result.activation_code);
      setStep(3);
    } catch (error) {
      alert("OTP verification failed, please try again.");
    }
  };

  const handleSetPassword = async (e) => {
    e.preventDefault();
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
      alert("Password set successful!");
      router.push("/");
    } catch (error) {
      // console.log(error);
      alert("Password setup failed, please try again.");
    }
  };

  return (
    <section className="flex justify-center items-center h-screen mb-20 ">
      <div className="w-[680px] h-auto bg-[#F3F3F3] p-[80px] gap-[24px] border border-secondary-100">
        <h1 className="w-[520px] h-[35px] mx-auto font-roboto font-bold text-m leading-[35.2px] text-center text-[#21272A]">
          Forgot Password
        </h1>
        <form
          onSubmit={
            step === 1
              ? handlePassword
              : step === 2
                ? handleOtpVerification
                : handleSetPassword
          }
          className="mt-[40px] flex flex-col items-center gap-1"
        >
          {step === 1 && (
            <>
              <label className="w-[520px] text-left font-roboto font-medium text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
                Enter Email to get OTP
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="border-[2px] w-[500px] h-[50px] rounded px-3 py-2 "
                required
              />
              <button
                type="submit"
                className="w-[520px] h-[48px] bg-primary text-secondary-100 font-medium text-xs leading-[16px] mt-6"
              >
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label>OTP</label>
                <input
                  type="text"
                  placeholder="Enter the OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="border-[2px] w-[500px] h-[50px] rounded px-3 py-2 "
                />
              </div>
              <button type="submit">Verify OTP</button>
            </>
          )}
          {step === 3 && (
            <>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-[2px] w-[500px] h-[50px] rounded px-3 py-2 "
                />
              </div>
              <button type="submit">Set Password</button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default Page;
