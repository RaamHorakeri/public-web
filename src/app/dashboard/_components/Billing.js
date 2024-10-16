import React from "react";

const projectData = [
  {
    id: 1,
    title: "Java Project Duration",
    duration: "3 Months",
    dateRange: "1/02/2024 to 12/12/2023",
    price: "$45,454.88",
  },
  {
    id: 2,
    title: "Python Project Duration",
    duration: "3 Months",
    dateRange: "1/05/2023 to 12/11/2023",
    price: "$54,123.00",
  },
  {
    id: 3,
    title: "Python Project Duration",
    duration: "3 Months",
    dateRange: "1/03/2024 to 12/09/2023",
    price: "$35,678.99",
  },
];

const Billing = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <h1 className=" text-[#1C1C1C] text-[36px] font-bold leading-[42px] mt-10 mb-4 ">
        Course Details
      </h1>
      {projectData.map((project) => (
        <div key={project.id} className="border-[2px] border-[#E3E8F4]">
          <div className="flex justify-between items-center p-4 bg-[white] text-[#1C1C1C] font-bold text-[16px] leading-[21.82px]">
            <h3>{project.title}</h3>
            <h3 className="border-white">{project.duration}</h3>
          </div>
          <div className="flex justify-around items-center p-4 bg-[#F2F1F2] text-[#1C1C1C] font-bold text-[16px] leading-[21.82px]">
            <h3>From to End Date</h3>
            <h3 className="border-white">Price</h3>
          </div>
          <div className="flex justify-around  items-center p-4 bg-[#FAFAFA] text-[#222222] font-normal text-[18px] leading-[24.55px]">
            <h3>{project.dateRange}</h3>
            <h3 className="border-white">{project.price}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Billing;
