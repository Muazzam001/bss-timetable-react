import "./inputSpinner.scss"
import ArrowUp from "../../assets/icons/arrowUp.jsx";
import ArrowDown from "../../assets/icons/arrowDown.jsx";

const InputSpinner = ({ min, max, value, setState, className, label, name }) => {

    const handleAgeChange = (event) => {
        const newValue = event.target.value;
        setState(newValue);
    };

    const increaseValue = () => {
        if (max !== undefined) {
            if (value < max) {
                setState(value + 1)
            }
        } else {
            setState(value + 1)
        }
    }

    const decreaseValue = () => {
        if (min !== undefined) {
            if (value > min) {
                setState(value - 1)
            }
        } else {
            setState(value - 1)
        }
    }

    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {label ? (<label className="text-sm text-gray-dark1 font-primary">{label}</label>) : null}

            <div className='relative'>
                <input onChange={handleAgeChange}
                    id="age" step="1" name={name} min={min} max={max} type="number" value={value}
                    className={`w-full h-13 inline-block rounded-lg font-primary font-normal text-sm placeholder:text-sm border-gray-medium read-only:!border-gray-medium disabled:!border-gray-medium hover:border-blue-dark2 focus:border-blue-dark2 focus-visible:border-blue-dark2 text-secondary2 hover:text-blue-dark2 focus:text-blue-dark2 focus-visible:text-blue-dark2 hover:outline-0 focus:outline-0 focus-visible:outline-0 hover:ring-0 focus:ring-0 focus-visible:ring-0 bg-gray-light py-2`}
                />

                <div className='absolute top-0 right-2 h-full w-4 flex flex-col justify-center'>
                    <ArrowUp className="w-[15px] h-[15px] cursor-pointer text-gray-dark1" onClick={increaseValue} />

                    <ArrowDown className="w-[15px] h-[15px] cursor-pointer text-gray-dark1" onClick={decreaseValue} />
                </div>
            </div>
        </div>

    )
}

export default InputSpinner;