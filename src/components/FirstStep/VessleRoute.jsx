import React, { useContext, useEffect, useState } from "react";
import { Container, Text } from "../components";
import isActive from "../../hooks/isActive";
import axios from "axios";
import { BarLoader } from "react-spinners";
import { VesselRouteContext } from "../../pages/Home";

const VesselRoutesContainer = ({}) => {

  const { stateRouteName, type, route } = React.useContext(VesselRouteContext);
  const [loading, setLoading ] = useState();
  const [data, setData] = useState([]);
  const [stateType, setStateType] = type;
  const [stateRoute, setStateRoute] = route;
  const [routeName, setRouteName] = stateRouteName;
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        await axios.get(`${process.env.API_URL}/api/routes`,
            { params: { transportation_type: type, }, },
            { headers: { Authorization: `Bearer ${ localStorage.getItem("authToken") }`, }, }
          ).then((response) => {
            setData(response.data);
          }).catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        console.log(data)
      }
    };
    fetchData();
  }, [stateType]);

  return (
      <Container className={`w-full flex gap-[3.1rem] mt-10`}>
        <div>
          <Text variant="infoSmall">Select Transit Type</Text>
          <div className="flex gap-5 mt-5 ">
            <Text onClick={() => { setStateType("in")}} variant="buttonText" className={`${isActive(stateType, "in")} text-sm`}> In </Text>
            <Text onClick={() => { setStateType("out") }}  variant="buttonText" className={`${isActive(stateType, "out")} text-sm`}> Out </Text>
          </div>
        </div>
        <div className="relative w-full min-h-72 max-h-96">
          <Text variant="infoSmall">Available Routes</Text>
          {loading ? 
            ( <BarLoader color="#0284C7" /> ) : ( 
            <>
              {data.map((route, index) => (
                <Container onClick={() => {setStateRoute(route.id);setRouteName(`${route.origin} - ${route.destination}`)}} key={index} variant="yCenter" className={`${isActive(stateRoute,route.id)} text-sm mt-5 gap-3 hover:border-primary hover:ring-2 hover:ring-primary w-full cursor-pointer px-10 rounded-lg py-3`}>
                  <Text className={`capitalize min-w-10 text-center`} variant={route.transportation_type == "out" ? "danger" : "success"}> {route.transportation_type} </Text>
                  <Text>{route.origin} - {route.destination}</Text>
                </Container>
              ))}
            </>
            )}
        </div>
      </Container>
  );
};
export default VesselRoutesContainer ;
