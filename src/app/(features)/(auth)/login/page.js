import Link from 'next/link'
import React from 'react'

import Image from 'next/image';
import Input from '@/components/Input';


const Page = () => {
  return (
<section className="flex justify-center items-center h-screen mt-12 mb-20 ">
  <div className="w-[680px] h-auto bg-[#F3F3F3] p-[80px] gap-[24px] border border-secondary-100">
    <h1 className="w-[520px] h-[35px] mx-auto font-roboto font-bold text-m leading-[35.2px] text-center text-[#21272A]">
      Login
    </h1>
    <form className="mt-[40px] flex flex-col items-center gap-1">
     
      <label className="w-[520px] text-left font-roboto font-normal text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
        User Name / Email
      </label>
      <Input type='text'  />
     

     
      <label className="w-[520px] text-left font-roboto font-normal text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
        Password
      </label>
      <Input type='password'  />


      
      <div className="w-[520px] h-[20px] flex justify-between items-center mb-[24px]">
        <div className="flex items-center">
        <Input type='checkbox' id="rememberMe" className='mr-[8px]' width='w-[15px]' height='h-[15px]' />
          <label htmlFor="rememberMe" className="font-roboto text-[14px] leading-[16.8px] font-normal text-[#B7B7B7]">Remember me</label>
        </div>
        <Link href="/forgotpassword" className="font-roboto text-[14px] leading-[16.8px] font-normal text-primary">Forgot password?</Link>
      </div>

      
      <p className="w-[520px] text-center text-xs font-roboto font-normal leading-[19.2px] text-[#CFCFCF] mb-[24px]">or</p>

      
      <div className="w-[520px] flex justify-between mb-[24px]">
        <button className=" flex items-center justify-center space-x-2 w-[244px] h-[50px] rounded-3xl p-3 bg-white border border-[#B7B7B7]  "> <Image src="/images/google.png" width={20} height={20} alt='googleLogo' /> <span className="text-[#0A0A0B]  font-roboto text-xs leading-[19.2px] font-normal ">Sign in with Google</span> </button>
        <button className=" flex items-center justify-center space-x-2 w-[244px] h-[50px] rounded-3xl p-3 bg-white border border-[#B7B7B7]  "> <Image src="/images/Github.png" width={20} height={20} alt='googleLogo' /> <span className="text-[#0A0A0B]  font-roboto text-xs leading-[19.2px] font-normal">Sign in with GitHub</span> </button>
      </div>

     
      <button className="w-[520px] h-[48px] bg-primary text-secondary-100 font-roboto font-medium text-xs leading-[16px] mt-6">

        Login
      </button>
    </form>
  </div>
</section>


  )
}

export default Page