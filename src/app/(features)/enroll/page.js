import Input from "@/components/Input";
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-around items-start p-10 gap-16">
      {/* Left Section */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg ">
        <h2 className="font-roboto font-bold text-[24px] leading-[50px] mb-4">
          Please select duration
        </h2>
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-2">
            <Input type="checkbox" width="w-[28px]" height="h-28px" />
            <span className="font-roboto font-normal text-s leading-[50px]">
              3 months
            </span>
          </label>
          <label className="flex items-center gap-2">
            <Input type="checkbox" width="w-[28px]" height="h-28px" />
            <span className="font-roboto font-normal text-s leading-[50px]">
              6 months
            </span>
          </label>
          <label className="flex items-center gap-2">
            <Input type="checkbox" width="w-[28px]" height="h-28px" />
            <span className="font-roboto font-normal text-s leading-[50px]">
              1 year
            </span>
          </label>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg ">
        <h2 className="font-roboto font-bold text-[24px] leading-[50px] mb-4">
          Batches
        </h2>
        <table className="w-[856px] bg-secondary-100 border border-gray-300">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 text-left font-medium text-primary-1600 text-xs leading-[19.2px]">
                S.No
              </th>
              <th className="px-4 py-2 text-left font-medium text-primary-1600 text-xs leading-[19.2px]">
                From to End Date
              </th>
              <th className="px-4 py-2 text-left font-medium text-primary-1600 text-xs leading-[19.2px]">
                Price
              </th>
              <th className="px-4 py-2 text-left font-medium text-primary-1600 text-xs leading-[19.2px]">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2 text-[#626262] font-roboto font-normal text-xs leading-[19.2px]">
                01
              </td>
              <td className="px-4 py-2 text-[#626262] font-roboto font-normal text-xs leading-[19.2px]">
                01-07-2024 To 31-07-2024
              </td>
              <td className="px-4 py-2 text-[#626262] font-roboto font-normal text-xs leading-[19.2px]">
                15000
              </td>
              <td className="px-4 py-2 text-[#E74C3C] font-roboto font-normal text-xs leading-[19.2px]">
                Closed
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2 text-[#626262] font-roboto font-normal text-xs leading-[19.2px]">
                02
              </td>
              <td className="px-4 py-2 text-[#626262] font-roboto font-normal text-xs leading-[19.2px]">
                01-08-2024 To 31-08-2024
              </td>
              <td className="px-4 py-2 text-[#626262] font-roboto font-normal text-xs leading-[19.2px]">
                15000
              </td>
              <td className="px-4 py-2 text-[#2ECC71] font-roboto font-normal text-xs leading-[19.2px]">
                In Progress
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2 text-[#626262] font-roboto font-normal text-xs leading-[19.2px]">
                03
              </td>
              <td className="px-4 py-2 text-[#626262] font-roboto font-normal text-xs leading-[19.2px]">
                01-09-2024 To 31-09-2024
              </td>
              <td className="px-4 py-2 text-[#626262] font-roboto font-normal text-xs leading-[19.2px]">
                15000
              </td>
              <td className="px-4 py-2 text-[#626262] font-roboto font-normal text-xs leading-[19.2px]">
                <button className="bg-secondary-100 border font-roboto font-medium text-xs leading-[19.2px] border-primary text-primary px-4 py-2 rounded">
                  Register
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
