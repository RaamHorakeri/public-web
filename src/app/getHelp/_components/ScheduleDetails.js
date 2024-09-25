import React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import { formatDate } from "@/utils";

const ScheduleDetails = ({
  open,
  setOpenDetails,
  activeSlot,
  activeDate,
  setOpen,
  setOpenScheduled,
  selectedExpert,
}) => {
  return (
    <div>
      <Dialog open={open} onClose={setOpenDetails} className="relative z-10 ">
        <DialogBackdrop
          transition
          className="fixed  inset-0 bg-gray-500 bg-opacity-75  transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen ">
          <div className="flex min-h-full items-end justify-center p-4 text-center  sm:items-center  sm:p-0">
            <DialogPanel
              transition
              className="max-w-[900px] rounded-[12px] relative transform overflow-hidden w-[68%] bg-white text-center shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="flex p-8">
                <div className=" flex flex-col  w-[45%]">
                  <Image
                    src={selectedExpert?.src}
                    className="rounded-[60px]"
                    alt="pic"
                    height={70}
                    width={70}
                  />
                  <div className="text-[#1C1C1C] text-[18px] font-[700] text-left mt-2">
                    {selectedExpert?.name} - Java Engineer Expert
                  </div>
                  <div className="text-[16px] font-[400] text-left text-[#494949]">
                    Next Availability
                  </div>
                  <div className="flex mt-5 text-[#494949]">
                    <span className="material-symbols-outlined mr-2">
                      schedule
                    </span>
                    <span>30</span>min
                  </div>
                  <div className="flex mt-1 text-[#494949]">
                    <span className="material-symbols-outlined mr-2 ">
                      call
                    </span>
                    Phone call
                  </div>
                  <div className="flex mt-1 text-[#494949]">
                    <span className="material-symbols-outlined mr-2">
                      calendar_today
                    </span>
                    <div className="mr-1">{`${activeSlot?.slot.slice(0, -3) + ","} `}</div>
                    {formatDate(activeDate)}
                  </div>
                </div>
                <div className="w-[55%] border-[#D2D2D2] border border-r-0 border-t-0 border-b-0 pl-7">
                  <div className="text-[#1A1A1A] font-[700] text-[20px] text-left ">
                    Enter details
                  </div>
                  <div className="text-[#01010C] text-[16px] font-[700] text-left mt-3">
                    Name
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="p-2 rounded-md w-full border-[#D2D2D2] border-[1px] mt-1 outline-none"
                  />
                  <div className="text-[#01010C] text-[16px] font-[700] text-left mt-3">
                    Email
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    className="p-2 rounded-md w-full border-[#D2D2D2] border-[1px] mt-1 outline-none"
                  />
                  <div className="flex justify-between items-center mt-6">
                    <div
                      onClick={() => {
                        setOpenDetails(false);
                        setOpen(true);
                      }}
                      className="bg-[#EBEAFF] rounded-lg flex justify-center h-[35px] w-[35px] items-center mr-auto cursor-pointer"
                    >
                      <span className="material-symbols-outlined">
                        chevron_left
                      </span>
                    </div>
                    <button
                      className="text-white bg-black rounded-md  p-2 border-none"
                      onClick={() => {
                        setOpenDetails(false);
                        setOpenScheduled(true);
                      }}
                    >
                      Schedule Now
                    </button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ScheduleDetails;
