"use client";
import { usePathname } from "next/navigation";
export default function PageTitle() {
  const pathname = usePathname();
  console.log(pathname);
  function getTitleAndPath(input) {
    switch (input) {
      case "/community/featuredQuestions":
        return {
          title: "Featured Questions",
          path: "Home/Community/Featured",
        };

      case "/community/askQuestion":
        return {
          title: "Join the Conversation",
          path: "Home/Community",
        };

      default:
        return {
          title: "Join the Conversation",
          path: "Home/Community",
        };
    }
  }

  const result = getTitleAndPath(pathname);
  console.log(result);

  return (
    <section className="bg-[url('/images/bg1.png')] py-0 px-[87px] h-[320px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-6">
      <h1 className="font-roboto font-semibold text-[32px] leading-[38.4px] text-center text-[#7C56CF]">
        {result.title}
      </h1>
      <p className="font-roboto font-normal text-[14px] leading-[16.8px] text-center">
        {result.path}
      </p>
    </section>
  );
}
