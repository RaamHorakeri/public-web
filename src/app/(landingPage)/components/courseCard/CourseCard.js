import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseCard = ({ card }) => {
  return (
    <div className="flex   justify-center rounded-lg border border-[#333333] w-[1232px] h-[453px] gap-ml p-[60px] ">
      <div className="w-1/2">
        <Image src={card.image} alt="img" width={"full"} height={"full"} />
      </div>
      <div className="w-1/2">
        <div className=" flex flex-col  gap-10 ">
          <div className=" flex flex-col gap-5">
            <h3 className="font-roboto font-bold text-[#ffffff] text-[36px]  leading-[42px]">
              {card.cardHead}
            </h3>
            <p className="text-[#D3D3D3] font-bold tect-[18px] leading-[24.55px]">
              {card.cardSubHead}
            </p>
          </div>

          <p className="font-roboto font-bold  text-[18px] text-[#ffffff] leading-[24.55px]">
            {card.cardBody}
          </p>
          <div className=" flex  items-center justify-around gap-4 ">
            <Link
              href="/enroll"
              className="bg-white text-center text-[#1C1C1C] leading-[21.82px] text-xs font-roboto font-bold flex justify-center items-center rounded-[22px] border  border-[#1C1C1C]"
              style={{ width: "336px", height: "48px" }}
            >
              {card.cardButtons[0]}
            </Link>
            <Link
              href={`/courses/${card.courseId}`}
              className=" text-[#ffffff] text-xs leading-[21.82px] font-bold font-roboto text-center border border-[#ffffff] flex justify-center items-center rounded-[22px]"
              style={{ width: "336px", height: "48px" }}
            >
              {card.cardButtons[1]}
            </Link>
            <Link
              href="getHelp"
              className=" text-center text-[#ffffff] text-xs leading-[21.82px] font-roboto font-bold flex justify-center items-center"
              style={{ width: "336px", height: "48px" }}
            >
              {card.cardButtons[2]}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
