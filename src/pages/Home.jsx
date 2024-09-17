import React, { useContext, useEffect, useState } from "react";
import { Container} from "../components/components";
import { FirstStep, SecondStep, Navigation } from "../layouts/layouts";
import Stepper from "../components/Stepper";
import StepButton from "../components/StepButton";
import { ToastContainer } from "react-toastify";
export const VesselRouteContext = React.createContext();
export default function Home() {
  const steps = [
    "Select Vessel Type",
    "Transaction Type",
    "Review and Confirm",
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [completeStep, setCompleteStep] = useState(false);

  const [passengerType, setPassengerType] = useState();
  const [type, setType] = useState();
  const [vessel, setVessel] = useState();
  const [route, setRoute] = useState();
  const [routeName, setRouteName] = useState();

  useEffect(() => {
    console.log("Type", type);
    console.log("route", route);
    console.log("vessel", vessel);
    console.log("passengerTypes", passengerType)
    console.log("route name", routeName)
  }, [route,type,vessel,passengerType]);
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
        passengerType: [passengerType, setPassengerType],
        stateRouteName: [routeName, setRouteName]
    }}>
      <main className="flex flex-col h-screen w-screen">
        <Navigation />
        <Container className={`h-full min-w-[500px] gap-5`} variant="xCenter">
          <Container>
            <Stepper steps={steps} completeStep={completeStep} currentStep={currentStep} /> 
            <div className=" mt-10 gap-4 p-10 bg-neutral/20 relative">
                {showStep(currentStep)}
                {vessel && route && type && (
                  <StepButton steps={steps} vessel={vessel} route={route} type={type} />
                )}  
            </div>
              
          </Container>
        </Container>
        {/* <SecondStep /> */}
      </main>
    </VesselRouteContext.Provider>
  );
}
