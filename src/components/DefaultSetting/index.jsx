import {useContext, useEffect, useState} from 'react'
import {assets} from "../../assets";
import Image from "../../shared/Image";
import InputField from "../../shared/Input";
import InputSelect from "../../shared/InputSelect";
import InputSpinner from "../../shared/InputSpinner";
import Checkbox from "../../shared/Checkbox";
import ConfirmationModal from "../../shared/ConfirmationModal";
import Tooltips from '../../shared/Tooltips';
import {TimetableContext} from '../../utils/timetableContext.js';
import Button from '../../shared/Button';
import Tabs from '../../shared/Tabs';

const DefaultSetting = () => {
    const [lessonPerDay, setLessonPerDay] = useState(0);
    const [startHours, setStartHours] = useState(0);
    const [endHours, setEndHours] = useState(0);
    const [startMinutes, setStartMinutes] = useState(0);
    const [endMinutes, setEndMinutes] = useState(0);
    const [weekend, setWeekend] = useState("");
    const [numDay, setNumDay] = useState(1);
    const [break1, setBreak1] = useState(0);
    const [breakLength1, setBreakLength1] = useState(0);
    const [breakLengthUpper, setBreakLengthUpper] = useState(0);
    const [breakLengthLower, setBreakLengthLower] = useState(0);
    const [length, setLength] = useState(0);
    const [lessonModal, setLessonModal] = useState(false);
    const [daysModal, setDaysModal] = useState(false);
    const [newLessonValue, setNewLessonValue] = useState(0);
    const [newDaysValue, setNewDaysValue] = useState(0);
    const [lessonConfirm, setLessonConfirm] = useState(false);
    const [daysConfirm, setDaysConfirm] = useState(false);
    const [zeroLessonCheck, setZeroLessonCheck] = useState(true);
    const [defaultSelectedTab, setDefaultSelectedTab] = useState(1);
    const {defaultValue: lesson} = useContext(TimetableContext);

    // Default Settings Inputs Data
    const lessonOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const numOfDays = [1, 2, 3, 4, 5, 6, 7];
    const breakLength = [0, 10, 15, 20, 30, 40, 50, 60, 80, 100, 120];
    const weekendOptions = ["Saturday - Sunday", "Friday - Saturday", "Sunday", "None"];
    const defaultSettingTabs = [
        {
            id: 1,
            full: "Lesson Basic Settings",
            short: "Lesson Basic Settings",
        },
        {
            id: 2,
            full: "Lesson Advance Settings",
            short: "Lesson Advance Settings",
        },
    ]

    const handleChange = (e) => {
        if (e.target.name === "lessonPerDay") {
            setNewLessonValue(e.target.value)
            setLessonModal(true)
        } else if (e.target.name === "numberOfDays") {
            setNewDaysValue(e.target.value)
            setDaysModal(true)
        }
    }

    useEffect(() => {
            if (lessonConfirm) {
                setLessonPerDay(newLessonValue)
                setLessonConfirm(false)
            }

            if (daysConfirm) {
                setNumDay(newDaysValue)
                setDaysConfirm(false)
            }
        },
        [lessonConfirm, daysConfirm]
    );

    return (
        <>
            <div className='px-4 pt-5 pb-18 flex flex-col gap-y-5 h-full'>
                <InputField placeholder={lesson} readOnly/>

                <div className='mt-1 border-b border-gray-medium'>
                    <Tabs
                        tabs={defaultSettingTabs}
                        selectedTab={defaultSelectedTab}
                        setSelectedTab={setDefaultSelectedTab}
                        fontSize='text-[12px]'
                        gap="gap-x-3"
                    />
                </div>


                <div className='flex flex-col gap-y-2'>
                    <div className='flex items-center gap-x-2'>
                        <p className='text-md font-medium font-primary'>Default Lesson time</p>
                    </div>

                    <div className='flex items-end gap-x-2'>
                        <InputSpinner
                            label="Start Time"
                            min={0}
                            max={12}
                            value={startHours}
                            setState={setStartHours}
                            className='text-gray-dark1 w-full'
                        />

                        <InputSpinner
                            min={0}
                            max={60}
                            value={startMinutes}
                            setState={setStartMinutes}
                            className='text-gray-dark1 w-full'
                        />
                    </div>

                    <div className='flex items-end gap-x-2'>
                        <InputSpinner
                            label="End Time"
                            min={0}
                            max={12}
                            value={endHours}
                            setState={setEndHours}
                            className='text-gray-dark1 w-full'
                        />

                        <InputSpinner
                            min={0}
                            max={60}
                            value={endMinutes}
                            setState={setEndMinutes}
                            className='text-gray-dark1 w-full'
                        />
                    </div>

                </div>

                {defaultSelectedTab === 1 ? (
                    <>
                        <div className='w-full'>
                            <InputSelect
                                label="Lesson Per Day"
                                width={"100%"}
                                className="min-w-[200px] !text-heading !font-medium !text-md"
                                options={lessonOptions}
                                name="lessonPerDay"
                                value={lessonPerDay}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>

                        <div className='flex flex-col gap-y-3'>
                            <div className='flex items-center gap-x-2'>
                                <p className='text-md font-medium font-primary'>Weekend</p>

                                <Tooltips title="Weekend">
                                    <Image src={assets.tooltip} className="w-4 h-4 cursor-pointer"/>
                                </Tooltips>
                            </div>

                            <InputSelect
                                width={"100%"}
                                value={weekend}
                                options={weekendOptions}
                                onChange={(e) => setWeekend(e.target.value)}
                            />
                        </div>

                        <div>
                            <InputSelect
                                value={numDay}
                                options={numOfDays}
                                label="Number of Days"
                                className="min-w-[200px] !text-heading !font-medium !text-md"
                                name="numberOfDays"
                                onChange={(e) => handleChange(e)}
                            />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <div className='flex items-center gap-x-1'>
                                <p className='text-md font-medium font-primary'>Break Between Lesson</p>

                                <Tooltips title="Break between lesson">
                                    <Image src={assets.tooltip} className="w-4 h-4 cursor-pointer"/>
                                </Tooltips>
                            </div>

                            <div className='flex items-center gap-x-2'>
                                <div className='flex flex-col gap-y-2 w-[50%]'>
                                    <InputSpinner
                                        min={0}
                                        value={break1}
                                        setState={setBreak1}
                                        label="Break After Lesson"
                                        className='text-gray-dark1'
                                    />

                                    <InputSpinner
                                        min={0}
                                        value={breakLength1}
                                        setState={setBreakLength1}
                                    />
                                </div>

                                <div className='flex flex-col gap-y-2 w-[50%] -mt-0.5'>
                                    <InputSelect
                                        value={breakLengthUpper}
                                        className="text-gray-dark1"
                                        options={breakLength}
                                        label="Break Length"
                                        name="breakLength2"
                                        onChange={(e) => setBreakLengthUpper(e.target.value)}
                                    />

                                    <InputSelect
                                        value={breakLengthLower}
                                        className="w-full"
                                        options={breakLength}
                                        name="breakLength2"
                                        onChange={(e) => setBreakLengthLower(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <div className='flex items-center gap-x-2'>
                                <p className='text-md font-medium font-primary'>Work With Zero Lesson</p>

                                <Tooltips title="Work with zero lesson">
                                    <Image src={assets.tooltip} className="w-4 h-4 cursor-pointer"/>
                                </Tooltips>

                                <Checkbox checked={zeroLessonCheck} setChecked={setZeroLessonCheck}/>
                            </div>

                            <div>
                                {zeroLessonCheck ? (
                                    <InputSpinner
                                        label="Length"
                                        className="text-gray-dark1"
                                        min={0}
                                        value={length}
                                        setState={setLength}
                                    />
                                ) : null}
                            </div>
                        </div>
                    </>
                ) : null}

                <div className='mt-auto'>
                    <button
                        className='bg-blue-dark2 text-white px-4 py-3 flex gap-2 items-center font-primary rounded-lg w-full'>
                        <Image src={assets.calendar2} alt="calendar icon"
                               className="w-4"/><span>Customize Default Setting</span>
                    </button>
                </div>
            </div>

            {/* Lesson per Day Confirmation Modal */}
            <ConfirmationModal open={lessonModal} close={() => setLessonModal(false)}>
                {console.log(lessonPerDay, newLessonValue)}
                <div className={`flex flex-col items-center w-[600px] p-5`}>
                    <p className='font-primary'>Are you sure you want to change the count of lessons
                        from {`${lessonPerDay}`} to {`${newLessonValue}`}?</p>

                    <div className='flex gap-3 w-full justify-end mt-10 mr-20'>
                        <Button
                            title="No"
                            rounded={true}
                            hover={false}
                            className="!px-8 !bg-gray-medium !text-black !text-sm"
                            onClick={() => {
                                setLessonConfirm(false)
                                setLessonModal(false)
                            }}
                        />

                        <Button
                            rounded={true}
                            type="button"
                            title="Yes"
                            color={"blue-dark2"}
                            className="px-8 justify-start"
                            onClick={() => {
                                setLessonConfirm(true)
                                setLessonModal(false)
                            }}
                        />
                    </div>
                </div>
            </ConfirmationModal>

            {/* Number of Days Confirmation Modal */}
            <ConfirmationModal open={daysModal} close={() => setDaysModal(false)}>
                <div className={`flex flex-col items-center w-[600px] p-5`}>
                    <p className='font-primary'>Are you sure you want to change the count of days
                        from {`${numDay}`} to {`${newDaysValue}`}?</p>

                    <div className='flex gap-3 w-full justify-end mt-10 mr-20'>
                        <Button
                            title="No"
                            rounded={true}
                            hover={false}
                            className="!px-8 !bg-gray-medium !text-black !text-sm"
                            onClick={() => {
                                setDaysConfirm(false)
                                setDaysModal(false)
                            }}
                        />

                        <Button
                            rounded={true}
                            type="button"
                            title="Yes"
                            color={"blue-dark2"}
                            className="font-medium text-sm h-10 px-8 justify-start"
                            onClick={() => {
                                setDaysConfirm(true)
                                setDaysModal(false)
                            }}
                        />
                    </div>
                </div>
            </ConfirmationModal>
        </>
    );
}

export default DefaultSetting;
