import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#01010C] relative h-[740px] flex flex-col items-center justify-center gap-m border-b border-[#333333] ">
      <h1 className="font-roboto text-[#FFFFFF] font-extrabold text-[60px] leading-[81.84px] text-center mb-m">
        Enhance{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#714DFF]   via-[#9C83FF]  to-[#E151FF]">
          Your Skills to Propel
        </span>{" "}
        <br /> Your Career Forward.
      </h1>
      <p className="font-roboto font-bold text-[#FFFFFF] text-s leading-[27.8px] text-center">
        Master the Tools and Knowledge Needed to Excel in Your Professional
        Journey.
      </p>
      <div className="flex gap-5 mt-4">
        <Link
          href="#"
          className=" text-[#ffffff] font-bold text-xs flex justify-center items-center leading-[21.82px] rounded-[20px] border border-[#ffffff] w-[162px] h-[46px]"
        >
          Get Started
        </Link>
        <Link
          href="/enroll"
          className="bg-[#ffffff] font-bold text-[#0A0A0B] border text-xs flex justify-center items-center leading-[21.82px] rounded-[20px] w-[142px] h-[46px]"
        >
          Enroll Now
        </Link>
      </div>
      <Image
        alt="vectorImg"
        src="/images/landingPage/rocket.png"
        width={173}
        height={152}
        className="absolute top-40 left-32 animate-move-right "
      />
      <Image
        alt="vectorImg"
        src="/images/landingPage/baloon.png"
        width={155}
        height={196}
        className="absolute top-10 right-32 animate-move-up-down "
      />
      <Image
        alt="vectorImg"
        src="/images/landingPage/book.png"
        width={267}
        height={200}
        className="absolute bottom-10 left-72 animate-move-up-down"
      />
      <Image
        alt="vectorImg"
        src="/images/landingPage/circle.png"
        width={98}
        height={98}
        className="absolute bottom-10 right-1/3 animate-scale-up-down"
      />
      <Image
        alt="vectorImg"
        src="/images/landingPage/triangle.png"
        width={147}
        height={153}
        className="absolute top-96 right-32 animate-move-right"
      />
    </section>
  );
};

export default HeroSection;
