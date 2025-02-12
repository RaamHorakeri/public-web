export default function DigitalSupport({ width = "60%" }) {
  return (
    <>
      <hr className={`text-[#E8E8E8] h-2 w-[${width}] my-6`} />
      <div className={`flex items-center gap-3 w-[${width}]`}>
        <div className="font-[700] text-[16px] cursor-pointer">
          Digital Ocean Support
        </div>
        <span className="material-symbols-outlined text-[45px]">
          trending_flat
        </span>
      </div>
    </>
  );
}
