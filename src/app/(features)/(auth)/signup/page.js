"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Input from "@/components/Input";
import TwoFA from "@/components/TwoFa";
import { signUp, signUpTwoFa } from "@/api/auth";
import Spinner from "@/components/spinner";

const defaultErrorMsg = {
  username: null,
  email: null,
  password: null,
};
const Page = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [open, setOpen] = useState(false);
  const [openTwoFa, setOpenTwoFa] = useState(false);
  const [errorMessage, setErrorMessage] = useState(defaultErrorMsg);
  const [activationId, setActivationId] = useState("");
  const [loading, setLoading] = useState(false);

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
        setLoading(false);
        setOpenTwoFa(true);
      } else {
        setLoading(false);
        const errorData = await response.json();
        setErrorMessage(
          errorData.message || "Registration failed. Please try again.",
        );
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
      console.error("Error:", error);
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

  return (
    <section className="flex justify-center items-center h-screen mt-12 mb-20 ">
      <div className="w-[680px] h-auto bg-[#F3F3F3] p-[80px] gap-[24px] border border-secondary-100">
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
      </div>

      {openTwoFa && (
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
      )}
    </section>
  );
};

export default Page;
