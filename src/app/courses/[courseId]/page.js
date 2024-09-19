import Image from "next/image";
export default function Page() {
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
                src="/images/connect.png"
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
        <div className="flex items-center animate ">
          <Image
            src="/images/CodeFrame1.png"
            alt="connect image"
            width={500}
            height={100}
            className="w-[45%]"
          />

          <Image
            src="/images/CodeFrame2.png"
            alt="connect image"
            width={500}
            height={100}
            className="w-[45%] ml-[60px]"
          />
        </div>
      </div>
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
        <div className="flex items-center animate">
          <Image
            src="/images/CodeFrame1.png"
            alt="connect image"
            width={500}
            height={100}
            className="w-[45%]"
          />

          <Image
            src="/images/CodeFrame2.png"
            alt="connect image"
            width={500}
            height={100}
            className="w-[45%] ml-[60px]"
          />
        </div>
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
    </>
  );
}
