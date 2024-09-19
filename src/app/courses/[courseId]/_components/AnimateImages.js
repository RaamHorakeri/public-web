import Image from "next/image";

export default function AnimateImages() {
  return (
    <div className="flex items-center animate ">
      <Image
        src="/courseDetails/code-frame1.svg"
        alt="connect image"
        width={500}
        height={100}
        className="w-[45%]"
      />

      <Image
        src="/courseDetails/code-frame2.svg"
        alt="connect image"
        width={500}
        height={100}
        className="w-[45%] ml-[60px]"
      />
    </div>
  );
}
