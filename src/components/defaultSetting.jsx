import {useState, useEffect} from 'react'
import {assets} from "../assets/index.jsx";
import Image from "../shared/image/image.jsx";
import InputField from "../shared/input/inputField.jsx";
import InputSelect from "../shared/inputSelect/inputSelect.jsx";
import InputSpinner from "../shared/inputSpinner/inputSpinner.jsx";
import Checkbox from "../shared/checkbox/checkbox.jsx";
import ConfirmationModal from "../shared/confirmationModal/confirmationModal.jsx";
import Tooltips from '../shared/tooltips/tooltips.jsx';

const DefaultSetting = () => {
    const [lessonPerDay, setLessonPerDay] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [weekend, setWeekend] = useState("")
    const [numDay, setNumDay] = useState(0)
    const [break1, setBreak1] = useState(0)
    const [break2, setBreak2] = useState(0)
    const [breakLength1, setBreakLength1] = useState(0)
    const [breakLength2, setBreakLength2] = useState(0)
    const [length, setLength] = useState(0)
    const [lessonLength, setLessonLength] = useState(0)
    const [lessonModal, setLessonModal] = useState(false)
    const [daysModal, setDaysModal] = useState(false)
    const [newLessonValue, setNewLessonValue] = useState(0)
    const [newDaysValue, setNewDaysValue] = useState(0)
    const [lessonConfirm, setLessonConfirm] = useState(false)
    const [daysConfirm, setDaysConfirm] = useState(false)

    const lessonOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const numOfDays = [1, 2, 3, 4, 5, 6, 7]

    const weekendOptions = ["Saturday - Sunday", "Friday - Saturday", "Sunday", "None"]

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
            }

            if (daysConfirm) {
                setNumDay(newDaysValue)
            }
        },
        [lessonConfirm, daysConfirm]
    );

    return (
        <>
            <div className='px-4 py-5 flex flex-col gap-y-5'>
                <InputField placeholder="Default" className="h-10"/>

                <div className='border-b-2 border-blue-dark2 mt-1'>
                    <p className='font-primary font-medium text-md text-gray-dark1 pb-2'>Lesson default settings</p>
                </div>

                <div className='w-full'>
                    <InputSelect
                        label="Lesson Per Day"
                        width={"100%"}
                        className="min-w-[200px]"
                        options={lessonOptions}
                        defaultValue="lessonPerDay"
                        name="lessonPerDay"
                        value={lessonPerDay}
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div className='flex flex-col gap-y-2'>
                    <div className='flex items-center gap-x-2'>
                        <p className='text-sm font-medium font-primary'>Default Lesson time</p>

                        <Tooltips title="Default lesson time">
                            <Image src={assets.tooltip} className="w-4 h-4 cursor-pointer"/>
                        </Tooltips>
                    </div>

                    <div className='flex items-end gap-x-2'>
                        <InputSpinner
                            label="Start Time"
                            min={0}
                            max={12}
                            value={hours}
                            setState={setHours}
                            className='text-gray-dark1'
                        />

                        <InputSpinner
                            label=""
                            min={0}
                            max={60}
                            value={minutes}
                            setState={setMinutes}
                            className='text-gray-dark1'
                        />
                    </div>

                    <InputSpinner
                        label="Lesson Length"
                        className="w-full text-gray-dark1"
                        min={0}
                        max={60}
                        value={lessonLength}
                        setState={setLessonLength}
                    />

                </div>

                <div className='flex flex-col gap-y-3'>
                    <div className='flex items-center gap-x-2'>
                        <p className='text-sm font-medium font-primary'>Weekend</p>

                        <Tooltips title="Weekend">
                            <Image src={assets.tooltip} className="w-4 h-4 cursor-pointer"/>
                        </Tooltips>
                    </div>

                    <InputSelect
                        width={"100%"}
                        value={weekend}
                        className="w-full"
                        defaultValue="year"
                        options={weekendOptions}
                        onChange={(e) => setWeekend(e.target.value)}
                    />
                </div>

                <div>
                    <InputSelect
                        value={numDay}
                        className="w-full"
                        options={numOfDays}
                        label="Number of Days"
                        name="numberOfDays"
                        defaultValue="numberOfDays"
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div className='flex items-center gap-x-1'>
                    <p className='text-sm font-medium font-primary'>Break Between Lesson</p>

                    <Tooltips title="Break between lesson">
                        <Image src={assets.tooltip} className="w-4 h-4 cursor-pointer"/>
                    </Tooltips>
                </div>

                <div className='flex gap-x-2'>
                    <InputSpinner
                        min={0}
                        value={break1}
                        setState={setBreak1}
                        label="Break After Lesson"
                        className='text-gray-dark1'
                    />

                    <InputSpinner
                        min={0}
                        value={break2}
                        setState={setBreak2}
                        label="Break Length"
                        className='text-gray-dark1'
                    />
                </div>

                <div className='flex gap-x-2'>
                    <InputSpinner
                        min={0}
                        value={breakLength1}
                        setState={setBreakLength1}
                    />

                    <InputSpinner
                        min={0}
                        value={breakLength2}
                        setState={setBreakLength2}
                    />
                </div>

                <div className='flex items-center gap-x-2'>
                    <p className='text-sm font-medium font-primary'>Work With Zero Lesson</p>

                    <Tooltips title="Work with zero lesson">
                        <Image src={assets.tooltip} className="w-4 h-4 cursor-pointer"/>
                    </Tooltips>

                    <Checkbox/>
                </div>

                <div>
                    <InputSpinner
                        label="Length"
                        className="w-full text-gray-dark1"
                        min={0}
                        value={length}
                        setState={setLength}
                    />
                </div>

                <button
                    className='bg-blue-dark2 text-white px-4 py-2 flex gap-2 items-center font-primary rounded-lg w-full'>
                    <Image src={assets.calendar2} alt="calendar icon"
                           className="w-4"/><span>Customize Default Setting</span>
                </button>

                <ConfirmationModal open={lessonModal} setOpen={setLessonModal} newValue={newLessonValue}
                                   oldValue={lessonPerDay}
                                   confirm={setLessonConfirm}/>

                <ConfirmationModal open={daysModal} setOpen={setDaysModal} newValue={newDaysValue} oldValue={numDay}
                                   confirm={setDaysConfirm}/>

            </div>
        </>
    );
}

export default DefaultSetting;
