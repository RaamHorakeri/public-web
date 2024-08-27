'use client'
import React, { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import Link from 'next/link';
import Input from '@/components/Input';


const page = () => {
    const [open, setOpen] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true);
    };


    return (
        < div className="flex justify-around p-20" >

            <div className=" w-[525px] ">

                <div className="flex items-center mb-4">
                    <h2 className="text-[#061856] font-roboto text-[17.3px] font-semibold">Payment Method</h2>
                    <hr className="ml-4 flex-grow w-[360px] border-gray-300" />
                </div>

                <div className="flex flex-col gap-4">
                    <label className="flex items-center text-xs font-normal leading-[32.35px] ">
                        
                        <Input type='checkbox' className="mr-2 " width='w-[18px]' height='h-[18px]' />
                        Pay with any UPI App
                    </label>
                    <label className="flex items-center text-xs font-normal leading-[32.35px] ">
                    <Input type='checkbox' className="mr-2 " width='w-[18px]' height='h-[18px]' />
                        Credit or Debit Card
                    </label>
                </div>
            </div>


            <div className="w-[540px]">

                <div className="flex items-center mb-4">
                    <h2 className="text-[#061856] font-roboto text-[17.3px] font-semibold">Card Details</h2>
                    <hr className="ml-4 flex-grow w-[390px] border-gray-300" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block font-roboto text-[9px] mb-2 font-normal">Name on Card</label>
                            <Input type='text' width='w-[251px]' height='h-[26px]' className='p-2 border-2 border-gray-300'  />
                            
                        </div>
                        <div className="w-1/2">
                            <label className="block font-roboto text-[9px] mb-2 font-normal">Card Type</label>
                            <select className=" border-2 w-[251px] border-gray-300">
                                <option value="Please Select One" disabled >Please Select One</option>
                                <option value="">Visa</option>
                                <option value="">MasterCard</option>
                                <option value="">American Express</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block font-roboto text-[9px] mb-2 font-normal">Card Number</label>
                            <Input type='text' width='w-[251px]' height='h-[26px]' className='p-2 border-2 border-gray-300'  />
                        </div>
                        <div className="w-1/2">
                            <label className="block font-roboto text-[9px] mb-2 font-normal">Card Verification Number</label>
                            <Input type='text' width='w-[251px]' height='h-[26px]' className='p-2 border-2 border-gray-300'  />
                        </div>
                    </div>
                    <div className="flex items-center  space-x-4">
                        <div className="w-1/2">
                            <label className="block font-roboto text-[9px] mb-2 font-normal">Expiration Date*</label>
                            <select className="border-2 w-[251px] border-gray-300"  >
                                <option value="Month" disabled >Month</option>
                                <option value="">January</option>
                                <option value="">February</option>
                                <option value="">March</option>
                                <option value="">April</option>
                                <option value="">May</option>
                                <option value="">June</option>
                                <option value="">July</option>
                                <option value="">August</option>
                                <option value="">September</option>
                                <option value="">October</option>
                                <option value="">November</option>
                                <option value="">December</option>
                            </select>
                        </div>
                        <div className="w-1/2 mt-5">
                            <Input type='text' width='w-[251px]' height='h-[26px]' className='p-2 border-2 border-gray-300' placeholder='Year'  />
                        </div>
                    </div>
                    <button type="button" className="mt-4  flex justify-center items-center bg-primary text-secondary-100 w-[100px] h-[31px] ">
                        Save
                    </button>



                    <div className="mt-8">
                        <div className="flex items-center mb-4">
                            <h2 className="text-[#061856] font-roboto text-[17.3px] font-semibold">Confirmation</h2>
                            <hr className="ml-4 flex-grow border-gray-300" />
                        </div>
                        <div className="flex items-center mb-4">
                        <Input type='checkbox' className="mr-2 " width='w-[18px]' height='h-[18px]' />
                            <label className="font-roboto font-normal text-xs leading-[32.35px] " >I have read and accept the <span className=' text-primary '><a href='#' >Terms & Conditions</a></span></label>
                        </div>
                        <button type='submit' className="px-6 py-2 bg-primary font-roboto font-bold text-xs leading-[35px] text-secondary-100 w-[523px] h-[47px] ">
                            Confirm
                        </button>
                    </div>
                </form>
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
                                <h1 className='mb-5'>Thank You! Payment Successful</h1>
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
                                    href='#'
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="flex w-[74px] h-[48px] rounded-md bg-primary leading-[24px] items-center justify-center py-2 text-s font-medium text-secondary-100 border border-primary"
                                >
                                    Next
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

        </div >

    )
}

export default page