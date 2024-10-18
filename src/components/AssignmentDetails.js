const AssignmentDetails = ({
  title,
  description,
  duration,
  endDate,
  score,
  progress,
  isNew,
  isCompleted,
}) => {
  return (
    <>
      <div className="bg-[#FFFFFF] cursor-pointer shadow rounded-md">
        <div className="py-3 px-4">
          <div className="flex justify-between items-center pb-1">
            <h4 className="font-bold text-s text-[#01010C] leading-[27.8px] ">
              {title}
            </h4>
            {isNew && !isCompleted ? (
              <p className="leading-[19.1px] text-[14px] font-bold text-[#2A9D8F]">
                New
              </p>
            ) : (
              ""
            )}
          </div>
          <p className="text-[#494949] leading-[21.82px] text-xs font-normal">
            {description}
          </p>

          <hr className="border-t border-[#DBCBCB] border-dashed my-2" />

          <div className="flex justify-between items-center mt-4">
            {isCompleted ? (
              <>
                <p className="font-bold text-xs text-[#1C1C1C] leading-[21.82px]">
                  Duration:{" "}
                  <span className="font-semibold text-[#494949]">
                    {duration}
                  </span>
                </p>

                <p className="font-bold text-xs text-[#1C1C1C] leading-[21.82px]">
                  Score:{" "}
                  <span className="font-semibold text-[#494949]">{score}</span>
                </p>

                <div className="w-[40%] h-2 bg-[#D2D2D2] rounded">
                  <div
                    className="h-2 bg-[#13EE4A] rounded"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="font-bold text-xs text-[#01010C] leading-[21.82px] -ml-8">
                  {progress}%
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
                      {duration}
                    </span>
                  </p>
                  <p className="font-bold text-xs text-[#1C1C1C] leading-[21.82px]">
                    End Date:
                    <span className="font-semibold text-[#494949]">
                      {endDate}
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
    </>
  );
};

export default AssignmentDetails;
