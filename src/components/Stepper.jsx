import React, { useState } from "react";
import Container from "./Container";
import { Text, Button } from "./components";

export default function Stepper({steps, currentStep, completeStep}) {
  return (
    <Container variant="flexCenter" className={`flex flex-col h-32`}>
      <Container className="flex w-full">
        
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step-item w-full relative flex flex-col items-center ${
            currentStep === index + 1 && "active"
          } ${(index + 1 < currentStep || completeStep) && "complete"} `}>
          <div className={`step  text-white `}>
            {index + 1 < currentStep || completeStep ? "C" : index + 1}{" "}
          </div>
          <Text className={`step-desc`}>{step}</Text>
        </div>
      ))}
      </Container>
    </Container>
  );
}
