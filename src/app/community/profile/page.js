import React from "react";

const Page = () => {
  return (
    <div>
      <section className="bg-[url('/images/bg1.png')] py-0 px-[87px] h-[320px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-6">
        <h1 className="font-roboto font-semibold text-[32px] leading-[38.4px] text-center text-[#7C56CF]">
          User Profile
        </h1>
        <p className="font-roboto font-normal text-[14px] leading-[16.8px] text-center">
          Home/Community/profile
        </p>
      </section>

      <section className=" flex flex-col items-center justify-center gap-6 mt-20 mb-20 ">
        <h1 className="font-roboto font-bold text-[32px] leading-[38.4px] text-center text-primary-1600">
          Rick Wagenmakers
        </h1>
        <p className="font-roboto font-normal text-xs leading-s text-[#868686] text-center">
          Member for 8 months
        </p>
        <div className=" w-[427px] h-[260px] border border-[#D9D9D9] rounded-[2px] ">
          <div className=" h-[86px] bg-[#f9f9f9] flex flex-col gap-2 justify-center text-primary-1600 font-roboto font-medium text-xs leading-[19.2px] ">
            <div className="flex items-center  justify-start px-5">
              <p className="w-1/2">0</p>
              <p className="w-1/2">0</p>
            </div>
            <div className="flex items-center text-[#626262] font-roboto font-normal text-xs leading-[19.2px] justify-start px-5">
              <p className="w-1/2 ">Tutorials Written</p>
              <p className="w-1/2">Tutorials Visited</p>
            </div>
          </div>
          <div className=" h-[86px] flex flex-col gap-2 justify-center text-primary-1600 font-roboto font-medium text-xs leading-[19.2px] ">
            <div className="flex items-center  justify-start px-5">
              <p className="w-1/2">3</p>
              <p className="w-1/2">1</p>
            </div>
            <div className="flex items-center text-[#626262] font-roboto font-normal text-xs leading-[19.2px] justify-start px-5">
              <p className="w-1/2 ">Questions Asked</p>
              <p className="w-1/2">Questions Answered</p>
            </div>
          </div>
          <div className=" h-[86px] bg-[#f9f9f9] flex flex-col gap-2 justify-center text-primary-1600 font-roboto font-medium text-xs leading-[19.2px] ">
            <div className="flex items-center  justify-start px-5">
              <p className="w-1/2">3</p>
              <p className="w-1/2">0</p>
            </div>
            <div className="flex items-center text-[#626262] font-roboto font-normal text-xs leading-[19.2px] justify-start px-5">
              <p className="w-1/2 ">Comments made</p>
              <p className="w-1/2">Posts Written</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
