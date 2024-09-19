import AnimateImages from "./AnimateImages";
export default function FinalSection() {
  return (
    <div className="bg-black min-h-[100vh] w-full text-white font-sans p-10">
      <div className="flex justify-between">
        <div className="h-[100%] flex flex-col justify-center items-center">
          <div className="bg-[#e44b2c] mb-4 grid place-content-center">
            <span className="material-symbols-outlined">favorite</span>
          </div>
          <div className="w-[2px] h-[340px]  bg-gradient-to-b from-[#ffffff]  via-[#CE583F] to-[#333] animate2"></div>
        </div>
        <div className="w-[95%]">
          <div className="flex">
            <div className=" flex flex-col justify-evenly">
              <div className="font-[700] text-[24px]">Productivity</div>
              <h1 className=" font-[700] text-[48px] w-[70%] leading-tight">
                <span className=" mr-3 text-transparent bg-clip-text bg-[#CE583F]">
                  Java Software
                </span>
                Engineer
              </h1>
              <div className="font-[700] text-[18px] mb-3 mt-5 text-[#D3D3D3]">
                We care for your technology so you can care for your Career
              </div>
              <div className=" mt-10 font-[700] text-[18px] w-[83%]">
                Scale has pioneered in the data labeling industry by combining
                AI-based techniques with human-in-the-loop, delivering labeled
                data at unprecedented quality, scalability, and efficiency.
              </div>
              <div className=" font-[700] text-[18px] w-[83%]">
                Scale has pioneered in the data labeling industry by combining
                AI-based techniques with human-in-the-loop, delivering labeled
                data at unprecedented quality, scalability, and efficiency.
              </div>
              <div className="  font-[700] text-[18px] w-[83%]">
                Scale has pioneered in the data labeling industry by combining
                AI-based techniques with human-in-the-loop, delivering labeled
                data at unprecedented quality, scalability, and efficiency.
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimateImages />
      <div className="flex flex-col gap-4 items-center mt-11 min-h-[500px] justify-center">
        <h1 className=" font-[700] text-[48px]">
          Grow
          <span className="ml-3 mr-3 text-transparent bg-clip-text bg-gradient-to-r from-[#714DFF] via-[#E151FF] to-[#FFF759]">
            Better With Us
          </span>
          Today
        </h1>
        <div className="font-[400] text-[18px] w-[44%] text-center">
          Improve the quality of customer relationships,generate leads,and
          maximize product sales with just one integrated CRMtool
        </div>
        <div className="flex text-[16px] font-[600]">
          <button className="border-[2px] rounded-lg px-8 p-2 min-w-[140px]">
            Get Help
          </button>
          <button className="border rounded-lg px-8 p-2 ml-4 min-w-[140px] bg-white text-black">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
}
