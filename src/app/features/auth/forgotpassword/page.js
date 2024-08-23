import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section className="flex justify-center items-center h-screen mb-20 ">
            <div className="w-[680px] h-auto bg-[#F3F3F3] p-[80px] gap-[24px] border border-secondary-100">
                <h1 className="w-[520px] h-[35px] mx-auto font-roboto font-bold text-m leading-[35.2px] text-center text-[#21272A]">
                    Forgot Password
                </h1>
                <form className="mt-[40px] flex flex-col items-center">
                 
                    <label className="w-[520px] text-left font-roboto font-medium text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
                        Enter Email to get OTP
                    </label>
                    <input
                        type="text"
                        className="w-[520px] h-[48px] p-[12px_16px] mb-[24px] border-b border-gray-400 outline-none"
                    />

                
                    <label className="w-[520px] text-left font-roboto font-medium text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
                        Enter OTP
                    </label>
                    <input
                        type="password"
                        className="w-[520px] h-[48px] p-[12px_16px] mb-[24px] border-b border-gray-400 outline-none"
                    />
                    <div className="w-[520px] flex justify-end items-center mb-[24px]">
                        
                        <p  className="font-roboto text-[14px] text-primary">5:05 min</p>
                    </div>




                    <Link href="/features/auth/resetpassword"><button className="w-[520px] h-[48px] bg-primary text-secondary-100 font-medium text-xs leading-[16px] mt-6">
                        Next
                    </button></Link>
                </form>
            </div>
        </section>
    )
}

export default page