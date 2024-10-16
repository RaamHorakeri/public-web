"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProfileInformation = () => {
  const [file, setFile] = useState();
  const [clickChangePassword, setClickChangePassword] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };
  return (
    <div className="flex flex-col gap-4  ">
      <section className="bg-[#FFFFFF]">
        <form>
          <h1 className=" text-[#01010C] font-bold text-[24px] leading-[32.74px] mb-10 ">
            Personal Information
          </h1>
          <div className="flex gap-2">
            <div className="w-[80%]  ">
              <div className="flex flex-col gap-[15px]">
                <div className=" flex flex-col gap-[6px] ">
                  <label className="text-[14px] font-normal text-[#1C1C1C] leading-[19.1px] ">
                    Full name
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="First name"
                      className=" w-[50%] h-[50px] border-[2px] border-[#E3E8F4]  px-4 rounded-[4px] outline-none "
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className=" w-[50%] h-[50px] border-[2px] border-[#E3E8F4] px-4 rounded-[4px] outline-none"
                    />
                  </div>
                </div>

                <div className=" flex flex-col gap-[6px] ">
                  <label className="text-[14px] font-normal text-[#1C1C1C] leading-[19.1px]  ">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className=" w-full h-[50px] border-[2px] border-[#E3E8F4] px-4 rounded-[4px] outline-none"
                  />
                </div>
                <div className="flex w-full justify-center items-center gap-4 ">
                  <div className="w-[50%] flex flex-col gap-[6px] ">
                    <label className="text-[14px] font-normal text-[#1C1C1C] leading-[19.1px]  ">
                      Phone Number
                    </label>
                    <div className="flex">
                      <select
                        className="h-[50px] border-[2px] border-r-0 border-[#E3E8F4] px-1 rounded-l-[4px] bg-white outline-none"
                        defaultValue="+91"
                      >
                        <option value="+91">+91</option>
                      </select>

                      <input
                        type="text"
                        placeholder="Your Phone number..."
                        className="w-full h-[50px] border-[2px] border-l-0 border-[#E3E8F4] px-4 rounded-r-[4px] outline-none"
                      />
                    </div>
                  </div>
                  <div className="w-[50%] flex flex-col gap-[6px]  ">
                    <label className="text-[14px] font-normal text-[#1C1C1C] leading-[19.1px]  ">
                      Title
                    </label>
                    <input
                      type="text"
                      placeholder="Your tittle, proffesion or small biography"
                      className="  h-[50px] border-[2px] border-[#E3E8F4] px-4 rounded-[4px] outline-none "
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[20%] -mt-10">
              <div className="w-full h-full bg-[#E3E8F4] p-[30px] flex flex-col items-center justify-center gap-4 ">
                {file ? (
                  <Image
                    src={file}
                    alt="Uploaded Photo"
                    width={150}
                    height={150}
                    className=""
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center">
                    <Image
                      src="/images/person.svg"
                      width={64}
                      height={64}
                      className="mb-14"
                    />
                  </div>
                )}

                <label
                  htmlFor="upload-input"
                  className="-mt-11 flex items-center text-[#FFFFFF] cursor-pointer text-[14px] font-semibold leading-[19.1px] "
                >
                  <Image
                    src="/images/UploadSimple.svg"
                    width={24}
                    height={24}
                    alt="upload"
                  />
                  Upload Photo
                </label>
                <input
                  id="upload-input"
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <p className="text-[12px] text-[#A4A4A4] font-normal leading-[16.37px] mt-5 text-center w-[180px] ">
                  Image size should be under 1MB and image ration needs to be
                  1:1
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-[6px] mt-[15px] ">
            <label className="text-[14px] font-normal text-[#1C1C1C] leading-[19.1px]  ">
              Biography
            </label>
            <textarea
              placeholder="Your tittle, proffesion or small biography"
              rows="4"
              className=" w-full  border-[2px] border-[#E3E8F4] px-4 py-2 rounded-[4px] outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-[#FFFFFF] text-[#1C1C1C] text-[16px] font-bold leading-[21.82px] w-[150px] h-[50px] rounded-[8px] mt-[20px] border-[2px] border-[#1C1C1C] "
          >
            Save changes
          </button>
        </form>
      </section>

      <div className="mt-12">
        <h2 className="text-[24px] leading-[32.74px] font-bold mb-8">
          Manage Your Account
        </h2>
        {!clickChangePassword && (
          <button
            onClick={() => setClickChangePassword(!clickChangePassword)}
            className="bg-[#FFFFFF] text-[#1C1C1C] text-[16px] font-bold leading-[21.82px] w-[180px] h-[50px] rounded-[8px] mt-[20px] border-[2px] border-[#1C1C1C]"
          >
            Change Password
          </button>
        )}

        {clickChangePassword && (
          <section className=" flex gap-6 ">
            <div className="w-[40%] flex flex-col bg-[#FFFFFF] gap-6">
              <form className="flex flex-col gap-[15px]">
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[14px] font-normal text-[#1C1C1C] leading-[19.1px]  ">
                    Current password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className=" w-full h-[50px] border-[2px] border-[#E3E8F4] px-4 rounded-[4px] outline-none "
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[14px] font-normal text-[#1C1C1C] leading-[19.1px]  ">
                    New password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className=" w-full h-[50px] border-[2px] border-[#E3E8F4] px-4 rounded-[4px] outline-none "
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[14px] font-normal text-[#1C1C1C] leading-[19.1px]  ">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className=" w-full h-[50px] border-[2px] border-[#E3E8F4] px-4 rounded-[4px] outline-none "
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#01010C] text-white w-[180px] h-[50px] rounded-[8px] "
                >
                  Change Password
                </button>
              </form>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProfileInformation;
