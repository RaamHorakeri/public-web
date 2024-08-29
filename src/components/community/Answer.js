import { useState, useRef } from "react";
import Comment from "./Comment";
import {
  getAnswerComments,
  postAnswerComment,
  upVoteAnswer,
  downVoteAnswer,
} from "@/api/community";
import { isEmptyObject } from "@/utils";

export default function Answer({ answer }) {
  const [liked, setLiked] = useState(null);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const textareaRef = useRef(null);

  const getComments = async () => {
    let comments = await getAnswerComments(answer.id);
    comments = isEmptyObject(comments) ? [] : comments;
    setComments(comments);
  };
  const showCommentsHandler = async () => {
    if (!showComments) {
      await getComments();
    }
    setShowComments(!showComments);
  };

  const commentAction = async (event) => {
    event.preventDefault();
    const content = textareaRef.current.value;
    await postAnswerComment(content, answer.id);
    setShowCommentForm(false);
    await getComments();
  };

  const upvoteHandler = async () => {
    setLiked(true);
    await upVoteAnswer(answer.id);
  };
  const downvoteHandler = async () => {
    setLiked(false);
    await downVoteAnswer(answer.id);
  };

  return (
    <>
      {/* Answer Section */}
      <div className="w-[748px] h-auto mt-8">
        {/* Header Section */}
        <div className="flex items-center  px-[16px] py-[12px] gap-[6px] mb-4 w-[748px] h-[43px]">
          <h6 className="text-xs font-normal leading-[19.2px] font-roboto  text-primary-1600 h-[19px] ">
            Wicky Kaye
          </h6>
          <p className="text-[12px] leading-[14.4px] h-[14px] font-roboto font-normal">
            Posted on March 1, 2024
          </p>
        </div>

        {/* Answer Section */}
        <div className="w-[748px]  py-[10px] px-[16px] mb-4 ">
          Hi, <span className="text-primary">@Mathew Doe</span>
          <p className="text-xs leading-s font-roboto font-normal w-[716px] ">
            {answer?.body}
          </p>
        </div>

        {/* Footer Section with Menu Items */}
        <div className="w-[748px] h-[50px] px-[8px] flex justify-between items-center ">
          {/* Left Side Menus */}
          <div className="flex justify-between w-[294px] h-[50px] ">
            <button
              className="text-xs leading-[19.2px] font-roboto font-normal text-black flex items-center"
              onClick={showCommentsHandler}
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
            <button
              className={`text-xs font-roboto font-bold  leading-[19.2px] ${liked !== null ? (liked ? "text-[#0A0A0B]" : "text-gray-400") : "text-gray-400"}`}
              onClick={async () => await upvoteHandler()}
            >
              Upvote
            </button>
            <button
              className={`text-xs font-roboto font-bold  leading-[19.2px] ${liked !== null ? (!liked ? "text-[#0A0A0B]" : "text-gray-400") : "text-gray-400"}`}
              onClick={downvoteHandler}
            >
              Downvote
            </button>
          </div>
        </div>
        {/* Add Comment Section */}
        {showCommentForm && (
          <>
            <div className="w-[748px] h-[143px] mt-4  gap-[10px] ">
              <h6 className="text-s font-roboto font-medium leading-[24px] bg-secondary-100 h-[48px] flex items-center px-[16px] py-[12px] border border-[#D9D9D9] border-b-0 ">
                Add a Comment
              </h6>
              <form onSubmit={commentAction}>
                <textarea
                  name="content"
                  ref={textareaRef}
                  className="w-full p-2 h-[50px] border border-[#D9D9D9] border-t-0 outline-none"
                  placeholder="Leave a Question...."
                ></textarea>
                <button
                  type="submit"
                  className="float-right bg-white  border border-primary text-primary rounded-md w-[75px] h-[35px]"
                >
                  Submit
                </button>
              </form>
            </div>
            <hr className="mb-4 mt-8 border-[#B7B7B7] w-[748px]" />
          </>
        )}

        {/* Comments Section */}
        {showComments && (
          <>
            {comments.length != 0 ? (
              comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))
            ) : (
              <div className="pl-5">No Comments Available</div>
            )}
          </>
        )}
      </div>
      {/* </div> */}
      <hr className="mb-4 mt-8 border-[#B7B7B7] w-[748px]" />
    </>
  );
}
