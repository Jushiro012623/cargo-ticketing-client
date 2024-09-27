import clsx from "clsx";
import React from "react";
const variants = {
  default: "",
  small: 'text-xs',
  title: "text-2xl font-medium tracking-wide",
  subtitle: "text-xl font-medium tracking-normal",
  p: "text-md font-medium",
  info: "text-custom-600 text-[16px] text-center",
  infoSmall: "text-custom-600 text-xs",
  detail: "text-sm ",
  note: "text-sm tracking-wide italic",
  danger: "text-dark-error",
  success: "text-accent-mint",
  text:'text-lg',
  fadeLabel:'text-sm text-fade-darker',
  lg: 'text-5xl',
  buttonText: 'cursor-pointer px-[2.3rem] rounded-sm py-3'
};
export default function Text({ variant = 'default', className, ...props }) {
  return <h1 className={clsx(variants[variant], className)} {...props} />;
}
