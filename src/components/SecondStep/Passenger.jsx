import React from 'react'

export default function Passenger() {
  return (
    <div>
        <select name="discount" id="discount" className='w-full px-4 py-3 outline-none'>
            <option className='bg-red-300 h-10' value="regular">Regular</option>
            <option value="seniorPwd">Senior/PWD</option>
            <option value="student">Student</option>
            <option value="minor">Minor</option>
            <option value="half-fare">Half-Fare</option>
        </select>
    </div>
  )
}

// Primary Colors: Used for core elements like navigation bars, headers, and hover effects.
// Secondary Colors: These are for elements like buttons and banners that draw attention.
// Accent Colors: Used for background sections and to create visual separation.
// Contrast Colors: Used for states that need high visibility, such as success messages or error notifications.
// Dark Colors: For text, emphasis, or dark backgrounds for high contrast.