import React from 'react';
import Image from '../image/image';

const Badge = ({bgColor, textColor, text, icon}) => {
  return (
    <span className={`flex items-center justify-center gap-2 rounded-full ${bgColor} px-5 py-0.5 h-8`}>
          {icon ? (
                  <Image src={icon} alt="Input field icon" className='h-4 w-4' />
          ) : null}
      <p className={`whitespace-nowrap text-sm font-primary ${textColor} `}>{text}</p>
      </span>
  )
}

export default Badge