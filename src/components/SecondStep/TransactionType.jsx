import React from "react";
import { car, boat, ship } from "../../assets/svg/svg";
import { StepHeader, Text } from "../components";
import isActive from "../../hooks/isActive";
import VesselContainer from "../FirstStep/Vessels";
import { StepForm } from "../../pages/Home";
import { GiAtomicSlashes } from "react-icons/gi";
export default function TransactionType({}) {
  const {
    shipType,
    firstname,
    lastname,
    userDiscount,
    userAddons,
    plateNumber,
    vehicleNumber,
    w,
  } = React.useContext(StepForm);
  
  const [fname, setFname] = firstname
  const [lname, setLname] = lastname
  const [vehicle, setVehicle] = vehicleNumber
  const [platenumber, setPlatenumber] = plateNumber
  const [discount, setDiscount] = userDiscount
  const [addons, setAddons] = userAddons
  const [weight, setWeight] =  w

  const [stateShipType, setStateShipType] = shipType;
  const resetData= () =>{
    setFname('')
    setLname('')
    setVehicle('')
    setPlatenumber('')
    setDiscount('Select Discount')
    setAddons('')
    setWeight('')

  }
  const passengerTypes = [
    { icon: <GiAtomicSlashes />, label: "Rolling Cargo" },
    { icon: <GiAtomicSlashes />, label: "Passenger" },
    { icon: <GiAtomicSlashes />, label: "Drop Cargo" },
  ];
  return (
    <>
      <StepHeader
        data={{
          step: "2",
          title: "Picking Your Transaction.",
          subtitle: "Fill up the Neccesary Details for Your Journey.",
        }}
      />
      <Text variant="p" className={`mt-5 font-medium capitalize`}>
        Select your transaction type
      </Text>
      <div className="flex gap-12 mt-5 select-none">
        {passengerTypes.map((passenger, index) => (
          <div
            key={index}
            className={`${isActive(
              stateShipType,
              passenger.label
            )} border w-52 py-5 rounded-sm grow flex items-center flex-col justify-center cursor-pointer`}
            onClick={() => {
              stateShipType === passenger.label
                ? setStateShipType(null)
                : setStateShipType(passenger.label);
              resetData()
            }}>
            {/* <img src={passenger.icon} alt="icon" className="w-24" /> */}
            <Text>{passenger.label}</Text>
          </div>
        ))}
      </div>
    </>
  );
}
