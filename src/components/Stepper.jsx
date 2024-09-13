import React from "react";
import Container from "./Container";
import { Text } from "./components";

export default function Stepper({ steps, currentStep, completeStep }) {
  return (
    <Container variant="flexCenter" className={`flex relative w-full flex-col h-32`}>
      <Container className="flex w-[923px] absolute">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-item w-[450px] justify-center relative flex flex-col items-center ${
              currentStep === index + 1 && "active"
            } ${(index + 1 < currentStep || completeStep) && "complete"} `}>
            <div className={`step relative text-white `}>
              {index + 1 < currentStep || completeStep ? "C" : index + 1}{" "}
            </div>
            <Text className={`step-desc text-gray-400`}>{step}</Text>
          </div>
        ))}
      </Container>
    </Container>
  );
}
