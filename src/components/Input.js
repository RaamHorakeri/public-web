import React from "react";

const Input = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  className = "",
  name = "",
  id = "",
  width = "w-[520px]",
  height = "h-[48px]",
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={`p-[12px_16px]  border-b border-gray-400 outline-none ${width} ${height}  ${className}`}
      id={id}
      {...props}
    />
  );
};

export default Input;
