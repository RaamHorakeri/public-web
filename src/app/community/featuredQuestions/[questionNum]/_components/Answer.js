import Image from "next/image";
import QuilEditor from "@/app/community/_components/QuillEditor/QuilEditor";
import React, { useEffect, useState, useCallback } from "react";
import Comment from "./Comment";
import { getAnswerComments, postAnswerComment } from "@/api/community";
import { isEmptyObject } from "@/utils";
import Spinner from "@/components/spinner";

export default function Answer({ answer, questionId }) {
  const [liked, setLiked] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [reply, setReply] = useState(false);
  const [value, setValue] = useState("");
  const [comments, setComments] = useState([]);
  const [loader, setLoader] = useState(false);
  const [hideAnswer, setHideAnswer] = useState(false);

  const getComments = useCallback(async () => {
    try {
      const comments = await getAnswerComments(answer?.id);
      isEmptyObject(comments.result)
        ? setComments([])
        : setComments(comments.result);
    } catch (err) {
      console.error("Failed to load Comments");
    }
  }, [answer?.id]);

  const commentAction = async () => {
    try {
      setLoader(true);
      const content = value;
      await postAnswerComment(content, answer.id);
      setValue("");
      await getComments();
      setLoader(false);
    } catch (e) {
      setLoader(false);
      console.log("failed to post comment", e.message);
    }
  };

  useEffect(() => {
    getComments();
  }, [getComments]);

  return (
    <>
      {/* bg-[#EBEAFF]  accepted answer bg*/}
      <div className="flex gap-5 mt-5 p-6  rounded-md  ">
        <div className="flex flex-col items-center">
          <span className="material-symbols-outlined">keyboard_arrow_up</span>
          <Image
            src={liked ? "/community/heart-filled.svg" : "/community/heart.svg"}
            height={100}
            width={20}
            className="cursor-pointer"
            onClick={() => setLiked((prev) => !prev)}
            alt={"like"}
          />
          <span>1</span>
        </div>
        <div className="w-full  ">
          <div className=" flex  items-center justify-between w-full">
            <div className="font-[600] text-[16px] flex  items-center gap-2">
              <span className="text-[#6C63FF]">Rick Wagenmakers </span>
              <div className="h-1 w-1 rounded-full bg-black"></div>
              <span>January 16, 2024</span>
            </div>
            <div className="flex gap-2">
              {false && (
                <>
                  {" "}
                  <span className="material-symbols-outlined">task_alt</span>
                  <span>Accepted Answer</span>
                </>
              )}
              <span
                className="material-symbols-outlined cursor-pointer"
                onClick={() => {
                  setHideAnswer((prev) => !prev);
                }}
              >
                {hideAnswer ? "keyboard_arrow_down" : "keyboard_arrow_up"}
              </span>
            </div>
          </div>
          {!hideAnswer && (
            <div
              className="text-[#494949] font-[400] text-[16px]"
              dangerouslySetInnerHTML={{ __html: answer?.body }}
            ></div>
          )}
          <div className="text-[#01010C]  flex items-center gap-3 font-[600] text-[14px] mt-3">
            <div
              className="flex items-center  gap-2 cursor-pointer"
              onClick={() => setShowReplies((prev) => !prev)}
            >
              <span className="underline w-[90px]">
                {showReplies ? "Hide replies" : "Show replies"}
              </span>
              <span className="material-symbols-outlined mt-1 cursor-pointer">
                {showReplies ? "keyboard_arrow_up" : "keyboard_arrow_down"}
              </span>
            </div>
            <span
              className="underline border-l-2 border-r-2 border-[#DBDBDB] px-3 cursor-pointer"
              onClick={() => setReply((prev) => !prev)}
            >
              Reply
            </span>
            <span className="underline cursor-pointer">Report</span>
          </div>
          {!hideAnswer && reply && (
            <>
              <div className="p-2">
                <QuilEditor
                  value={value}
                  setValue={setValue}
                  className="min-h-16"
                  placeholder="Leave a Comment....."
                />
              </div>
              <div className="mt-[20px]  pb-[50px]">
                <div className="mb-5 text-[#494949] font-[400] text-[16px]">
                  This textbox defaults to using Markdown to format your answer.
                </div>
                <button
                  className="text-white bg-black font-[600] text-[16px] p-2 rounded-md px-10 w-[150px]"
                  onClick={commentAction}
                >
                  {loader ? <Spinner /> : "Comment"}
                </button>
              </div>
            </>
          )}

          {!hideAnswer && showReplies && (
            <>
              {comments.length > 0 ? (
                <div className="bg-white  pt-8 pl-5 rounded-md mt-4 border-l-2">
                  {comments.map((comment) => (
                    <Comment comment={comment} key={comment?.id} />
                  ))}
                </div>
              ) : (
                <div className="font-[500] text-[16px] bg-white mt-4 ">
                  No replies yet
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
