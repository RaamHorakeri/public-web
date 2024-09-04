"use client";

import Input from "@/components/Input";
import React, { useState, useEffect } from "react";
import { getTags, postQuestion } from "@/api/community";
import { useRouter } from "next/navigation";

const Page = () => {
  const [inputValue, setInputValue] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [tags, setTags] = useState([]);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const getTagsHandler = async () => {
    const tags = await getTags();
    setTags(tags);
  };

  useEffect(() => {
    getTagsHandler();
  }, []);

  const handleSelectChange = (e) => {
    const id = parseInt(e.target.value, 10);
    onClickTagHandler(id);
  };

  const onClickTagHandler = (id) => {
    const exists = selectedOptions.some((item) => item?.id === id);

    if (!exists) {
      const selectedOption = tags.find((eachtag) => eachtag.id === id);
      if (selectedOption) {
        setSelectedOptions((prevTags) => [...prevTags, selectedOption]);
      }

      setErrors((errors) => {
        return {
          ...errors,
          tags: "",
        };
      });
    }
  };

  const onCloseTag = (id) => {
    const filteredTags = selectedOptions.filter((eachtag) => eachtag.id !== id);
    setSelectedOptions(filteredTags);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!inputValue.trim()) {
      newErrors.title = "Title is required";
    }
    if (!questionBody.trim()) {
      newErrors.body = "Question body is required";
    }
    if (selectedOptions.length === 0) {
      newErrors.tags = "At least one tag is required";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const onsubmitHandler = async () => {
    if (validateForm()) {
      const formData = {
        title: inputValue,
        body: questionBody,
        tags: selectedOptions.map((item) => item.id),
      };
      console.log(formData);
      const res = await postQuestion(formData);
      if (res.ok) {
        router.push("/community/featuredQuestions");
      }
    }
  };

  return (
    <div className="w-[788px] mb-20">
      <div className="h-[58px] flex items-center justify-between mb-20 ">
        <h2 className="text-m leading-m bg-red ml-2 text-primary-1600 font-bold">
          Ask the Community
        </h2>
      </div>

      <section className="w-[788px] h-[149px] border border-[#D9D9D9] mt-l ">
        <div className="flex items-center gap-5 h-[54px] bg-secondary-100 py-3 px-4  ">
          <h4 className=" font-roboto font-medium text-s leading-[24px] text-primary-1600 ">
            Question Title
          </h4>
          <p className="font-roboto text-[#868686] font-normal text-xs leading-[50px] ">
            Enter 15 Characters or More
          </p>
        </div>

        <div className="flex flex-col py-[10px]  h-[50px] ">
          <Input
            type="text"
            width="w-[788px]"
            height="h-[50px]"
            placeholder="Question title"
            value={inputValue}
            onChange={(e) => {
              let value = e.target.value;

              if (value.length > 140) return;

              setInputValue(value);
              setErrors((errors) => {
                return {
                  ...errors,
                  title: "",
                };
              });
            }}
            className="border-b-[#D9D9D9]"
          />
        </div>
        <div className="flex items-center justify-end mr-2  py-[10px]  h-[50px] border-b-0 ">
          <p className="text-[#E74C3C] font-roboto font-normal text-xs ">
            {inputValue.length}/140
          </p>
        </div>
      </section>
      {errors.title && (
        <p className="text-[#E74C3C] font-roboto font-normal text-xs pl-3">
          *{errors.title}
        </p>
      )}

      <section className="w-[788px] h-[200px] border border-[#D9D9D9] mt-l  ">
        <div className="flex items-center h-[50px] bg-secondary-100 py-3 px-4  ">
          <h4 className=" font-roboto font-medium text-s leading-[24px] text-primary-1600 ">
            Question Body
          </h4>
        </div>

        <div className="flex flex-col py-[10px]  h-[150px] ">
          <textarea
            rows="4"
            className="block p-2.5 w-full h-[146px] text-sm text-gray-900 "
            placeholder="Question body ....."
            value={questionBody}
            onChange={(e) => {
              setQuestionBody(e.target.value);
              setErrors((errors) => {
                return {
                  ...errors,
                  body: "",
                };
              });
            }}
          ></textarea>
        </div>
      </section>
      {errors.body && (
        <p className="text-[#E74C3C] font-roboto font-normal text-xs pl-3">
          *{errors.body}
        </p>
      )}

      <section className="w-[788px]  border border-[#D9D9D9] mt-l ">
        <div className="flex items-center gap-5 h-[54px] bg-secondary-100 py-3 px-4  ">
          <h4 className=" font-roboto font-medium text-s leading-[24px] text-primary-1600 ">
            Tags & Topics
          </h4>
        </div>

        <div className="flex flex-col px-4 py-[10px]  h-[86px]">
          <select
            className="w-[788px] h-[50px]  border-b border-b-[#D9D9D9] outline-none"
            value={""}
            onChange={handleSelectChange}
          >
            <option value="" disabled>
              Select...
            </option>
            {tags?.map((tag, index) => (
              <option key={index} value={tag.id}>
                {tag.name}
              </option>
            ))}
          </select>
        </div>
      </section>
      {errors.tags && (
        <p className="text-[#E74C3C] font-roboto font-normal text-xs pl-3">
          *{errors.tags}
        </p>
      )}

      <div className="flex mb-3 p-2 ">
        {selectedOptions.map((option) => (
          <div
            key={option.id}
            className="mr-3 border border-primary rounded-[5px] p-1 flex items-center"
          >
            <span className="mr-3 ">{option?.name}</span>
            <span
              onClick={() => onCloseTag(option.id)}
              className="material-symbols-outlined text-gray-400  cursor-pointer"
              style={{ fontSize: "24px" }}
            >
              close
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={onsubmitHandler}
        className=" h-[50px] w-[200px] border border-primary rounded-[22px] font-roboto font-normal text-xs "
      >
        Post a question
      </button>
    </div>
  );
};

export default Page;
