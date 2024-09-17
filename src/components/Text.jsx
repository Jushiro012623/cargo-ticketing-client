import clsx from "clsx";
import React from "react";
const variants = {
  default: "",
  small: 'text-xs',
  title: "text-2xl font-medium tracking-wide",
  subtitle: "text-md font-semibold tracking-tight",
  p: "text-md",
  info: "text-primary text-[16px] text-center",
  infoSmall: "text-primary text-xs",
  detail: "text-sm tracking-wide ",
  note: "text-sm tracking-wide italic",
  danger: "text-dark-error",
  success: "text-accent-mint",
  text:'text-lg',
  lg: 'text-5xl',
  buttonText: 'hover:border-primary hover:ring-2 hover:ring-primary cursor-pointer px-[2.3rem] rounded-lg py-3'
};
export default function Text({ variant = 'default', className, ...props }) {
  return <h1 className={clsx(variants[variant], className)} {...props} />;
}
