import Input from "@/components/Input";
import React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

const ScheduleModal = ({
  open,
  setOpen,
  handleScheduleSubmit,
  isSubmitted,
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
              className="relative transform overflow-hidden w-[839px] h-[629px] p-[80px] bg-white text-center shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white flex items-center justify-center ">
                <div className="flex items-center justify-center ">
                  <div className=" text-center flex flex-col justify-center items-center  ">
                    {isSubmitted ? (
                      <p className="text-center bg-secondary-100 w-[382px] h-[135px] py-[25px] px-[6px] font-roboto font-bold text-[15.3px] leading-[28px] text-[#21272A]">
                        Submitted Successfully
                        <br />
                        We will get back to you
                        <br />
                        Thank you
                      </p>
                    ) : (
                      <>
                        <div className="flex items-center justify-center h-[35px] w-[697px] text-m text-[#21272A] font-roboto font-bold leading-[35.2px] ">
                          <h1 className="mb-5">Schedule With John Doe</h1>
                        </div>
                        <form className="mt-[40px] flex flex-col items-center  p-[40px] border border-[#DDE1E6] ">
                          <label className="w-[520px] text-left font-roboto font-medium text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
                            Name
                          </label>

                          <Input
                            type="text"
                            className="bg-[#F2F4F8] mb-[24px]"
                            placeholder="Name"
                          />
                          <label className="w-[520px] text-left font-roboto font-medium text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
                            Date & Time
                          </label>
                          <Input
                            type="datetime-local"
                            className="bg-[#F2F4F8] mb-[24px]"
                            placeholder="Name"
                          />
                          <label className="w-[520px] text-left font-roboto font-medium text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
                            Email
                          </label>
                          <Input
                            type="email"
                            className="bg-[#F2F4F8] mb-[24px]"
                            placeholder="Email"
                          />
                          <button
                            onClick={handleScheduleSubmit}
                            className="w-[520px] h-[48px] bg-primary text-secondary-100 rounded-[10px] font-medium text-xs leading-[16px] mt-6"
                          >
                            Submit
                          </button>
                        </form>
                      </>
                    )}
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
