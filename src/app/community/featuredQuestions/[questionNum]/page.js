"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import TryProduct from "@/app/community/featuredQuestions/[questionNum]/_components/TryProduct";
import QuilEditor from "@/app/community/_components/QuillEditor/QuilEditor";
import Answer from "@/app/community/featuredQuestions/[questionNum]/_components/Answer";
import { isEmptyObject } from "@/utils";
import { useParams } from "next/navigation";
import {
  getQuestion,
  getQuestionAnswers,
  postAnswer,
  getQuestionComments,
  postQuestionComment,
} from "@/api/community";
import Spinner from "@/components/spinner";
import Comment from "@/app/community/featuredQuestions/[questionNum]/_components/Comment";
import DigitalSupport from "@/components/DigitalSupport";

const NavData = [
  "AWS",
  "Google Cloud",
  "Azure",
  "Heroku",
  "Linode",
  "Vultr",
  "IBM Cloud",
  "Oracle Cloud",
  "Netlify",
  "Cloudflare",
];

export default function QuestionDetails() {
  const params = useParams();
  const questionId = params.questionNum;
  const [value, setValue] = useState("");
  const [commentValue, setCommentValue] = useState("");
  const [answers, setAnswers] = useState([]);
  const [comments, setComments] = useState([]);
  const [question, setQuestion] = useState(null);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [commentButtonLoader, setCommentButtonLoader] = useState(false);
  const [addComment, setAddComment] = useState(false);
  const [showComment, setShowComment] = useState(false);

  const getAllAnswers = useCallback(async () => {
    try {
      const answers = await getQuestionAnswers(questionId);
      isEmptyObject(answers.result)
        ? setAnswers([])
        : setAnswers(answers.result);
    } catch (err) {
      console.error("Failed to load question answers");
    }
  }, [questionId]);

  const getQuestionDetails = useCallback(async () => {
    try {
      const question = await getQuestion(questionId);
      setQuestion(question);
    } catch (err) {
      console.error("Failed to load question details");
    }
  }, [questionId]);

  const onSubmitAnswer = async () => {
    setButtonLoader(true);
    const content = value;

    try {
      await postAnswer(content, questionId);
      const answers = await getQuestionAnswers(questionId);
      isEmptyObject(answers.result)
        ? setAnswers([])
        : setAnswers(answers.result);
      setButtonLoader(false);
      setValue("");
    } catch (err) {
      setButtonLoader(false);
    }
  };

  const getAllQuestionComments = async () => {
    try {
      setShowComment((prev) => !prev);
      const comments = await getQuestionComments(questionId);
      isEmptyObject(comments.result)
        ? setComments([])
        : setComments(comments.result);
    } catch (err) {
      console.error("Failed to load question comments");
    }
  };

  const QuestionCommentAction = async () => {
    try {
      setCommentButtonLoader(true);
      const content = commentValue;
      await postQuestionComment(content, questionId);
      getAllQuestionComments();
      setCommentValue("");
      setCommentButtonLoader(false);
    } catch (err) {
      setCommentButtonLoader(false);
      setCommentValue("");
      console.error("Failed to load question comments");
    }
  };

  useEffect(() => {
    getAllAnswers();
    getQuestionDetails();
  }, [questionId, getQuestionDetails, getAllAnswers]);

  return (
    <div className="flex ">
      <div className="p-10 px-[100px] pl-[150px]">
        <div className="mb-2 pb-10 border-b-[#E8E8E8] border-b-[1px]">
          <div className="text-[#1E6F65] font-[700] text-[16px]">
            {"// Question //"}
          </div>
          <div className="font-[700] text-[30px]">{question?.title}</div>
          <div className="font-[400] text-[16px] text-[#494949]">
            Posted on January 15, 2024
          </div>
          <div className="flex gap-2 my-2">
            {question?.tags.map((tag) => {
              return (
                <div
                  key={tag}
                  className="text-[#7B7B7B] bg-[#E3E8F4] px-2 p-1 rounded-md"
                >
                  {tag}
                </div>
              );
            })}
          </div>
          <div className="flex gap-2 items-center mt-6">
            <Image
              src="/community/avatar.svg"
              height={100}
              width={100}
              alt="avatar"
              className="w-12 rounded-full"
            />
            <div className="font-[700] text-[16px] text-[#01010C]">
              Asked by <span className="text-[#6C63FF]">Rick Wagenmakers</span>
            </div>
          </div>
          <div
            className="text-[#494949] font-[400] text-[16px] mt-5"
            dangerouslySetInnerHTML={{ __html: question?.body }}
          ></div>
          <div className="flex gap-3 items-center mt-3 mb-3">
            <div
              onClick={() => setAddComment((prev) => !prev)}
              className="text-[#01010C] font-[600] text-[16px] underline  border-r-[#DBDBDB] border-r-[2px] pr-2 cursor-pointer"
            >
              Add a comment
            </div>
            <div className="text-[#01010C] font-[600] text-[16px] underline border-r-[#DBDBDB] border-r-[2px] px-2 cursor-pointer">
              View accepted answer
            </div>
            <div
              className="text-[#01010C] font-[600] text-[16px] underline  px-2 cursor-pointer"
              onClick={getAllQuestionComments}
            >
              Show comments
            </div>
          </div>
          {addComment && (
            <>
              <div className="p-2">
                <QuilEditor
                  value={commentValue}
                  setValue={setCommentValue}
                  className="min-h-16"
                  placeholder=""
                />
              </div>
              <div className="mt-[50px]  pb-[50px]">
                <div className="my-5 text-[#494949] font-[400] text-[16px]">
                  This textbox defaults to using Markdown to format your answer.
                </div>
                <button
                  className="text-white bg-black font-[600] text-[16px] p-2 rounded-md px-10 w-[150px]"
                  onClick={QuestionCommentAction}
                >
                  {commentButtonLoader ? <Spinner /> : "Comment"}
                </button>
              </div>
            </>
          )}
          {showComment && (
            <>
              {comments.length > 0 ? (
                <div className="bg-white  p-8 rounded-md  border-2 mt-5">
                  {comments.map((comment) => (
                    <Comment key={comment?.id} comment={comment} />
                  ))}
                </div>
              ) : (
                <div className="font-[500] text-[16px] bg-white mt-4 ">
                  No comments yet
                </div>
              )}
            </>
          )}
        </div>
        <div>
          <div className="font-[600] text-[24px] pt-10 pb-5">
            Submit an answer
          </div>
        </div>
        <div className="p-2">
          <QuilEditor
            value={value}
            setValue={setValue}
            className="min-h-16"
            placeholder=""
          />
        </div>
        <div className="mt-[50px] border-b pb-[50px]">
          <div className="my-5 text-[#494949] font-[400] text-[16px]">
            This textbox defaults to using Markdown to format your answer.
          </div>
          <button
            className="text-white bg-black font-[600] text-[16px] p-2 rounded-md px-10 w-[140px]"
            onClick={onSubmitAnswer}
          >
            {buttonLoader ? <Spinner /> : "Submit"}
          </button>
        </div>
        <div className="flex gap-3 items-center  border p-2 rounded-md my-10 mt-12">
          <span className="material-symbols-outlined">error</span>
          <div className="font-[400] text-[14px] p-2">
            These answers are provided by our Community. If you find them
            useful, show some love by clicking the heart. If you run into issues
            leave a comment, or add your own answer to help others.
          </div>
        </div>
        {answers.length !== 0 ? (
          answers?.map((answer) => (
            <Answer answer={answer} key={answer.id} questionId={questionId} />
          ))
        ) : (
          <div className="mt-5 pl-4 text-[16px] font-[600]">
            No Answers Available
          </div>
        )}
      </div>
      <div className="w-[30%] pl-4 pt-10">
        <TryProduct />
        <div className="font-[700] text-[16px] w-[60%] pl-1 mt-5">
          Popular Topics
        </div>
        <div className="w-[60%] flex flex-col gap-[5px] my-4">
          {NavData.map((title) => (
            <div
              key={title}
              className="text-[#494949] hover:bg-gray-200 cursor-pointer py-2 rounded-md pl-1"
            >
              {title}
            </div>
          ))}
        </div>
        <DigitalSupport width="80%" />
        <DigitalSupport width="80%" />
      </div>
    </div>
  );
}
