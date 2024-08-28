
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Input from '@/components/Input';
import Modal from '../../../components/Modal/Schedulemodal';


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
                                <Image src="/images/send.png" alt='sendIcon' width={24} height={24} />
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
               
                <Modal open={open} setOpen={setOpen} handleScheduleSubmit={handleScheduleSubmit} isSubmitted={isSubmitted} />
            )}
        </div>
    );
}

export default Page;
