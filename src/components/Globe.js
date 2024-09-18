import Image from "next/image";

const Globe = () => {
  return (
    <div className="w-full mt-20 relative">
      <div className=" absolute top-[-91px] left-1/2 transform -translate-x-1/2 bg-[#FFFFFF] w-[376px] h-[182px] rounded-[18px] flex flex-col items-center justify-center  ">
        <p className="text-[24px] font-bold leading-[32.74px] mt-5 flex justify-between">
          <Image
            src="/images/landingPage/heart.png"
            alt="heart"
            width={36}
            height={36}
            className="mr-2"
          />{" "}
          Happy Students
        </p>
        <div className="relative flex justify-center items-center mt-5 mr-16">
          {/* Base image */}
          <Image
            src="/images/landingPage/image2.png"
            alt="Image 2"
            className="absolute rounded-full w-10 h-10   object-cover"
            width={40}
            height={40}
          />
          <Image
            src="/images/landingPage/image1.png"
            alt="Image 2"
            className="absolute rounded-full w-10 h-10 left-16  object-cover"
            width={40}
            height={40}
          />

          {/* Overlapping image */}

          {/* Smaller image */}
          <Image
            src="/images/landingPage/image3.png"
            alt="Image 3"
            className="absolute rounded-full w-10 h-10  left-1/2  object-cover"
            width={40}
            height={40}
          />
          <div>
            {" "}
            <p className="text-[24px] font-bold leading-[32.74px] ml-40">
              +25K
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/images/landingPage/globe.png"
        layout="responsive"
        alt="globe"
        width={100}
        height={653}
        className="w-full h-full"
      />
    </div>
  );
};

export default Globe;
