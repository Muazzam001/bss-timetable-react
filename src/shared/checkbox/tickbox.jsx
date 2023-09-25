import { assets } from '../../assets'
import Image from '../image/image'

const Tickbox = ({ htmlFor, label, id, name, isChecked, handleTickboxChange }) => {
    return (
        <label htmlFor={htmlFor} className="flex items-center w-full">
            <span className="w-5 h-5 rounded cursor-pointer z-50">
                <input
                    id={id}
                    name={name}
                    type="checkbox"
                    checked={isChecked}
                    className="peer hidden"
                    onChange={handleTickboxChange}
                />

                <Image src={assets.check} alt="check icon" className="w-4 peer-checked:inline-block hidden" />
            </span>

            <span className={`ml-2 w-full block text-sm font-primary cursor-pointer select-none ${isChecked ? "text-blue-dark2" : "text-gray-900"} `}>
                {label}
            </span>
        </label>
    )
}

export default Tickbox