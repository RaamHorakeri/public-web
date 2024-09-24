import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import MyCalendar from "./Calendar/Calendar";
import TimeSlot from "./TimeSlot";
import Image from "next/image";
import "../_components/Calendar/Calendar.css";

const ScheduleModal = ({
  open,
  setOpen,
  setOpenDetails,
  activeId,
  setActiveId,
  SlotData,
  setActiveDate,
  selectedExpert,
}) => {
  return (
    <div>
      <Dialog open={open} onClose={setOpen} className="relative z-10 ">
        <DialogBackdrop
          transition
          className="fixed  inset-0 bg-gray-500 bg-opacity-75  transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen ">
          <div className="flex min-h-full items-end justify-center p-4 text-center  sm:items-center  sm:p-0">
            <DialogPanel
              transition
              className="rounded-md relative transform overflow-hidden w-[68%] bg-white text-center shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="flex  w-full p-10">
                <div className="w-[40%] flex flex-col">
                  <Image
                    alt={selectedExpert?.name}
                    src={selectedExpert?.src}
                    className="rounded-[60px]"
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
                    <span className="font-[400] text-[16px] text-[#494949]">
                      30 min
                    </span>
                  </div>
                  <div className="flex mt-1 text-[#494949]">
                    <span className="material-symbols-outlined mr-2">call</span>
                    Phone call
                  </div>
                </div>
                <div className="w-[60%]">
                  <div className="flex flex-col">
                    <div className=" font-sans font-bold text-left mb-5 text-[20px] text-[#1A1A1A]">
                      Select a Date & Time
                    </div>
                    <MyCalendar setActiveDate={setActiveDate} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mt-5">
                      <div className=" font-sans font-bold text-left text-[20px] text-[#1A1A1A] ">
                        Available Slots
                      </div>
                      <div className="flex">
                        <span className="material-symbols-outlined mr-2">
                          schedule
                        </span>
                        <span className="font-[400] text-[16px] text-[#494949]">
                          30 min
                        </span>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {SlotData.map((eachSlot) => (
                        <TimeSlot
                          slot={eachSlot}
                          key={eachSlot.id}
                          activeId={activeId}
                          setActiveId={setActiveId}
                        />
                      ))}
                    </div>
                    <div
                      onClick={() => {
                        setOpen(false);
                        setOpenDetails(true);
                      }}
                      className="bg-[#EBEAFF] rounded-lg flex justify-center  h-[35px] w-[35px] items-center ml-auto cursor-pointer"
                    >
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
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

export default ScheduleModal;
