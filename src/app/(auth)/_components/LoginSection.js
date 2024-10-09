import Image from "next/image";
import React from "react";

const LoginSection = () => {
  return (
    <div className="flex flex-col justify-between w-[35%] h-[100%] bg-[url('/images/loginBg.png')] bg-cover bg-center rounded-[20px] p-[20px]">
      <p className="text-[#ffffff] text-[28px] leading-[36px] font-bold">
        Revolutionizing the way we create, render, and experience content.
      </p>
      <div className="flex flex-col justify-between bg-[#8967D4A3] w-[100%] h-[160px] p-[20px] rounded-[16px]">
        <div className="flex justify-between items-center">
          <div className="flex">
            <Image
              src="/images/Ellipse8.svg"
              alt="circleIcon"
              width={45}
              height={45}
            />
            <p className="-ml-4 border-[2px] border-[#fafafa] text-center py-[12px] rounded-[16px] w-[140px] text-[14px] font-normal leading-[20px] text-[#fafafa]">
              Creating
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/topArrowleft.svg"
              alt="topRightArrow"
              width={45}
              height={45}
            />
            <Image
              src="/images/topArrowRigth.svg"
              alt="topRightArrow"
              width={45}
              height={45}
            />
          </div>
        </div>
        <p className="text-[#FAFAFA] font-normal text-[12px] leading-[16px]">
          Create design brief with AI voice command to make awesome 3D images
          that suit your needs.
        </p>
      </div>
    </div>
  );
};

export default LoginSection;
