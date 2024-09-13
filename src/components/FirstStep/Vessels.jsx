import React from "react";
import isActive from "../../hooks/isActive";
import { Text } from "../components";
import { VesselRouteContext } from "../../pages/Home";

const VesselContainer = ({}) => {
  const { vessel } = React.useContext(VesselRouteContext);
  const [stateVesselType, setStateVesselType] = vessel;
  const vessels = [
    { name: "Argo 1", desc: "Passenger Ferry" },
    { name: "Argo 2", desc: "Cargo Vessel" },
    { name: "SUDA", desc: "Roll-On/Roll-Off" },
  ];
  return (
    <>
    <Text variant="info" className={`text-xl text-center mt-16`}>Choose a vessel to begin your booking process.</Text>
      <div className="flex gap-12 mt-5">
        {vessels.map((vessel, index) => (
          <Vessel
            vessel={vessel.name}
            key={index}
            desc={vessel.desc}
            onClick={() => {
              setStateVesselType(vessel.name);
            }}
            className={isActive(stateVesselType, vessel.name)}
          />
        ))}
      </div>
    </>
  );
};
const Vessel = ({ className, vessel, desc, ...props }) => {
  return (
    <div
      className={`${className} border  hover:border-sky-500 hover:ring-2 hover:ring-sky-500 w-72 py-5 rounded-xl flex items-center flex-col justify-center cursor-pointer`}
      {...props}>
      <Text className={`uppercase text-lg`}>{vessel}</Text>
      <Text variant="detail" className={`text-sky-500`}>
        {desc}
      </Text>
    </div>
  );
};

export default VesselContainer;
