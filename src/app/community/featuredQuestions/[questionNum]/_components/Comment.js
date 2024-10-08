import { useState } from "react";
export default function Comment({ comment }) {
  const [showReply, setShowReply] = useState(true);

  return (
    <div className="pb-10 ">
      <div className="flex justify-between w-full">
        <div className="flex  items-center gap-2 font-[600] text-[16px]">
          <span className="text-[#6C63FF]">Rick Wagenmakers </span>
          <div className="h-1 w-1 rounded-full bg-black"></div>
          <span className="text-[#494949]">January 16, 2024</span>
        </div>
        <div
          className="flex gap-2"
          onClick={() => setShowReply((prev) => !prev)}
        >
          <span>{showReply ? "Hide Reply" : "Show Reply"}</span>
          <span className="material-symbols-outlined cursor-pointer">
            {showReply ? "keyboard_arrow_up" : "keyboard_arrow_down"}
          </span>
        </div>
      </div>
      {showReply && (
        <div
          className="text-[#494949]"
          dangerouslySetInnerHTML={{ __html: comment?.body }}
        ></div>
      )}
    </div>
  );
}
