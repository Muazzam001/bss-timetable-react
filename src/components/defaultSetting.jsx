import {useState, useEffect} from 'react'
import {assets} from "../assets/index.jsx";
import Image from "../shared/image/image.jsx";
import InputField from "../shared/input/inputField.jsx";
import InputSelect from "../shared/inputSelect/inputSelect.jsx";
import InputSpinner from "../shared/inputSpinner/inputSpinner.jsx";
import Checkbox from "../shared/checkbox/checkbox.jsx";
import ConfirmationModal from "../shared/confirmationModal/confirmationModal.jsx";

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
    const [confirmModal, setConfirmModal] = useState(false)
    const [newValue, setNewValue] = useState(0)
    const [confirm, setConfirm] = useState(false)

    const lessonOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const numOfDays = [1, 2, 3, 4, 5, 6, 7]

    const weekendOptions = ["Saturday - Sunday", "Friday - Saturday", "Sunday", "None"]

    const handleChange = (e) => {
        setNewValue(e.target.value)
        setConfirmModal(true)
    }

    useEffect(() => {
        if (confirm) {
            setLessonPerDay(newValue)
        }
    }, [confirm])

    return (
        <div className='px-4'>
            <InputField
                placeholder="Default"
                className="h-10 w-2/3 mt-5"
            />

            <div className='border-b-2 border-blue-dark2 mt-5'>
                <p className='font-medium text-sm pb-3 font-primary text-gray-dark1'>Lesson default settings</p>
            </div>

            <div className='mt-5'>
                <InputSelect
                    label="Lesson Per Day"
                    width={"100%"}
                    className="min-w-[200px]"
                    options={lessonOptions}
                    defaultValue="year"
                    value={lessonPerDay}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div className='flex gap-1 items-center mt-5'>
                <p className='text-sm font-medium font-primary'>Default Lesson time</p>
                <Image src={assets.tooltip} className="w-4 h-4"/>
            </div>

            <div className='flex gap-x-2 items-end mt-2'>
                <InputSpinner
                    label="Start Time"
                    className="text-sm text-gray-dark1"
                    min={0}
                    max={12}
                    value={hours}
                    setState={setHours}
                />

                <InputSpinner
                    label=""
                    className="mt-[25px] text-gray-dark1"
                    min={0}
                    max={60}
                    value={minutes}
                    setState={setMinutes}
                />
            </div>

            <InputSpinner
                label="Lesson Length"
                className="mt-2 w-full text-gray-dark1"
                min={0}
                max={60}
                value={lessonLength}
                setState={setLessonLength}
            />

            <div className='flex gap-1 items-center mt-5'>
                <p className='text-sm font-medium font-primary'>Weekend</p>
                <Image src={assets.tooltip} className="w-4 h-4"/>
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
                    defaultValue="year"
                    value={numDay}
                    onChange={(e) => {
                        handleChange(e);
                        setNumDay(e.target.value);
                        }
                    }
                />
            </div>


            <div className='flex gap-1 items-center mt-5'>
                <p className='text-sm font-medium font-primary'>Break Between Lesson</p>
                <Image src={assets.tooltip} className="w-4 h-4"/>
            </div>

            <div className='flex gap-x-2 mt-3'>
                <InputSpinner
                    label="Break After Lesson"
                    className="text-sm text-gray-dark1"
                    min={0}
                    value={break1}
                    setState={setBreak1}
                />

                <InputSpinner
                    label="Break Length"
                    className="text-sm text-gray-dark1"
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

            <div className='flex gap-1 items-center mt-4'>
                <p className='text-sm font-medium font-primary'>Work With Zero Lesson</p>
                <Image src={assets.tooltip} className="w-4 h-4"/>
                <Checkbox/>
            </div>

            <InputSpinner
                label="Length"
                className="w-full mt-2"
                min={0}
                value={length}
                setState={setLength}
            />

            <button
                className='bg-blue-dark2 text-white px-4 py-3 flex gap-2 items-center font-primary rounded-lg mt-5 w-full'>
                <Image src={assets.calendar2} alt="calendar icon"
                       className="w-4"/><span>Customize Default Setting</span>
            </button>

            <ConfirmationModal open={confirmModal} setOpen={setConfirmModal} newValue={newValue} oldValue={lessonPerDay}
                               confirm={setConfirm}/>

        </div>
    )
}

export default DefaultSetting;
