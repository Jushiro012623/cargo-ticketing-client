import React from "react";
import { Text } from "./components";
export default function ShipmentTypeSummary({ title, datas }) {
  return (
    <>
      <Text
        variant="fadeLabel"
        className={`font-semibold border-b w-full cursor-pointer mt-4`}>
        {title}
      </Text>
      {datas.map((data, i) => (
        <React.Fragment key={data.id}>
          <Text
            className={`flex justify-between text-sm font-medium w-full text-custom-900/70 mt-2 capitalize`}>
            {data.text}:
            <span>{data.val ? data.val : "N/A"}</span>
          </Text>
        </React.Fragment>
      ))}
    </>
  );
}
