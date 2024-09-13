import React, { useContext, useEffect, useState } from "react";
import { Container, Text } from "../components";
import isActive from "../../hooks/isActive";
import axios from "axios";
import { BarLoader } from "react-spinners";
import { VesselRouteContext } from "../../pages/Home";

const VesselRoutesContainer = ({}) => {

  
  const { type, route } = React.useContext(VesselRouteContext);

  const [loading, setLoading ] = useState();
  const [data, setData] = useState([]);
  const [stateType, setStateType] = type;
  const [stateRoute, setStateRoute] = route;
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
      <Container className={`w-full flex gap-20 mt-16`}>
        <div>
          <Text variant="info">Select Transit Type</Text>
          <div className="flex gap-5 min-w-56 mt-5">
            <Text onClick={() => { setStateType("in")}} variant="buttonText" className={`${isActive(stateType, "in")}`}> In </Text>
            <Text onClick={() => { setStateType("out") }}  variant="buttonText" className={`${isActive(stateType, "out")}`}> Out </Text>
          </div>
        </div>
        <div className="relative w-full min-h-72 max-h-96">
          <Text variant="info">Available Routes</Text>
          {loading ? 
            ( <BarLoader color="#0284C7" /> ) : ( <VesselRoute routes={data} type={stateRoute} onClick={(id) => { setStateRoute(id) }} /> )}
        </div>
      </Container>
  );
};
const VesselRoute = ({ loading, route, type, routes, onClick, ...props }) => {
  return (
    <>
      {routes.map((route, index) => (
        <Container onClick={() => {onClick(route.id);}} key={index} variant="yCenter" className={`${isActive(type,route.id)} mt-5 border gap-3 hover:border-sky-500 hover:ring-2 hover:ring-sky-500 w-full cursor-pointer px-10 rounded-lg py-3 text-lg`} {...props}>
          <Text className={` capitalize min-w-10 text-center`} variant={route.transportation_type == "out" ? "danger" : "success"}> {route.transportation_type} </Text>
          <Text>{route.origin}</Text> - <Text>{route.destination}</Text>
        </Container>
      ))}
    </>
  );
};
export default VesselRoutesContainer ;
