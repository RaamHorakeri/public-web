import React from 'react'

const page = () => {
    return (
        <div>
            <section className="bg-[#F4F1FA] py-0 px-[87px] h-[320px] flex flex-col items-center justify-center gap-6">
                <h1 className="font-roboto font-semibold text-[32px] leading-[38.4px] text-center text-[#7C56CF]">
                Java Software Engineer
                </h1>
                <p className="font-roboto font-normal text-[14px] leading-[16.8px] text-center">
                Home/Courses/Java Software Engineer
                </p>

            </section>
            <section className="w-full h-auto bg-white p-[120px_87px] gap-[60px]">
               
                <div className="flex bg-white  rounded-md w-full h-auto p-[30px]">
                   
                    <div className="flex-1 flex flex-col gap-[40px]">
                      
                        <div>
                            <h1 className="w-[813px] h-[84px] text-left font-roboto font-semibold text-[30px] text-[#3B2174] leading-[42px]">
                                Java Software Engineering Series: Master Core Concepts and Advance Your Skills
                            </h1>
                            <div className="flex justify-center mt-[20px]">
                                <button className="bg-white text-[#7C56CF] py-2 px-6  border  border-[#7C56CF] w-[120px] h-[48px] rounded-[5px]">
                                    Get Help
                                </button>
                            </div>
                        </div>

                  
                        <div className="w-full h-auto">
                            <hr className='bg-[#E5DDF5] border border-1 border-[#E5DDF5] mb-10' style={{ width: "813px" }} />
                            <h3 className="w-[813px] h-[24px] text-left font-roboto font-semibold text-[20px]  text-[#3B2174]  leading-[24px]">
                                Details About the Course
                            </h3>
                            <p className="w-[813px] h-[120px] text-left font-roboto font-regular text-[16px] text-[#868686] leading-[30px] mt-[20px]">
                                The Java Software Engineering program is structured to guide you from a beginner level to a professional level. You'll start with basic Java programming concepts and progress to advanced topics and real-world applications. Each module includes hands-on projects, quizzes, and assessments to reinforce your learning and track your progress.
                            </p>
                        </div>
                    </div>

                  
                    <div className="w-[396px] h-auto flex flex-col gap-[26px] ml-[30px]">
                        <div className="flex flex-col gap-[26px] bg-white p-[15px]  rounded-md border  border-[#7C56CF]  ">
                          
                            <h4 className="bg-[#F2EEFA] p-[10px] text-center font-roboto font-semibold text-[20px] leading-[43px]">
                                Java Software Engineer
                            </h4>

                            <p className="flex items-center justify-center text-[#FF6F61] gap-[8px]">
                             
                                <svg className="w-[20px] h-[20px] text-[#FF6F61]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3M12 6a9 9 0 100 18 9 9 0 000-18z" />
                                </svg>
                                <span className="text-center font-roboto font-regular text-[16px] leading-[30px]">
                                    5 days left to start
                                </span>
                            </p>

                            <button className=" h-auto bg-[#7C56CF] text-[#FAFAFA] font-medium text-[20px] text-center leading-[24px] p-[12px] mt-[20px] rounded-[5px]">
                                Enroll
                            </button>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default page