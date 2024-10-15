"use client";
import React, { useState, useEffect } from "react";
import { getTags, postQuestion } from "@/api/community";
import Cookies from "js-cookie";
import Spinner from "@/components/spinner";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const QuilEditor = dynamic(
  () => import("@/app/community/_components/QuillEditor/QuilEditor"),
  { ssr: false },
);

export default function AskQuestion() {
  const access_token = Cookies.get("access_token");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [dropdown, setDropdown] = useState(false);
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

  const handleSelectChange = (id) => {
    const _id = parseInt(id, 10);
    onClickTagHandler(_id);
    setDropdown(false);
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
      router.push("/login?redirect=community/askQuestion");
    }
    if (access_token !== undefined && validateForm()) {
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
          <QuilEditor value={value} setValue={setValue} className="h-[140px]" />
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

          <div
            className="w-full bg-[#F2F1F2] mt-2 rounded-md p-3 flex items-center justify-between cursor-pointer"
            onClick={() =>
              access_token === undefined ? null : setDropdown((prev) => !prev)
            }
          >
            <span>select</span>
            <span className="material-symbols-outlined">
              {dropdown ? "arrow_drop_up" : "arrow_drop_down"}
            </span>
          </div>

          {dropdown && (
            <div className="w-full bg-white rounded-md  absolute flex flex-col mt-1">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="hover:bg-[#E3E8F4] p-2 w-[50%] cursor-pointer"
                  onClick={() => {
                    handleSelectChange(tag.id);
                  }}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          )}

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
