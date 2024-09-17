import React from "react";
import clsx from "clsx";

export const variants = {
  primary: "bg-primary hover:bg-primary-hover text-white",
  secondary: "bg-gray-600 hover:bg-gray-700 text-white ",
  success: "bg-teal-600 hover:bg-teal-700 text-white ",
  danger: "bg-dark-error hover:bg-red-700 text-white ",
  warning: "bg-yellow-600 hover:bg-yellow-700 text-white ",
  info: "bg-cyan-600 hover:bg-cyan-700 text-white ",
  violet: "bg-indigo-600 hover:bg-indigo-700 text-white ",

  borderPrimary: "border text-primary hover:text-sky-700 border-primary hover:border-sky-700",
  borderDanger: "border text-red-500 hover:text-white border-red-500 hover:bg-red-500",
  borderSuccess: "border text-teal-600 hover:text-teal-700 border-teal-600 hover:border-teal-700",
  borderWarning: "border text-yellow-600 hover:text-yellow-700 border-yellow-600 hover:border-yellow-700",
  borderSecondary: "text-gray-600  hover:bg-gray-300",
};
export default function Button({
  type = "submit",
  className,
  variant = "primary",
  ...props
}) {
  return (
    <button
      className={clsx(
        variants[variant],
        "outline-none py-2 px-3 rounded-lg text-xs",
        className
      )}
      type={type}
      {...props}
    />
  );
}
