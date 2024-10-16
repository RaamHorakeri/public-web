"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Data = [
  {
    name: "Chats",
    icon: "/carbon_chat.svg",
  },
  {
    name: "Search",
    icon: "/carbon_search.svg",
  },
  {
    name: "Manage subscription",
    icon: "/manage_subscriptions.svg",
  },
  {
    name: "Updates & FAQ",
    icon: "/updates_faq.svg",
  },
];
const ChatData = [
  {
    name: "Welcome",
    color: "#404446",
    count: "48",
  },
  {
    name: "UI8 Production",
    color: "#8E55EA",
    count: "48",
  },
  {
    name: "Favorites",
    color: "#3E90F0",
    count: "8",
  },
  {
    name: "Updates",
    color: "#D84C10",
    count: "128",
  },
];
export default function SideNav() {
  const [showChatList, setShowChatList] = useState(false);
  const [lightMode, setLightMode] = useState(true);
  const [iconsView, seticonsView] = useState(false);
  return (
    <div
      className={`bg-black  text-white h-full flex flex-col justify-between ${iconsView ? "w-[100px]" : "w-[300px] "}`}
    >
      <div>
        <div className="flex items-center justify-center gap-2 pt-6">
          <Image
            src="/dashboard/brain.svg"
            height={80}
            width={70}
            alt="brain"
          />
          {!iconsView && (
            <div className="font-[800] text-[32px]">Brainwave</div>
          )}
        </div>
        <div className="flex justify-center mt-5">
          <div className={`${iconsView ? "" : "w-[95%]"}  rounded-md`}>
            {Data.map((item) => {
              return (
                <div
                  key={item.name}
                  className="flex items-center  gap-4 rounded-md my-1 p-3 pl-4 hover:bg-gradient-to-r from-[#27292F] to-[#0E2A4199] text-[#BDBDBD] hover:text-white cursor-pointer"
                >
                  <Image
                    src={`/dashboard${item.icon}`}
                    height={30}
                    width={30}
                    alt={item.name}
                  />
                  {!iconsView && (
                    <div className="font-[700] text-[16px]">{item.name}</div>
                  )}
                  {item.name === "Search" && !iconsView && (
                    <div className="flex rounded-md items-center gap-1 bg-[#232627] p-1 px-3 ml-auto mr-3">
                      <Image
                        src={`/dashboard/ph_command.svg`}
                        height={20}
                        width={20}
                      />
                      <span className=" text-[16px] font-[700] mb-[2px]">
                        F
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-gray-900 h-[1px] my-2"></div>

        <div className="flex  justify-center  mt-5 mb-5">
          <div className={`${iconsView ? "" : "w-[95%]"}  rounded-md`}>
            <div
              className={`${iconsView ? "" : "pl-4"} flex gap-2 w-[95%]  rounded-md my-1 p-3  items-center cursor-pointer`}
              onClick={() => setShowChatList((prev) => !prev)}
            >
              <span
                className="material-symbols-outlined text-[#777777]"
                style={{ fontSize: "30px" }}
              >
                {showChatList ? " keyboard_arrow_up" : "keyboard_arrow_down"}
              </span>
              {!iconsView && (
                <span className="text-[#777777] font-[700] text-[16px]">
                  Chat list
                </span>
              )}
            </div>
            {showChatList && (
              <>
                {ChatData.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className="flex items-center  gap-4 rounded-md my-1 p-3 pl-4 hover:bg-gradient-to-r from-[#27292F] to-[#0E2A4199] text-[#BDBDBD] hover:text-[white] cursor-pointer"
                    >
                      <div
                        className="h-5 w-5 rounded-[2px]"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      {!iconsView && (
                        <>
                          <div className="font-[700] text-[16px]">
                            {item.name}
                          </div>

                          <div className="flex rounded-md items-center gap-1 bg-[#232627]  px-3 ml-auto mr-3">
                            <span className=" text-[16px] font-[700] mb-[2px] text-[#A4A4A4]">
                              {item.count}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
                <div className="flex items-center  gap-4 rounded-md my-1 p-3 text-[#BDBDBD] hover:text-white  hover:bg-gradient-to-r from-[#27292F] to-[#0E2A4199] ">
                  <span
                    className="material-symbols-outlined text-[#777777] cursor-pointer"
                    style={{ fontSize: "30px" }}
                  >
                    add_circle
                  </span>
                  {!iconsView && (
                    <span className="font-[700] text-[16px] text-inherit">
                      New list
                    </span>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        {!iconsView && (
          <div className="border-[#333333] rounded-md p-2 flex items-center justify-evenly  border w-[95%]">
            <Link className="flex gap-2" href="/dashboard/profile">
              <Image
                src="/dashboard/profile_avatar.svg"
                height={30}
                width={30}
                alt="avatar"
              />
              <div>
                <div>Tran Mau Tri Tam</div>
                <div>tam@ui8.net</div>
              </div>
            </Link>
            <button className="bg-[#3FDD78] p-1 px-5  rounded-md text-black">
              Free
            </button>
          </div>
        )}
        <div
          className={`bg-[#232627] flex  justify-center  p-1 rounded-md  ${iconsView ? "" : "w-[95%]"} mt-4 mb-6 ${iconsView ? "flex-col gap-3" : ""}`}
        >
          <div
            className={`${iconsView ? "" : "w-[50%] "}flex justify-center items-center  p-2 gap-3  cursor-pointer ${lightMode ? "bg-[#01010C] rounded-md" : ""}`}
            onClick={() => setLightMode(true)}
          >
            <span
              className={`material-symbols-outlined ${lightMode ? "text-white" : "text-[#8E8E8E] "} p-1`}
            >
              light_mode
            </span>
            {!iconsView && (
              <span
                className={`${lightMode ? "text-white" : "text-[#8E8E8E]"}`}
              >
                Light
              </span>
            )}
          </div>
          <div
            className={`${iconsView ? "" : "w-[50%]"} flex justify-center items-center p-2 gap-3 cursor-pointer ${!lightMode ? "bg-[#01010C] rounded-md" : ""} `}
            onClick={() => setLightMode(false)}
          >
            <span
              className={`material-symbols-outlined text-[#8E8E8E] ${!lightMode ? "text-white" : "text-[#8E8E8E]"} p-1`}
            >
              dark_mode
            </span>
            {!iconsView && (
              <span className={!lightMode ? "text-white" : "text-[#8E8E8E]"}>
                Dark
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
