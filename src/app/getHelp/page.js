import Image from "next/image";
import Container from "./_components/Container";

const data = [
  {
    id: 1,
    name: "Candy Crom",
    src: "/needHelp/candy-crom.png",
    text: "Our expert specializes in development with Java",
  },
  {
    id: 2,
    name: "Candy Crom",
    src: "/needHelp/abraham.png",
    text: "Our expert specializes in development with Java",
  },
  {
    id: 3,
    name: "Candy Crom",
    src: "/needHelp/david.png",
    text: "Our expert specializes in development with Java",
  },
];

export default function GetHelp() {
  return (
    <>
      <div className="bg-white font-sans p-[80px] flex">
        <div className="w-[70%]">
          <div className="font-[700] text-[64px]  leading-tight w-[600px]">
            The Easiest Way To Connect With Us
          </div>
          <div className="flex gap-[90px]">
            {data.map((eachItem) => (
              <Container {...eachItem} key={eachItem.id} />
            ))}
          </div>
        </div>
        <div className="w-[30%]  max-w-[400px]">
          <div className=" h-full flex flex-col justify-between">
            <Image
              src="/needHelp/help-chat.png"
              width={370}
              height={180}
              alt="chat"
            />
            <div className="mt-auto  flex flex-col gap-3">
              <div className="font-[700] text-[18px]">
                Easy to motion with Ai
              </div>
              <div className="font-[400] text-[16px] text-[#494949] leading-tight">
                Our expert specializes in development with Java Our expert
                specializes in development with Java
              </div>
              <div className="font-[700] text-[16px] text-[#06006C] cursor-pointer">
                Chat Here
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
