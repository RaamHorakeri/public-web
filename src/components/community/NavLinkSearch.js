import Image from "next/image"
export default function NavlinkSearch(){
    return (
        <>
        <div className="w-[399.02px] h-[285.9px] gap-[48px] ">
        <h3 className="text-s w-[63px] h-[24px] leading-[24px] font-roboto font-semibold mb-4">Search</h3>
        <hr className="mb-4 border-[#B7B7B7] w-[399.02px]" />
        <div className="relative mb-4 w-[342px] h-[49px]">
            <input
                type="text"
                placeholder="Search in Community"
                className="w-full px-4 py-2 border rounded h-[45px] outline-none"
            />
            <button className="absolute right-0 top w[45.4px] h-[45.9px] ">
                <Image src='/images/searchIcon.png' width={45} height={45} alt='searchIcon' />
            </button>
        </div>
        <hr className="mb-12 border-[#B7B7B7] w-[399.02px]" />
        <h2 className="text-s w-[98px] h-[24px] leading-[24px] font-roboto font-semibold mb-4">Categories</h2>
        <hr className="mb-12 border-[#B7B7B7] w-[399.02px]" />
        <h2 className="text-s leading-[24px] h-[24px] font-roboto font-semibold mb-4">Popular Articles</h2>
        <hr className="mb-12 border-[#B7B7B7] w-[399.02px]" />
    </div>
        </>
    )
};