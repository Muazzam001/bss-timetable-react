import ConfirmationModal from '../../shared/ConfirmationModal';
import InputSelect from '../../shared/InputSelect';
import InputSpinner from '../../shared/InputSpinner'
import {useEffect, useState} from 'react'
import Button from '../../shared/Button';
import Tooltips from '../../shared/Tooltips';
import Image from '../../shared/Image';
import {assets} from '../../assets';

const AdvanceSetting = () => {
    const [lessonPerDay, setLessonPerDay] = useState(0);
    const [numDay, setNumDay] = useState(1);
    const [startHours, setStartHours] = useState(0);
    const [endHours, setEndHours] = useState(0);
    const [startMinutes, setStartMinutes] = useState(0);
    const [endMinutes, setEndMinutes] = useState(0);
    const [lessonConfirm, setLessonConfirm] = useState(false);
    const [daysConfirm, setDaysConfirm] = useState(false);
    const [newLessonValue, setNewLessonValue] = useState(0);
    const [newDaysValue, setNewDaysValue] = useState(0);
    const [lessonModal, setLessonModal] = useState(false);
    const [daysModal, setDaysModal] = useState(false);
    const [weekend, setWeekend] = useState("");

    const lessonOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const numOfDays = [1, 2, 3, 4, 5, 6, 7];
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

            <div className='w-full'>
                <InputSelect
                    label="Lesson Per Day"
                    width={"w-full"}
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
                    className="min-w-[200px] !text-heading !font-medium !text-md"
                    name="numberOfDays"
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div className='mt-8'>
                <button
                    className='bg-blue-dark2 text-white px-4 py-3 flex gap-2 justify-center items-center font-primary rounded-lg w-full'>
                    <Image src={assets.calendar2} alt="calendar icon"
                           className="w-4"/><span>Update Advance Settings</span>
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

export default AdvanceSetting;