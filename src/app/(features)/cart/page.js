'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';

const page = () => {

  const [open, setOpen] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true);
    };

    const cartData = [
      {
        sNo:1,
        date: "01-07-2024 To 31-07-2024",
        price: "15000"
      },
   
    
    ]

  return (
    <div>
      <section className='bg-secondary-100 w-full h-[150px] flex justify-center items-center '>
        <h1 className=' font-roboto font-bold text-[24px] leading-[50px] ' >Selected Option</h1>
      </section>
      <section className='  h-[436px] flex justify-evenly items-center '>
        <div className=' -mt-6 '>
          <h3 className='font-roboto font-bold text-[24px] leading-[50px] '>Selected Duration</h3>
          <p className='font-roboto font-normal text-s leading-[50px] '>Selected Duration</p>
        </div>
        <div className=' flex flex-col gap-4 ' >
          <h3 className='font-roboto font-bold text-[24px] leading-[50px] '>Batch</h3>
          <table className=" bg-secondary-100 border border-[#D9D9D9]">
            <thead>
              <tr className=" p-4 flex justify-between items-center  w-[824px] h-[46px] border-b">
                <th className="">S.No</th>
                <th className=" ">From to End Date</th>
                <th className=" ">Price</th>
              </tr>
            </thead>
            <tbody>
              {
                cartData.map((cart,index) => {
                    return (
                      <tr key={index} className=" p-4 flex justify-between items-center h-[46px]  w-[824px]">
                      <td className=" ">{cart.sNo}</td>
                      <td className="">{cart.date}</td>
                      <td className=" ">{cart.price}</td>
                    </tr>
                    )
                })
              }
             
            </tbody>
          </table>

       
        </div>
        
      </section>
      <div className="flex justify-center">
        <button onClick={handleSubmit} className="bg-primary text-secondary-100 flex justify-center items-center rounded-m font-roboto text-s leading-6 font-medium text-center mb-32" style={{ width:"111px", height:"48px"}}>
          Pay Now
        </button>
      </div>

      {open && (


<Dialog open={open} onClose={setOpen} className="relative z-10">
    <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75  transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
    />

    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center  sm:items-center  sm:p-0">
            <DialogPanel
                transition
                className="relative transform overflow-hidden w-[839px] h-[370px] p-[80px] bg-white text-center shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
                <div className="bg-white flex items-center justify-center ">
                    <div className="flex mt-7 items-center justify-center ">

                        <div className="mt-3 text-center flex flex-col justify-center items-center  ">

                            <div className="flex items-center justify-center h-[35px] w-[697px] text-m text-[#21272A] font-roboto font-bold leading-[35.2px] ">
                                <h1 className='mb-5'>Proceed with Payment</h1>
                            </div>
                            <div className="flex items-center  px-4 py-3 mt-10">
                                <Link
                                    href='#'
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="flex mr-4 w-[94px] h-[48px] rounded-md bg-white leading-[24px] items-center justify-center py-2 text-s font-medium text-primary border border-primary"
                                >
                                    Cancel
                                </Link>
                                <Link
                                    href='/payment'
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="flex w-[65px] h-[48px] rounded-md bg-primary leading-[24px] items-center justify-center py-2 text-s font-medium text-secondary-100 border border-primary"
                                >
                                    Yes
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </DialogPanel>
        </div>
    </div>
</Dialog>



)}

    </div>
  )
}

export default page