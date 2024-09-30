"use client";
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "./quill.css";
import { getTags, postQuestion } from "@/api/community";
import Cookies from "js-cookie";

export default function AskQuestion() {
  const access_token = Cookies.get("access_token");

  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [errors, setErrors] = useState({});

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["code-block", "blockquote"],
    ],
  };

  const getTagsHandler = async () => {
    const tags = await getTags();
    console.log({ tags });
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

  return (
    <>
      <div className="p-20 px-[20%]">
        <div className="font-[800] text-[44px]">Ask the Community</div>
        <div className="font-[400] text-[18px] w-[69%]">
          Running into trouble? Our developer community is here to help! Ask
          anything related to system administration, programming, devops, open
          source, or the DigitalOcean platform.
        </div>
        <div>
          <div className="font-[700] text-[18px] mt-10">
            Question Title{" "}
            <sup className="text-[#494949]  font-[400] text-[14px]">
              (required)
            </sup>
          </div>
        </div>
        <div className="flex items-center justify-between mb-1">
          <div className="font-[400] text-[14px]">
            Enter 15 characters or more
          </div>
          <div className="bg-[#F84040] text-white p-1 rounded-sm w-[70px] text-center">
            {title.length}/140
          </div>
        </div>
        <input
          type="textarea"
          className="h-[60px] bg-[#E8E8E8] w-full rounded-md outline-none p-1"
          onChange={(e) => {
            let value = e.target.value;

            if (value.length > 140) return;

            setTitle(value);
            setErrors((errors) => {
              return {
                ...errors,
                title: "",
              };
            });
          }}
          value={title}
        />
        <div className="font-[700] text-[18px] mt-10">
          Question Body{" "}
          <sup className="text-[#494949]  font-[400] text-[14px]">
            (required)
          </sup>
        </div>

        <div className="font-[400] text-[14px]">
          Write your full question here, including any relevant information like
          operating system, error logs, and steps taken.
        </div>

        <div className="my-5 ">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            modules={modules}
            className="text-black h-[140px] rounded-sm border-none "
          />
        </div>
        <div className="relative top-5">
          <div className="font-[700] text-[18px] mt-10 ">
            Tags and Topics{" "}
            <sup className="text-[#494949]  font-[400] text-[14px]">
              (required)
            </sup>
          </div>
          <select
            className="w-full h-[60px] bg-[#E8E8E8] mt-4 rounded-md px-2 outline-none"
            value={""}
            onChange={handleSelectChange}
          >
            <option>select</option>
            {tags?.map((tag, index) => (
              <option key={index} value={tag.id}>
                {tag.name}
              </option>
            ))}
          </select>
          <div className="flex mb-3 p-2 ">
            {selectedOptions.map((option) => (
              <div
                key={option.id}
                className="mr-3 border border-[#E8E8E8] rounded-[5px] p-1 flex items-center"
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

          <button className="font-[400] text-[14px] border border-black p-3 ">
            {access_token ? "Post the Question" : "Login to Post the Question"}
          </button>
        </div>
      </div>
    </>
  );
}
