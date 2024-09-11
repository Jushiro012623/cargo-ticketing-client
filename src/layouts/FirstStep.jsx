import React, { useEffect, useState } from "react";
import { Container, Text } from "../components/components";
import {
  VesselsContainer,
  RoutesContainer,
} from "../components/FirstStep/components";
import { PropagateLoader } from "react-spinners";
import useCheckAuth from "../hooks/CheckAuth";
import axios from "axios";
export default function FirstStep() {
  const { setLoading, loading } = useCheckAuth();
  const [data, setData] = useState([]);
  const [type, setType] = useState('');
  const [route, setRoute] = useState();
  const [vesselType, setVesselType] = useState();
  const vessels = [
    { name: "Argo 1", desc: "Passenger Ferry" },
    { name: "Argo 2", desc: "Cargo Vessel" },
    { name: "SUDA", desc: "Roll-On/Roll-Off" },
  ];

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        await axios
          .get(
            `${process.env.API_URL}/api/fare`,
            {
              params: {
                transportation_type: type,
              },
            },
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
      }
    };
    fetchData();
  }, [type]);
  return (
    <>
      <Container className={`flex-col`} variant="yCenter">
        
        <VesselsContainer
          vessels={vessels}
          vesselType={vesselType}
          onChooseVessel={(vessel) => [setVesselType(vessel)]}
        />
        <RoutesContainer
          loading={loading}
          type={type}
          route={route}
          data={data}
          onClickIn={() => [setType("in")]}
          onClickOut={() => [setType("out")]}
          onChooseRoute={(id) => [setRoute(id)]}
        />
      </Container>
    </>
  );
}
