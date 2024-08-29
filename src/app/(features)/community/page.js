"use client";
import Input from "@/components/Input";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [showAnswers, setShowAnswers] = useState(false);

  const [showComments, setShowComments] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
    setShowAnswers(false);
  };

  const handleShowAnswes = (item) => {
    setActiveItem(item);
    setShowAnswers(!showAnswers);
  };

  return (
    <div>
      <section className="bg-[url('/images/bg1.png')] py-0 px-[87px] h-[320px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-6">
        <h1 className="font-roboto font-semibold text-[32px] leading-[38.4px] text-center text-[#7C56CF]">
          Join the Conversation
        </h1>
        <p className="font-roboto font-normal text-[14px] leading-[16.8px] text-center">
          Home/Community
        </p>
      </section>

      <div className="container mx-auto  mt-16 flex justify-between">
        {/* Left Section */}
        <div className="w-[399.02px] h-[285.9px] gap-[48px] ">
          <h3 className="text-s w-[63px] h-[24px] leading-[24px] font-roboto font-semibold mb-4">
            Search
          </h3>
          <hr className="mb-4 border-[#B7B7B7] w-[399.02px]" />
          <div className="relative  w-[342px] h-[49px] mb-12">
            <Input
              type="text"
              placeholder="Search in Community"
              className=" px-4 py-2 border"
              width="w-[342px]"
              height="h-[45px]"
            />

            <button className="absolute right-0 top w[45.4px] h-[45.9px] ">
              <Image
                src="/images/searchIcon.png"
                width={45}
                height={45}
                alt="searchIcon"
              />
            </button>
          </div>
          <hr className="mb-12 border-[#B7B7B7] w-[399.02px]" />
          <h2 className="text-s w-[98px] h-[24px] leading-[24px] font-roboto font-semibold mb-4">
            Categories
          </h2>
          <hr className="mb-12 border-[#B7B7B7] w-[399.02px]" />
          <h2 className="text-s leading-[24px] h-[24px] font-roboto font-semibold mb-4">
            Popular Articles
          </h2>
          <hr className="mb-12 border-[#B7B7B7] w-[399.02px]" />
        </div>

        {/* Right Section */}
        <div className="w-[752px]">
          <h2 className="text-m leading-m w-[780px] bg-red h-[76px] text-primary-1600 font-bold mb-4">
            How To Secure Nginx with Let Encrypt on Ubuntu 20.04
          </h2>

          {/* Small Section */}
          <div className="flex justify-between items-center mb-6 w-[790px] h-[50px] ">
            <p className="text-[14px] text-[#000000] font-normal font-roboto leading-[14.4px] w-[168px]  h-[14px] ">
              Updated on March 1, 2024
            </p>
            <button className=" font-normal text-xs leading-[19.2px] bg-secondary-100 text-[#0A0A0B] font-roboto  rounded-[22px] border border-primary p-[10px] w-[200px] h-[50px] ">
              Ask a Question
            </button>
          </div>

          {/* Main Section */}
          <div className="h-[1943px]">
            {/* Upper Section */}
            <div className="h-[268px] w-[788px]  mb-4">
              <p className="text-xs font-bold font-roboto leading-[19.2px] mb-2 text-primary-1600">
                Asked By : <span className="font-normal">Mathew Doe</span>{" "}
              </p>
              <p className=" font-roboto font-medium text-s leading-s text-base mb-4 w-[755px] h-[90px] ">
                Hello! I’m totally new to hosting. I bought a domain name on
                CloudFlare and want to connect it with my DigitalOcean app
                platform. How I can do it? I spent 3 days googling here and
                there but didn’t manage to find a guide. Please help me.
              </p>

              {/* Tags */}
              <div className="flex items-center space-x-2 mb-4  w-[787px] h-[55px] ">
                <span className="bg-[#F3F3F3] rounded-sm text-center flex justify-center items-center font-roboto text-[14px] leading-[16.8px] w-[90px] h-[31px] ">
                  Engineering
                </span>
                <span className="bg-[#F3F3F3] rounded-sm text-center flex justify-center items-center font-roboto text-[14px] leading-[16.8px] w-[90px] h-[31px]">
                  Security
                </span>
              </div>

              {/* Menu */}
              <div className="flex space-x-4 w-[787px] h-[50px] ">
                <button
                  onClick={() => handleShowAnswes("Show Answers")}
                  className={`flex items-center justify-center text-[#0A0A0B] font-roboto font-normal text-xs leading-[19.2px] ${activeItem === "Show Answers" ? "text-primary" : "text-[#0A0A0B]"}`}
                >
                  Show Answers
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 mt-1 transform ${
                      showAnswers ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06 0L10 10.91l3.71-3.7a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => handleMenuItemClick("Add a Comment")}
                  className={`text-[#0A0A0B] font-roboto font-normal text-xs leading-[19.2px] ${activeItem === "Add a Comment" ? "text-primary" : "text-[#0A0A0B]"} `}
                >
                  Add a Comment
                </button>
                <button
                  onClick={() => handleMenuItemClick("Add an Answer")}
                  className={`text-[#0A0A0B] font-roboto font-normal text-xs leading-[19.2px] ${activeItem === "Add an Answer" ? "text-primary" : "text-[#0A0A0B]"} `}
                >
                  Add an Answer
                </button>
                <button
                  onClick={() => handleMenuItemClick("View Accepted Answers")}
                  className={`text-[#0A0A0B] font-roboto font-normal text-xs leading-[19.2px] ${activeItem === "View Accepted Answers" ? "text-primary" : "text-[#0A0A0B]"} `}
                >
                  View Accepted Answers
                </button>
              </div>
            </div>

            {/* Lower Section */}
            {showAnswers && (
              <div className="w-[788px] h-[1635px] p-4 border border-[#D9D9D9] mt-4">
                {/* Answer Section */}
                <div className="w-[748px] h-auto mt-8 ">
                  {/* Header Section */}
                  <div className="flex items-center  px-[16px] py-[12px] gap-[6px] mb-4 w-[748px] h-[43px]">
                    <h6 className="text-xs  leading-[19.2px] font-roboto font-bold text-primary-1600 h-[19px] ">
                      Wicky Kaye
                    </h6>
                    <p className="text-[12px] leading-[14.4px] h-[14px] font-roboto font-normal">
                      Posted on March 1, 2024
                    </p>
                  </div>

                  {/* Answer Section */}
                  <div className="w-[748px] h-[200px] py-[10px] px-[16px] mb-4 ">
                    <p className="text-xs leading-s font-roboto font-normal w-[716px] h-[180px]">
                      Hi, <span className="text-primary">@Mathew Doe</span>
                      <br />
                      Sometimes IP addresses will be listed without SPAM
                      originating from the IP, but either from the same IP range
                      or from the provider itself.
                      <br /> This mechanics is usually done from RBLs by default
                      and can be really annoying. The best step here will be to
                      request a delist, this can take from a few seconds to a
                      few hours.
                      <br /> Hope that this helps!
                    </p>
                  </div>

                  {/* Footer Section with Menu Items */}
                  <div className="w-[748px] h-[50px] px-[8px] flex justify-between items-center ">
                    {/* Left Side Menus */}
                    <div className="flex justify-between w-[294px] h-[50px] ">
                      <button
                        className="text-xs leading-[19.2px] font-roboto font-normal text-black flex items-center"
                        onClick={() => setShowComments(!showComments)}
                      >
                        Show Comments{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 mt-0 transform ${
                            showComments ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06 0L10 10.91l3.71-3.7a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button
                        className="text-xs leading-[19.2px] font-roboto font-normal text-black "
                        onClick={() => setShowCommentForm(true)}
                      >
                        Add a Comment
                      </button>
                    </div>

                    {/* Right Side Menus */}
                    <div className="flex space-x-4">
                      <button className="text-xs font-roboto font-bold text-[#0A0A0B] leading-[19.2px] ">
                        Upvote
                      </button>
                      <button className="ext-xs font-roboto font-bold text-[#0A0A0B] leading-[19.2px] ">
                        Downvote
                      </button>
                    </div>
                  </div>

                  {/* Comments Section */}
                  {showComments && (
                    <div className="mt-4  ">
                      {/* Example Comment */}
                      <div className="w-[748px] h-[200px] py-[10px] px-[16px] mb-4 ">
                        <p className="text-xs leading-s font-roboto font-normal w-[716px] h-[180px]">
                          Hi, <span className="text-primary">@Mathew Doe</span>
                          <br />
                          Sometimes IP addresses will be listed without SPAM
                          originating from the IP, but either from the same IP
                          range or from the provider itself.
                          <br /> This mechanics is usually done from RBLs by
                          default and can be really annoying. The best step here
                          will be to request a delist, this can take from a few
                          seconds to a few hours.
                          <br /> Hope that this helps!
                        </p>
                      </div>

                      {/* Footer Section with Menu Items */}
                      <div className="w-[748px] h-[50px] px-[16px] flex justify-between items-center ">
                        {/* Left Side Menus */}
                        <div className="flex justify-between w-[294px] h-[50px] ">
                          <button
                            className="text-xs leading-[19.2px] font-roboto font-normal text-black "
                            onClick={() => setShowCommentForm(true)}
                          >
                            Add a Comment
                          </button>
                          <button
                            className="text-xs leading-[19.2px] font-roboto font-normal text-black flex items-center"
                            onClick={() => setShowComments(!showComments)}
                          >
                            Show Comments{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-5 w-5 mt-0 transform ${
                                showComments ? "rotate-180" : ""
                              }`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06 0L10 10.91l3.71-3.7a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Add Comment Section */}
                  {showCommentForm && (
                    <div className="w-[748px] h-[143px] mt-4  gap-[10px] ">
                      <h6 className="text-s font-roboto font-medium leading-[24px] bg-secondary-100 h-[48px] flex items-center px-[16px] py-[12px] border border-[#D9D9D9] border-b-0 ">
                        Add a Comment
                      </h6>
                      <textarea
                        className="w-full p-2 h-[50px] border border-[#D9D9D9] border-t-0 "
                        placeholder="Leave a Question...."
                      ></textarea>
                      <button
                        className="float-right bg-white  border border-primary text-primary rounded-md w-[75px] h-[35px]"
                        onClick={() => setShowCommentForm(false)}
                      >
                        Submit
                      </button>
                    </div>
                  )}
                  <hr className="mb-4 mt-8 border-[#B7B7B7] w-[748px]" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
