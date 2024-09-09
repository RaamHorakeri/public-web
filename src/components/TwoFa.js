import React from "react";
import Input from "./Input";
import { useState } from "react";
import Spinner from "./spinner";

const TwoFA = ({ onSubmitTwoFa }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    const code = e.target.value;
    setCode(code);
    if (error !== "" && code.length === 6) {
      setError("");
    }
  };

  const onSubmitHandler = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    setError("");
    if (code.length !== 6) {
      setError("Code must be exactly 6 characters long.");
    } else {
      setLoading(true);
      try {
        await onSubmitTwoFa(code);
      } catch (error) {
        setError(error.message || "something went wrong");
      }
      setLoading(false);
    }
  };
  return (
    <section className="flex justify-center items-center">
      <div className=" bg-[#F3F3F3] p-[80px] gap-[24px] border border-secondary-100">
        <h1 className="w-[520px] h-[35px] mx-auto font-roboto font-bold text-m leading-[35.2px] text-center text-[#21272A]">
          2-Factor Authentication
        </h1>
        <form className="mt-[40px] flex flex-col items-center gap-1">
          <label className="w-[520px] text-left font-roboto font-medium text-[14px] mb-2 leading-[19.6px] text-[#21272A]">
            Enter 6-digit Code that you recieved in your mail
          </label>

          <Input type="text" value={code} onChange={onChangeHandler} />
          {error && (
            <p className="text-red-600 text-[12px] mt-1 w-[520px] text-left">
              {error}
            </p>
          )}
          <div className="w-[520px] flex justify-end items-center ">
            <p className="font-roboto text-[14px] text-primary">5:05 min</p>
          </div>

          <button
            onClick={onSubmitHandler}
            className="w-[520px] h-[48px] bg-primary text-secondary-100 font-medium text-xs leading-[16px] "
          >
            {loading ? <Spinner /> : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default TwoFA;
