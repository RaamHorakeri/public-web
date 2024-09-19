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
    </div>
  );
}
