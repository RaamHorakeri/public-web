import Link from "next/link";
import React from "react";

const Button = ({ href, className, text }) => {
  return (
    <Link
      href={href}
      className={`font-bold text-xs flex justify-center items-center leading-[21.82px] rounded-lg border-[2px] py-3 px-8 ${className}`}
    >
      {text}
    </Link>
  );
};

export default Button;
