import Link from "next/link";
import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import CourseCard from "./components/courseCard/CourseCard";
import image1 from "../../../public/images/landingPage/image1.png";
import image2 from "../../../public/images/landingPage/image2.png";
import image3 from "../../../public/images/landingPage/image3.png";
import image4 from "../../../public/images/landingPage/image4.png";
import { Glass_Antiqua } from "next/font/google";
import Globe from "@/components/Globe";
import Image from "next/image";
import GrowSection from "@/components/GrowSection";

const cardDetails = [
  {
    courseId: 1,
    cardHead: "Java Software Engineer",
    image: image1,
    cardSubHead: "We care for your technology so you can care for your Career ",
    cardBody:
      " Gain comprehensive skills in Java programming, covering core concepts, advanced techniques, and industry best practices.Gain comprehensive skills in Java programming, covering core concepts, advanced techniques, and industry best practices.",
    cardButtons: ["Enroll Now", "Learn More", "Get Help"],
  },
  {
    courseId: 2,
    cardHead: "Java Software Engineer",
    image: image4,
    cardSubHead: "We care for your technology so you can care for your Career ",
    cardBody:
      " Gain comprehensive skills in Java programming, covering core concepts, advanced techniques, and industry best practices.Gain comprehensive skills in Java programming, covering core concepts, advanced techniques, and industry best practices.",
    cardButtons: ["Enroll Now", "Learn More", "Get Help"],
  },
  {
    courseId: 3,
    cardHead: "Java Software Engineer",
    image: image3,
    cardSubHead: "We care for your technology so you can care for your Career ",
    cardBody:
      " Gain comprehensive skills in Java programming, covering core concepts, advanced techniques, and industry best practices.Gain comprehensive skills in Java programming, covering core concepts, advanced techniques, and industry best practices.",
    cardButtons: ["Enroll Now", "Learn More", "Get Help"],
  },
  {
    courseId: 4,
    cardHead: "Java Software Engineer",
    image: image2,
    cardSubHead: "We care for your technology so you can care for your Career ",
    cardBody:
      " Gain comprehensive skills in Java programming, covering core concepts, advanced techniques, and industry best practices.Gain comprehensive skills in Java programming, covering core concepts, advanced techniques, and industry best practices.",
    cardButtons: ["Enroll Now", "Learn More", "Get Help"],
  },
];

export default function Home() {
  return (
    <div className="bg-[#01010C]">
      <HeroSection />
      <section className="flex flex-col items-center gap-[18px] mt-2xl mb-m">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#714DFF] via-[#E151FF] to-[#FFF759] text-[24px] font-bold leading-[32.74px] ">
          What&apos;s New
        </h1>
        <h1 className="font-roboto font-bold text-[#ffffff] text-[36px] leading-[42px] text-center">
          Featured Courses
        </h1>
        <p
          className="font-roboto font-bold text-[#ffffff] text-[18px] leading-[24.55px] text-center"
          style={{ width: "745px", height: "50px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
          accumsan bibendum gravida maecenas augue elementum et neque.
          Suspendisse imperdiet.
        </p>
      </section>

      <section className="flex flex-col items-center gap-ml py-ml px-[87px] ">
        {cardDetails.map((card, index) => (
          <CourseCard key={index} card={card} />
        ))}
      </section>

      <section className="  mt-20 flex flex-col justify-center items-center text-center gap-10 ">
        <h1 className=" w-[746px] h-[134px] font-roboto font-extrabold text-[52px] leading-[70.93px] text-[#ffffff] ">
          Join the biggest Community of learning
        </h1>
        <p className=" font-roboto font-bold text-[18px] leading-[24.55px] w-[786px] h-[50px] text-[#ffffff] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Aliquam, quis malesuada sed tristique sed vulputate eleifend urna
          potenti. Amet non sed eget
        </p>
        <div className="flex flex-col gap-10 items-center mb-40">
          <div>
            <Globe />
          </div>
          <Link
            href="/community/featuredQuestions"
            className=" text-[#1C1C1C] bg-[#ffffff] font-bold text-xs flex justify-center items-center leading-[21.82px] rounded-[22px] border border-[#ffffff] w-[142px] h-[46px]"
          >
            View More
          </Link>
        </div>
      </section>
      <GrowSection />
    </div>
  );
}
