import Image from "../../shared/Image";

const Processing = ({processClass,image, label, border, btnColor, children}) => {
    return (
        <div
            className={`flex flex-col items-center p-5 w-[600px] ${border ? "border border-gray-dark1 rounded-lg" : ""}`}>
            <Image src={image} alt="processing image" className={`w-3/5 ${processClass}`}/>

            <span
                className={`${btnColor} text-white py-3.5 px-5 rounded-xl font-primary font-semibold text-sm w-full text-center`}>{label}</span>

            <div className='flex gap-5 mt-10'>{children}</div>
        </div>
    )
}

export default Processing;