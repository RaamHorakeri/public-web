import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (


        <footer className="bg-[#3B2174]">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between flex-col space-y-10">
                    <h1 className='text-white text-3xl '>Need Guidance on Your Career Path?</h1>
                    <button className='px-4 py-2 bg-[#3B2174] text-white rounded hover:bg-blue-700 border-2 rounded-md border-white'>Get Help</button>
                </div>
                <hr className="my-6 border-[#6438C4] sm:mx-auto dark:border-gray-700 lg:my-8" />

                <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row sm:space-y-0 space-y-10">
                    {/* Left side: Copyright Text */}
                    <p className="text-sm text-white">
                        Copyright © 2024 All Rights Reserved by BrandName
                    </p>

                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com" target="_blank" >
                            <FaFacebook className="text-white border-2 border-white p-2 " size={35} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" >
                            <FaInstagram className="text-white border-2 border-white p-2 " size={35}/>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" >
                            <FaTwitter className="text-white border-2 border-white p-2 " size={35}/>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" >
                            <FaLinkedin className="text-white border-2 border-white p-2 " size={35} />
                        </a>
                    </div>
                </div>
            </div>

        </footer>


    )
}

export default Footer