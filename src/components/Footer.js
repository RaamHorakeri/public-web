import Image from 'next/image';
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (


        <footer className="bg-[url('/images/footerBg.png')] h-[430.06px] ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-20 h-[276.03px] ">
                <div className="sm:flex sm:items-center sm:justify-between flex-col  h-[161px gap-[25px] pb-[30px]">
                    <h1 className='text-white font-roboto font-semibold leading-m text-m '>Need Guidance on Your Career Path?</h1>
                    <button className='px-4 py-2 bg-[#3B2174] text-secondary-100 rounded font-roboto text-s leading-6 border rounded-[10px] border-secondary-100 w-[130px] h-[48px]'>Get Help</button>
                </div>
                <hr className="my-6 border-primary sm:mx-auto dark:border-gray-700 lg:my-8  " />

                <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row sm:space-y-0 space-y-10 h-[30px] mt-12">

                    <p className="text-[12px] font-medium leading-[14.4px] font-roboto text-white">
                        Copyright © 2024 All Rights Reserved by BrandName
                    </p>

                    <div className="flex space-x-4 w-[161px] h-[30.03px] ">
                        <a href="https://www.facebook.com" target="_blank" >
                            <Image src="/images/facebook.png" width={29} height={29} alt='facebookLogo' />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" >
                        <Image src="/images/instagram.png" width={29} height={29} alt='instagraLogo' />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" >
                        <Image src="/images/twitter.png" width={29} height={29} alt='twitterLogo' />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" >
                        <Image src="/images/linkedin.png" width={29} height={29} alt='linkedinLogo' />
                        </a>
                    </div>
                </div>
            </div>

        </footer>


    )
}

export default Footer