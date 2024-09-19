import Image from "next/image";
export default function SectionOne() {
  return (
    <>
      <div className="bg-black min-h-[100vh] w-full text-white font-sans p-10 flex justify-between">
        <div className="h-[100%] flex flex-col justify-center items-center">
          <div className="w-[2px] h-[380px] bg-[#E151FF] mt-16 "></div>
          <div className="bg-[#E151FF] my-4 flex justify-around">
            <span className="material-symbols-outlined">code</span>
          </div>
          <div className="w-[2px] h-[170px] bg-gradient-to-b from-[#E151FF] via-[#E151FF] to-[#333]  animate2"></div>
        </div>
        <div className="w-[95%]">
          <div className="flex justify-between">
            <div className="w-[60%] flex flex-col justify-evenly">
              <h1 className=" font-[800] text-[60px]">
                Become a
                <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-[#714DFF] via-[#E151FF] to-[#FFF759]">
                  Java Software Engineer
                </span>
              </h1>
              <div className="font-[400] text-[18px] w-[48%]">
                Build customer relationships with CRM tools that can accommodate
                all needs and are also integrated
              </div>
              <div className="flex text-[16px] font-[600]">
                <button className="border-[2px] rounded-lg px-4 p-2 w-[20%]">
                  Enroll Now
                </button>
                <button className="border rounded-lg px-4 p-2 ml-4 w-[20%] bg-white text-black">
                  Get Started
                </button>
              </div>
              <div className="flex  justify-start items-center gap-2">
                <span className="font-[400] text-[18px] ">Excellent</span>
                <span className="font-[700] text-[18px]">4.7 out of 5</span>
                <span
                  className="material-symbols-outlined"
                  style={{ color: "#12FBAA" }}
                >
                  star
                </span>
                <span className="font-[700] text-[18px]">Trustpilot</span>
              </div>
            </div>
            <div className="mr-10">
              <Image
                src="/courseDetails/connect.svg"
                alt="connect image"
                width={450}
                height={100}
              />
            </div>
          </div>
          <div className="text-center flex justify-center mt-8">
            <div className=" font-[700] text-[24px] text-center  w-[50%]">
              If you learn Java, you can develop a wide range of applications
              due to Java&apos;s versatility and robustness.
            </div>
          </div>
          <div className="flex justify-around mt-8 font-[700] text-[16px]">
            <div>Web Applications</div>
            <div>Mobile Applications</div>
            <div>Desktop Applications</div>
            <div>IoT Applications</div>
            <div>Game development</div>
          </div>
        </div>
      </div>
    </>
  );
}
