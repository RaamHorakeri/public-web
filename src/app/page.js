import Image from "next/image";

export default function Home() {


  const cardDetails = [
   { 
    cardHead: "Java Software Engineer",
    cardBody: " Gain comprehensive skills in Java programming, covering core concepts, advanced techniques, and industry best practices.Gain comprehensive skills in Java programming, covering core concepts, advanced techniques, and industry best practices.",
    cardButtons : ["Get Help", "Enroll Now", "Learn More"]
  },
  { 
    cardHead: "Java Software Engineer",
    cardBody: " Gain comprehensive skills in Java programming, covering core concepts, advanced techniques, and industry best practices.Gain comprehensive skills in Java programming, covering core concepts, advanced techniques, and industry best practices.",
    cardButtons : ["Get Help", "Enroll Now", "Learn More"]
  }
  ]
  return (
    <>
      <section className="bg-primary-100 py-0 px-[87px] h-[500px] flex flex-col items-center justify-center gap-m">
        <h1 className="font-roboto text-primary-1600 font-semibold text-l leading-l text-center mb-m">
          Empowering Future Software Engineers
        </h1>
        <p className="font-roboto font-normal text-secondary-1000 text-xs leading-s text-center">
          Explore endless possibilities with our online education platform.
          <br />
          Unlock new career opportunities and enhance your skills with tailored learning experiences.
        </p>
        <div className="flex gap-5 mt-4">
        <a href="#" className="bg-primary-100 text-primary font-medium text-s flex justify-center items-center leading-6 rounded-m border border-primary w-[138px] h-[48px]">
            Get Started
          </a>
          <a href="#" className="bg-primary font-medium text-secondary-100 border text-s flex justify-center items-center leading-6 rounded-m w-[129px] h-[48px]">
            Enroll Now
          </a>
        </div>
      </section>

      <section className="bg-white py-ml px-[87px] flex flex-col items-center gap-ml mt-2xl mb-m">
        <h1 className="font-roboto font-semibold text-primary-1600 text-m leading-m text-center" style={{ width: '856px', height: '76px' }}>
          Transform Your Future with Our Comprehensive Software Engineering Programs
        </h1>
        <p className="font-roboto font-normal text-secondary-1000 text-xs leading-s text-center" style={{ width: '877px', height: '60px' }}>
          Our mission is to equip aspiring software engineers with the knowledge, skills, and hands-on experience necessary to excel in the tech industry.
        </p>
      </section>

      <section className="flex flex-col items-center gap-ml py-ml px-[87px] ">

        {
          cardDetails.map((card ,index)=> (
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
            <a href="/getHelp" className="bg-white text-center text-primary leading-[24px] text-s font-roboto font-medium flex justify-center items-center rounded-m border  border-primary" style={{ width: '336px', height: '48px' }}>
             {card.cardButtons[0]}
            </a>
            <a href="#" className="bg-primary text-secondary-100 text-s leading-[24px] font-medium font-roboto text-center border flex justify-center items-center rounded-m" style={{ width: '336px', height: '48px' }}>
            {card.cardButtons[1]}
            </a>
            <a href="#" className="bg-white text-center text-primary text-s leading-[24px] font-roboto font-medium flex justify-center items-center rounded-m border  border-primary" style={{ width: '336px', height: '48px' }}>
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
    </>
  );
}
