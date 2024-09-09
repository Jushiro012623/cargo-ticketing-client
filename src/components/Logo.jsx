import React from 'react'
import clsx from 'clsx'
import { Text } from './components';
import logo from "../assets/logo/logo.svg";
export default function Logo({variant, className = "w-12"}) {
  return (
    <div className="flex items-center gap-2 text-2xl">
        <img src={logo} className={`${className}`} alt="" />
        <Text variant={variant}>Laravel</Text>
      </div>
  )
}
