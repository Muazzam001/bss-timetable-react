import React from 'react';
import Image from '../image/image';

const Processing = ({image, label, border, btnColor, children}) => {
    return (
        <div
            className={`flex flex-col items-center w-[600px] ${border ? "border border-gray-dark1 rounded-lg" : ""} p-5`}>
            <Image src={image} alt="processing image" className="w-3/5"/>
            <span
                className={`${btnColor} text-white py-3.5 px-5 rounded-xl font-primary font-semibold text-sm w-full text-center`}>{label}</span>
            <div className='flex gap-5 mt-10'>
                {children}
            </div>
        </div>
    )
}

export default Processing
