import React from "react"

export default function isActive (type, setType){
  let style = `border relative` 
  let addedstyle
    if(type == setType){
      addedstyle = ` border-custom-600 shadow-lg before:absolute before:content-link before:animate-show before:flex before:items-center before:justify-center before:pt-1 before:w-4 before:h-4  before:bg-white before:rounded-full before:bottom-1 before:right-1 before:translate-x-1/2 a before:translate-y-1/2`
    }else{
      addedstyle = '   transition-color duration-300 linear hover:shadow-lg hover:border-custom-600 '
    }
    return `${style} ${addedstyle}`
  }