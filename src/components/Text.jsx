import clsx from "clsx";
import React from "react";
const variants = {
  default: "",
  title: "text-2xl font-bold tracking-tight",
  subtitle: "text-xl font-semibold tracking-tight",
  p: "text-md",
  info: "text-sky-600",
  note: "text-sm tracking-wide italic",
  danger: "text-red-500",
  success: "text-teal-500",
  text:'text-lg'
};
export default function Text({ variant = 'default', className, ...props }) {
  return <h1 className={clsx(variants[variant], className)} {...props} />;
}
