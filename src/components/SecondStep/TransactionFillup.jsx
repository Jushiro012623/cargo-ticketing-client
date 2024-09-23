import React from "react";
import { Passenger } from "./components";
import { VesselRouteContext } from "../../pages/Home";
export default function TransactionFillup({ shipType, first, last}) {
  const whatFillupReturn = () => {
    switch (shipType) {
      case "Passenger":
        return <Passenger first={first} last={last}/>;
      case "departure":
        return "Departure fillup";
      default:
        return "Unknown fillup type";
    }
  };
  return <>{whatFillupReturn()}</>;
}
