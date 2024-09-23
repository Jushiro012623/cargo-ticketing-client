import React, { useContext, useEffect, useState } from "react";
import { Container, Summary } from "../components/components";
import { FirstStep, SecondStep, Navigation } from "../layouts/layouts";
import Stepper from "../components/Stepper";
import StepButton from "../components/StepButton";
import { ToastContainer } from "react-toastify";
export const VesselRouteContext = React.createContext();
export default function Home() {
  const steps = ["Route", "Details", "Complete"];
  const [currentStep, setCurrentStep] = useState(1);
  const [completeStep, setCompleteStep] = useState(false);

  const [shipType, setShipType] = useState('');
  const [type, setType] = useState('');
  const [vessel, setVessel] = useState('');
  const [route, setRoute] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [discount, setDiscount] = useState("Select Discount");
  const [fullname, setFullname] = useState("");
  const [addons, setAddons] = useState("");

  useEffect(() => {
    setFullname(fname + " " + lname);
    console.log(shipType);
  }, [fname, lname]);
  const showStep = (currentStep) => {
    switch (currentStep) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep shipType={shipType} first={fname} last={lname} />;
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
        shipType: [shipType, setShipType],
        stateOrigin: [origin, setOrigin],
        stateDestination: [destination, setDestination],
        firstname: [fname, setFname],
        lastname: [lname, setLname],
        userDiscount: [discount, setDiscount],
        userAddons: [addons, setAddons],
      }}>
      <main>
        <Navigation />
        <Container className={`h-full min-w-[500px] gap-5`} variant="xCenter">
          <Container>
            <Stepper
              steps={steps}
              completeStep={completeStep}
              currentStep={currentStep}
            />
            <div className="gap-4 p-10 border rounded-md shadow-lg relative w-[847px]">
              {showStep(currentStep)}
              <StepButton
                steps={steps}
                vessel={vessel}
                route={route}
                type={type}
              />
            </div>
          </Container>
          <div className="h-auto">
            <Summary
              type={type}
              vessel={vessel}
              destination={destination}
              origin={origin}
              shipType={shipType}
              name={fullname}
              userDiscount={discount == "Select Discout" ? "" : discount}
              userAddons={addons}
            />
          </div>
        </Container>
      </main>
    </VesselRouteContext.Provider>
  );
}
