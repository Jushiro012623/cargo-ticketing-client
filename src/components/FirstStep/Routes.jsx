import { useEffect, useState } from "react";
import { Container, Text } from "../components";
import isActive from "../../hooks/isActive";
import axios from "axios";

import { BarLoader } from "react-spinners";
const RoutesContainer = ({
  loading,
  type,
  data,
  route,
  onClickOut,
  onClickIn,
  onChooseRoute,
  id,
}) => {
  return (
    <Container className={`w-full mt-24 flex gap-20`}>
      <div>
        <Text>Select Transit Type</Text>
        <div className="flex gap-5 mt-5 min-w-56">
          <Text
            onClick={() => {
              onClickIn("in");
            }}
            variant="buttonText"
            className={`${isActive(type, "in")}`}>
            In
          </Text>
          <Text
            onClick={() => {
              onClickOut("out");
            }}
            variant="buttonText"
            className={`${isActive(type, "out")}`}>
            Out
          </Text>
        </div>
      </div>
      <div className="relative w-full min-h-72 max-h-96">
        <Text>Available Routes</Text>
        {loading ? (
          <>
            <div>
              <BarLoader color="#0284C7" />
            </div>
          </>
        ) : (
            <Route
              routes={data}
              type={route}
              onClick={(id) => {onChooseRoute(id);}}
            />
        )}
      </div>
    </Container>
  );
};

const Route = ({ loading, route, type, routes, onClick, ...props }) => {
  return (
    <>
      {routes.map((route, index) => (
        <Container
          onClick={() => {
            onClick(route.id);
          }}
          key={index}
          variant="yCenter"
          className={`${isActive(
            type,
            route.id
          )} border gap-3 hover:border-sky-500 hover:ring-2 hover:ring-sky-500 w-full cursor-pointer mt-5 px-10 rounded-lg py-3 text-lg`}
          {...props}>
          <Text
            className={` capitalize min-w-10 text-center`}
            variant={route.transportation_type == "out" ? "danger" : "success"}>
            {route.transportation_type}
          </Text>
          <Text>{route.origin}</Text> -<Text>{route.destination}</Text>
        </Container>
      ))}
    </>
  );
};
export default RoutesContainer;
