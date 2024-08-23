import React from 'react'

const page = () => {

  const courseDetails = [
    { 
    courseID:1,
     cardHead: "Java Software Engineer",
     cardBody: " Gain comprehensive skills in Java programming, covering core concepts, advanced techniques, and industry best practices.Gain comprehensive skills in Java programming, covering core concepts, advanced techniques, and industry best practices.",
     cardButtons : ["Get Help", "Enroll Now", "Learn More"]
   },
   { 
    courseID:2,
     cardHead: "Java Software Engineer",
     cardBody: " Gain comprehensive skills in Java programming, covering core concepts, advanced techniques, and industry best practices.Gain comprehensive skills in Java programming, covering core concepts, advanced techniques, and industry best practices.",
     cardButtons : ["Get Help", "Enroll Now", "Learn More"]
   },  
   { 
    courseID:3,
    cardHead: "Java Software Engineer",
    cardBody: " Gain comprehensive skills in Java programming, covering core concepts, advanced techniques, and industry best practices.Gain comprehensive skills in Java programming, covering core concepts, advanced techniques, and industry best practices.",
    cardButtons : ["Get Help", "Enroll Now", "Learn More"]
  }
   ]

  return (
    <div>
      <section className="bg-[url('/images/bg1.png')] bg-cover bg-center bg-no-repeat py-0 px-[87px] h-[320px] flex flex-col items-center justify-center gap-6">
        <h1 className="font-roboto font-semibold text-m leading-m text-center text-primary">
          Our Courses
        </h1>
        <p className="font-roboto font-normal text-[14px] leading-[16.8px] text-center text-primary-1600">
          Home/Courses
        </p>

      </section>

      <section className="flex flex-col items-center mt-2xl gap-ml py-ml px-[87px] ">

{
  courseDetails.map((card ,index)=> (
    <div key={index} className="flex bg-white items-center justify-center rounded-lg border border-primary w-[1266px] h-[264px] gap-ml ">
  <div className="flex flex-col  pl-2 gap-[30px] justify-center mt-[60px] space-y-3 " style={{ width: '840px', height: '204px' }}>
    <h3 className="font-roboto font-bold text-primary-1600 text-xs leading-[19.2px]" style={{ width: '336px', height: '19px' }}>
      {card.cardHead}
    </h3>
    <p className="font-roboto font-normal text-xs text-secondary-1000 leading-s" style={{ width: '840px', height: '90px' }}>
      {card.cardBody}
    </p>
  </div>
  <div className=" flex flex-col items-center justify-around gap-4 " style={{ width: '336px', height: '204px' }}>
    <a href="#" className="bg-white text-center text-primary leading-[24px] text-s font-roboto font-medium flex justify-center items-center rounded-m border  border-primary" style={{ width: '336px', height: '48px' }}>
     {card.cardButtons[0]}
    </a>
    <a href="#" className="bg-primary text-secondary-100 text-s leading-[24px] font-medium font-roboto text-center border flex justify-center items-center rounded-m" style={{ width: '336px', height: '48px' }}>
    {card.cardButtons[1]}
    </a>
    <a href={`/features/courses/${card.courseID}`} className="bg-white text-center text-primary text-s leading-[24px] font-roboto font-medium flex justify-center items-center rounded-m border  border-primary" style={{ width: '336px', height: '48px' }}>
    {card.cardButtons[2]}
    </a>
  </div>
</div>
  ))
}
</section>

<div className="flex justify-center">
        <a href="#" className="bg-primary text-secondary-100 py-3 px-4 rounded-m font-roboto text-s leading-6 font-medium text-center mt-11 mb-32" style={{ width:"179px", height:"48px"}}>
          View More
        </a>
      </div>
    </div>
  )
}

export default page