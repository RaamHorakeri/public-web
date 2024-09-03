"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  getQuestion,
  getQuestionAnswers,
  postAnswer,
  getQuestionComments,
  postQuestionComment,
} from "@/api/community";
import Answer from "@/components/community/Answer";
import Comment from "@/components/community/Comment";
import { isEmptyObject } from "@/utils";
import Spinner from "@/components/spinner";

const Page = () => {
  const params = useParams();
  const questionId = params.questionNum;
  const textareaRef = useRef(null);
  const commentTextRef = useRef(null);

  useEffect(() => {
    getQuestionDetails();
  }, [questionId]);

  const getQuestionDetails = async () => {
    const question = await getQuestion(questionId);
    setQuestion(question);
  };

  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [comments, setComments] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showAnswerForm, setShowAnswerForm] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [buttonLoader, setButtonLoader] = useState(false);

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
    setShowAnswers(false);
    setShowComments(false);
  };

  const handleShowAnswers = async (item) => {
    setActiveItem(item);
    activeItem === "Show Answers"
      ? setShowAnswers((prev) => !prev)
      : setShowAnswers(true);
    setShowComments(false);
    const answers = await getQuestionAnswers(questionId);
    isEmptyObject(answers.result) ? setAnswers([]) : setAnswers(answers.result);
  };

  const handleShowComments = async (item) => {
    setActiveItem(item);
    activeItem === "Show Comments"
      ? setShowComments((prev) => !prev)
      : setShowComments(true);
    const comments = await getQuestionComments(questionId);
    isEmptyObject(comments.result)
      ? setComments([])
      : setComments(comments.result);
  };

  const onSubmitAnswer = async (event) => {
    event.preventDefault();
    setButtonLoader(true);
    const content = textareaRef.current.value;
    await postAnswer(content, questionId);
    const answers = await getQuestionAnswers(questionId);
    isEmptyObject(answers) ? setAnswers([]) : setAnswers(answers);
    setShowAnswerForm(false);
    handleShowAnswers("Show Answers");
    setButtonLoader(false);
  };

  const commentAction = async (event) => {
    setButtonLoader(true);
    event.preventDefault();
    setShowAnswerForm(false);
    const content = commentTextRef.current.value;
    await postQuestionComment(content, questionId);
    commentTextRef.current.value = "";
    setShowCommentForm(false);
    handleShowComments("Show Comments");
    setButtonLoader(false);
  };

  return (
    <div>
      <h2 className="text-m leading-m w-[780px] bg-red h-[76px] text-primary-1600 font-bold mb-4">
        {question?.title}
      </h2>

      {/* Small Section */}
      <div className="flex justify-between items-center mb-6 w-[790px] h-[50px] ">
        <p className="text-[14px] text-[#000000] font-normal font-roboto leading-[14.4px] w-[168px]  h-[14px] ">
          Updated on March 1, 2024
        </p>
        <Link href={`/community/askQuestion`}>
          <button className=" font-normal text-xs leading-[19.2px] bg-secondary-100 text-[#0A0A0B] font-roboto  rounded-[22px] border border-primary p-[10px] w-[200px] h-[50px] ">
            Ask a Question
          </button>
        </Link>
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
            <button
              onClick={() => {
                handleShowComments("Show Comments");
              }}
              className={`flex items-center justify-center text-[#0A0A0B] font-roboto font-normal text-xs leading-[19.2px] ${activeItem === "Show Comments" ? "text-primary" : "text-[#0A0A0B]"}`}
            >
              Show Comments
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 mt-1 transform ${
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
              onClick={() => {
                handleMenuItemClick("Add a Comment");
                setShowAnswerForm(false);
                setShowCommentForm(true);
              }}
              className={`text-[#0A0A0B] font-roboto font-normal text-xs leading-[19.2px] ${activeItem === "Add a Comment" ? "text-primary" : "text-[#0A0A0B]"} `}
            >
              Add a Comment
            </button>
            <button
              onClick={() => {
                handleMenuItemClick("Add an Answer");
                setShowCommentForm(false);
                setShowAnswerForm(true);
              }}
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
        {showCommentForm && activeItem === "Add a Comment" && (
          <>
            <div className="w-[748px] h-[143px] mt-4  gap-[10px] ">
              <h6 className="text-s font-roboto font-medium leading-[24px] bg-secondary-100 h-[48px] flex items-center px-[16px] py-[12px] border border-[#D9D9D9] border-b-0 ">
                Add a Comment
              </h6>
              <form onSubmit={commentAction}>
                <textarea
                  name="content"
                  ref={commentTextRef}
                  className="w-full p-2 h-[50px] border border-[#D9D9D9] border-t-0 outline-none"
                  placeholder="Leave a Comment...."
                ></textarea>
                <button
                  type="submit"
                  className="float-right bg-white  border border-primary text-primary rounded-md w-[75px] h-[35px]"
                >
                  {buttonLoader ? <Spinner /> : "Submit"}
                </button>
              </form>
            </div>
            <hr className="mb-4 mt-8 border-[#B7B7B7] w-[748px]" />
          </>
        )}
        {showAnswerForm && activeItem === "Add an Answer" && (
          <>
            <div className="w-[748px] h-[143px] mt-4  gap-[10px] ">
              <h6 className="text-[#3B2174] text-s font-roboto font-medium leading-[24px] bg-secondary-100 h-[48px] flex items-center px-[16px] py-[12px] border border-[#D9D9D9] border-b-0 ">
                Add an Answer
              </h6>
              <form onSubmit={onSubmitAnswer}>
                <textarea
                  name="content"
                  ref={textareaRef}
                  className="w-full p-2 h-[50px] border border-[#D9D9D9] border-t-0 outline-none"
                  placeholder="Answer a Question...."
                ></textarea>
                <button
                  type="submit"
                  className="float-right bg-white  border border-primary text-primary rounded-md w-[75px] h-[35px]"
                >
                  {buttonLoader ? <Spinner /> : "Submit"}
                </button>
              </form>
            </div>
            <hr className="mb-4 mt-8 border-[#B7B7B7] w-[748px]" />
          </>
        )}

        {/* Lower Section */}
        {showComments && activeItem === "Show Comments" && (
          <div className="w-[788px] max-h-[1635px] p-4 border border-[#D9D9D9] mt-4">
            {comments?.length !== 0 ? (
              comments?.map((comment) => (
                <Comment comment={comment} key={comment.id} />
              ))
            ) : (
              <div>No Answers Available</div>
            )}
          </div>
        )}
        {showAnswers && activeItem === "Show Answers" && (
          <div className="w-[788px] max-h-[1635px] p-4 border border-[#D9D9D9] mt-4">
            {answers.length !== 0 ? (
              answers?.map((answer) => (
                <Answer answer={answer} key={answer.id} />
              ))
            ) : (
              <div>No Answers Available</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
