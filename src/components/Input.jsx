import React from "react";
import clsx from "clsx";
const variants = {
  primary: "focus:border-sky-600 focus:ring-sky-600 ",
  success: "focus:border-teal-400 focus:ring-teal-400",
  danger: "border-red-400 focus:border-red-400 focus:ring-red-400 ",
  warning: "focus:border-amber-400 focus:ring-amber-400",
};
export default function Input({variant='primary', ...props}) {
  return (
    <input
      className={clsx(
        "border focus:ring-1 py-2 text-xs px-3 outline-none rounded-lg bg-transparent border-gray-800/30 ring-gray-800/30",
        variants[variant]
      )}
      {...props}
    />
  );
}
