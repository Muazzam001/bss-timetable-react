import Image from "../Image";

const Badge = ({bgColor, textColor, text, icon}) => {
    return (
        <div className={`flex items-center justify-center gap-x-2 rounded-full ${bgColor} px-5 py-0.5 h-8`}>
            {icon ? (<Image src={icon} alt="Input field icon" className='h-4 w-4'/>) : null}

            <p className={`whitespace-nowrap text-sm font-primary ${textColor} `}>{text}</p>
        </div>
    )
}

export default Badge;