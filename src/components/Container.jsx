import React from 'react'
import clsx from 'clsx'
const variants = {
  flexCenter: 'flex justify-center items-center',
  xCenter: 'flex justify-center',
  yCenter: 'flex items-center',
  absoluteCenter: 'absolute top-1/2 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2',
  topNav: ' flex items-center justify-between',
  sideNav: ' flex flex-col',
}
export default function Container({variant = '', className, ...props}) {
  return (
    <div className={clsx(
      '',
      variants[variant],
      className
    )} {...props}/>
  )
}
