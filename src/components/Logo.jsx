import React from 'react'
import clsx from 'clsx'
import { Text } from './components';
import logo from "../assets/logo/logo.svg";
export default function Logo({variant, className = "w-12"}) {
  return (
    <div className="flex items-center gap-2 ">
        <img src={logo} className={`${className}`} alt="" />
        <Text className={`text-lg`} variant={variant}>Laravel</Text>
      </div>
  )
}
