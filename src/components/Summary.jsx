import React, { useEffect, useState } from "react";
import { Text, ShipmentTypeSummary } from "./components";
import {
  FaChevronRight,
  FaChevronDown,
  FaSketch,
  FaDiceD20,
} from "react-icons/fa";
import { StepForm } from "../pages/Home";
export default function Summary({
  vessel,
  type,
  origin,
  destination,
  shipType,
  name,
  userDiscount,
  userAddons,
  plate,
  vehicle,
  itemWeight,
}) {
  const [firstStepSummary, setFirstStepSummary] = useState("");
  const [secondStepSummary, setSecondStepSummary] = useState("");
  const { stateCurrentStep } = React.useContext(StepForm);
  const [cStep, setCStep] = stateCurrentStep;
  const rollingDatas = [
    { text: "Weight", val: itemWeight + " KG", id: 1 },
    { text: "Vehicle Type", val: vehicle, id: 2 },
    { text: "Plate Number", val: plate, id: 3 },
  ];
  const passengerDatas = [
    { text: "Type", val: userDiscount, id: 1 },
    { text: "Add Ons", val: userAddons, id: 2 },
  ];
  const dropDatas = [
    { text: "Weight", val: itemWeight + " KG", id: 1 },
    { text: "Items", val: origin, id: 2 },
    { text: "Plate Number", val: plate, id: 3 },
  ];
  //fix the ship type
  useEffect(() => {
    switch (cStep) {
      case 1:
        setSecondStepSummary(false);
        break;
      case 2:
        setSecondStepSummary(true);
        setFirstStepSummary(false);
        break;
      default:
        break;
    }
  }, [cStep]);
  const shippingForm = () => {
    switch (shipType) {
      case "Passenger":
        return <ShipmentTypeSummary title="Discount" datas={passengerDatas} />;
      case "Rolling Cargo":
        return (
          <ShipmentTypeSummary title="Package Info" datas={rollingDatas} />
        );
      case "Drop Cargo":
        return <ShipmentTypeSummary title="Package Info" datas={dropDatas} />;

      default:
        return;
    }
  };
  const stepSecond = [
    {
      summaryNames: "My Info",
      values: [
        { summaryCateg: "Name", summaryCategValue: name },
        { summaryCateg: "Email", summaryCategValue: destination },
      ],
    },
    {
      summaryNames: "Transaction Info",
      values: [{ summaryCateg: "Type", summaryCategValue: shipType }],
    },
  ];
  const stepFirst = [
    {
      summaryNames: "Vessel",
      values: [
        { summaryCateg: "Ship Name", summaryCategValue: vessel },
        { summaryCateg: "Transit Type", summaryCategValue: type },
      ],
    },
    {
      summaryNames: "Route",
      values: [
        { summaryCateg: "Origin", summaryCategValue: origin },
        { summaryCateg: "Destination", summaryCategValue: destination },
      ],
    },
  ];
  return (
    <div className="relative translate-y-[6.4rem] rounded-sm shadow-lg border w-96 ml-5 py-7 px-10 pb-10">
      <div className="">
        <Text variant="subtitle" className={``}>
          Summary
        </Text>
      </div>
      <SummaryPartition
        onClick={() => {
          setFirstStepSummary(!firstStepSummary);
          setSecondStepSummary(false);
        }}
        data={{
          icons: <FaSketch />,
          stepsElements: stepFirst,
          steps: firstStepSummary,
          stepName: "Vessel/Route",
          shippingForm: shippingForm(),
          height: "h-[16.5rem]",
        }}
      />
      <SummaryPartition
        onClick={() => {
          setSecondStepSummary(!secondStepSummary);
          setFirstStepSummary(false);
        }}
        data={{
          icons: <FaDiceD20 />,
          stepsElements: stepSecond,
          steps: secondStepSummary,
          stepName: "Transaction",
          shippingForm: shippingForm(),
          secondStepSummary: secondStepSummary,
          height: shipType  ? "h-[22.5rem]" : "h-[14.5rem]",
        }}
      />
    </div>
  );
}
const SummaryPartition = ({ data, ...props }) => {
  const {
    icons,
    secondStepSummary,
    stepsElements,
    steps,
    stepName,
    shippingForm,
    height,
  } = data;
  return (
    <div
      className={`hover:shadow-lg relative flex items-start flex-col justify-start mt-5 cursor-pointer rounded-sm border py-4 px-8 overflow-hidden h-10 duration-500 transition-height bg-white ${
        steps ? height : "h-[51px]"
      }`}
      {...props}>
      <Text
        className={`text-sm font-semibold w-full text-custom-900 flex justify-between items-center select-none after:absolute relative after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-[1px] after:border-t after:translate-y-[15px] mb-4`}>
        <span className={`flex gap-2 items-center`}>
          {" "}
          {icons} {stepName}{" "}
        </span>
        <FaChevronDown
          className={`transition-transform ease-in-out ${
            !steps ? "-rotate-90" : "rotate-0"
          } `}
        />
      </Text>
      {stepsElements.map((element, index) => (
        <React.Fragment key={index}>
          <Text
            variant="fadeLabel"
            className={`font-semibold w-full border-b cursor-pointer mt-4`}>
            {element.summaryNames}
          </Text>
          <div className={`w-full animate-appear`}>
            {element.values &&
              element.values.map((value, i) => (
                <Text
                  key={i}
                  className={`flex justify-between text-sm font-medium w-full text-custom-900/70 mt-2 capitalize `}>
                  {value.summaryCateg}:
                  <span className={``}>
                    {value.summaryCategValue ? value.summaryCategValue : "N/A"}
                  </span>
                </Text>
              ))}
          </div>
        </React.Fragment>
      ))}
      {secondStepSummary ? shippingForm : null}
    </div>
  );
};
