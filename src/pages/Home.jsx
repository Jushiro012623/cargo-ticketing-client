import React, { useContext, useEffect, useState } from "react";
import Navigation from "../layouts/Navigation";
import { Container, Text, Button } from "../components/components";
import { FirstStep, SecondStep } from "../layouts/layouts";
import Stepper from "../components/Stepper";
import CustomToast from "../components/CustomToast";
import StepButton from "../layouts/StepButton";
export const VesselRouteContext = React.createContext();
export default function Home() {
  const steps = [
    "Select Vessel Type",
    "Transaction Type",
    "Review and Confirm",
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [completeStep, setCompleteStep] = useState(false);
  const [validateStep, setValidateStep] = useState();

  const [type, setType] = useState();
  const [vessel, setVessel] = useState();
  const [route, setRoute] = useState();

  useEffect(() => {
    console.log("Type", type);
    console.log("route", route);
    console.log("vessel", vessel);
  }, [route,type,vessel]);
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
    <VesselRouteContext.Provider
      value={{
        vessel: [vessel, setVessel],
        type: [type, setType],
        route: [route, setRoute],
        stateCurrentStep: [currentStep, setCurrentStep],
        stateCompleteStep: [completeStep, setCompleteStep],
        stateValidateStep: [validateStep, setValidateStep],
    }}>
      <main className="flex flex-col h-screen w-screen">
        <Navigation />
        <Container
          className={`h-full min-w-[500px]  flex-col`}
          variant="yCenter">
          <Container className={`min-w-[720px] `}>
            {validateStep && (
              <CustomToast
                className={`${validateStep ? "toast-exit" : ""} `}
                message={`Please complete the form the proceed`}
                variant="danger"
              />
            )}
            <Stepper
              steps={steps}
              completeStep={completeStep}
              currentStep={currentStep}
            />
            
            {showStep(currentStep)}
            <StepButton
              steps={steps}
              vessel={vessel}
              route={route}
              type={type}
            />
          </Container>
        </Container>
        {/* <SecondStep /> */}
      </main>
    </VesselRouteContext.Provider>
  );
}
