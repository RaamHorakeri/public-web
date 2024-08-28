
'use client'
import React, { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import Image from 'next/image';
import Input from '@/components/Input';


const Page = () => {
    const [open, setOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [message, setMessage] = useState('');
    const [chatLog, setChatLog] = useState([]);

    const handleSendMessage = () => {
        if (message.trim()) {
            setChatLog([...chatLog, message]);
            setMessage('');
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true);
        setIsSubmitted(false)
    };

    const handleScheduleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);

    }

    const expertData = [
        {
            name: "John Doe",
            description: "Acquire a profound understanding of Java programming, encompassing vital concepts such as object-oriented programming, data structures, and algorithms.",
            id: 1,
        },
        {
            name: "John Doe",
            description: "Acquire a profound understanding of Java programming, encompassing vital concepts such as object-oriented programming, data structures, and algorithms.",
            id: 2,
        },
        {
            name: "John Doe",
            description: "Acquire a profound understanding of Java programming, encompassing vital concepts such as object-oriented programming, data structures, and algorithms.",
            id: 3,
        }
    ];

    return (
        <div className='bg-secondary-100 h-[100%]  flex flex-col gap-20 '>
            <section className="bg-[#F4F1FA] py-0 px-[87px] h-[320px] flex flex-col items-center justify-center gap-6">
                <h1 className="font-roboto font-semibold text-[32px] leading-[38.4px] text-center text-[#7C56CF]">
                    Get instant help from AI or Connect with our Experts
                </h1>
                <p className="font-roboto font-normal text-[14px] leading-[16.8px] text-center">
                    Home/Consultation
                </p>
            </section>

            <section className='w-[600px]  bg-[#F2EEFA] mx-auto rounded-b-[30px] ' >
                <div className="flex flex-col h-screen  w-[600px]  ">

                    <div className="flex items-center p-4 mb-4 h-[75px] bg-white ">
                        <Image src="/images/arrow-left.png" alt='leftArrow' width={24} height={24} className='cursor-pointer' />
                        <div className="ml-2">
                            <h2 className="font-bold font-roboto text-s leading-[27.28px] text-primary ">AI is here to help</h2>
                            <span className="text-[17px] font-roboto font-medium leading-[23.19px] text-green-600">Online</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-between overflow-y-auto mt-10 gap-5 ">

                        <div className="flex flex-col  items-center gap-6">
                            <div className=' h-[158px] w-[317px] flex  flex-col justify-center items-center gap-2 '>
                                <Image src='/images/menuChatIcon.png' width={28} height={28} alt='chat memu' />
                                <h3 className="font-bold font-roboto text-[14px] leading-[19.1px] mb-2">Explain</h3>
                                <div className="bg-white flex justify-center items-center rounded-lg shadow-sm w-[317px] h-[40px] ">Explain Quantum physics</div>
                                <div className="bg-white flex justify-center items-center rounded-lg shadow-sm w-[317px] h-[40px]">What are wormholes explain like i am 5</div>
                            </div>

                            <div className='flex h-[202px] w-[317px] flex-col justify-center items-center gap-2 '>
                            <Image src='/images/edit-2.png' width={24} height={24} alt='editIcon' />
                                <h3 className="font-semibold mb-2">Write and Edit</h3>
                                <div className="bg-white flex justify-center items-center rounded-lg shadow-sm w-[317px] h-[40px]">Write a tweet about global warming</div>
                                <div className="bg-white flex justify-center items-center rounded-lg shadow-sm w-[317px] h-[40px]">Write a poem about flower and love</div>
                                <div className="bg-white flex justify-center items-center rounded-lg shadow-sm w-[317px] h-[40px]">Write a rap song lyrics about</div>

                            </div>

                            <div className=' flex h-[202px] w-[317px] flex-col justify-center items-center gap-2 '>
                            <Image src='/images/translate.png' width={28} height={28} alt='translateIcon' />
                                <h3 className="font-semibold mb-2">Translate</h3>
                                <div className="bg-white flex justify-center items-center rounded-lg shadow-sm w-[317px] h-[40px]">How do you say “how are you” in korean?</div>
                                <div className="bg-white flex justify-center items-center rounded-lg shadow-sm w-[317px] h-[40px]">Write a poem about flower and love</div>
                                <div className="bg-white flex justify-center items-center rounded-lg shadow-sm w-[317px] h-[40px]">Write a rap song lyrics about</div>
                            </div>
                        </div>


                        <div className=" flex flex-col items-end  w-full pr-4 ">
                            {chatLog.map((msg, index) => (
                                <div key={index} className="bg-white max-w-fit p-3 rounded-lg shadow-sm mb-2  ">
                                    {msg}
                                </div>
                            ))}
                        </div>


                        <div className="flex relative  items-center mt-4  ">
                            <Input type='text' value={message} placeholder="Hello ,how are you today?"
                                onChange={(e) => setMessage(e.target.value)} width='w-[500px]' height='h-[56px]' className='flex-1 px-[16px] rounded-[30px] shadow-lg border border-gray-300 resize-none' />
                            <button
                                onClick={handleSendMessage}
                                className="ml-2 absolute  text-white p-2 rounded-full  right-0 top w[45.4px] h-[45.9px]"
                            >
                                <Image src="/images/send.png" alt='sendIcon' width={24} height={24}  />
                            </button>
                        </div>
                    </div>


                   
                </div>
            </section>

            <section className=' flex flex-col items-center justify-center bg-white  h-[500px] gap-[30px] ' >
                <div>
                    <h3 className='font-roboto font-semibold text-m leading-m text-[#3B2174] '>Or You Can Meet With Experts</h3>
                </div>
                <div className='flex items-center justify-between w-[1284px] h-[342px] gap-[30px]  '>
                    {
                        expertData.map((expert, index) => (
                            <div key={index} className=' w-[396px] h-[342px] bg-secondary-100 flex flex-col items-center justify-evenly '>
                                <h6 className=' font-roboto font-bold text-[15.3px] leading-[28.7px] '>{expert.name}</h6>
                                <p className='text-center w-[370px] font-roboto font-normal text-[15.3px] leading-[28.7px] '>{expert.description}</p>
                                <button onClick={handleSubmit} className=' bg-primary text-secondary-100 w-[353.91px] h-[48px] rounded-[10px] font-roboto font-medium text-s leading-6 '>
                                    Schedule Call
                                </button>
                            </div>
                        ))
                    }
                </div>
            </section>

            {open && (
                  <Dialog open={open} onClose={setOpen} className="relative z-10 ">
                  <DialogBackdrop
                      transition
                      className="fixed  inset-0 bg-gray-500 bg-opacity-75  transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                  />
                  <div className="fixed inset-0 z-10 w-screen ">
                      <div className="flex min-h-full items-end justify-center p-4 text-center  sm:items-center  sm:p-0">
                          <DialogPanel
                              transition
                              className="relative transform overflow-hidden w-[839px] h-[629px] p-[80px] bg-white text-center shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                          >
                              <div className="bg-white flex items-center justify-center ">
                                  <div className="flex items-center justify-center ">

                                      <div className=" text-center flex flex-col justify-center items-center  ">
                                            {isSubmitted ? (

                                                <p className="text-center bg-secondary-100 w-[382px] h-[135px] py-[25px] px-[6px] font-roboto font-bold text-[15.3px] leading-[28px] text-[#21272A]">
                                                    Submitted Successfully<br />
                                                    We will get back to you<br />
                                                    Thank you
                                                </p>
                                            ) : (

                                                <>
                                                    <div className="flex items-center justify-center h-[35px] w-[697px] text-m text-[#21272A] font-roboto font-bold leading-[35.2px] ">
                                                        <h1 className='mb-5'>Schedule With John Doe</h1>
                                                    </div>
                                                    <form className="mt-[40px] flex flex-col items-center  p-[40px] border border-[#DDE1E6] ">
                                                        <label className="w-[520px] text-left font-roboto font-medium text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
                                                            Name
                                                        </label>
                                                       
                                                        <Input type='text' className='bg-[#F2F4F8] mb-[24px]' placeholder='Name' />
                                                        <label className="w-[520px] text-left font-roboto font-medium text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
                                                            Date & Time
                                                        </label>
                                                        <Input type='datetime-local' className='bg-[#F2F4F8] mb-[24px]' placeholder='Name' />
                                                        <label className="w-[520px] text-left font-roboto font-medium text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
                                                            Email
                                                        </label>
                                                        <Input type='email' className='bg-[#F2F4F8] mb-[24px]' placeholder='Email' />
                                                        <button
                                                            onClick={handleScheduleSubmit}
                                                            className="w-[520px] h-[48px] bg-primary text-secondary-100 rounded-[10px] font-medium text-xs leading-[16px] mt-6"
                                                        >
                                                            Submit
                                                        </button>
                                                    </form>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            )}
        </div>
    );
}

export default Page;
