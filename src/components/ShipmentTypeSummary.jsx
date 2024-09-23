import React from 'react'
import {Text} from './components';
export default function ShipmentTypeSummary({title, data}) {
    const { secondText, secondTextValue, thirdText, thirdTextValue } = data;
    return (
        <>
            <Text variant='fadeLabel' className={`font-semibold border-b w-full cursor-pointer mt-4`} >{title}</Text>   
            <Text className={`flex justify-between text-sm font-medium w-full text-custom-900/70 mt-2 capitalize`}>{secondText}:
                <span>{secondTextValue ? secondTextValue : 'N/A'}</span> 
            </Text>
            <Text className={`flex justify-between text-sm font-medium w-full text-custom-900/70 mt-2 capitalize`}>{thirdText}: 
                <span>{thirdTextValue ? thirdTextValue : 'N/A'}</span> 
            </Text>
        </>
      )
}