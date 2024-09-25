import React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { formatDate } from "@/utils";

const Scheduled = ({
  openScheduled,
  setOpenScheduled,
  activeSlot,
  activeDate,
  selectedExpert,
}) => {
  return (
    <div>
      <Dialog
        open={openScheduled}
        onClose={setOpenScheduled}
        className="relative z-10 "
      >
        <DialogBackdrop
          transition
          className="fixed  inset-0 bg-gray-500 bg-opacity-75  transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen ">
          <div className="flex min-h-full items-end justify-center p-4 text-center  sm:items-center  sm:p-0">
            <DialogPanel
              transition
              className="rounded-[12px] relative transform overflow-hidden w-[40%] max-w-[500px] bg-white text-center shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="flex flex-col items-center p-5 py-10">
                <div className="flex justify-center items-center">
                  <span
                    className="material-symbols-outlined text-[#5BD3C5] mr-3"
                    style={{ fontSize: "30px" }}
                  >
                    check_circle
                  </span>
                  <div className="font-[700] text-[20px] text-[#1A1A1A]">
                    You are scheduled
                  </div>
                </div>
                <div className="text-[#494949] font-[400] text-[16px]">
                  A calendar invitation has been sent to your email address.
                </div>
                <div className=" min-w-[450px] p-5 mt-5 border-[#E8E8E8] border rounded-md">
                  <div className="text-[#1A1A1A] font-[700] text-[18px] text-left">
                    Schedule eClosing
                  </div>
                  <div className="">
                    <div className="flex mt-1 text-[#494949]">
                      <span className="material-symbols-outlined mr-2 ">
                        person
                      </span>
                      {selectedExpert?.name}
                    </div>
                    <div className="flex mt-1 text-[#494949]">
                      <span className="material-symbols-outlined mr-2">
                        calendar_today
                      </span>
                      <div className="mr-1">{`${activeSlot?.slot.slice(0, -3) + ","} `}</div>
                      {formatDate(activeDate)}
                    </div>
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

export default Scheduled;
