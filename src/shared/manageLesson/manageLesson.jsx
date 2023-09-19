import {assets} from "@/src/assets/index.jsx";
import React, {useState} from "react";
import Image from "../image/image.jsx";
import ArrowRight from "@/src/assets/icons/arrowRight.jsx";
import InputSelect from "../inputSelect/inputSelect.jsx";

const ManageLesson = ({options, icon, text, value, setState}) => {

    return (
        <div className="container flex justify-end xl:px-1">
            <div
                className="bg-white w-fit flex items-center gap-12 px-5 py-2 border border-gray-medium rounded-[2px] my-5">
                <button className="bg-blue-dark2 text-white px-4 py-3 flex gap-2 items-center font-primary rounded-sm">
                    <Image src={assets.calendar2} alt="calendar icon" className="w-4"/>
                    <span>Duplicate Calendar</span>
                </button>

                <InputSelect
                    width={"200px"}
                    options={options}
                    defaultValue="year"
                    value={value}
                    setState={setState}
                />

                <div className="flex items-center gap-2">
                    <span className="font-primary text-md font-semibold">{text}</span>
                    <ArrowRight className="!w-4 !h-4"/>
                    <Image src={icon} alt="Setting Icon" className="w-7 h-7"/>
                </div>
            </div>
        </div>
    );
};

export default ManageLesson;
