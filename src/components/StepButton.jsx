import React from 'react'
import { StepForm } from '../pages/Home';
import Button from './Button';
import { FaArrowRight } from "react-icons/fa";
const StepButton = ({ steps, vessel, route, type }) => {
    const { stateCurrentStep, stateCompleteStep } = React.useContext(StepForm);

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
      <div className="mt-5 pt-5 border-t flex justify-between z-20">
        {currentStep > 1 && !completeStep ? (
          <Button
            className={`min-w-20 text-sm px-5 py-3`}
            variant="borderBlack"
            onClick={() => {
              setCurrentStep((prev) => prev - 1);
            }}>
            {currentStep === 1 ? "Prev" : "Back"}
          </Button>
        ) : <div></div>}
        <>
          <Button
          variant='black'
          className={`min-w-20 text-sm px-5 py-3 self-end flex items-center gap-2`}
          onClick={handleNext}>
            {currentStep === steps.length ? "Finish" : "Continue"}
            <FaArrowRight />
          </Button>
      </>
      </div>
    )
};
  

  export default StepButton