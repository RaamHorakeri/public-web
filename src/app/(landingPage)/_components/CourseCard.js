import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseCard = ({ card }) => {
  return (
    <div className="flex justify-center rounded-lg border border-[#333333] w-[77rem] h-[28.3125rem] gap-ml p-[3.75rem]">
      <div className="w-1/2">
        <Image src={card.image} alt="img" width={"full"} height={"full"} />
      </div>
      <div className="w-1/2">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h3 className="font-roboto font-bold text-[#ffffff] text-[2.25rem] leading-[2.625rem]">
              {card.cardHead}
            </h3>
            <p className="text-[#D3D3D3] font-bold text-[1.125rem] leading-[1.534375rem]">
              {card.cardSubHead}
            </p>
          </div>

          <p className="font-roboto font-bold text-[1.125rem] text-[#ffffff] leading-[1.534375rem]">
            {card.cardBody}
          </p>
          <div className="flex items-center justify-around gap-4">
            <Button
              href="/enroll"
              className="bg-[#ffffff] text-[#0A0A0B] w-[21rem] h-[3rem]"
              text={card.cardButtons[0]}
            />
            <Button
              href={`/courses/${card.courseId}`}
              className="text-[#ffffff] border-[2px] border-[#ffffff] w-[21rem] h-[3rem]"
              text={card.cardButtons[1]}
            />
            <Button
              href="/getHelp"
              text={card.cardButtons[2]}
              className="text-[#ffffff] border-none w-[21rem] h-[3rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
