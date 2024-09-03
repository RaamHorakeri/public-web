import Pagination from "@/components/Pagination";
import Link from "next/link";
import { getAllQuestions } from "@/api/community";
import NavlinkSearch from "@/components/community/NavLinkSearch";

const page = async () => {
  const featuredQuestions = await getAllQuestions();
  // const featuredQuestions = [
  //     {
  //         id: 1,
  //         title: "Why is IP-address of droplet listed on spamlist?",
  //         totalAnswers: 9,
  //         questionAge: 7,
  //         author: "Abraham",
  //         tags: ["Engineering", "Security"]
  //     },

  // ]

  // Calculate the total number of pages
  // const totalPages = Math.ceil(featuredQuestions.length / itemsPerPage);
  const totalPages = featuredQuestions?.result?.length;

  return (
    <div className=" mb-20 ">
      <div className="h-[58px] flex items-center justify-between">
        <h2 className="text-m leading-m bg-red ml-2 text-primary-1600 font-bold">
          Results
        </h2>

        <Link href={`/community/askQuestion`}>
          <button className=" font-normal text-xs leading-[19.2px] bg-secondary-100 text-[#0A0A0B] font-roboto  rounded-[22px] border border-primary p-[10px] w-[200px] h-[50px] ">
            Ask a Question
          </button>
        </Link>
      </div>

      {/* Main Section */}

      {featuredQuestions?.result.map((question, index) => {
        console.log(question);
        return (
          <Link
            key={index}
            href={`/community/featuredQuestions/${question.id}`}
          >
            <section className="w-[788px] h-[148px] border border-[#D9D9D9] mt-l mb-l cursor-pointer">
              <h4 className="h-[43px] bg-secondary-100 py-3 px-4 font-roboto font-medium text-xs leading-[19.2px] text-primary-1600 ">
                {question.title}
              </h4>
              <div className=" h-[54px] bg-secondary-100 py-3 px-4 flex justify-between items-center ">
                <p className=" h-[30px] text-success font-roboto font-normal text-xs leading-s text-green-500">
                  Accepted Answers Available
                </p>
                <p className=" h-[30px] text-[#3E3E3E] font-roboto font-normal text-xs leading-s ">
                  {question.accepted_answer_id
                    ? question.accepted_answer_id.length
                    : 0}{" "}
                  Answers - {question.questionAge ? question.questionAge : "3"}{" "}
                  Months ago - By {question.author_id[1]}
                </p>
              </div>
              <div className="flex items-center space-x-2 py-[10px] px-4 h-[51px] ">
                {question.tags.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-[#F3F3F3] rounded-sm text-center flex justify-center items-center font-roboto font-normal text-[14px] text-[#3E3E3E] leading-[16.8px] w-[90px] h-[31px]"
                    >
                      {tag[1]}
                    </span>
                  );
                })}
              </div>
            </section>
          </Link>
        );
      })}

      <div className="flex items-center justify-center">
        <p className="mr-3">Total 12 items</p>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default page;
