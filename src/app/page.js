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
        <h1 className="font-roboto text-primary-1600 font-semibold text-l leading-l text-center mb-4">
          Empowering Future Software Engineers
        </h1>
        <p className="font-roboto font-normal text-secondary-1000 text-xs leading-s text-center">
          Explore endless possibilities with our online education platform.
          <br />
          Unlock new career opportunities and enhance your skills with tailored learning experiences.
        </p>
        <div className="flex gap-6 mt-4">
        <a href="#" className="bg-primary-100 text-primary font-medium py-2 px-6 rounded-m border border-primary">
            Get Started
          </a>
          <a href="#" className="bg-primary font-medium text-secondary-100 border  py-2 px-6 rounded-m">
            Enroll Now
          </a>
        </div>
      </section>

      <section className="bg-white py-ml px-[87px] flex flex-col items-center gap-ml mt-2xl mb-2xl">
        <h1 className="font-roboto font-semibold text-primary-1600 text-m leading-m text-center" style={{ width: '856px', height: '76px' }}>
          Transform Your Future with Our Comprehensive Software Engineering Programs
        </h1>
        <p className="font-roboto font-normal text-secondary-1000 text-xs leading-s text-center" style={{ width: '877px', height: '60px' }}>
          Our mission is to equip aspiring software engineers with the knowledge, skills, and hands-on experience necessary to excel in the tech industry.
        </p>
      </section>

      <section className="flex flex-col items-center gap-ml py-ml px-[87px]">

        {
          cardDetails.map((card ,index)=> (
            <div key={index} className="flex bg-white p-6 rounded-lg border border-primary w-[1266px] h-[264px] gap-ml">
          <div className="flex flex-col space-y-8 gap-4 mt-10 " style={{ width: '840px', height: '204px' }}>
            <h3 className="font-roboto font-bold text-primary-1600 text-xs leading-[19.2px]" style={{ width: '336px', height: '19px' }}>
              {card.cardHead}
            </h3>
            <p className="font-roboto font-normal text-xs text-secondary-1000 leading-s" style={{ width: '840px', height: '90px' }}>
              {card.cardBody}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 mt-1 " style={{ width: '336px', height: '204px' }}>
            <a href="#" className="bg-white text-center text-primary font-medium py-2 px-m rounded-m border  border-primary" style={{ width: '336px', height: '48px' }}>
             {card.cardButtons[0]}
            </a>
            <a href="#" className="bg-primary text-secondary-100 font-medium text-center border py-2 px-m rounded-m" style={{ width: '336px', height: '48px' }}>
            {card.cardButtons[1]}
            </a>
            <a href="#" className="bg-white text-center text-primary font-medium py-2 px-m rounded-m border  border-primary" style={{ width: '336px', height: '48px' }}>
            {card.cardButtons[2]}
            </a>
          </div>
        </div>
          ))
        }
      </section>

      <div className="flex justify-center">
        <a href="#" className="bg-primary text-secondary-100 py-3 px-4 rounded-m font-medium text-center mt-10 mb-28" style={{ width:"179px", height:"48px"}}>
          View More
        </a>
      </div>
    </>
  );
}
