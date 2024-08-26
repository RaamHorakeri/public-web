'use client'

import Pagination from '@/components/Pagination'
import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;

    const featuredQuestions = [
        {
            questionId: 1,
            question: "Why is IP-address of droplet listed on spamlist?",
            totalAnswers: 9,
            questionAge: 7,
            author: "Abraham",
            tags: ["Engineering", "Security"]
        },
        {
            questionId: 2,
            question: "Why is IP-address of droplet listed on spamlist?",
            totalAnswers: 9,
            questionAge: 7,
            author: "Abraham",
            tags: ["Engineering", "Security"]
        },
        {
            questionId: 3,
            question: "Why is IP-address of droplet listed on spamlist?",
            totalAnswers: 9,
            questionAge: 7,
            author: "Abraham",
            tags: ["Engineering", "Security"]
        },
        {
            questionId: 4,
            question: "Why is IP-address of droplet listed on spamlist?",
            totalAnswers: 9,
            questionAge: 7,
            author: "raju",
            tags: ["Engineering", "Security"]
        },
        {
            questionId: 5,
            question: "Why is IP-address of droplet listed on spamlist?",
            totalAnswers: 9,
            questionAge: 7,
            author: "Abraham",
            tags: ["Engineering", "Security"]
        },
        {
            questionId: 6,
            question: "Why is IP-address of droplet listed on spamlist?",
            totalAnswers: 9,
            questionAge: 7,
            author: "Abraham",
            tags: ["Engineering", "Security"]
        },
        {
            questionId: 7,
            question: "Why is IP-address of droplet listed on spamlist?",
            totalAnswers: 9,
            questionAge: 7,
            author: "Abraham",
            tags: ["Engineering", "Security"]
        },
        {
            questionId: 8,
            question: "Why is IP-address of droplet listed on spamlist?",
            totalAnswers: 9,
            questionAge: 7,
            author: "Abraham",
            tags: ["Engineering", "Security"]
        },
        {
            questionId: 9,
            question: "Why is IP-address of droplet listed on spamlist?",
            totalAnswers: 9,
            questionAge: 7,
            author: "Abraham",
            tags: ["Engineering", "Security"]
        },
        {
            questionId: 10,
            question: "Why is IP-address of droplet listed on spamlist?",
            totalAnswers: 9,
            questionAge: 7,
            author: "Abraham",
            tags: ["Engineering", "Security"]
        },
        {
            questionId: 11,
            question: "Why is IP-address of droplet listed on spamlist?",
            totalAnswers: 9,
            questionAge: 7,
            author: "Ashish",
            tags: ["Engineering", "Security"]
        },
        {
            questionId: 12,
            question: "Why is IP-address of droplet listed on spamlist?",
            totalAnswers: 9,
            questionAge: 7,
            author: "Abraham",
            tags: ["Engineering", "Security"]
        },
    ]
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentQuestions = featuredQuestions.slice(indexOfFirstItem, indexOfLastItem);
  
    const totalPages = Math.ceil(featuredQuestions.length / itemsPerPage);

   

    return (
        <div>
            <section className="bg-[url('/images/bg1.png')] py-0 px-[87px] h-[320px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-6">
                <h1 className="font-roboto font-semibold text-[32px] leading-[38.4px] text-center text-[#7C56CF]">
                    Featured Questions
                </h1>
                <p className="font-roboto font-normal text-[14px] leading-[16.8px] text-center">
                    Home/Community/Featured
                </p>

            </section>


            <div className="container mx-auto  mt-16 flex justify-between">
                {/* Left Section */}
                <div className="w-[399.02px] h-[285.9px] gap-[48px] ">
                    <h3 className="text-s w-[63px] h-[24px] leading-[24px] font-roboto font-semibold mb-4">Search</h3>
                    <hr className="mb-4 border-[#B7B7B7] w-[399.02px]" />
                    <div className="relative w-[342px] h-[49px] mb-12">
                        <input
                            type="text"
                            placeholder="Search in Community"
                            className=" px-4 py-2 border rounded w-[342px] h-[45px]"
                        />
                        <button className="absolute right-0 top w[45.4px] h-[45.9px] ">
                            <Image src='/images/searchIcon.png' width={45} height={45} alt='searchIcon' />
                        </button>
                    </div>
                    <hr className="mb-12 border-[#B7B7B7] w-[399.02px]" />
                    <h2 className="text-s w-[98px] h-[24px] leading-[24px] font-roboto font-semibold mb-4">Categories</h2>
                    <hr className="mb-12 border-[#B7B7B7] w-[399.02px]" />
                    <h2 className="text-s leading-[24px] h-[24px] font-roboto font-semibold mb-4">Popular Articles</h2>
                    <hr className="mb-12 border-[#B7B7B7] w-[399.02px]" />
                </div>

                {/* Right Section */}
                <div className="w-[787px] mb-20 ">
                    <div className='h-[58px] flex items-center justify-between'>
                        <h2 className="text-m leading-m bg-red ml-2 text-primary-1600 font-bold">
                            Results
                        </h2>

                        <button className=" font-normal text-xs leading-[19.2px] bg-secondary-100 text-[#0A0A0B] font-roboto  rounded-[22px] border border-primary p-[10px] w-[200px] h-[50px] ">
                            Ask a Question
                        </button>
                    </div>


                    {/* Main Section */}

                    {
                        currentQuestions.map((question, index) => {
                            return (
                                <section key={index} className='w-[788px] h-[148px] border border-[#D9D9D9] mt-l mb-l '>
                                    <h4 className='h-[43px] bg-secondary-100 py-3 px-4 font-roboto font-medium text-xs leading-[19.2px] text-primary-1600 ' >{question.question}</h4>
                                    <div className=' h-[54px] bg-secondary-100 py-3 px-4 flex justify-between items-center ' >
                                        <p className=' h-[30px] text-success font-roboto font-normal text-xs leading-s '>Accepted Answers Available</p>
                                        <p className=' h-[30px] text-[#3E3E3E] font-roboto font-normal text-xs leading-s '>{question.totalAnswers} Answers - {question.questionAge} Months ago - By {question.author}</p>
                                    </div>
                                    <div className="flex items-center space-x-2 py-[10px] px-4 h-[51px] ">
                                        {question.tags.map((tag,index) => {
                                            return (
                                                <span key={index} className="bg-[#F3F3F3] rounded-sm text-center flex justify-center items-center font-roboto font-normal text-[14px] text-[#3E3E3E] leading-[16.8px] w-[90px] h-[31px]">{tag}</span>

                                            )
                                        })}
                                    </div>
                                </section>
                            )
                        })
                    }

                    <div className='flex items-center justify-center space-x-4'>
                        <p>Total 12 items</p>
                        <Pagination   currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage} />
                    </div>

                </div>
            </div>


        </div>
    )
}

export default page