import React from 'react'
import { useContext } from 'react';
import { VesselRouteContext } from '../pages/Home';
import Button from '../components/Button';

const StepButton = ({ steps, vessel, route, type }) => {
    const { stateCurrentStep, stateCompleteStep, stateValidateStep } = React.useContext(VesselRouteContext);

    const [currentStep, setCurrentStep] = stateCurrentStep;
    const [completeStep, setCompleteStep] = stateCompleteStep;
    const [validateStep, setValidateStep] = stateValidateStep;
    
    const handleNext = (event) => {
      event.preventDefault();
      if (currentStep === 1 && (!vessel || !route || !type)) {
        setValidateStep(true);
        console.log(route.id)
        setTimeout(() => {
          setValidateStep(false);
        }, 4000);
        return;
      }
      currentStep === steps.length
        ? setCompleteStep(true)
        : setCurrentStep((prev) => prev + 1);
    };
    return (
      <div className="">
        {!completeStep && (
          <Button
            className={` w-28 text-lg px-10 py-3`}
            variant="primary"
            onClick={handleNext}>
            {currentStep === steps.length ? "Finish" : "Continue"}
          </Button>
        )}
        {currentStep > 1 && !completeStep ? (
          <Button
            className={`w-28 text-lg px-10 py-3`}
            variant="borderWarning"
            onClick={() => {
              setCurrentStep((prev) => prev - 1);
            }}>
            {currentStep === 1 ? "Prev" : "Back"}
            {currentStep}
          </Button>
        ) : null}
      </div>
    );
  };
  

  export default StepButton