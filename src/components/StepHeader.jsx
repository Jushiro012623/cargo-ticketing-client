import React from "react";
import Text from "./Text";
export default function StepHeader({data}) {
  const { step ,title, subtitle} = data
  return (
    <div className="border-b pb-5">
      <Text variant="subtitle" className={`text-[16px] mb-2`}>
        <span className="text-custom-600">Step {step}:</span> {title}
      </Text>
      <Text variant="fadeLabel">{subtitle}</Text>
    </div>
  );
}
