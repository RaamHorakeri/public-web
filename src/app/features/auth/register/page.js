import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
<section className="flex justify-center items-center h-screen mt-12 mb-20 ">
  <div className="w-[680px] h-auto bg-[#F3F3F3] p-[80px] gap-[24px] border border-secondary-100">
    <h1 className="w-[520px] h-[35px] mx-auto font-roboto font-bold text-m leading-[35.2px] text-center text-[#21272A]">
      Personal Details
    </h1>
    <form className="mt-[40px] flex flex-col items-center">
        <div className='flex justify justify-center gap-3 ' >
            <div className='flex flex-col ' >
            <label className="w-[252px] text-left font-roboto font-normal text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
        First Name
      </label>
      <input
        type="text"
        className="w-[252px] h-[48px] p-[12px_16px] mb-[24px] border-b border-gray-400 outline-none"
      />
            </div>
      
            <div className='flex flex-col' >
            <label className="w-[252px] text-left font-roboto font-normal text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
       Last Name
      </label>
      <input
        type="text"
        className="w-[252px] h-[48px] p-[12px_16px] mb-[24px] border-b border-gray-400 outline-none"
      />
            </div>
        </div>
        <div className='flex justify justify-center gap-3 ' >
            <div className='flex flex-col ' >
            <label className="w-[252px] text-left font-roboto font-normal text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
        Phone
      </label>
      <input
        type="text"
        className="w-[252px] h-[48px] p-[12px_16px] mb-[24px] border-b border-gray-400 outline-none"
      />
            </div>
      
            <div className='flex flex-col' >
            <label className="w-[252px] text-left font-roboto font-normal text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
       Email
      </label>
      <input
        type="email"
        className="w-[252px] h-[48px] p-[12px_16px] mb-[24px] border-b border-gray-400 outline-none"
      />
            </div>
        </div>
        <div className='flex justify justify-center gap-3 ' >
            <div className='flex flex-col ' >
            <label className="w-[252px] text-left font-roboto font-normal text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
        Qualification
      </label>
      <input
        type="text"
        className="w-[252px] h-[48px] p-[12px_16px] mb-[24px] border-b border-gray-400 outline-none"
      />
            </div>
      
            <div className='flex flex-col' >
            <label className="w-[252px] text-left font-roboto font-normal text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
      Stream
      </label>
      <input
        type="text"
        className="w-[252px] h-[48px] p-[12px_16px] mb-[24px] border-b border-gray-400 outline-none"
      />
            </div>
        </div>
     
      <label className="w-[520px] text-left font-roboto font-normal text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
      City/State/Country
      </label>
      <input
        type="text"
        className="w-[520px] h-[48px] p-[12px_16px] mb-[24px] border-b border-gray-400 outline-none"
      />


      
     
     <Link href='/features/auth/signup' > <button className="w-[520px] h-[48px] bg-primary text-secondary-100 font-roboto font-medium text-xs leading-[16px] mt-6">

        Next
      </button></Link>
    </form>
  </div>
</section>


  )
}

export default page