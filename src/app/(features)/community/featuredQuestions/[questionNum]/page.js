"use client";
import React, { useEffect, useState } from "react";
import NavlinkSearch from "@/components/NavLinkSearch";
import { useParams } from "next/navigation";
import { getQuestion, getQuestionAnswers } from "@/api/community";
import Answer from "@/components/Answer";

const Page = () => {
  const params = useParams();
  const questionId = params.questionNum;

  useEffect(() => {
    getQuestionDetails();
  }, [questionId]);

  const getQuestionDetails = async () => {
    const question = await getQuestion(questionId);
    // console.log(question);
    setQuestion(question);
  };

  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
    setShowAnswers(false);
  };

  const handleShowAnswers = async (item) => {
    setActiveItem(item);
    setShowAnswers(!showAnswers);
    const answers = await getQuestionAnswers(questionId);
    console.log(answers);
    setAnswers(answers);
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
        <NavlinkSearch />
        {/* Right Section */}
        <div className="w-[752px]">
          <h2 className="text-m leading-m w-[780px] bg-red h-[76px] text-primary-1600 font-bold mb-4">
            {question?.title}
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
          <div className="mb-4">
            {/* Upper Section */}
            <div className="h-[268px] w-[788px]  mb-4">
              <p className="text-xs font-bold font-roboto leading-[19.2px] mb-2 text-primary-1600">
                Asked By : <span className="font-normal">Mathew Doe</span>{" "}
              </p>
              <p className=" font-roboto font-medium text-s leading-s text-base mb-4 w-[755px] h-[90px] ">
                {question?.body}
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
                  onClick={() => handleShowAnswers("Show Answers")}
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
                {/* <button
                  onClick={() => handleMenuItemClick("Add a Comment")}
                  className={`text-[#0A0A0B] font-roboto font-normal text-xs leading-[19.2px] ${activeItem === "Add a Comment" ? "text-primary" : "text-[#0A0A0B]"} `}
                >
                  Add a Comment
                </button> */}
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
              <div className="w-[788px] max-h-[1635px] p-4 border border-[#D9D9D9] mt-4">
                {answers?.map((answer) => (
                  <Answer answer={answer} key={answer.id} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
