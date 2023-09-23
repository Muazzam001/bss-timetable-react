import "./inputSpinner.scss"
import ArrowUp from "../../assets/icons/arrowUp.jsx";
import ArrowDown from "../../assets/icons/arrowDown.jsx";

const InputSpinner = ({min, max, value, setState, className, label}) => {

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
        <div className={`w-50 ${className}`}>
            {label ? (
                <label className="text-xs font-medium leading-6 !text-dark-gray-200 font-primary">
                    {label}
                </label>
            ) : null}
            <div className='relative'>
                <input
                    type="number"
                    name="age"
                    id="age"
                    min={min}
                    max={max}
                    step="1"
                    value={value}
                    onChange={handleAgeChange}
                    className={`w-full border border-medium-gray bg-gray-light rounded-md bg-light-gray`}
                />
                <div className='absolute top-0 right-2 h-full w-4 flex flex-col justify-center'>
                    <ArrowUp className="w-[15px] h-[15px] cursor-pointer" onClick={increaseValue}/>
                    <ArrowDown className="w-[15px] h-[15px] cursor-pointer" onClick={decreaseValue}/>
                </div>
            </div>
        </div>

    )
}

export default InputSpinner;