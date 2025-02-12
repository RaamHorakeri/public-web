import Image from "next/image";

export default function TryProduct() {
  return (
    <>
      <div className="w-[260px] p-8 relative h-[330px]">
        <Image
          src="/community/waves.svg"
          className="absolute top-0 left-0"
          height={100}
          width={300}
          alt="waves"
        />
        <div className="flex flex-col gap-6 p-1 ml-6  w-[72%]">
          <div className="font-[700] text-[16px]">
            Try Digital Ocean for free
          </div>
          <div className="font-[400] text-[16px]">
            Click below to sign up and get $200 of credit to try our products
            over 60 days!
          </div>
          <button className="font-[700] text-[14px] text-white bg-black p-1 rounded-lg  py-2 w-[100px]">
            Sign Up
          </button>
        </div>
        <Image
          src="/community/q-circle.svg"
          className="absolute bottom-0 right-0"
          height={100}
          width={100}
          alt="waves"
        />
      </div>
    </>
  );
}
