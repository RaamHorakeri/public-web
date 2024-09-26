"use client";
import Pagination from "@/components/Pagination";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getAllQuestions } from "@/api/community";
import { useSearchParams } from "next/navigation";

const FeaturedQuestions = ({ setCount }) => {
  const [featuredQuestions, setFeaturedQuestions] = useState();
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const searchParams = useSearchParams();
  const query = searchParams.get("query") ? searchParams.get("query") : "";
  const page = searchParams.get("page") ? searchParams.get("page") : 1;

  const itemsPerPage = 10;
  const currentPage = Number(page) || 1;
  const offset = (currentPage - 1) * itemsPerPage;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getAllQuestions(itemsPerPage, offset, "desc", query);
        setFeaturedQuestions(data);
        setCount(data.count);
        setErrorMsg(null);
        setLoading(false);
      } catch (error) {
        setErrorMsg(error.message);
        setLoading(false);
        console.error("Error fetching questions: ", error);
      }
    };

    setLoading(true);
    fetchQuestions();
  }, [query, itemsPerPage, offset]);

  const totalPages = Math.ceil(featuredQuestions?.count / itemsPerPage);

  const NotFound = () => {
    return (
      <div className=" text-red-500 w-full h-10  ">
        <p> No Questions found </p>
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <div className="text-center mt-10 font-[700] text-[16px]">
          Loading...
        </div>
      ) : (
        <div className=" mb-20 ">
          <div className="">
            {featuredQuestions?.result.length == 0 ? (
              <NotFound />
            ) : (
              <div>
                {featuredQuestions?.result.map((question, index) => {
                  return (
                    <Link
                      key={index}
                      href={`/community/featuredQuestions/${question.id}`}
                    >
                      <section className="w-full h-[148px] bg-[#FFFFFF] mt-l mb-l cursor-pointer shadow-md rounded-md">
                        <h4 className="h-[43px]  py-3 px-4 font-roboto font-[700] text-[18px] leading-[19.2px] ">
                          {question.title}
                        </h4>
                        <div className=" h-[54px] py-3 px-4 flex  items-center ">
                          <p className=" h-[30px] text-success font-roboto  leading-s text-[#6C63FF] font-[700] text-[14px] mr-10 flex items-center">
                            <span className="material-symbols-outlined text-[#6C63FF] mr-2">
                              check_circle
                            </span>
                            Accepted Answers Available
                          </p>
                          <p className=" h-[30px]   font-[400] text-[12px] leading-s flex items-center gap-1">
                            {question.accepted_answer_id
                              ? question.accepted_answer_id.length
                              : 0}{" "}
                            Answers{" "}
                            <div className="h-1 w-1 bg-black rounded-lg"></div>
                            {question.questionAge
                              ? question.questionAge
                              : "3"}{" "}
                            Months ago{" "}
                            <div className="h-1 w-1 bg-black rounded-lg"></div>{" "}
                            By {question.author_id[1]}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2 py-[10px] px-4 h-[51px] ">
                          {question.tags.map((tag, index) => {
                            return (
                              <span
                                key={index}
                                className="bg-[#E3E8F4] rounded-sm text-center flex justify-center items-center font-[400] text-[12px] text-[#7B7B7B] leading-[16.8px] w-[90px] h-[31px]"
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
              </div>
            )}
          </div>

          {errorMsg ? (
            <div className=" text-red-500 w-full h-10  mt-10 text-center">
              {errorMsg}
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Pagination totalPages={totalPages} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FeaturedQuestions;
