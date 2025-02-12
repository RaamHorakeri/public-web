import Image from "next/image";
export default function ExpertDetails({
  name,
  src,
  text,
  id,
  setOpen,
  selectExpert,
}) {
  return (
    <div className="w-[20%] flex flex-col gap-3 mt-10">
      <Image src={src} width={180} height={95} alt={name} />
      <div className="font-[700] text-[18px]">{name}</div>
      <div className="font-[400] text-[16px] text-[#494949] leading-tight">
        {text}
      </div>
      <div
        className="font-[700] text-[16px] text-[#06006C] cursor-pointer"
        onClick={() => {
          setOpen(true);
          selectExpert(id);
        }}
      >
        Connect Here
      </div>
    </div>
  );
}
