import React from "react";
import { car, boat, ship } from "../../assets/svg/svg";
import { Text } from "../components";
import isActive from "../../hooks/isActive";
import VesselContainer from "../FirstStep/Vessels";
import { VesselRouteContext } from "../../pages/Home";

export default function TransactionType({}) {
  const { shipType } = React.useContext(VesselRouteContext);
  const [stateShipType, setStateShipType] = shipType;

  const passengerTypes = [
    { icon: ship, label: "Rolling Cargo" },
    { icon: boat, label: "Passenger" },
    { icon: ship, label: "Drop Cargo" },
  ]
  return (
    <>
        <Text variant="info" >
            Please select the type of transaction you wish to proceed with
        </Text>
        <div className="flex gap-12 mt-10">
        {passengerTypes.map((passenger, index) => (
            <div key={index} 
            className={`${isActive(stateShipType, passenger.label)} border-gray-400 hover:border-sky-500 hover:ring-2 hover:ring-sky-500 w-52 py-5 rounded-xl flex items-center flex-col justify-center cursor-pointer`}
            onClick={() => {stateShipType === passenger.label ? setStateShipType(null) : setStateShipType(passenger.label)}}>
                <img src={passenger.icon} alt="icon" className="w-24" />
                <Text variant="infoSmall">{passenger.label}</Text>
            </div>
        ))}
        </div>
    </>
  );
}
