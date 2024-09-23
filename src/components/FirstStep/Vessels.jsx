import React, { useState } from "react";
import isActive from "../../hooks/isActive";
import { StepHeader, Text } from "../components";
import { VesselRouteContext } from "../../pages/Home";
import { FaCheck } from "react-icons/fa";
const VesselContainer = ({}) => {
  const { vessel } = React.useContext(VesselRouteContext);
  const [stateVesselType, setStateVesselType] = vessel;
  const [currentSelection, setCurrentSelection] = useState()
  const vessels = [
    { name: "Argo 1", desc: "Passenger Ferry" },
    { name: "Argo 2", desc: "Cargo Vessel" },
    { name: "SUDA", desc: "Roll-On/Roll-Off" },
  ];

  const handleSelection = (vessel) => {
    //if true when clicked
    if( stateVesselType === vessel.name){
      setStateVesselType(null);
      setCurrentSelection(false);
    }else{
      setStateVesselType(vessel.name);
      setCurrentSelection(true);
    }
  }
  return (
    <>
      <StepHeader data={{step:"1", title:"Choosing the Best Choices", subtitle:"Discover the Best Options for Your Trip"}}/>
      
      <Text variant="p" className={`mt-5 font-medium`}>Select Vessel Type</Text>
      <div className="flex  gap-5 mt-5">
        {vessels.map((vessel, index) => (
          <div key={index}
            className={`${isActive(stateVesselType, vessel.name)} w-60 py-10 rounded-sm flex items-center justify-center flex-col cursor-pointer`}
            onClick={()=>{stateVesselType === vessel.name ? setStateVesselType(null) : setStateVesselType(vessel.name); }}
            >
            <Text className={`uppercase text-md `}>{vessel.name}</Text>
            <Text variant="fadeLabel" className={`text-xs text-custom-600`}>
              {vessel.desc}
            </Text>
          </div>
        ))}
      </div>
    </>
  );
};
export default VesselContainer;
