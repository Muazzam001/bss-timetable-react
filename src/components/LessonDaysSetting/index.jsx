import Image from '../../shared/Image';
import {assets} from '../../assets';
import Tabs from '../../shared/Tabs'
import {useState} from 'react'
import InputSpinner from '../../shared/InputSpinner';
import Tooltips from '../../shared/Tooltips';
import Button from '../../shared/Button';

const LessonDaysSetting = () => {
    const [selectedDay, setSelectedDay] = useState(1);
    const [daysTabsData, setDaysTabsData] = useState([
        {
            id: 1,
            full: "Day 1",
            short: "Day 1",
        },
        {
            id: 2,
            full: "Day 2",
            short: "Day 2",
        },
        {
            id: 3,
            full: "Day 3",
            short: "Day 3",
        },
        {
            id: 4,
            full: "Day 4",
            short: "Day 4",
        },
        {
            id: 5,
            full: "Day 5",
            short: "Day 5",
        },
        {
            id: 6,
            full: "Day 6",
            short: "Day 6",
        },
        {
            id: 7,
            full: "Day 7",
            short: "Day 7",
        },
        {
            id: 8,
            full: "Day 8",
            short: "Day 8",
        },
        {
            id: 9,
            full: "Day 9",
            short: "Day 9",
        },
        {
            id: 10,
            full: "Day 10",
            short: "Day 10",
        },
    ]);

    const [updatedDaysTabsData, setUpdatedDaysTabsData] = useState(daysTabsData);

    return (
        <>
            <div className='flex gap-x-5 border-b'>
                <Tabs tabs={daysTabsData} selectedTab={selectedDay} setSelectedTab={setSelectedDay}/>

                <span
                    className='border border-gray-dark2 rounded-full w-7 h-7 p-1 flex justify-end items-center ml-auto'>
                    <Image src={assets.edit2} alt="edit icon" className="w-4 h-4 cursor-pointer"/>
                </span>
            </div>

            <div className='flex flex-col items-center'>
                <div className='w-[800px] flex'>
                    <div className='w-full flex flex-col gap-5 pt-10 pr-10 border-r border-gray-medium'>
                        <div className='flex gap-2 items-center'>
                            <span className='font-primary font-semibold text-sm'>Default Lessons Time</span>

                            <Tooltips title="Default Lessons Time">
                                <Image src={assets.tooltip} className="w-4 h-4 cursor-pointer"/>
                            </Tooltips>
                        </div>
                        <div className='flex gap-3 flex-col'>
                            <div className='flex w-full gap-5'>
                                <InputSpinner
                                    label="First Break after lesson"
                                    // min={0}
                                    // max={12}
                                    // value={parseInt()}
                                    // setState={}
                                    name="afterLesson"
                                    className="w-30 flex-auto"
                                />

                                <InputSpinner
                                    label="Break length"
                                    // min={0}
                                    // max={12}
                                    // value={parseInt()}
                                    // setState={}  
                                    name="breakLength"
                                    className="w-30 flex-auto"
                                />
                            </div>

                            <div className='flex w-full gap-5'>
                                <InputSpinner
                                    // min={0}
                                    // max={12}
                                    // value={parseInt()}
                                    // setState={}
                                    name="afterLesson"
                                    className="w-30 flex-auto"
                                />

                                <InputSpinner
                                    // min={0}
                                    // max={12}
                                    // value={parseInt()}
                                    // setState={}  
                                    name="breakLength"
                                    className="w-30 flex-auto"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-5 pt-10 pl-10'>
                        <div className='flex gap-2 items-center'>
                            <span className='font-primary font-semibold text-sm'>Break Between Lessons</span>

                            <Tooltips title="Break Between Lesson">
                                <Image src={assets.tooltip} className="w-4 h-4 cursor-pointer"/>
                            </Tooltips>
                        </div>

                        <InputSpinner
                            label="Number Of Break"
                            // min={0}
                            // max={12}
                            // value={parseInt()}
                            // setState={}
                            name="afterLesson"
                            className="w-full flex-auto"
                        />

                        <div className='flex gap-3 flex-col'>
                            <div className='flex w-full gap-5'>
                                <InputSpinner
                                    label="First Break after lesson"
                                    // min={0}
                                    // max={12}
                                    // value={parseInt()}
                                    // setState={}
                                    name="afterLesson"
                                    className="w-30 flex-auto"
                                />

                                <InputSpinner
                                    label="Break length"
                                    // min={0}
                                    // max={12}
                                    // value={parseInt()}
                                    // setState={}  
                                    name="breakLength"
                                    className="w-30 flex-auto"
                                />
                            </div>

                            <div className='flex w-full gap-5'>
                                <InputSpinner
                                    // min={0}
                                    // max={12}
                                    // value={parseInt()}
                                    // setState={}
                                    name="afterLesson"
                                    className="w-30 flex-auto"
                                />

                                <InputSpinner
                                    // min={0}
                                    // max={12}
                                    // value={parseInt()}
                                    // setState={}  
                                    name="breakLength"
                                    className="w-30 flex-auto"
                                />
                            </div>
                        </div>

                        <div className='flex gap-3 w-full justify-end mt-10'>
                            <Button
                                title="Cancel"
                                rounded={true}
                                hover={false}
                                className="!px-8 !bg-gray-medium !text-black !text-sm"
                                // onClick={}
                            />

                            <Button
                                rounded={true}
                                type="button"
                                title="Update"
                                color={"blue-dark2"}
                                className="px-8 justify-start"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LessonDaysSetting;