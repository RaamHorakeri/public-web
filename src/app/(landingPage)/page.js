import React from "react";
import CourseCard from "./_components/CourseCard";
import image1 from "../../../public/images/landingPage/image1.png";
import image2 from "../../../public/images/landingPage/image2.png";
import image3 from "../../../public/images/landingPage/image3.png";
import image4 from "../../../public/images/landingPage/image4.png";

import Globe from "@/components/Globe";

import GrowSection from "@/components/GrowSection";
import Button from "@/components/Button";
import TopBanner from "./_components/TopBanner";

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
      <TopBanner />
      <section className="flex flex-col items-center gap-[1.125rem] mt-[2.5rem] mb-[1.125rem]">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#714DFF] via-[#E151FF] to-[#FFF759] text-[1.5rem] font-bold leading-[2.04625rem]">
          What&apos;s New
        </h1>
        <h1 className="font-roboto font-bold text-[#ffffff] text-[2.25rem] leading-[2.625rem] text-center">
          Featured Courses
        </h1>
        <p
          className="font-roboto font-bold text-[#ffffff] text-[1.125rem] leading-[1.534375rem] text-center"
          style={{ width: "46.5625rem", height: "3.125rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
          accumsan bibendum gravida maecenas augue elementum et neque.
          Suspendisse imperdiet.
        </p>
      </section>

      <section className="flex flex-col items-center gap-[2.5rem] py-[2.5rem] px-[5.4375rem]">
        {cardDetails.map((card, index) => (
          <CourseCard key={card.courseId} card={card} />
        ))}
      </section>

      <section className="mt-[5rem] flex flex-col justify-center items-center text-center gap-[2.5rem]">
        <h1 className="w-[46.625rem] h-[8.375rem] font-roboto font-extrabold text-[3.25rem] leading-[4.440625rem] text-[#ffffff]">
          Join the biggest Community of learning
        </h1>
        <p className="font-roboto font-bold text-[1.125rem] leading-[1.534375rem] w-[49.125rem] h-[3.125rem] text-[#ffffff]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Aliquam, quis malesuada sed tristique sed vulputate eleifend urna
          potenti. Amet non sed eget
        </p>
        <div className="flex flex-col gap-[2.5rem] items-center mb-[2.5rem]">
          <div>
            <Globe />
          </div>
          <Button
            text="View More"
            href="/community/featuredQuestions"
            className="bg-[#ffffff] text-[#0A0A0B]"
          />
        </div>
      </section>
      <GrowSection />
    </div>
  );
}