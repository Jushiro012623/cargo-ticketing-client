import React from "react";
import Container from "./Container";
import { Text } from "./components";
import { FaCheck   } from "react-icons/fa";
export default function Stepper({ steps, currentStep, completeStep }) {
  return (
    <Container variant="flexCenter" className={`flex relative w-full flex-col h-20 mb-5`}>
      <Container className="flex gap-5  absolute">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-item w-[255px] justify-center relative flex flex-col items-center ${
              currentStep === index + 1 && "active"
            } ${(index + 1 < currentStep || completeStep) && "complete"} `}>
            <div className={`step relative text-sm text-white `}>
              {index + 1 < currentStep || completeStep ? <FaCheck   /> : index + 1}{" "}
            </div>
            <Text className={`step-desc text-xs text-gray-500`}>{step}</Text>
          </div>
        ))}
      </Container>
    </Container>
  );
}
