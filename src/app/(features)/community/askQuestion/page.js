"use client";

import Input from "@/components/Input";
import Image from "next/image";
import React, { useState } from "react";

const questionData = [
  {
    name: "Flask",
    description:
      "A lightweight micro-framework for Python used to build web applications.",
    id: 2,
  },
  {
    name: "REST API",
    description:
      "A set of rules for designing web services that allow interaction with RESTful architecture.",
    id: 3,
  },
  {
    name: "SQLAlchemy",
    description:
      "An ORM library for Python that provides a way to interact with databases using Pythonic syntax.",
    id: 4,
  },
  {
    name: "OAuth",
    description:
      "SAME An open standard for access delegation, commonly used for granting websites access to user information without exposing credentials.",
    id: 6,
  },
];

const Page = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value.length <= 140) {
      setInputValue(value);
    }
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
          <div className="relative w-[342px] h-[49px] mb-12">
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
        <div className="w-[788px] mb-20 ">
          <div className="h-[58px] flex items-center justify-between mb-20 ">
            <h2 className="text-m leading-m bg-red ml-2 text-primary-1600 font-bold">
              Ask the Community
            </h2>
          </div>
          <section className="w-[788px] h-[149px] border border-[#D9D9D9] mt-l mb-l ">
            <div className="flex items-center gap-5 h-[54px] bg-secondary-100 py-3 px-4  ">
              <h4 className=" font-roboto font-medium text-s leading-[24px] text-primary-1600 ">
                Question Title
              </h4>
              <p className="font-roboto text-[#868686] font-normal text-xs leading-[50px] ">
                Enter 15 Characters or More
              </p>
            </div>

            <div className="flex items-center space-x-2 py-[10px]  h-[50px] ">
              <Input
                type="text"
                width="w-[788px]"
                height="h-[50px]"
                placeholder="Question title"
                value={inputValue}
                onChange={handleInputChange}
                className="border-b-[#D9D9D9]"
              />
            </div>
            <div className="flex items-center justify-end mr-2  py-[10px]  h-[50px] border-b-0 ">
              <p className="text-[#E74C3C] font-roboto font-normal text-xs ">
                {inputValue.length}/140
              </p>
            </div>
          </section>

          <section className="w-[788px] h-[200px] border border-[#D9D9D9] mt-l mb-l ">
            <div className="flex items-center h-[50px] bg-secondary-100 py-3 px-4  ">
              <h4 className=" font-roboto font-medium text-s leading-[24px] text-primary-1600 ">
                Question Body
              </h4>
            </div>

            <div className="flex items-center space-x-2 py-[10px]  h-[150px] ">
              <textarea
                rows="4"
                className="block p-2.5 w-full h-[146px] text-sm text-gray-900 "
                placeholder="Question body ....."
              ></textarea>
            </div>
          </section>

          <section className="w-[788px] h-[124px] border border-[#D9D9D9] mt-l mb-l ">
            <div className="flex items-center gap-5 h-[54px] bg-secondary-100 py-3 px-4  ">
              <h4 className=" font-roboto font-medium text-s leading-[24px] text-primary-1600 ">
                Tags & Topics
              </h4>
            </div>

            <div className="flex items-center space-x-2 px-4 py-[10px]  h-[86px] ">
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="w-[788px] h-[50px]  border-b border-b-[#D9D9D9] outline-none"
              >
                <option value="" disabled>
                  Select...
                </option>
                {questionData.map((question, index) => {
                  return (
                    <option key={index} value="javascript">
                      {question.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </section>
          <button className=" h-[50px] w-[200px] border border-primary rounded-[22px] font-roboto font-normal text-xs ">
            Post a question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
