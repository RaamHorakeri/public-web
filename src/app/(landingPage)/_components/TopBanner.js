import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const TopBanner = () => {
  return (
    <section className="bg-[#01010C] relative h-[46.25rem] flex flex-col items-center justify-center gap-m border-b border-[#333333] ">
      <h1 className="font-roboto text-[#FFFFFF] font-extrabold text-[3.75rem] leading-[5.115rem] text-center mb-m">
        Enhance{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#714DFF] via-[#9C83FF] to-[#E151FF]">
          Your Skills to Propel
        </span>{" "}
        <br /> Your Career Forward.
      </h1>
      <p className="font-roboto font-bold text-[#FFFFFF] text-[1rem] leading-[1.7375rem] text-center">
        Master the Tools and Knowledge Needed to Excel in Your Professional
        Journey.
      </p>
      <div className="flex gap-5 mt-4">
        <Button
          href="#"
          className="text-[#ffffff] border-[2px] border-[#ffffff]"
          text="Get Started"
        />
        <Button
          href="/enroll"
          className="bg-[#ffffff] text-[#0A0A0B]"
          text="Enroll Now"
        />
      </div>

      {/* Image elements */}
      <Image
        alt="vectorImg"
        src="/images/landingPage/rocket.png"
        width={173}
        height={152}
        className="absolute top-40 left-32 animate-move-right"
      />
      <Image
        alt="vectorImg"
        src="/images/landingPage/baloon.png"
        width={155}
        height={196}
        className="absolute top-10 right-32 animate-move-up-down"
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

export default TopBanner;
