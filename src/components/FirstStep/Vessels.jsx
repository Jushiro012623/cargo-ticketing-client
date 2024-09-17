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
      <Text variant="info" className={`text-[16px] text-center`}>
        Choose a vessel to begin your booking process.
      </Text>
      <div className="flex gap-12 mt-5">
        {vessels.map((vessel, index) => (
          <div key={index}
            className={`${isActive(stateVesselType, vessel.name)} hover:border-primary hover:ring-2 hover:ring-primary w-52 py-8 rounded-xl flex items-center flex-col justify-center cursor-pointer`}
            onClick={() => {setStateVesselType(vessel.name);}}
            >
            <Text className={`uppercase text-sm`}>{vessel.name}</Text>
            <Text variant="detail" className={`text-xs text-primary`}>
              {vessel.desc}
            </Text>
          </div>
        ))}
      </div>
    </>
  );
};
export default VesselContainer;
