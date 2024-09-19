import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const GrowSection = () => {
  return (
    <div>
      <section className="relative border  border-[#333333] py-0 px-[87px] h-[507px] flex flex-col items-center justify-center gap-m">
        <Image
          className="absolute top-8 left-8 animate-scale-up-down w-[200px]"
          alt="vextorImg"
          src="/images/landingPage/vector2.png"
          width={272}
          height={267}
        />
        <Image
          className="absolute bottom-8 right-8 animate-scale-up-down w-[200px]"
          alt="vextorImg"
          src="/images/landingPage/vector2.png"
          width={272}
          height={267}
        />
        <h1 className="font-roboto text-[#FFFFFF] font-bold text-[48px] leading-[56px] text-center mb-m">
          Grow{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E151FF]   via-[#9C83FF]  to-[#714DFF]">
            Better With Us
          </span>{" "}
          Today.
        </h1>
        <p className="font-roboto font-normal text-[#FFFFFF] text-[18px] leading-[24.55px] w-[603px] text-center">
          Improve the quality of customer relationships,generate leads,and
          maximize product sales with just one integrated CRMtool
        </p>
        <div className="flex gap-5 mt-4">
          <Button
            href="#"
            className="text-[#ffffff]  border-[2px] border-[#ffffff]"
            text="Get Started"
          />
          <Button
            href="/enroll"
            className="bg-[#ffffff]  text-[#0A0A0B] "
            text="Enroll Now"
          />
        </div>
      </section>
    </div>
  );
};

export default GrowSection;
