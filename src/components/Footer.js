import Image from "next/image";
import React from "react";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#01010C] h-[31.69rem] flex flex-col justify-between items-center ">
      <div className="flex justify-around my-auto w-full ">
        <div className="w-[21.88rem] h-[11.81rem] flex flex-col justify-between ">
          <div className="flex gap-2 w-[12.69rem] h-[3.75rem]">
            <Image
              src="/images/headerIcon.svg"
              width={60}
              height={60}
              alt="Logo"
            />
            <span className="text-[2.25rem] font-bold text-[#ffffff] w-[12.38rem] h-[2.38rem] leading-[3.07rem] ">
              Learnix
            </span>
          </div>
          <p className="text-[1.13rem] text-[#BBBBBB] leading-[1.29rem] font-bold ">
            Unlock new career opportunities and enhance your skills
          </p>
          <div className="flex space-x-4 w-[10.06rem] h-[1.88rem] ">
            <Link href="https://www.facebook.com" target="_blank">
              <Image
                src="/images/footer/facebook.svg"
                width={29}
                height={29}
                alt="facebookLogo"
              />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <Image
                src="/images/footer/instagram.svg"
                width={29}
                height={29}
                alt="instagraLogo"
              />
            </Link>
            <Link href="https://www.twitter.com" target="_blank">
              <Image
                src="/images/footer/twitter.svg"
                width={29}
                height={29}
                alt="twitterLogo"
              />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank">
              <Image
                src="/images/footer/linkedIn.svg"
                width={29}
                height={29}
                alt="linkedinLogo"
              />
            </Link>
          </div>
        </div>
        <div className="w-[46.63rem] h-[11.81rem] flex justify-between ">
          <div className="w-[7.06rem] h-[11.81rem] flex flex-col justify-between">
            <p className=" text-[1.13rem] font-bold leading-[1.29rem] text-[#ffffff] ">
              Pages
            </p>
            <p className=" text-[1rem] font-normal leading-[1.15rem] text-[#BBBBBB] ">
              Home
            </p>
            <p className=" text-[1rem] font-normal leading-[1.15rem] text-[#BBBBBB] ">
              Courses
            </p>
            <p className=" text-[1rem] font-normal leading-[1.15rem] text-[#BBBBBB] ">
              Community
            </p>
            <p className=" text-[1rem] font-normal leading-[1.15rem] text-[#BBBBBB] ">
              Terms & Policy
            </p>
          </div>
          <div className="w-[7.06rem] h-[11.81rem] flex flex-col justify-between">
            <p className=" text-[1.13rem] font-bold leading-[1.29rem] text-[#ffffff] ">
              Pages
            </p>
            <p className=" text-[1rem] font-normal leading-[1.15rem] text-[#BBBBBB] ">
              Home
            </p>
            <p className=" text-[1rem] font-normal leading-[1.15rem] text-[#BBBBBB] ">
              Courses
            </p>
            <p className=" text-[1rem] font-normal leading-[1.15rem] text-[#BBBBBB] ">
              Community
            </p>
            <p className=" text-[1rem] font-normal leading-[1.15rem] text-[#BBBBBB] ">
              Terms & Policy
            </p>
          </div>
          <div className="w-[25rem] h-[9.69rem] flex flex-col justify-between">
            <p className=" text-[1.13rem] font-bold leading-[1.29rem] text-[#ffffff] ">
              Newsletters
            </p>
            <p className=" text-[1rem] font-normal leading-[1.15rem] text-[#BBBBBB] ">
              Curious about new development & updates? Sign up for our
              newsletter{" "}
            </p>
            <input
              type="email"
              className="border-2 text-[#ffffff] border-[#BBBBBB] rounded-[1.25rem] bg-inherit w-[25rem] h-[3.13rem] py-[0.75rem] px-[1rem] outline-none"
              placeholder="hello@gmail.com"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#1C1C1C] w-full h-[4.88rem] text-[#ffffff] flex items-center justify-center text-[1rem] font-bold leading-[1.36rem] ">
        <p>Copyright © 2024 All Rights Reserved by BrandName</p>
      </div>
    </footer>
  );
};

export default Footer;
