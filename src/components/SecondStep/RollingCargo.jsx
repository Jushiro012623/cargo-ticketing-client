import React from 'react'
import {Input} from '../components'
import { StepForm } from '../../pages/Home';
export default function RollingCargo({first, last, vehicleType, plate, itemWeight}) {
  
  const {firstname, lastname, vehicleNumber ,plateNumber, w} = React.useContext(StepForm);
  const [fname, setFname] = firstname
  const [lname, setLname] = lastname
  const [vehicle, setVehicle] = vehicleNumber
  const [platenumber, setPlatenumber] = plateNumber
  const [weight, setWeight] = w

  return (
    <div className={`relative mt-4 select-none text-sm w-full text-center h-auto rounded-sm flex gap-4 flex-wrap opacity-0 animate-longerAppear `}> 
      <div className="w-full flex gap-4 flex-wrap">
          <Input className={`h-12 grow outline-none ${fname !== '' ? 'ring-1 ring-custom-600 shadow-md' : ''}`} value={first} placeholder="First Name" name="fname" onChange={(e)=>{setFname(e.target.value)}}/>
          <Input className={`h-12 grow outline-none ${lname !== '' ? 'ring-1 ring-custom-600 shadow-md' : ''}`} value={last} placeholder="Last Name" name="lname" onChange={(e) => {setLname(e.target.value)}}/>
      </div>
      <div className="w-full flex gap-4 flex-wrap">
          <Input className={`h-12 grow outline-none ${weight !== '' ? 'ring-1 ring-custom-600 shadow-md' : ''}`} value={itemWeight} placeholder="Weight/KG" name="platenumber" onChange={(e)=>{setWeight(e.target.value)}}/>
          <Input className={`h-12 grow outline-none ${platenumber !== '' ? 'ring-1 ring-custom-600 shadow-md' : ''}`} value={plate} placeholder="Plate Number" name="platenumber" onChange={(e)=>{setPlatenumber(e.target.value)}}/>
          <Input className={`h-12 grow outline-none ${vehicle !== '' ? 'ring-1 ring-custom-600 shadow-md' : ''}`} value={vehicleType} placeholder="Vehicle Type" name="vehicle" onChange={(e) => {setVehicle(e.target.value)}}/>
      </div>
      
    </div>
  )
}
