import { useState, useEffect } from 'react'
import { assets } from "../assets/index.jsx";
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
    }, [lessonConfirm, daysConfirm])

    return (
        <div className='px-4'>
            <InputField
                placeholder="Default"
                className="h-10 w-2/3 mt-5"
            />

            <div className='border-b-2 border-blue-dark2 mt-5'>
                <p className='font-medium text-sm pb-3 font-primary'>Lesson default settings</p>
            </div>

            <div className='mt-5'>
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

            <div className='flex gap-1 items-center mt-5'>
                <p className='text-sm font-primary'>Default Lesson time</p>
                <Tooltips title="Default lesson time">
                    <Image src={assets.tooltip} className="w-4 h-4 cursor-pointer" />
                </Tooltips>
            </div>

            <div className='flex gap-x-2 items-end mt-5'>
                <InputSpinner
                    label="Start Time"
                    min={0}
                    max={12}
                    value={hours}
                    setState={setHours}
                />

                <InputSpinner
                    label=""
                    className="mt-[25px]"
                    min={0}
                    max={60}
                    value={minutes}
                    setState={setMinutes}
                />
            </div>

            <InputSpinner
                label="Lesson Length"
                className="mt-[25px] w-full"
                min={0}
                max={60}
                value={lessonLength}
                setState={setLessonLength}
            />

            <div className='flex gap-1 items-center mt-5'>
                <p className='text-sm font-primary'>Weekend</p>
                <Tooltips title="Weekend">
                    <Image src={assets.tooltip} className="w-4 h-4 cursor-pointer" />
                </Tooltips>
            </div>

            <div className='mt-3'>
                <InputSelect
                    width={"100%"}
                    className="w-full"
                    options={weekendOptions}
                    defaultValue="year"
                    value={weekend}
                    onChange={(e) => setWeekend(e.target.value)}
                />
            </div>

            <div className='mt-3'>
                <InputSelect
                    label="Number of Days"
                    className="w-full"
                    options={numOfDays}
                    defaultValue="numberOfDays"
                    name="numberOfDays"
                    value={numDay}
                    onChange={(e) => handleChange(e)}
                />
            </div>


            <div className='flex gap-1 items-center mt-5'>
                <p className='text-sm font-primary'>Break Between Lesson</p>
                <Tooltips title="Break between lesson">
                    <Image src={assets.tooltip} className="w-4 h-4 cursor-pointer" />
                </Tooltips>
            </div>

            <div className='flex gap-x-2 mt-5'>
                <InputSpinner
                    label="Break After Lesson"
                    min={0}
                    value={break1}
                    setState={setBreak1}
                />

                <InputSpinner
                    label="Break Length"
                    className=""
                    min={0}
                    value={break2}
                    setState={setBreak2}
                />
            </div>

            <div className='flex gap-x-2 mt-5'>
                <InputSpinner
                    min={0}
                    value={breakLength1}
                    setState={setBreakLength1}
                />

                <InputSpinner
                    className=""
                    min={0}
                    value={breakLength2}
                    setState={setBreakLength2}
                />
            </div>

            <div className='flex gap-1 items-center mt-5'>
                <p className='text-sm font-primary'>Work With Zero Lesson</p>
                <Tooltips title="Work with zero lesson">
                    <Image src={assets.tooltip} className="w-4 h-4 cursor-pointer" />
                </Tooltips>
                <Checkbox />
            </div>

            <InputSpinner
                label="Length"
                className="w-full mt-5"
                min={0}
                value={length}
                setState={setLength}
            />

            <button
                className='bg-blue-dark2 text-white px-4 py-2 flex gap-2 items-center font-primary rounded-sm mt-5 w-full'>
                <Image src={assets.calendar2} alt="calendar icon"
                    className="w-4" /><span>Customize Default Setting</span>
            </button>

            <ConfirmationModal open={lessonModal} setOpen={setLessonModal} newValue={newLessonValue} oldValue={lessonPerDay}
                confirm={setLessonConfirm} />

            <ConfirmationModal open={daysModal} setOpen={setDaysModal} newValue={newDaysValue} oldValue={numDay}
                confirm={setDaysConfirm} />

        </div>
    )
}

export default DefaultSetting;
