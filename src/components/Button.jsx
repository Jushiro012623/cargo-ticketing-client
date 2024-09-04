import React from "react";
import clsx from "clsx";

const variants = {
  primary: "bg-sky-600 hover:bg-sky-700",
  secondary: "bg-gray-600 hover:bg-gray-700",
  success: "bg-teal-600 hover:bg-teal-700",
  danger: "bg-red-600 hover:bg-red-700",
  warning: "bg-yellow-600 hover:bg-yellow-700",
  info: "bg-cyan-600 hover:bg-cyan-700",
  violet: "bg-indigo-600 hover:bg-indigo-700",
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
        "outline-none text-white py-2 px-4 rounded-lg",
        variants[variant],
        className
      )}
      type={type}
      {...props}
    />
  );
}
