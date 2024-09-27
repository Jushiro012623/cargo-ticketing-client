import React from "react";
import { PropagateLoader } from "react-spinners";
export default function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
      <PropagateLoader color="#0284C7" />
    </div>
  );
}
