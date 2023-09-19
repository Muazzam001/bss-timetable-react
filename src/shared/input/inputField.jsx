import React from 'react';
import Image from '../image/image';

const InputField = ({
                        icon,
                        type,
                        name,
                        placeholder,
                        className,
                        value,
                        onChange,
                        error,
                        rounded,
                        htmlFor,
                        label,
                        disabled
                    }) => {
    return (
        <>
            {label ? (
                <label htmlFor={htmlFor} className="text-sm font-medium leading-6 !text-dark-gray-200 font-primary">
                    {label}
                </label>
            ) : null}
            
            <div className="relative max-lg:flex-auto">
                {icon ? (
                    <div
                        className="pointer-events-none absolute inset-y-2 rounded-full left-3 h-9 w-9 flex items-center justify-center p-[5px] bg-blue-light2">
                        <Image src={icon} alt="Input field icon" className='h-5 w-5'/>
                    </div>
                ) : null}
                <input
                    type={type}
                    name={name}
                    className={`inline-block font-primary placeholder:font-primary border-gray-medium hover:outline-0 hover:ring-0 focus:outline-0 focus:ring-0 bg-gray-light sm:text-sm pr-4 py-2 ${rounded ? "rounded-full" : "rounded-lg"} ${disabled ? "cursor-not-allowed placeholder:text-gray-medium" : "hover:border-blue-medium1"} ${icon ? "pl-15" : "pl-4"} ${className}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                />
                <p className='ml-5 text-red-500 text-xs font-primary'>{error}</p>
            </div>
        </>
    )
}

export default InputField
