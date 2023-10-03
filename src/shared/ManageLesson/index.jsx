import {assets} from "../../assets";
import Image from "../Image";
import InputSelect from "../InputSelect";
import ArrowRight from "../../assets/icons/arrowRight.jsx";

const ManageLesson = ({options, icon, text, value, setState, onDuplicateClick, onBreadcrumbClick, calendarOpen}) => {
    return (
        <div className="container flex justify-end xl:p-1">

            <div
                className="bg-white w-full xl:w-fit flex flex-col justify-end gap-y-6 lg:flex-row lg:items-center lg:gap-x-8 px-5 py-3 border border-gray-medium rounded-sm my-5">

                {calendarOpen ? (
                    <button
                        onClick={onDuplicateClick}
                        className="bg-blue-dark2 text-white px-4 py-3.5 flex gap-2 items-center font-primary rounded-lg">
                        <Image src={assets.calendar2} alt="calendar icon" className="w-4"/>

                        <span>Duplicate Calendar</span>
                    </button>
                ) : null}

                <InputSelect
                    className="xl:min-w-[200px]"
                    value={value}
                    options={options}
                    onChange={(e) => setState(e.target.value)}/>

                {calendarOpen ? (
                    <div className="flex items-center gap-x-2 justify-end cursor-pointer" onClick={onBreadcrumbClick}>
                        <span
                            className="text-md font-primary font-medium hover:underline hover:text-blue-dark2">{text}</span>

                        <ArrowRight />

                        <Image src={icon} alt="Setting Icon" className="w-6 h-6"/>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default ManageLesson;