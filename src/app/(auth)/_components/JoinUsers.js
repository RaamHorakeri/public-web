import Image from "next/image";
import React from "react";

const JoinUsers = () => {
  return (
    <div className="bg-[#F3F3F3] flex items-center justify-between rounded-[20px] h-[10%] p-[16px] py-10">
      <div className="flex items-center">
        <div className="flex relative mr-6 w-[60px] h-[35px]">
          <Image
            src="/images/ellipse6.svg"
            alt="userIcon"
            width={35}
            height={35}
            className="absolute left-0 rounded-full z-10"
          />
          <Image
            src="/images/ellipse7.svg"
            alt="userIcon"
            width={35}
            height={35}
            className="absolute left-[20px] rounded-full z-20"
          />
          <Image
            src="/images/ellipse6.svg"
            alt="userIcon"
            width={35}
            height={35}
            className="absolute left-[40px] rounded-full z-30"
          />
        </div>
        <div>
          <p className="text-[#262626] text-[16px] leading-[22px] font-bold">
            Join with 20k+ Users!
          </p>
          <p className="text-[#B7B7B7] text-[12px] leading-[16px] font-normal">
            Let&apos;s see our happy customer
          </p>
        </div>
      </div>
      <button className="p-2 rounded-full">
        <Image
          src="/images/topArrowRigth.svg"
          alt="topRightArrow"
          width={40}
          height={40}
        />
      </button>
    </div>
  );
};

export default JoinUsers;
