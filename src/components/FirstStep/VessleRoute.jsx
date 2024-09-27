import React, { useEffect, useState } from "react";
import { Container, Text } from "../components";
import isActive from "../../hooks/isActive";
import { BarLoader } from "react-spinners";
import { StepForm as StepFormProvider } from "../../pages/Home";
import { FaExclamationCircle } from "react-icons/fa";
import { getData as GET_ROUTES } from "../../api/routes";

const VesselRoutesContainer = ({}) => {
  const { type, route } = React.useContext(StepFormProvider);

  const [loading, setLoading] = useState();
  const [data, setData] = useState([]);
  const [stateType, setStateType] = type;
  const [stateRoute, setStateRoute] = route;

  const param = { transportation_type: type }
  useEffect(() => {
    const fetchRoutes = async () => {
      if (stateType) {
        setLoading(true);
        await GET_ROUTES(`${process.env.API_URL}/routes`, setData, setLoading, param);
      }
    };
    fetchRoutes();
  }, [stateType]);
  return (
    <>
      <div className={`w-full mt-5 flex flex-col ${stateType ==  undefined ? 'h-48' : 'h-[16.3rem]' }   transition-height duration-500 `}>
        <div>
          <Text variant="p">Select Transit Type</Text>
          <div className="flex gap-5 mt-5 ">
            <Text
              onClick={()=>{stateType === 'In' ? setStateType(undefined) : setStateType('In'); setStateRoute(null) }}
              variant="buttonText"
              className={`${isActive(stateType, "In")} w-full text-center text-sm`}>
              {" "} In {" "}
            </Text>
            <Text
              onClick={()=>{stateType === 'Out' ? setStateType(undefined) : setStateType('Out'); setStateRoute(null)}}
              variant="buttonText"
              className={`${isActive(stateType, "Out")} w-full text-center text-sm`}>
              {" "} Out {" "}
            </Text>
          </div>
        </div>
        <div className={`relative w-full min-h-28 mt-5`}>
          <div className="w-full h-10 border-yellow-400 bg-yellow-100 border flex items-center px-10 mb-5">
            <FaExclamationCircle />
            <p className="text-xs ml-2">Note, Please select a transit type before choosing a route.</p>
          </div>
          <Text variant="p">Select Routes</Text>
          {loading ? (
            <BarLoader color="#0284C7" />
          ) : (
            <div className={`grid-cols-3 gap-4 animate-show opacity-0 ${stateType ==  undefined ? 'hidden' : 'grid' } `}>
              {data.map((route, index) => (
                <Container
                  onClick={() => { stateRoute === route ? setStateRoute(null) : setStateRoute(route);   }}
                  key={index}
                  variant="yCenter"
                  className={`${isActive(stateRoute && stateRoute.id, route.id)} text-sm mt-5 w-full gap-3 cursor-pointer justify-center rounded-sm py-3`}>
                  <Text
                    className={`capitalize text-center`}
                    variant={ route.attributes.transportationType == "out" ? "danger" : "success" }>
                    {" "}
                    {route.attributes.transportationType}
                    {" "}
                  </Text>
                  <Text> {route.attributes.routes.origin} - {route.attributes.routes.destination} </Text>
                </Container>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default VesselRoutesContainer;
