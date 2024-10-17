import React from "react";

const AssignmentDetails = ({ isCompletedTest }) => {
  const assignments = [
    {
      title: "Assignment - 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nibh tortor vulputate pellentesque euismod bibendum ullamcorper placerat dolor. Feugiat turpis mi felis rhoncus massa commodo eget elit gravida. Sit sed tempor egestas nulla eget amet.",
      duration: "1 Hr. 30 Min",
      endDate: "12 Oct 2024",
      score: "120/200",
      progress: "80",
    },
    {
      title: "Assignment - 2",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nibh tortor vulputate pellentesque euismod bibendum ullamcorper placerat dolor. Feugiat turpis mi felis rhoncus massa commodo eget elit gravida. Sit sed tempor egestas nulla eget amet.",
      duration: "2 Hr. 15 Min",
      endDate: "14 Oct 2024",
      score: "85/100",
      score: "120/200",
      progress: "60",
    },
    {
      title: "Assignment - 3",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nibh tortor vulputate pellentesque euismod bibendum ullamcorper placerat dolor. Feugiat turpis mi felis rhoncus massa commodo eget elit gravida. Sit sed tempor egestas nulla eget amet.",
      duration: "1 Hr. 45 Min",
      endDate: "16 Oct 2024",
      score: "120/200",
      progress: "40",
    },

    {
      title: "Assignment - 4",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nibh tortor vulputate pellentesque euismod bibendum ullamcorper placerat dolor. Feugiat turpis mi felis rhoncus massa commodo eget elit gravida. Sit sed tempor egestas nulla eget amet.",
      duration: "1 Hr. 45 Min",
      endDate: "16 Oct 2024",
      score: "120/200",
      progress: "20",
    },
  ];

  return (
    <>
      {assignments?.map((assignment, index) => {
        return (
          <div
            className="bg-[#FFFFFF] cursor-pointer shadow rounded-md"
            key={index}
          >
            <div className="py-3 px-4">
              <h4 className="font-bold text-s text-[#01010C] leading-[27.8px] ">
                {assignment?.title}
              </h4>

              <p className="text-[#494949] leading-[21.82px] text-xs font-normal">
                {assignment?.description}
              </p>

              <hr className="border-t border-[#DBCBCB] border-dashed my-2" />

              <div className="flex justify-between items-center mt-4">
                {isCompletedTest ? (
                  <>
                    <p className="font-bold text-xs text-[#1C1C1C] leading-[21.82px]">
                      Duration:{" "}
                      <span className="font-semibold text-[#494949]">
                        {assignment?.duration}
                      </span>
                    </p>

                    <p className="font-bold text-xs text-[#1C1C1C] leading-[21.82px]">
                      Score:{" "}
                      <span className="font-semibold text-[#494949]">
                        {assignment?.score}
                      </span>
                    </p>

                    <div className="w-[40%] h-2 bg-[#D2D2D2] rounded">
                      <div
                        className="h-2 bg-[#13EE4A] rounded"
                        style={{ width: `${assignment?.progress}%` }}
                      ></div>
                    </div>
                    <p className="font-bold text-xs text-[#01010C] leading-[21.82px] -ml-8">
                      {assignment?.progress}%
                    </p>
                    <button className="font-bold text-xs text-[#01010C] border-[#01010C] border bg-white rounded-full py-2 px-4 leading-[21.82px]">
                      Re-Take Test
                    </button>
                  </>
                ) : (
                  <>
                    <div className="flex justify-center items-center gap-8">
                      <p className="font-bold text-xs text-[#1C1C1C] leading-[21.82px]">
                        Duration:
                        <span className="font-semibold text-[#494949]">
                          {assignment?.duration}
                        </span>
                      </p>
                      <p className="font-bold text-xs text-[#1C1C1C] leading-[21.82px]">
                        End Date:
                        <span className="font-semibold text-[#494949]">
                          {assignment?.endDate}
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-center items-center  gap-8">
                      <button className="font-bold text-xs text-[#01010C] border-[#01010C] border bg-white rounded-full py-2 px-4 leading-[21.82px]">
                        Watch Class
                      </button>

                      <button className="font-bold text-xs text-white bg-black rounded-full py-2 px-4 leading-[21.82px]">
                        Take Test
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AssignmentDetails;
