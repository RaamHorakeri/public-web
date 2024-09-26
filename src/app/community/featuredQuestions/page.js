"use client";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import FeaturedQuestions from "@/app/community/_components/FeaturedQuestions";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const TitleData = [
  "Tutorials",
  "Questions",
  "For Bussiness",
  "Product Docs",
  "Social Impact",
];

const NavData = [
  "AWS",
  "Google Cloud",
  "Azure",
  "Heroku",
  "Linode",
  "Vultr",
  "IBM Cloud",
  "Oracle Cloud",
  "Netlify",
  "Cloudflare",
];
export default function Community() {
  const [selectedTitle, setSelectedTitle] = useState("Questions");
  const [count, setCount] = useState();

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = (query) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <>
      <div className="flex justify-center gap-8 my-6 bg-[#FAFAFA]">
        {TitleData.map((title) => (
          <div
            onClick={() => setSelectedTitle(title)}
            key={title}
            className={clsx(
              "font-[400] text-[16px] text-black p-3 rounded-lg cursor-pointer",
              {
                "bg-[#E3E8F4] font-[700]": selectedTitle === title,
              },
            )}
          >
            {title}
          </div>
        ))}
        <div className=" flex items-center rounded-lg border border-[#E8E8E8] p-1">
          <Image
            src="/community/search-icon.svg"
            alt="search"
            className="material-symbols-outlined mt-[2px] mr-2 text-[#494949] text-[20px] ml-1"
            width={18}
            height={18}
          />
          <input
            type="search"
            className=" rounded-lg h-full outline-none pl-1"
            placeholder="Search Community"
          />
        </div>
      </div>
      <hr className="text-[#E8E8E8] h-2 w-full my-6" />
      <div className="flex">
        <div className="w-[30%] flex flex-col items-center">
          <div className="font-[700] text-[16px] bg-[#E3E8F4] p-3 w-[60%] rounded-md self-center pl-5 cursor-pointer">
            All Questions
          </div>
          <hr className="text-[#E8E8E8] h-2 w-[60%] my-6" />
          <div className="font-[700] text-[16px] w-[60%] pl-1">
            Popular Topics
          </div>
          <div className="w-[60%] flex flex-col gap-[5px] my-4">
            {NavData.map((title) => (
              <div
                key={title}
                className="text-[#494949] hover:bg-gray-200 cursor-pointer py-2 rounded-md pl-1"
              >
                {title}
              </div>
            ))}
          </div>
          <hr className="text-[#E8E8E8] h-2 w-[60%] my-6" />
          <div className=" w-[60%] flex items-center gap-3">
            <div className="font-[700] text-[16px] cursor-pointer">
              Digital Ocean Support
            </div>
            <span className="material-symbols-outlined text-[45px]">
              trending_flat
            </span>
          </div>
          <hr className="text-[#E8E8E8] h-2 w-[60%] my-6" />
          <div className="font-[700] text-[16px] w-[60%]">
            Enjoy <span className="text-[#6C63FF]">$200</span> to try
            DigitalOcean
          </div>
          <div className="font-[400] text-[16px] w-[60%] py-3">
            Click of free credit to try DigitalOcean on us for the next 60 days.
            Thank you for being a part of our community!
          </div>
          <button className="font-[700] text-[16px] w-[60%] py-3 text-white bg-black my-3 mb-8 rounded-md">
            Join Now
          </button>
        </div>
        <div className="w-[60%] pr-3">
          <div className="bg-black text-white rounded-lg p-8 pb-4 flex justify-start ">
            <div className="w-fit">
              <div className="font-[700] text-[48px] mb-5">
                Questions & Answers
              </div>
              <div className="font-[400] text-[18px]  my-2 l w-[97%]">
                Ask, or answer, a development question in our diverse Q&A
                section. For information about DigitalOcean products, check out
                our Product Docs.
              </div>
              <div className=" flex items-center rounded-[10px] border border-[#E8E8E8] p-1 bg-white w-[68%] max-w-[500px] my-5">
                <Image
                  src="/community/search-icon.svg"
                  alt="search"
                  className="material-symbols-outlined mt-[2px] mr-2 text-[#494949] text-[20px] ml-1"
                  width={18}
                  height={18}
                />
                <input
                  type="search"
                  className=" rounded-[10px] h-full w-full outline-none p-2  text-black"
                  placeholder="Search Questions"
                  onChange={(e) => {
                    handleSearch(e.target.value);
                  }}
                />
              </div>
              <div className="font-[400] text-[14px]">
                To add a tag to the search, type the tag with [ ] around it. Or
                search this query among our [
              </div>
            </div>
            <div className=" w-[300px] h-[300px] ">
              <Image
                src="/community/flowers.svg"
                height={100}
                width={200}
                alt="flowers"
              />
            </div>
          </div>
          <div className="flex justify-between my-10 ">
            <button className="font-[700] text-[16px]  py-3 text-white bg-black rounded-md px-5">
              Ask a Question
            </button>
            <div className="text-[#01010C] font-[400] text-[14px]">
              {count} questions asked
            </div>
          </div>
          <div className="font-[700] text-[32px]">Featured Questions</div>
          <FeaturedQuestions setCount={setCount} />
        </div>
      </div>
    </>
  );
}
