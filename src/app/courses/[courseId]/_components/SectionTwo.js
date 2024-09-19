import AnimateImages from "./AnimateImages";
export default function SectionTwo() {
  return (
    <div className="bg-black min-h-[100vh] w-full text-white font-sans p-10 ">
      <div className="flex justify-between">
        <div className="h-[100%] flex flex-col justify-center items-center">
          <div className="bg-green-600 mb-4 grid place-content-center ">
            <span className="material-symbols-outlined">work</span>
          </div>
          <div className="w-[2px] h-[240px]  bg-green-400 bg-gradient-to-b from-[#05f649] via-[#05f649] to-[#333] animate2"></div>
        </div>
        <div className="w-[95%]">
          <div className="flex">
            <div className="w-[60%] flex flex-col justify-evenly">
              <div className="font-[700] text-[24px]">Productivity</div>
              <h1 className=" font-[700] text-[48px] w-[70%] leading-tight">
                <span className=" mr-3 text-transparent bg-clip-text bg-green-400">
                  Engage with
                </span>
                your customers instantly
              </h1>
              <div className="flex gap-10 p-2 mt-10">
                <div className="border-b-2 border-green-400 w-[160px] p-2">
                  Assesments
                </div>
                <div className="border-b-2 border-gray-400 w-[160px] p-2">
                  Practices
                </div>
                <div className="border-b-2 border-gray-400 w-[160px] p-2">
                  Interviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimateImages />
    </div>
  );
}
