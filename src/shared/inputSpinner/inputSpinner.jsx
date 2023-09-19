import ArrowDown from "@/src/assets/index.jsx/icons/arrowDown";
import ArrowUp from "@/src/assets/index.jsx/icons/arrowUp";

const InputSpinner = ({ min, max, value, setState, className }) => {
  const handleAgeChange = (event) => {
    const newValue = event.target.value;
    setState(newValue);
  };

  const increaseValue = () => {
    if (value < max) {
      setState(value + 1);
    }
  };

  const decreaseValue = () => {
    if (value > min) {
      setState(value - 1);
    }
  };

  return (
    <div className="w-50 relative">
      <input
        type="number"
        name="age"
        id="age"
        min={min}
        max={max}
        step="1"
        value={value}
        onChange={handleAgeChange}
        className={`w-full border border-medium-gray rounded-md bg-light-gray ${className}`}
      />
      <div className="absolute top-0 right-2 h-full w-4 flex flex-col justify-center">
        <ArrowUp className="w-[15px] h-[15px]" onClick={increaseValue} />
        <ArrowDown className="w-[15px] h-[15px]" onClick={decreaseValue} />
      </div>
    </div>
  );
};

export default InputSpinner;
