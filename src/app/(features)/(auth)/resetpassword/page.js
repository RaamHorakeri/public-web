'use client'
import React, { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import Link from 'next/link';
import Input from '@/components/Input';

const Page = () => {
  const [open, setOpen] = useState(false)

  const handleSubmit = (event) => {
      event.preventDefault();
      setOpen(true);
  };

  return (
    <section className="flex justify-center items-center h-screen mb-20 relative">
      <div className="w-[680px] h-auto bg-[#F3F3F3] p-[80px] gap-[24px] border border-secondary-100">
        <h1 className="w-[520px] h-[35px] mx-auto font-roboto font-bold text-m leading-[35.2px] text-center text-[#21272A]">
          Reset Password
        </h1>
        <form onSubmit={handleSubmit} className="mt-[40px] flex flex-col items-center">
          <label className="w-[520px] text-left font-roboto font-medium text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
            Create New Password
          </label>
          <Input type='password' className='w-[520px] h-[48px] p-[12px_16px] mb-[24px] border-b border-gray-400 outline-none' />

          <label className="w-[520px] text-left font-roboto font-medium text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
            Confirm Password
          </label>
                <Input type='password' className='w-[520px] h-[48px] p-[12px_16px] mb-[24px] border-b border-gray-400 outline-none' />


          <button
            type="submit"
            className="w-[520px] h-[48px] bg-primary text-white font-medium text-xs leading-[16px] mt-6"
          >
            Submit
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

                      <div className="flex items-center justify-center h-[35px] w-[697px] text-[#21272A] font-roboto font-bold leading-[35.2px] ">
                        <h1 className='mb-5'>Password is changed.Please login here</h1>
                      </div>
                      <div className="flex items-center justify-center px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <Link
                        href='/features/auth/login'
                          type="button"
                          onClick={() => setOpen(false)}
                          className="flex w-[82px] h-[48px] rounded-md bg-white leading-[24px] items-center justify-center py-2 text-s font-medium text-primary border border-primary"
                        >
                          Login
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
  );
};

export default Page;
