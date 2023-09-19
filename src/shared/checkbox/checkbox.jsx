import React from 'react'

const Checkbox = ({label, checked}) => {

    return (
        <label htmlFor="remember-me" className="flex items-center">
            <div className="border border-blue-medium1 w-5 h-5 rounded cursor-pointer z-50">
                <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="peer hidden"
                    checked={checked}
                />

                <span
                    className="peer-checked:inline-block hidden w-[12px] h-[7px] border-t-2 border-r-2 rotate-[130deg] translate-x-[3px] -translate-y-[6px] border-blue-dark2 cursor-pointer"></span>

            </div>
            {label ? (
                <span
                    className="ml-2 block text-sm text-gray-900 font-primary cursor-pointer">
                    {label}
                </span>
            ) : null}
        </label>

    )
}

export default Checkbox

