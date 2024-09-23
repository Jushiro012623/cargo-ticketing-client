import React from "react";
import { car, boat, ship } from "../../assets/svg/svg";
import { StepHeader, Text } from "../components";
import isActive from "../../hooks/isActive";
import VesselContainer from "../FirstStep/Vessels";
import { VesselRouteContext } from "../../pages/Home";
import { GiAtomicSlashes } from "react-icons/gi";
export default function TransactionType({}) {
  const { shipType } = React.useContext(VesselRouteContext);
  const [stateShipType, setStateShipType] = shipType;

  const passengerTypes = [
    { icon: <GiAtomicSlashes />, label: "Rolling Cargo" },
    { icon: <GiAtomicSlashes />, label: "Passenger" },
    { icon: <GiAtomicSlashes />, label: "Drop Cargo" },
  ]
  return (
    <>
        <StepHeader data={{step:"2", title:"Picking Your Transaction.", subtitle:"Fill up the Neccesary Details for Your Journey."}}/>
        <Text variant="p" className={`mt-5 font-medium capitalize`}>
            Select your transaction type
        </Text>
        <div className="flex gap-12 mt-5 select-none">
        {passengerTypes.map((passenger, index) => (
            <div key={index} 
            className={`${isActive(stateShipType, passenger.label)} border w-52 py-5 rounded-sm grow flex items-center flex-col justify-center cursor-pointer`}
            onClick={() => {stateShipType === passenger.label ? setStateShipType(null) : setStateShipType(passenger.label)}}>
                {/* <img src={passenger.icon} alt="icon" className="w-24" /> */}
                <Text>{passenger.label}</Text>
            </div>
        ))}
        </div>
    </>
  );
}
