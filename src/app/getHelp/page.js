"use client";
import Image from "next/image";
import ExpertDetails from "./_components/ExpertDetails";
import JoinCommunity from "@/components/JoinCommunity";
import ScheduleModal from "./_components/ScheduleModal";
import ScheduleDetails from "./_components/ScheduleDetails";
import Scheduled from "./_components/Scheduled";
import { useState } from "react";

const SlotData = [
  { id: 1, slot: "9.30 - 10.00 AM" },
  { id: 2, slot: "10.00 - 10.30 AM" },
  { id: 3, slot: "10.30 - 11.00 AM" },
  { id: 4, slot: "11.00 - 11.30 AM" },
  { id: 5, slot: "11.30 - 12.00 PM" },
  { id: 6, slot: "12.00 - 12.30 PM" },
  { id: 7, slot: "12.30 - 1.00 PM" },
  { id: 8, slot: "1.00 - 1.30 PM" },
  { id: 9, slot: "1.30 - 2.00 PM" },
  { id: 10, slot: "2.00 - 2.30 PM" },
];

const data = [
  {
    id: 1,
    name: "Candy Crom",
    src: "/needHelp/candy-crom.svg",
    text: "Our expert specializes in development with Java",
  },
  {
    id: 2,
    name: "Abraham John",
    src: "/needHelp/abraham.svg",
    text: "Our expert specializes in development with Java",
  },
  {
    id: 3,
    name: "David Linkmen",
    src: "/needHelp/david.svg",
    text: "Our expert specializes in development with Java",
  },
];

export default function GetHelp() {
  const [open, setOpen] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [openScheduled, setOpenScheduled] = useState(false);
  const [activeID, setActiveId] = useState(null);
  const [activeDate, setActiveDate] = useState(null);
  const [selectedExpert, setSelectedExpert] = useState(false);

  const activeSlot = SlotData.filter((item) => item.id === activeID);

  const SelectExpert = (id) => {
    const expert = data.filter((item) => item.id === id);
    setSelectedExpert(expert[0]);
  };

  return (
    <>
      <div className="bg-white font-sans p-[80px] flex">
        <div className="w-[70%]">
          <div className="font-[700] text-[64px]  leading-tight w-[600px]">
            The Easiest Way To Connect With Us
          </div>
          <div className="flex gap-[90px]">
            {data.map((eachItem) => (
              <ExpertDetails
                {...eachItem}
                key={eachItem.id}
                setOpen={setOpen}
                SelectExpert={SelectExpert}
              />
            ))}
          </div>
        </div>
        <div className="w-[30%]  max-w-[400px]">
          <div className=" h-full flex flex-col justify-between">
            <Image
              src="/needHelp/help-chat.svg"
              width={370}
              height={180}
              alt="chat"
            />
            <div className="mt-auto  flex flex-col gap-3">
              <div className="font-[700] text-[18px]">
                Easy to motion with Ai
              </div>
              <div className="font-[400] text-[16px] text-[#494949] leading-tight">
                Our expert specializes in development with Java Our expert
                specializes in development with Java
              </div>
              <div className="font-[700] text-[16px] text-[#06006C] cursor-pointer">
                Chat Here
              </div>
            </div>
          </div>
        </div>
      </div>
      <JoinCommunity />
      {open && (
        <ScheduleModal
          open={open}
          setOpen={setOpen}
          setOpenDetails={setOpenDetails}
          activeId={activeID}
          setActiveId={setActiveId}
          SlotData={SlotData}
          setActiveDate={setActiveDate}
          selectedExpert={selectedExpert}
        />
      )}
      {openDetails && (
        <ScheduleDetails
          open={openDetails}
          setOpenDetails={setOpenDetails}
          activeSlot={activeSlot[0]}
          activeDate={activeDate}
          setOpen={setOpen}
          setOpenScheduled={setOpenScheduled}
          selectedExpert={selectedExpert}
        />
      )}
      {openScheduled && (
        <Scheduled
          openScheduled={openScheduled}
          setOpenScheduled={setOpenScheduled}
          activeSlot={activeSlot[0]}
          activeDate={activeDate}
          selectedExpert={selectedExpert}
        />
      )}
    </>
  );
}
