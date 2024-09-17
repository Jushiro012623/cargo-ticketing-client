import React from "react"

export default function isActive (type, setType){
  let style = `border shadow-md ` 
  let addedstyle
    if(type == setType){
      addedstyle = 'border-primary ring-2 ring-primary'
    }else{
      addedstyle = 'border-slate-500/40'
    }
    return `${style} ${addedstyle}`
  }