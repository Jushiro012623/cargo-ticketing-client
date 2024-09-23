import React, { useState } from "react";
import { Input, Text } from "../components";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import isActive from "../../hooks/isActive";
import { VesselRouteContext } from "../../pages/Home";
export default function Passenger({first, last}) {
    const {firstname, lastname, userDiscount, userAddons} = React.useContext(VesselRouteContext);
    const [discountVisibility, setDiscountVisibility] = useState(false);
    const [addonsVisibility, setAddonsVisibility] = useState(false);
    const [addonsValue, setAddonsValue] = userAddons;
    const [discountValue, setDiscountValue] = userDiscount;
    const [color, setColor] = useState()
    const [fname, setFname] = firstname
    const [lname, setLname] = lastname
  return (
    <>
      <Text variant="p" className={`mt-5 font-medium capitalize`}>
        Fill-up Information
      </Text>
      <div
        className={`relative mt-4 select-none text-sm w-full text-center h-auto rounded-sm flex gap-4 flex-wrap`}> 
        <div className="w-full flex gap-4">
            <Input className={`h-12 grow outline-none ${fname !== '' ? 'ring-1 ring-custom-600 shadow-md' : ''}`} value={first} placeholder="First Name" name="fname" onChange={(e)=>{setFname(e.target.value)}}/>
            <Input className={`h-12 grow outline-none ${lname !== '' ? 'ring-1 ring-custom-600 shadow-md' : ''}`} value={last} placeholder="Last Name" name="lname" onChange={(e) => {setLname(e.target.value)}}/>
        </div>
        <div className={`h-12 w-1/2 grow broder cursor-pointer relative ${color} ${discountValue !== 'Select Discount' ? `ring-1 ring-custom-600 shadow-md before:absolute relative before:content-link before:animate-show before:flex before:items-center before:justify-center before:pt-1 before:w-4 before:h-4 before:bg-white before:rounded-full before:bottom-1 before:right-1 before:translate-x-1/2 a before:translate-y-1/2` : ''}`}>
            <Text className={`h-12 text-xs tracking-wide py-3 border flex justify-between items-center px-3 mb-1 `} onClick={() => { setDiscountVisibility(!discountVisibility); discountValue !== 'Select Discount' ? setColor('before:hidden') :  setColor('before:flex')}}>
                {discountValue} <FaChevronDown size="12" />
            </Text>
            <div className="absolute w-full bg-white h-auto z-10 grow shadow-md ">
                <div className={` ${ !discountVisibility ? "hidden" : "flex flex-col" }`}>
                    <DiscountText text={`Regular`} discountValue={discountValue} onClick={() => {setColor('before:flex'); setDiscountValue("Regular"); setDiscountVisibility(false);}}/>
                    <DiscountText text={`Senior/PWD`} discountValue={discountValue} onClick={() => {setColor('before:flex'); setDiscountValue("Senior/PWD"); setDiscountVisibility(false);}}/>
                    <DiscountText text={`Student`} discountValue={discountValue} onClick={() => {setColor('before:flex'); setDiscountValue("Student"); setDiscountVisibility(false);}}/>
                    <DiscountText text={`Minor`} discountValue={discountValue} onClick={() => {setColor('before:flex'); setDiscountValue("Minor"); setDiscountVisibility(false);}}/>
                    <DiscountText text={`Half-Fare`} discountValue={discountValue} onClick={() => {setColor('before:flex'); setDiscountValue("Half-Fare"); setDiscountVisibility(false);}}/>
                </div>
            </div>
        </div>
        <div className={`h-12 w-full items-center justify-center flex gap-4 grow broder cursor-pointer relative`}>
          <Text
              onClick={()=>{addonsValue === 'Add Ons' ? setAddonsValue(null) : setAddonsValue('Add Ons'); }}
              variant="buttonText"
              className={`${isActive(addonsValue, "Add Ons")}h-full flex items-center justify-center w-full  text-xs`}>
              {" "} Add Ons {" "}
            </Text> 
            <Text
              onClick={()=>{addonsValue === 'No Add Ons' ? setAddonsValue(null) : setAddonsValue('No Add Ons'); }}
              variant="buttonText"
              className={`${isActive(addonsValue, "No Add Ons")}h-full flex items-center justify-center w-full text-xs`}>
              {" "} No Add Ons {" "}
            </Text> 
        </div>
      </div>
    </>
  );
}

const DiscountText = ({ discountValue, text, onClick }) => {
  return (
    <Text
      className={`relative h-10 text-sm py-3 hover:ring-1 select-none${
        discountValue === text ? "ring-custom-600 ring-1" : ""
      }`}
      onClick={onClick}>
      {text} { discountValue === text ? <FaCheck className="absolute right-5 text-custom-600 top-1/2 -translate-y-1/2"/> : ""}
    </Text>
  );
};
