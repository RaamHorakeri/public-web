"use client";
import React, { useState, useEffect } from "react";
import { getTags, postQuestion } from "@/api/community";
import Cookies from "js-cookie";
import Spinner from "@/components/spinner";
import { useRouter } from "next/navigation";
import QuilEditor from "@/app/community/_components/QuillEditor/QuilEditor";

export default function AskQuestion() {
  const access_token = Cookies.get("access_token");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const getTagsHandler = async () => {
    const tags = await getTags();
    if (tags.error) {
      throw new Error("Failed to fetch tags");
    }
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

    if (!title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!value.trim()) {
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
    if (access_token === undefined) {
      router.push("/login");
    }
    if (validateForm()) {
      const formData = {
        title: title,
        body: value,
        tags: selectedOptions.map((item) => item.id),
      };

      try {
        setLoading(true);
        const res = await postQuestion(formData);
        if (res.ok) {
          router.push("/community/featuredQuestions");
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.error("An error occurred. Please try again later.");

        throw new Error(error.message || "something went wrong");
      }
    }
  };

  return (
    <>
      <div className="p-20 mx-[20%]">
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
          className="h-[60px] bg-[#E8E8E8] w-full rounded-md outline-none p-2"
          disabled={access_token !== undefined ? false : true}
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
        {errors.title && (
          <p className="text-[#E74C3C] font-roboto font-normal text-xs pl-3">
            *{errors.title}
          </p>
        )}
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
          <QuilEditor value={value} setValue={setValue} />
        </div>
        {errors.body && (
          <p className="text-[#E74C3C] font-roboto font-normal text-xs pl-3">
            *{errors.body}
          </p>
        )}
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
            disabled={access_token !== undefined ? false : true}
          >
            <option>select</option>
            {tags?.map((tag, index) => (
              <option key={index} value={tag.id}>
                {tag.name}
              </option>
            ))}
          </select>
          {errors.tags && (
            <p className="text-[#E74C3C] font-roboto font-normal text-xs pl-3">
              *{errors.tags}
            </p>
          )}
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

          <button
            className="font-[400] text-[14px] border border-black p-3 min-w-[150px]"
            onClick={onsubmitHandler}
          >
            {loading ? (
              <Spinner />
            ) : access_token !== undefined ? (
              "Post the Question"
            ) : (
              "Login to Post the Question"
            )}
          </button>
        </div>
      </div>
    </>
  );
}
