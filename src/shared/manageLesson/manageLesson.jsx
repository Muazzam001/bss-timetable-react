import {assets} from "../../assets/index.jsx";
import Image from "../image/image.jsx";
import InputSelect from "../inputSelect/inputSelect.jsx";
import ArrowRight from "../../assets/icons/arrowRight.jsx";

const ManageLesson = ({options, icon, text, value, setState, setIsOpen, calendarOpen}) => {
    return (
        <div className="container flex justify-end xl:p-1">
            <div className="bg-white w-fit flex items-center gap-8 px-5 py-3 border border-gray-medium rounded-sm my-5">

                {calendarOpen ? (
                    <button onClick={() => setIsOpen(true)}
                            className="bg-blue-dark2 text-white px-4 py-3.5 flex gap-2 items-center font-primary rounded-lg">
                        <Image src={assets.calendar2} alt="calendar icon" className="w-4"/>

                        <span>Duplicate Calendar</span>
                    </button>
                ) : null}

                <InputSelect value={value} width={"200px"} options={options} defaultValue="year"
                             onChange={(e) => setState(e.target.value)}/>

                {calendarOpen ? (
                    <div className="flex items-center gap-x-2">
                        <span className="font-primary text-md font-semibold">{text}</span>

                        <ArrowRight className="!w-4 !h-4"/>

                        <Image src={icon} alt="Setting Icon" className="w-7 h-7"/>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default ManageLesson;