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
  const [activationId, setActivationId] = useState("");
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

  useEffect(() => {
    const existingClientId = Cookies.get("clientId");
    if (existingClientId) {
      setPublicWebCustomId(existingClientId);
    } else {
      const newClientId = nanoid();
      Cookies.set("clientId", newClientId);
      setPublicWebCustomId(newClientId);
    }
  }, []);

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
      const oauthUrl = await getOAuthUrl("google");
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
      {/* <div className="w-[680px] h-auto bg-[#F3F3F3] p-[80px] gap-[24px] border border-secondary-100">
        <h1 className="w-[520px] h-[35px] mx-auto font-roboto font-bold text-m leading-[35.2px] text-center text-[#21272A]">
          Register
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-[40px] flex flex-col items-center gap-2"
        >
          <label className="w-[520px] text-left font-roboto font-normal text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
            User Name
          </label>
          <Input
            type="text"
            id="name"
            value={username}
            onChange={(e) => {
              const username = e.target.value;
              setUsername(username);
              if (errorMessage.username && username.length > 0) {
                setErrorMessage((error) => {
                  return { ...error, username: null };
                });
              }
            }}
          />
          {errorMessage.username && (
            <div className="w-[520px] mt-1 text-left text-red-500 text-[12px]">
              *{errorMessage.username}
            </div>
          )}

          <label className="w-[520px] text-left font-roboto font-normal text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
            Email
          </label>
          <Input
            type="email"
            id="email"
            autoComplete="email"
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
            <div className="w-[520px] mt-1 text-left text-red-500 text-[12px]">
              *{errorMessage.email}
            </div>
          )}

          <div className="flex justify justify-center gap-3 ">
            <div className="flex flex-col ">
              <label className="w-[252px] text-left font-roboto font-normal text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
                Password
              </label>

              <Input
                type="password"
                width="w-[252px]"
                id="password"
                autoComplete="new-password"
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
            </div>

            <div className="flex flex-col">
              <label className="w-[252px] text-left font-roboto font-normal text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
                Re Enter Password
              </label>

              <Input
                type="password"
                width="w-[252px]"
                id="rePassword"
                autoComplete="new-password"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
            </div>
          </div>
          {errorMessage.password && (
            <div className="w-[520px] mt-1 text-left text-red-500 text-[12px]">
              *{errorMessage.password}
            </div>
          )}

          <p className="w-[520px] text-center text-xs font-roboto font-normal leading-[19.2px] text-[#CFCFCF] mb-[24px]">
            or
          </p>

          <div className="w-[520px] flex justify-between mb-[24px]">
            <button className=" flex items-center justify-center space-x-2 w-[244px] h-[50px] rounded-3xl p-3 bg-white border border-[#B7B7B7]  ">
              {" "}
              <Image
                src="/images/google.png"
                width={20}
                height={20}
                alt="googleLogo"
              />{" "}
              <span className="text-[#0A0A0B]  font-roboto text-xs leading-[19.2px] font-normal ">
                Sign in with Google
              </span>{" "}
            </button>
            <button className=" flex items-center justify-center space-x-2 w-[244px] h-[50px] rounded-3xl p-3 bg-white border border-[#B7B7B7]  ">
              {" "}
              <Image
                src="/images/Github.png"
                width={20}
                height={20}
                alt="googleLogo"
              />{" "}
              <span className="text-[#0A0A0B] font-roboto text-xs leading-[19.2px] font-normal">
                Sign in with GitHub
              </span>{" "}
            </button>
          </div>

          <button
            onClick={handleSubmit}
            className="w-[520px] h-[48px] bg-primary text-secondary-100 font-roboto font-medium text-xs leading-[16px] mt-6"
          >
            {loading ? <Spinner /> : "Register"}
          </button>
        </form>
      </div> */}

      {/* {openTwoFa && (
        <Dialog
          open={openTwoFa}
          onClose={setOpenTwoFa}
          className="relative z-10"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500 bg-opacity-75  transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center  sm:items-center  sm:p-0">
              <DialogPanel
                transition
                className="rounded-md relative transform overflow-hidden w-[839px] h-[370px]  text-center shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
              >
                <div className="bg-[#F3F3F3] flex items-center justify-center rounded-md">
                  <TwoFA onSubmitTwoFa={onSubmitTwoFa} />
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      )}
      {open && (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500 bg-opacity-75  transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center  sm:items-center  sm:p-0">
              <DialogPanel
                transition
                className="relative transform overflow-hidden w-[839px] h-[370px] p-[80px] bg-white text-center shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
              >
                <div className="bg-white flex items-center justify-center ">
                  <div className="flex mt-7 items-center justify-center ">
                    <div className="mt-3 text-center flex flex-col justify-center items-center  ">
                      <div className="flex items-center justify-center h-[35px] w-[697px] text-m text-[#21272A] font-roboto font-bold leading-[35.2px] ">
                        <h1 className="mb-5">
                          Registered Successfully <br />
                          Are you sure you want to continue?
                        </h1>
                      </div>
                      <div className="flex items-center  px-4 py-3 mt-10">
                        <Link
                          href="#"
                          type="button"
                          onClick={() => setOpen(false)}
                          className="flex mr-4 w-[94px] h-[48px] rounded-md bg-white leading-[24px] items-center justify-center py-2 text-s font-medium text-primary border border-primary"
                        >
                          Cancel
                        </Link>
                        <Link
                          href="/"
                          type="button"
                          onClick={() => setOpen(false)}
                          className="flex w-[74px] h-[48px] rounded-md bg-primary leading-[24px] items-center justify-center py-2 text-s font-medium text-secondary-100 border border-primary"
                        >
                          Next
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      )} */}
    </section>
  );
};

export default Page;
