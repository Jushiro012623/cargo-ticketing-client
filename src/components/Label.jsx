import clsx from "clsx";
import React from "react";
const variants = {
  default: "",
  danger: "text-red-500",
  success: "text-teal-500",
};
export default function Label({ reference, variant = "default", ...props }) {
  return (
    <label
      htmlFor={reference}
      className={clsx("", variants[variant])}
      {...props}
    />
  );
}
