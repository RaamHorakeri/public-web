"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
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

import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

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
  const [activationId, setActivationId] = useState("");
  const [activationCode, setActivationCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [rePassword, setRePassword] = useState("");

  const [openTwoFa, setOpenTwoFa] = useState(false);
  const [errorMessage, setErrorMessage] = useState(defaultErrorMsg);

  const [loading, setLoading] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [otpError, setOtpError] = useState("");
  let [isOpen, setIsOpen] = useState(false);

  const [isSwapped, setIsSwapped] = useState(false);

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

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    router.push("/");
  }

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
      setIsSwapped(!isSwapped);
      setStep(2);
    } catch (error) {
      if (error) {
        setEmailError("User already registered,Please Login");
      }
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
      setOtpError("OTP verification failed, please try again.");
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSetPassword = async (e) => {
    e.preventDefault();
    const clientId = nanoid();
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
    } else if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, include 1 uppercase, 1 lowercase, 1 number, and 1 symbol.",
      );
    } else {
      setConfirmPasswordError("");
      setPassword("");
      open();
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
      } catch (error) {
        setPasswordError(error);
      }
    }
  };

  return (
    <section className=" bg-[#ffffff] flex h-[1024px] items-center justify-center p-[80px] gap-4 ">
      <div
        className={` flex flex-col justify-between w-[44%] h-[100%] transition-transform duration-500 ease-in-out transform ${
          isSwapped ? "  order-2 animate-move " : "  order-1 "
        } `}
      >
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
            className="space-y-4 relative"
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
                <p className="text-red-500 text-sm mt-2">{emailError}</p>
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
              <div className="flex flex-col p-4 py-10 border-[2px] border-[#D3D3D3] bg-[#FFFFFF] gap-[25px] shadow-md  ">
                <p className=" text-[32px] font-extrabold leading-[43.65px] text-[#01010C] text-center ">
                  2Factor Authentication
                </p>
                <div className="flex flex-col gap-4">
                  <label className=" text-[#01010C] text-[16px font-normal leading-[21.82px] ] ">
                    Enter 6-digit Code that you recieved in your mail
                  </label>
                  <input
                    type="text"
                    placeholder="OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    className=" bg-[#F2F1F2] h-[50px] rounded-[22px] px-4 py-4 outline-none"
                  />
                </div>
                <p className="text-red-500 text-sm mt-2">{otpError}</p>
                <button
                  type="submit"
                  className=" bg-[#1C1C1C] h-[50px] text-[#FFFFFF] text-[18px] leading-[24.55px] font-bold rounded-[22px] "
                >
                  Submit
                </button>
              </div>
            )}

            {step === 3 && (
              <>
                <div className="flex flex-col gap-4 transition duration-500 ease-in-out transform opacity-100 ">
                  <div className="">
                    <label className="block text-[16px] font-normal leading-[21.82px] text-[#1C1C1C] mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Password"
                        className="w-full bg-[#ffffff] rounded-[22px] px-[16px] py-[12px] h-[50px] outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                        className="absolute right-3 top-1/3 text-gray-400"
                      >
                        {passwordVisible ? (
                          "🙈"
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
                      <p className="text-red-500 text-sm mt-2">
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
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full bg-[#ffffff] rounded-[22px] px-[16px] py-[12px] h-[50px] outline-none"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setConfirmPasswordVisible(!confirmPasswordVisible)
                        }
                        className="absolute right-3 top-1/3 text-gray-400"
                      >
                        {confirmPasswordVisible ? (
                          "🙈"
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
                      <p className="text-red-500 text-sm mt-2">
                        {confirmPasswordError}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className=" bg-[#1C1C1C] h-[50px] text-[#FFFFFF] text-[18px] leading-[24.55px] font-bold rounded-[22px] "
                  >
                    Set Password
                  </button>
                </div>

                {/* <div>

                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div> */}
              </>
            )}
          </form>
        </div>
        <div className=" bg-[#F3F3F3] flex items-center justify-between rounded-[20px] h-[15%]  p-[20px]">
          <div className="flex items-center">
            <div className="flex relative mr-10 w-[75px] h-[45px]">
              <Image
                src="/images/Ellipse6.svg"
                alt="userIcon"
                width={45}
                height={45}
                className="absolute left-0 rounded-full z-10"
              />
              <Image
                src="/images/Ellipse7.svg"
                alt="userIcon"
                width={45}
                height={45}
                className="absolute left-[25px] rounded-full z-20"
              />
              <Image
                src="/images/Ellipse6.svg"
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
      <div
        className={`flex flex-col justify-between w-[44%] h-[100%] bg-[url('/images/loginBg.png')] bg-cover bg-center rounded-[20px] p-[28px] transition-transform duration-500 ease-in-out transform  ${
          isSwapped ? "  order-1 " : "  order-2 "
        } `}
      >
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
                src="/images/topArrowLeft.svg"
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
                  Registered Successfully
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
