import clsx from "clsx";
import React from "react";
const variants = {
  default: "",
  title: "text-3xl font-medium tracking-wide",
  subtitle: "text-xl font-semibold tracking-tight",
  p: "text-md",
  info: "text-sky-600",
  detail: "text-sm tracking-wide ",
  note: "text-sm tracking-wide italic",
  danger: "text-red-500",
  success: "text-teal-500",
  text:'text-lg',
  lg: 'text-5xl',
  buttonText: 'border hover:border-sky-500 hover:ring-2 hover:ring-sky-500 cursor-pointer px-10 rounded-lg py-3 text-lg'
};
export default function Text({ variant = 'default', className, ...props }) {
  return <h1 className={clsx(variants[variant], className)} {...props} />;
}
