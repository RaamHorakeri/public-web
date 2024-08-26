'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import Image from 'next/image';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';


const page = () => {
    const [open, setOpen] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true);
    };

    return (
        <section className="flex justify-center items-center h-screen mt-12 mb-20 ">
            <div className="w-[680px] h-auto bg-[#F3F3F3] p-[80px] gap-[24px] border border-secondary-100">
                <h1 className="w-[520px] h-[35px] mx-auto font-roboto font-bold text-m leading-[35.2px] text-center text-[#21272A]">
                    Register
                </h1>
                <form onSubmit={handleSubmit} className="mt-[40px] flex flex-col items-center">

                    <label className="w-[520px] text-left font-roboto font-normal text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
                        User Name
                    </label>
                    <input
                        type="text"
                        className="w-[520px] h-[48px] p-[12px_16px] mb-[24px] border-b border-gray-400 outline-none"
                    />
                    <label className="w-[520px] text-left font-roboto font-normal text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-[520px] h-[48px] p-[12px_16px] mb-[24px] border-b border-gray-400 outline-none"
                    />


                    <div className='flex justify justify-center gap-3 ' >
                        <div className='flex flex-col ' >
                            <label className="w-[252px] text-left font-roboto font-normal text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
                                Password
                            </label>
                            <input
                                type="text"
                                className="w-[252px] h-[48px] p-[12px_16px] mb-[24px] border-b border-gray-400 outline-none"
                            />
                        </div>

                        <div className='flex flex-col' >
                            <label className="w-[252px] text-left font-roboto font-normal text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
                                Re Enter Password
                            </label>
                            <input
                                type="text"
                                className="w-[252px] h-[48px] p-[12px_16px] mb-[24px] border-b border-gray-400 outline-none"
                            />
                        </div>
                    </div>





                    <p className="w-[520px] text-center text-xs font-roboto font-normal leading-[19.2px] text-[#CFCFCF] mb-[24px]">or</p>


                    <div className="w-[520px] flex justify-between mb-[24px]">
                        <button className=" flex items-center justify-center space-x-2 w-[244px] h-[50px] rounded-3xl p-3 bg-white border border-[#B7B7B7]  "> <Image src="/images/google.png" width={20} height={20} alt='googleLogo' /> <span className="text-[#0A0A0B]  font-roboto text-xs leading-[19.2px] font-normal ">Sign in with Google</span> </button>
                        <button className=" flex items-center justify-center space-x-2 w-[244px] h-[50px] rounded-3xl p-3 bg-white border border-[#B7B7B7]  "> <Image src="/images/Github.png" width={20} height={20} alt='googleLogo' /> <span className="text-[#0A0A0B] font-roboto text-xs leading-[19.2px] font-normal">Sign in with GitHub</span> </button>
                    </div>


                    <button className="w-[520px] h-[48px] bg-primary text-secondary-100 font-roboto font-medium text-xs leading-[16px] mt-6">

                        Register
                    </button>
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
                                                <h1 className='mb-5'>Registered Successfully <br />
                                                Are you sure you want to continue?</h1>
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
                                                    href='/features/auth/login'
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

        </section>


    )
}

export default page