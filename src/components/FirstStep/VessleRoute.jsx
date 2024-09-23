import React, { useContext, useEffect, useState } from "react";
import { Container, Text } from "../components";
import isActive from "../../hooks/isActive";
import axios from "axios";
import { BarLoader } from "react-spinners";
import { VesselRouteContext } from "../../pages/Home";
import { FaExclamationCircle } from "react-icons/fa";
import Select from "react-select";
const VesselRoutesContainer = ({}) => {
  const { stateOrigin, stateDestination, type, route } =
    React.useContext(VesselRouteContext);
  const [loading, setLoading] = useState();
  const [data, setData] = useState([]);
  const [stateType, setStateType] = type;
  const [stateRoute, setStateRoute] = route;
  const [origin, setOrigin] = stateOrigin;
  const [destination, setDestination] = stateDestination;

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        await axios
          .get(
            `${process.env.API_URL}/api/routes`,
            { params: { transportation_type: type } },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
              },
            }
          )
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        console.log(data);
      }
    };
    fetchData();
  }, [stateType]);

  const routeSetter = (route) => {
    if(stateRoute === route.id){
      setStateRoute(null);
      setOrigin(null);
      setDestination(null);
    }else{
      setStateRoute(route.id);
      setOrigin(`${route.origin}`);
      setDestination(`${route.destination}`);
    }

  };
  return (
    <>
      <div className={`w-full mt-5 flex flex-col ${stateType ==  undefined ? 'h-48' : 'h-[16.3rem]  transition-height duration-500' } `}>
        {console.log(stateType)
        }
        <div>
          <Text variant="p">Select Transit Type</Text>
          <div className="flex gap-5 mt-5 ">
            <Text
              onClick={()=>{stateType === 'In' ? setStateType(null) : setStateType('In'); }}
              // onClick={() => { setStateType("in");  }}
              variant="buttonText"
              className={`${isActive(stateType, "In")} w-full text-center text-sm`}>
              {" "} In {" "}
            </Text>
            <Text
              onClick={()=>{stateType === 'Out' ? setStateType(null) : setStateType('Out'); }}
              // onClick={() => { setStateType("out"); }}
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
          <Text variant="p">Available Routes</Text>
          {loading ? (
            <BarLoader color="#0284C7" />
          ) : (
            <div className="grid grid-cols-3 gap-4 animate-appear ">
              {data.map((route, index) => (
                <Container
                  onClick={() => { routeSetter(route) }}

                  key={index}
                  variant="yCenter"
                  className={`${isActive(stateRoute, route.id)} text-sm mt-5 w-full gap-3 cursor-pointer justify-center rounded-sm py-3`}>
                  <Text
                    className={`capitalize text-center`}
                    variant={ route.transportation_type == "out" ? "danger" : "success" }>
                    {" "}
                    {route.transportation_type}
                    {" "}
                  </Text>
                  <Text> {route.origin} - {route.destination} </Text>
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
