import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-6 h-6 border-[3px] border-[#f3f3f3] border-t-black rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
