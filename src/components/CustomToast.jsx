import clsx from "clsx";
import React from "react";
// Please complete the form the proceed
export default function CustomToast({className, variant, message }) {
  const variants = {
    danger: "bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white ",
    success: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white ",
  };
  return (
    <div className="fixed right-0 z-50 ">
      <div
        className={clsx(
          `toast relative overflow-hidden before:content-[attr(before)] before::bg-red-800 min-w-40 px-9 py-6 rounded-lg  flex items-center justify-center`,
          variants[variant],
          className
        )}>
        {message}
      </div>
    </div>
  );
}
