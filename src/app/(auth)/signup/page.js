"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Input from "@/components/Input";
import TwoFA from "@/components/TwoFa";
import {
  getOAuthUrl,
  registerUser,
  setPasswordApi,
  signUp,
  signUpTwoFa,
  verifyOtp,
} from "@/api/auth";
import Spinner from "@/components/spinner";
import Cookies from "js-cookie";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";

const defaultErrorMsg = {
  username: null,
  email: null,
  password: null,
};
const Page = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  // const [activationId, setActivationId] = useState("");
  const [activationCode, setActivationCode] = useState("");
  const [password, setPassword] = useState("");

  const [rePassword, setRePassword] = useState("");
  const [open, setOpen] = useState(false);
  const [openTwoFa, setOpenTwoFa] = useState(false);
  const [errorMessage, setErrorMessage] = useState(defaultErrorMsg);

  const [loading, setLoading] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [publicWebCustomId, setPublicWebCustomId] = useState("");

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(defaultErrorMsg);
    let errors = {};

    if (!username) {
      errors.username = "Username should not be empty.";
    }

    if (!email) {
      errors.email = "Email should not be empty.";
    }

    if (!password || !rePassword) {
      errors.password = "Passwords should not be empty";
    } else if (password !== rePassword) {
      errors.password = "Passwords do not match";
    }

    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors);
      return;
    }

    const formData = {
      name: username,
      email: email,
      password: password,
    };

    try {
      setLoading(true);
      const response = await signUp(formData);
      if (response.ok) {
        const data = await response.json();
        setActivationId(data.activation_id);
        setOpenTwoFa(true);
      } else {
        const errorData = await response.json();
        const errMsg =
          errorData.message || "Registration failed. Please try again.";
        setErrorMessage((error) => {
          return { ...error, password: errMsg };
        });
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setErrorMessage((error) => {
        return {
          ...error,
          password: e.message || "An error occurred. Please try again later.",
        };
      });
      console.error("Error:", e);
    }
  };

  const onSubmitTwoFa = async (code) => {
    try {
      const response = await signUpTwoFa(activationId, code);

      if (response.ok) {
        const { access_token, refresh_token, expiry } = await response.json();
        console.log({ access_token, refresh_token, expiry });
        setOpenTwoFa(false);
        setOpen(true);
        // return { access_token, refresh_token, expiry };
      } else {
        const data = await response.json();
        throw new Error(data.error || "something went wrong");
      }
    } catch (error) {
      throw new Error(error.message || "something went wrong");
    }
  };

  const googleHandler = async (e) => {
    e.preventDefault();
    try {
      const oauthUrl = await getOAuthUrl("google", "signup");
      window.location.href = oauthUrl;
    } catch (error) {
      alert(
        "An error occurred while trying to sign up with Google. Please try again.",
      );
    }
  };

  const gitHubHandler = async (e) => {
    e.preventDefault();
    try {
      const oauthUrl = await getOAuthUrl("github");
      window.location.href = oauthUrl;
    } catch (error) {
      alert(
        "An error occurred while trying to sign up with GitHub. Please try again.",
      );
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await registerUser(name, email);
      setActivationId(result.activation_id);

      setStep(2);
    } catch (error) {}
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
      alert("Signup successful!");
      router.push("/");
    } catch (error) {
      alert("Password setup failed, please try again.");
    }
  };

  return (
    <section className=" bg-[#ffffff] flex h-[1024px] items-center justify-center p-[80px] gap-4 ">
      <div className="flex flex-col justify-between w-[44%] h-[100%]">
        <div className=" bg-[#F3F3F3] rounded-[20px] p-[32px] gap-[50px] h-[80%] flex flex-col ">
          <p className=" text-[18px] font-normal leading-[24.55px] text-[#777777] ">
            Sign up now to unlock a world of lettarning opportunities and take
            the first step towards becoming a software engineer.
          </p>

          <form
            onSubmit={
              step === 1
                ? handleRegister
                : step === 2
                  ? handleOtpVerification
                  : handleSetPassword
            }
            className="space-y-4"
          >
            {step === 1 && (
              <>
                <div>
                  <label className="block text-[16px] font-normal leading-[21.82px] text-[#1C1C1C] mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-[#ffffff] rounded-[22px] px-[16px] py-[12px] h-[50px] outline-none "
                  />
                </div>
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
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-[10px] bg-[#1C1C1C] text-white rounded-[22px] text-[18px] font-bold leading-[24.55px] my-4 "
                >
                  Register
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
                    Sign up with Google
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
                    Sign up with Github
                  </button>
                </div>

                <p className="text-center mt-4 text-[18px] leading-[24.55px] font-normal text-[#4A4A4A] ">
                  Already have an account?{" "}
                  <Link href="/login" className="text-[#1C1C1C]">
                    Login Here
                  </Link>
                </p>
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
                  />
                </div>
                <button type="submit">Set Password</button>
              </>
            )}
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
                className="absolute left-0 rounded-full z-10" // First image
              />
              <Image
                src="/images/ellipse7.svg"
                alt="userIcon"
                width={45}
                height={45}
                className="absolute left-[25px] rounded-full z-20" // Second image overlaps 1st by 50%
              />
              <Image
                src="/images/ellipse6.svg"
                alt="userIcon"
                width={45}
                height={45}
                className="absolute left-[50px] rounded-full z-30" // Third image overlaps 2nd by 50%
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
