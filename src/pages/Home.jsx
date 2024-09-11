import React, { useEffect, useState } from "react";
import Navigation from "../layouts/Navigation";
import { Container, Text, Button } from "../components/components";
import { FirstStep, SecondStep } from "../layouts/layouts";
import Stepper from "../components/Stepper";

export default function Home() {
  const steps = [
    "Select Vessel Type",
    "Transaction Type",
    "Review and Confirm",
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [completeStep, setCompleteStep] = useState(false);
  const showStep = (currentStep) => {
    switch (currentStep) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <FirstStep />;
      default:
    }
  };
  return (
    <main className="flex flex-col h-screen w-screen">
      <Navigation />

      <Container
        className={`h-full min-w-[500px]  flex-col pt-20`}
        variant="yCenter">
        <Container className={`min-w-[720px]`}>
          <Text variant="title" className={`text-center`}>Select Your Vessel for the Journey</Text>
          <Text variant="p" className={`tracking-wide text-center mb-10`}>
            Choose a vessel to begin your booking process.
          </Text>
          <Stepper
            steps={steps}
            completeStep={completeStep}
            currentStep={currentStep}
          />
          {showStep(currentStep)}

          {!completeStep && (
            <Button
              className={`mt-20 w-28 text-lg px-10 py-3`}
              variant="borderPrimary"
              onClick={() => {
                currentStep === steps.length
                  ? setCompleteStep(true)
                  : setCurrentStep((prev) => prev + 1);
              }}>
              {currentStep === steps.length ? "Finish" : "Continue"}
            </Button>
          )}
          {currentStep > 1 && !completeStep ? (
            <Button
              className={`mt-20 w-28 text-lg px-10 py-3`}
              variant="borderWarning"
              onClick={() => {
                setCurrentStep((prev) => prev - 1);
              }}>
              {currentStep === 1 ? "Prev" : "Back"}
              {currentStep}
            </Button>
          ) : null}
        </Container>
      </Container>
      {/* <SecondStep /> */}
    </main>
  );
}
