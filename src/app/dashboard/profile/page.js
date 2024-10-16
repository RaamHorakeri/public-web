"use client";
import Image from "next/image";
import React, { useState } from "react";
import ProfileInformation from "../_components/ProfileInformation";
import Billing from "../_components/Billing";

const Page = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-6xl mx-auto bg-white mb-10 p-[40px]">
        <h1 className="text-[46px] font-bold text-[#01010C] leading-[50px] mb-6">
          Account
        </h1>

        {/* Tabs */}
        <div className="flex  border-b border-[#BBBBBB] mb-8">
          <button
            className={` p-4 text-center font-normal text-[14px] leading-[22px] ${
              activeTab === "profile"
                ? "border-b-2 border-[#453AFF] text-[#494949]"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={` p-4 text-center font-normal text-[14px] leading-[22px] ${
              activeTab === "billing"
                ? "border-b-2 border-[#453AFF] text-[#494949]"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("billing")}
          >
            Billing and Payments
          </button>
        </div>

        {activeTab === "profile" && <ProfileInformation />}

        {activeTab === "billing" && <Billing />}
      </div>
    </div>
  );
};

export default Page;
