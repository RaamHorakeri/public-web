"use client";

import Input from "@/components/Input";
import Pagination from "@/components/Pagination";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const featuredQuestions = [
    {
      questionId: 1,
      question: "Why is IP-address of droplet listed on spamlist?",
      totalAnswers: 9,
      questionAge: 7,
      author: "Abraham",
      tags: ["Engineering", "Security"],
    },
    {
      questionId: 2,
      question: "Why is IP-address of droplet listed on spamlist?",
      totalAnswers: 9,
      questionAge: 7,
      author: "Abraham",
      tags: ["Engineering", "Security"],
    },
    {
      questionId: 3,
      question: "Why is IP-address of droplet listed on spamlist?",
      totalAnswers: 9,
      questionAge: 7,
      author: "Abraham",
      tags: ["Engineering", "Security"],
    },
    {
      questionId: 4,
      question: "Why is IP-address of droplet listed on spamlist?",
      totalAnswers: 9,
      questionAge: 7,
      author: "raju",
      tags: ["Engineering", "Security"],
    },
    {
      questionId: 5,
      question: "Why is IP-address of droplet listed on spamlist?",
      totalAnswers: 9,
      questionAge: 7,
      author: "Abraham",
      tags: ["Engineering", "Security"],
    },
    {
      questionId: 6,
      question: "Why is IP-address of droplet listed on spamlist?",
      totalAnswers: 9,
      questionAge: 7,
      author: "Abraham",
      tags: ["Engineering", "Security"],
    },
    {
      questionId: 7,
      question: "Why is IP-address of droplet listed on spamlist?",
      totalAnswers: 9,
      questionAge: 7,
      author: "Abraham",
      tags: ["Engineering", "Security"],
    },
    {
      questionId: 8,
      question: "Why is IP-address of droplet listed on spamlist?",
      totalAnswers: 9,
      questionAge: 7,
      author: "Abraham",
      tags: ["Engineering", "Security"],
    },
    {
      questionId: 9,
      question: "Why is IP-address of droplet listed on spamlist?",
      totalAnswers: 9,
      questionAge: 7,
      author: "Abraham",
      tags: ["Engineering", "Security"],
    },
    {
      questionId: 10,
      question: "Why is IP-address of droplet listed on spamlist?",
      totalAnswers: 9,
      questionAge: 7,
      author: "Abraham",
      tags: ["Engineering", "Security"],
    },
    {
      questionId: 11,
      question: "Why is IP-address of droplet listed on spamlist?",
      totalAnswers: 9,
      questionAge: 7,
      author: "Ashish",
      tags: ["Engineering", "Security"],
    },
    {
      questionId: 12,
      question: "Why is IP-address of droplet listed on spamlist?",
      totalAnswers: 9,
      questionAge: 7,
      author: "Abraham",
      tags: ["Engineering", "Security"],
    },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentQuestions = featuredQuestions.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const totalPages = Math.ceil(featuredQuestions.length / itemsPerPage);

  return (
    <div className="w-[787px] mb-20 ">
      <div className="h-[58px] flex items-center justify-between">
        <h2 className="text-m leading-m bg-red ml-2 text-primary-1600 font-bold">
          Results
        </h2>

        <Link href="/community/askQuestion">
          {" "}
          <button className=" font-normal text-xs leading-[19.2px] bg-secondary-100 text-[#0A0A0B] font-roboto  rounded-[22px] border border-primary p-[10px] w-[200px] h-[50px] ">
            Ask a Question
          </button>
        </Link>
      </div>

      {/* Main Section */}

      {currentQuestions.map((question, index) => {
        return (
          <section
            key={index}
            className="w-[788px] h-[148px] border border-[#D9D9D9] mt-l mb-l "
          >
            <h4 className="h-[43px] bg-secondary-100 py-3 px-4 font-roboto font-medium text-xs leading-[19.2px] text-primary-1600 ">
              {question.question}
            </h4>
            <div className=" h-[54px] bg-secondary-100 py-3 px-4 flex justify-between items-center ">
              <p className=" h-[30px] text-success font-roboto font-normal text-xs leading-s ">
                Accepted Answers Available
              </p>
              <p className=" h-[30px] text-[#3E3E3E] font-roboto font-normal text-xs leading-s ">
                {question.totalAnswers} Answers - {question.questionAge} Months
                ago - By {question.author}
              </p>
            </div>
            <div className="flex items-center space-x-2 py-[10px] px-4 h-[51px] ">
              {question.tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="bg-[#F3F3F3] rounded-sm text-center flex justify-center items-center font-roboto font-normal text-[14px] text-[#3E3E3E] leading-[16.8px] w-[90px] h-[31px]"
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </section>
        );
      })}

      <div className="flex items-center justify-center space-x-4">
        <p>Total 12 items</p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Page;
