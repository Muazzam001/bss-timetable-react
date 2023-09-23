import Image from "../image/image.jsx";

const InputField = (
    {
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
    }
) => {
    return (
        <>
            <div className="relative max-lg:flex-auto flex flex-col gap-1">
                {label ? (
                    <label htmlFor={htmlFor} className="text-sm font-medium leading-6 !text-dark-gray-200 font-primary">
                        {label}
                    </label>
                ) : null}

                {icon ? (
                    <span
                        className="pointer-events-none absolute inset-y-2 rounded-full left-3 h-9 w-9 flex items-center justify-center p-1 bg-blue-light2">
                        <Image src={icon} alt="Input field icon" className='h-5 w-5'/>
                    </span>
                ) : null}

                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    placeholder={placeholder}
                    className={`w-full h-13 inline-block font-primary placeholder:font-primary border-gray-medium hover:outline-0 hover:ring-0 focus:outline-0 focus:ring-0 bg-gray-light sm:text-sm pr-4 py-2 ${rounded ? "rounded-full" : "rounded-lg"} ${disabled ? "cursor-not-allowed placeholder:text-gray-medium" : "hover:border-blue-medium1"} ${icon ? "pl-15" : "pl-4"} ${className}`}
                />

                {error ? (<p className='ml-5 text-red-500 text-xs font-primary'>{error}</p>) : null}
            </div>
        </>
    )
}

export default InputField;