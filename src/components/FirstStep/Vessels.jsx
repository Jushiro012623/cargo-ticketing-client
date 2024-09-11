import React, { useState } from 'react'
import isActive from '../../hooks/isActive';
import {Text} from '../components';

const VesselContainer = ({vessels,vesselType, onChooseVessel}) => {
    return(
      <div className="flex gap-12 mt-20">
        { vessels.map((vessel, index) => (
          <Vessel vessel={vessel.name} key={index} desc={vessel.desc} onClick={()=>{onChooseVessel(vessel.name)}} className={isActive(vesselType, vessel.name )} />
        ))}
      </div>
    )
  }
  const Vessel = ({className, vessel, desc, ...props }) => {
    return (
      <div className={`${className} border  hover:border-sky-500 hover:ring-2 hover:ring-sky-500 w-72 py-5 rounded-xl flex items-center flex-col justify-center cursor-pointer`} {...props} >
          <Text className={`uppercase text-lg mb-2`}>{vessel}</Text>
          <Text variant='detail' className={`text-sky-500`}>{desc}</Text>
      </div>
    )
  }

export default VesselContainer
  
