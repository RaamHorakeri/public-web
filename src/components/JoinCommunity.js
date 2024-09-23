import Globe from "./Globe";
import Button from "./Button";
export default function JoinCommunity() {
  return (
    <section className="flex flex-col justify-center items-center text-center gap-[2.5rem] bg-black">
      <h1 className="w-[46.625rem] h-[8.375rem] font-roboto font-extrabold text-[3.25rem] leading-[4.440625rem] text-[#ffffff] mt-20">
        Join the biggest Community of learning
      </h1>
      <p className="font-roboto font-bold text-[1.125rem] leading-[1.534375rem] w-[49.125rem] h-[3.125rem] text-[#ffffff]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        Aliquam, quis malesuada sed tristique sed vulputate eleifend urna
        potenti. Amet non sed eget
      </p>
      <div className="flex flex-col gap-[2.5rem] items-center mb-[2.5rem]">
        <div>
          <Globe />
        </div>
        <Button
          text="Join Now"
          href="/community/featuredQuestions"
          className="bg-[#ffffff] text-[#0A0A0B]"
        />
      </div>
    </section>
  );
}
