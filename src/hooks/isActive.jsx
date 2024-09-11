import React from "react"

export default function isActive (type, setType){
    if(type == setType){
      return 'border-sky-500 ring-2 ring-sky-500'
    }else{
      return 'border-gray-800/40'
    }
  }