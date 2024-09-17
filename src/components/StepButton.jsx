import React from 'react'
import { VesselRouteContext } from '../pages/Home';
import Button from './Button';

const StepButton = ({ steps, vessel, route, type }) => {
    const { stateCurrentStep, stateCompleteStep } = React.useContext(VesselRouteContext);

    const [currentStep, setCurrentStep] = stateCurrentStep;
    const [completeStep, setCompleteStep] = stateCompleteStep;
    const handleNext = (event) => {
      event.preventDefault();
      if (currentStep === 1 && (!vessel || !route || !type)) {
        // return
      }
      currentStep === steps.length
        ? setCompleteStep(true)
        : setCurrentStep((prev) => prev + 1);
    };
    return (
      <div className="">
        
      {vessel && route && type && (
        <>
          {!completeStep && (
            <Button
            className={`min-w-20 text-sm px-5 py-3`}
            // variant="primary"
            
            onClick={handleNext}>
              {currentStep === steps.length ? "Finish" : "Continue"}
            </Button>
          )}
        </>
      )}
        {currentStep > 1 && !completeStep ? (
          <Button
            className={`min-w-20 text-sm px-5 py-3`}
            variant="borderWarning"
            onClick={() => {
              setCurrentStep((prev) => prev - 1);
            }}>
            {currentStep === 1 ? "Prev" : "Back"}
            {currentStep}
          </Button>
        ) : null}
      </div>
    )
};
  

  export default StepButton