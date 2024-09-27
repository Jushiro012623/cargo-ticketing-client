import React from "react";
import { Passenger, RollingCargo } from "./components";
import { StepForm } from "../../pages/Home";
import Text from "../Text";
import { FaExclamationCircle } from "react-icons/fa";
export default function TransactionFillup({ shipType, first, last }) {
  const whatFillupReturn = () => {
    switch (shipType) {
      case "Passenger":
        return <Passenger first={first} last={last} />;
      case "Rolling Cargo":
        return <RollingCargo />
      default:
        return;
    }
  };

  const whatFillupHeights = (shipType) => {
    switch (shipType) {
      case "Passenger":
        return 'h-[14rem]'
      case "Rolling Cargo":
        return 'h-[7.5rem]'
      default:
        return 'h-0'
    }
  }
  return (
    <>
      <div className="w-full h-10 border-yellow-400 bg-yellow-100 border flex items-center px-10 mb-5  mt-4">
        <FaExclamationCircle />
        <p className="text-xs ml-2">
          Note, Please select a transaction type first.
        </p>
      </div>
      <Text variant="p" className={`mt-5 font-medium capitalize`}>
        Fill-up Information
      </Text>
      <div className={`${whatFillupHeights(shipType)} transition-height duration-500 z-10`}>
        {whatFillupReturn()}
      </div>
    </>
  );
}
