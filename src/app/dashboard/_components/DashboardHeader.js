import Image from "next/image";
export default function DashboardHeader() {
  return (
    <div className="h-[110px]  flex items-center w-full px-4 justify-between bg-white ">
      <div>
        <div className="font-[700] text-[24px]">Hello, Shubham</div>
        <div className="text-[#85878D] font-[400] text-[14px]">
          Let&apos;s learn something new today!
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex border-[#E7EAE9] border rounded-[15px]">
          <input
            type="search"
            className="h-[50px] rounded-tl-[15px] rounded-bl-[15px] p-2 pl-3 outline-none w-[200px]"
            placeholder="Search here..."
          />
          <div className=" rounded-tr-[15px] rounded-br-[15px] flex justify-center items-center w-[40px] bg-white pr-2 ">
            <Image
              src="/dashboard/uil_search.svg"
              alt="search"
              height={20}
              width={25}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex border-[#E7EAE9] border rounded-[10px] items-center justify-center bg-white p-1 w-[60px] relative">
          <span
            className="material-symbols-outlined cursor-pointer"
            style={{ fontSize: "30px" }}
          >
            notifications
          </span>
          <span className="bg-red-600 rounded-full absolute right-5 bottom-7 h-[6px] w-[6px]"></span>
        </div>
        <Image
          src="/dashboard/avatar_dashboard.svg"
          alt="avatar"
          height={100}
          width={50}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
