import InputSelect from '../../shared/InputSelect';
import InputSpinner from '../../shared/InputSpinner'
import {useEffect, useState} from 'react'
import Tooltips from '../../shared/Tooltips';
import Image from '../../shared/Image';
import {assets} from '../../assets';
import Button from '../../shared/Button';
import ConfirmationModal from '../../shared/ConfirmationModal';
import Checkbox from '../../shared/Checkbox';

const BasicSetting = () => {
    const [lessonPerDay, setLessonPerDay] = useState(0);
    const [numDay, setNumDay] = useState(1);
    const [newLessonValue, setNewLessonValue] = useState(0);
    const [newDaysValue, setNewDaysValue] = useState(0);
    const [lessonConfirm, setLessonConfirm] = useState(false);
    const [daysConfirm, setDaysConfirm] = useState(false);
    const [startTime, setStartTime] = useState({
        hour: 0,
        minute: 0
    });
    const [endTime, setEndTime] = useState({
        hour: 0,
        minute: 0
    });
    const [startTimeFriday, setStartTimeFriday] = useState({
        hour: 0,
        minute: 0
    });
    const [endTimeFriday, setEndTimeFriday] = useState({
        hour: 0,
        minute: 0
    });
    const [break1, setBreak1] = useState(0);
    const [breakLength1, setBreakLength1] = useState(0);
    const [breakLengthUpper, setBreakLengthUpper] = useState(0);
    const [breakLengthLower, setBreakLengthLower] = useState(0);
    const [length, setLength] = useState(0);
    const [weekend, setWeekend] = useState("");
    const [zeroLessonCheck, setZeroLessonCheck] = useState(true);
    const [lessonModal, setLessonModal] = useState(false);
    const [daysModal, setDaysModal] = useState(false);

    const hoursOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const minutesOptions = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
    const lessonOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const numOfDays = [1, 2, 3, 4, 5, 6, 7];
    const breakLength = [0, 10, 15, 20, 30, 40, 50, 60, 80, 100, 120];
    const weekendOptions = ["Saturday - Sunday", "Friday - Saturday", "Sunday", "None"];

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


    const handleChange = (e) => {
        if (e.target.name === "lessonPerDay") {
            setNewLessonValue(e.target.value)
            setLessonModal(true)
        } else if (e.target.name === "numberOfDays") {
            setNewDaysValue(e.target.value)
            setDaysModal(true)
        }
    }

    return (
        <>
            <div className='flex flex-col gap-y-2'>
                <div className='flex items-center gap-x-2'>
                    <p className='text-md font-medium font-primary'>Default Timing (Mon - Thu)</p>
                </div>

                <div className='flex items-end gap-x-2 w-full'>
                    <InputSelect
                        label="Start Time"
                        width={"w-1/2"}
                        options={hoursOptions}
                        name="starthour"
                        value={lessonPerDay}
                        onChange={(e) => setStartTime((startTime) => ({ ...startTime, hour: e.target.value }))}
                    />
                    <InputSelect
                        label=""
                        width={"w-1/2"}
                        options={minutesOptions}
                        name="startminute"
                        value={lessonPerDay}
                        onChange={(e) => setStartTime((startTime) => ({ ...startTime, minute: e.target.value }))}
                    />
                </div>

                <div className='flex items-end gap-x-2'>
                    <InputSelect
                        label="End Time"
                        width={"w-1/2"}
                        options={hoursOptions}
                        name="endhour"
                        value={lessonPerDay}
                        onChange={(e) => setEndTime((endTime) => ({ ...endTime, hour: e.target.value }))}
                    />
                    <InputSelect
                        label=""
                        width={"w-1/2"}
                        options={minutesOptions}
                        name="endminute"
                        value={lessonPerDay}
                        onChange={(e) => setEndTime((endTime) => ({ ...endTime, minute: e.target.value }))}
                    />
                </div>

            </div>

            <div className='flex flex-col gap-y-2'>
                <div className='flex items-center gap-x-2'>
                    <p className='text-md font-medium font-primary'>Friday Default Timing</p>
                </div>

                <div className='flex items-end gap-x-2 w-full'>
                    <InputSelect
                        label="Start Time"
                        width={"w-1/2"}
                        options={hoursOptions}
                        name="starthour"
                        value={lessonPerDay}
                        onChange={(e) => setStartTimeFriday((startTime) => ({ ...startTime, hour: e.target.value }))}
                    />
                    <InputSelect
                        label=""
                        width={"w-1/2"}
                        options={minutesOptions}
                        name="startminute"
                        value={lessonPerDay}
                        onChange={(e) => setStartTimeFriday((startTime) => ({ ...startTime, minute: e.target.value }))}
                    />
                </div>

                <div className='flex items-end gap-x-2'>
                    <InputSelect
                        label="End Time"
                        width={"w-1/2"}
                        options={hoursOptions}
                        name="endhour"
                        value={lessonPerDay}
                        onChange={(e) => setEndTimeFriday((endTime) => ({ ...endTime, hour: e.target.value }))}
                    />
                    <InputSelect
                        label=""
                        width={"w-1/2"}
                        options={minutesOptions}
                        name="endminute"
                        value={lessonPerDay}
                        onChange={(e) => setEndTimeFriday((endTime) => ({ ...endTime, minute: e.target.value }))}
                    />
                </div>

            </div>

            <div className='w-full'>
                <InputSelect
                    label="Lesson Per Day"
                    width={"w-full"}
                    options={lessonOptions}
                    name="lessonPerDay"
                    value={lessonPerDay}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div className='flex flex-col gap-y-3'>
                <InputSelect
                    label={"Weekend"}
                    width={"w-full"}
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
                    name="numberOfDays"
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div className='flex flex-col gap-y-2'>
                <div className='flex items-center gap-x-2'>
                    <p className='text-md font-medium font-primary'>Break Between Lesson</p>
                </div>

                <div className='flex items-center gap-x-2'>
                    <div className='flex flex-col gap-y-2 w-[50%]'>
                        <InputSpinner
                            min={0}
                            value={break1}
                            setState={setBreak1}
                            label="After Lesson"
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
                            options={breakLength}
                            label="Break Length"
                            name="breakLength2"
                            onChange={(e) => setBreakLengthUpper(e.target.value)}
                        />

                        <InputSelect
                            value={breakLengthLower}
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
                    <Checkbox checked={zeroLessonCheck} setChecked={setZeroLessonCheck} />
                </div>

                <div>
                    {zeroLessonCheck ? (
                        <InputSpinner
                            label="Duration of Zero Lesspn"
                            min={0}
                            value={length}
                            setState={setLength}
                        />
                    ) : null}
                </div>
            </div>

            <div className='mt-8'>
                <button
                    className='bg-blue-dark2 text-white px-4 py-3 flex gap-2 justify-center items-center font-primary rounded-lg w-full'>
                    <Image src={assets.calendar2} alt="calendar icon"
                           className="w-4"/><span>Update Basic Settings</span>
                </button>
            </div>

            {/* Lesson per Day Confirmation Modal */}
            <ConfirmationModal open={lessonModal} close={() => setLessonModal(false)}>
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

export default BasicSetting;