import React from "react";
import clsx from "clsx";
const variants = {
  primary: " focus:border-custom-600  ",
  success: "focus:border-teal-400 focus:ring-teal-400",
  danger: "border-red-400 focus:border-red-400 focus:ring-red-400 ",
  warning: "focus:border-amber-400 focus:ring-amber-400",
};
export default function Input({variant='primary', className, ...props}) {
  return (
    <input
      className={clsx(
        "border py-2 text-xs px-3 outline-none rounded-sm bg-transparent ",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
