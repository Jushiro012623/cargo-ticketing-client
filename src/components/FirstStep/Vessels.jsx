import React, { useState } from "react";
import isActive from "../../hooks/isActive";
import { StepHeader, Text } from "../components";
import { StepForm as StepFormProvider} from "../../pages/Home";
import { SyncLoader   } from "react-spinners";
import { getData as GET_VESSEL } from "../../api/routes";
const VesselContainer = ({}) => {
  const { vessel} = React.useContext(StepFormProvider);

  const [stateVesselType, setStateVesselType] = vessel;
  const [loading, setLoading] = useState();
  const [vesselData, setVesselData] = useState([]);

  React.useEffect(() => {
    GET_VESSEL(`${process.env.API_URL}/vessel`, setVesselData, setLoading)
  },[])

  return (
    <>
      <StepHeader data={{step:"1", title:"Choosing the Best Choices", subtitle:"Discover the Best Options for Your Trip"}}/>
      {loading ? <div className=" mt-5 h-[166px] flex items-center justify-center"><SyncLoader   className="animate-show" color="#1D9BFF"/></div> :
      <>
        <Text variant="p" className={`mt-5 font-medium animate-appear`}>Select Vessel Type</Text>
        <div className="flex justify-between gap-5 mt-5">
          {vesselData.map((vessel) => (
            <div key={vessel.id}
            className={`${isActive(stateVesselType, vessel.attributes.name)} animate-appear w-60 py-10 rounded-sm flex items-center justify-center flex-col cursor-pointer`}
            onClick={()=>{stateVesselType === vessel.attributes.name ? setStateVesselType(null) : setStateVesselType(vessel.attributes.name); }}
            >
              <Text className={`uppercase text-md `}>{vessel.attributes.name}</Text>
              <Text variant="fadeLabel" className={`text-xs text-custom-600`}>
                {vessel.attributes.description}
              </Text>
            </div>
          ))}
        </div>
      </>}
    </>
  );
};
export default VesselContainer;
