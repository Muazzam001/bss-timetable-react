import { useState } from 'react';
import Tabs from '../../shared/Tabs';
import Image from '../../shared/Image';
import { assets } from '../../assets';
import Button from '../../shared/Button';
import LessonSlotTable from '../LessonSlotTable';
import ConfirmationModal from '../../shared/ConfirmationModal';
import { tableData, tableHeadData } from '../LessonSlotTable/tableHead';
import InputField from '../../shared/Input';
import InputSpinner from '../../shared/InputSpinner';
import Tooltips from '../../shared/Tooltips';

const LessonSlotSetting = () => {
    const [selectedDay, setSelectedDay] = useState(1);
    const [tableBodyData, setTableBodyData] = useState(tableData);
    const [updatedRow, setUpdatedRow] = useState({});
    const [rowUpdateModal, setRowUpdateModal] = useState(false);
    const [breakbetweenModal, setBreakbetweenModal] = useState(false);
    const [lessonRenameModal, setLessonRenameModal] = useState(false);
    const [daysUpdateModal, setDaysUpdateModal] = useState(false);
    const [lessonRename, setLessonRename] = useState({
        default: "Default",
        winter: "",
        summer: ""
    });

    const [breakBetweenLesson, setBreakBetweenLesson] = useState({
        default: "Default",
        winter: "",
        summer: ""
    });

    const [lessonTabsData, setLessonTabsData] = useState([
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
  
    const [updatedLessonTabsData, setUpdatedLessonTabsData] = useState(lessonTabsData);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUpdatedRow(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleLessonRename = (event) => {
        const { name, value } = event.target;
        setLessonRename(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleInputChange = (id, e) => {
        const { name, value } = e.target;

        setUpdatedLessonTabsData((prevTabsData) => {
            const updatedTabs = [...prevTabsData];
            const index = updatedTabs.findIndex((tab) => tab.id === id);

            if (index !== -1) {
                updatedTabs[index] = {
                    ...updatedTabs[index],
                    [name]: value,
                };
            }
            return updatedTabs;
        });
    };

    return (
        <>
            <div className='flex gap-5 border-b'>

                <Tabs tabs={lessonTabsData} selectedTab={selectedDay} setSelectedTab={setSelectedDay} />

                <span className='border rounded-full border-gray-dark2 w-7 h-7 p-1 flex justify-end items-center'
                    onClick={() => {
                        setDaysUpdateModal(true)

                    }}>
                    <Image src={assets.edit2} alt="edit icon" className="w-4 h-4 cursor-pointer" />

                </span>
            </div>

            <LessonSlotTable
                openRowUpdateModal={setRowUpdateModal}
                tableData={tableBodyData}
                tableHeadData={tableHeadData}
                setUpdatedRow={setUpdatedRow}
                setDaysUpdateModal={setDaysUpdateModal}
            />

            <div className='flex max-lg:gap-y-6 max-lg:flex-col lg:gap-x-6 lg:flex-row lg:justify-center border rounded mx-4 mt-4 p-4'>
                <div className='flex flex-col items-center gap-y-6'>

                    <span className='font-primary'>Manage Duplication Lesson Types</span>

                    <Button
                        type="button"
                        title="Lesson Types Rename"
                        color={"blue-medium2"}
                        className="px-10 py-3"
                        onClick={() => setLessonRenameModal(true)}
                    />
                </div>

                <div className='flex flex-col items-center gap-y-6'>

                    <span className='font-primary'>Manage Default Lessons & Breaks</span>

                    <Button
                        type="button"
                        title="Lesson Types Rename"
                        color={"blue-medium2"}
                        className="px-10 py-3"
                        onClick={() => setBreakbetweenModal(true)}
                    />
                </div>
            </div>

            <ConfirmationModal open={rowUpdateModal} close={() => setRowUpdateModal(false)} position="justify-end">
                <div className='flex flex-col items-center gap-y-4 p-4 h-full max-h-[600px] max-w-[600px] overflow-auto'>

                    <div className='flex gap-5 justify-between w-full'>
                        <InputField
                            type={"number"}
                            placeholder={"Name"}
                            value={updatedRow?.name}
                            label="Name of lesson"
                            className="w-full h-10"
                            name="name"
                            onChange={handleOnChange}
                        />

                        <InputField
                            type={"number"}
                            placeholder={"Short"}
                            value={updatedRow?.short}
                            onChange={handleOnChange}
                            label="Short"
                            className="w-full h-10"
                            name="short"
                        />
                    </div>

                    <div className='flex self-start'>
                        <InputSpinner
                            label="Lesson Duration"
                            // min={0}
                            // max={12}
                            value={parseInt(updatedRow?.lessonDuration)}
                            setState={(value) => setUpdatedRow(prev => ({
                                ...prev,
                                lessonDuration: `${value}`
                            }))}
                            className='text-gray-dark1'
                            name="lessonDuration"
                        />
                    </div>

                    <div className='flex justify-center w-full'>
                        <p className='font-primary text-sm px-4'>

                            <span className='font-semibold font-primary'>Note: </span>
                            Before you change the lesson length, some other lessons/lessons
                            need to be shortened accordingly. If so, the system will not allow you to
                            change it.
                        </p>
                    </div>

                </div>

                <div className='flex gap-3 w-full justify-end mt-4 mr-20'>
                    <Button
                        title="No"
                        rounded={true}
                        hover={false}
                        className="!px-8 !bg-gray-medium !text-black !text-sm"
                        onClick={() => {
                            setRowUpdateModal(false)
                        }}
                    />

                    <Button
                        rounded={true}
                        type="button"
                        title="Update"
                        color={"blue-dark2"}
                        className="font-medium text-sm h-10 px-8 justify-start"
                        onClick={() => {
                            setRowUpdateModal(false)
                            setTableBodyData(prev => {
                                return prev.map(row => {
                                    if (row.id === updatedRow.id) {
                                        return updatedRow
                                    } else {
                                        return row
                                    }
                                })
                            })
                        }}
                    />
                </div>

            </ConfirmationModal>

            <ConfirmationModal open={daysUpdateModal} close={() => setDaysUpdateModal(false)} position="justify-end">
                <div className='flex flex-col items-center gap-y-4 p-4 h-full max-h-[600px] max-w-[600px] overflow-auto'>
                    {updatedLessonTabsData?.map((tab) => {
                        return (
                            <div key={tab?.id} className='flex w-full justify-between gap-10'>
                                <InputField
                                    value={tab?.full}
                                    label="Day 1"
                                    placeholder="Day 1"
                                    className="h-10"
                                    name="full"
                                    onChange={(e) => handleInputChange(tab?.id, e)}
                                />

                                <InputField
                                    value={tab?.short}
                                    label="Short"
                                    placeholder="Short"
                                    className="h-10"
                                    name="short"
                                    onChange={(e) => handleInputChange(tab?.id, e)}
                                />
                            </div>
                        )
                    })}

                </div>

                <div className='flex gap-3 justify-end w-full mt-4'>
                    <Button
                        title="No"
                        rounded={true}
                        hover={false}
                        className="!px-8 !bg-gray-medium !text-black !text-sm"
                        onClick={() => {
                            setDaysUpdateModal(false)
                        }}
                    />

                    <Button
                        rounded={true}
                        type="button"
                        title="Update"
                        color={"blue-dark2"}
                        className="font-medium text-sm h-10 px-8 justify-start"
                        disabled={updatedLessonTabsData.some((tab) => !tab.full || !tab.short)}
                        onClick={() => {
                            setDaysUpdateModal(false);
                            setLessonTabsData(updatedLessonTabsData);
                        }}
                    />
                </div>
            </ConfirmationModal>

            <ConfirmationModal open={lessonRenameModal} close={() => setLessonRenameModal(false)} position="justify-end">
                <div className='flex flex-col items-center gap-y-4 max-w-[600px]'>
                    <p className='font-primary font-semibold mb-3'>Duplicate Lesson Type Rename</p>


                    <div className='flex items-center gap-3'>
                        <InputField
                            value={lessonRename?.default}
                            placeholder=""
                            className="h-10 w-80"
                            name="default"
                        />

                        <p className='font-primary font-semibold text-sm'>Default Timetable cannot be updated</p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <InputField
                            value={lessonRename?.winter}
                            placeholder=""
                            className="h-10 w-80"
                            name="winter"
                            onChange={handleLessonRename}
                        />

                    </div>

                    <div className='flex items-center gap-3'>
                        <InputField
                            value={lessonRename?.summer}
                            placeholder=""
                            className="h-10 w-80"
                            name="summer"
                            onChange={handleLessonRename}
                        />
                    </div>
                </div>

                <div className='flex gap-3 w-full justify-end mt-10'>
                    <Button
                        title="Cancel"
                        rounded={true}
                        hover={false}
                        className="!px-8 !bg-gray-medium !text-black !text-sm"
                        onClick={() => {
                            setLessonRenameModal(false)
                        }}
                    />

                    <Button
                        rounded={true}
                        type="button"
                        title="Update"
                        color={"blue-dark2"}
                        className="font-medium text-sm h-10 px-8 justify-start"
                    />
                </div>
            </ConfirmationModal>

            {/* <ConfirmationModal >
                <div className='w-[700px] flex flex-col items-center'>
                    <div className='w-full justify-start my-5'>
                        <div className='flex gap-2 items-center'>
                            <Tooltips title="Break Between Lesson">
                                <Image src={assets.tooltip} className="w-4 h-4 cursor-pointer" />
                            </Tooltips>
                            <span className='font-primary font-semibold text-sm'>Break Between Lessons</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-10 w-full'>
                        <div className='flex gap-10 justify-between'>
                            <div className='flex w-full gap-5'>
                                <InputField
                                    placeholder={"Name"}
                                    // value={}
                                    label="Break Name"
                                    className="h-10 flex-auto"
                                    name="breakName"
                                // onChange={}
                                />
                                <InputField
                                    placeholder={"Short"}
                                    // value={}
                                    label="Short"
                                    className="h-10 flex-auto"
                                    name="short"
                                // onChange={}
                                />
                            </div>
                            <div className='flex w-full gap-5'>
                                <InputSpinner
                                    label="Break after lesson"
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
                        </div>

                        <div className='flex gap-10 justify-between'>
                            <div className='flex w-full gap-5'>
                                <InputField
                                    placeholder={"Name"}
                                    // value={}
                                    label="Break Name"
                                    className="h-10 flex-auto"
                                    name="breakName"
                                // onChange={}
                                />
                                <InputField
                                    placeholder={"Short"}
                                    // value={}
                                    label="Short"
                                    className="h-10 flex-auto"
                                    name="short"
                                // onChange={}
                                />
                            </div>
                            <div className='flex w-full gap-5'>
                                <InputSpinner
                                    label="Break after lesson"
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
                        </div>
                    </div>

                    <div className='flex justify-center mt-5'>
                        <p className='font-primary text-sm'>
                            <span className='font-semibold font-primary'>Note: </span>
                            Before you change the lesson length, some other lessons/lessons
                            need to be shortened accordingly. If so, the system will not allow you to
                            change it.
                        </p>
                    </div>

                    <div className='flex gap-3 w-full justify-end mt-10'>
                        <Button
                            title="Cancel"
                            rounded={true}
                            hover={false}
                            className="!px-8 !bg-gray-medium !text-black !text-sm"
                            onClick={() => {
                                setRowUpdateModal(false)
                            }}
                        />
                        <Button
                            rounded={true}
                            type="button"
                            title="Update"
                            color={"blue-dark2"}
                            className="font-medium text-sm h-10 px-8 justify-start"
                        />
                    </div>
                </div>
            </ConfirmationModal> */}

            <ConfirmationModal open={breakbetweenModal} close={() => setBreakbetweenModal(false)} position="justify-end">
                <div className='w-[700px] flex flex-col items-center'>
                    <div className='w-full justify-start my-5'>
                        <div className='flex gap-2 items-center'>
                            <span className='font-primary font-semibold text-sm'>Default Break Between Lessons</span>

                            <Tooltips title="Default Break Between Lesson">
                                <Image src={assets.tooltip} className="w-4 h-4 cursor-pointer" />
                            </Tooltips>
                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        <div className='flex flex-col gap-5 w-3/5'>
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
                        </div>

                        <div className='flex justify-center mt-5 w-2/5'>
                            <p className='font-primary'>
                                <span className='font-semibold font-primary'>Note: </span>
                                Before you change the lesson length, some other lessons/lessons
                                need to be shortened accordingly. If so, the system will not allow you to
                                change it.
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-3 w-full justify-end mt-10'>
                        <Button
                            title="Cancel"
                            rounded={true}
                            hover={false}
                            className="!px-8 !bg-gray-medium !text-black !text-sm"
                            onClick={() => {
                                setBreakbetweenModal(false)
                            }}
                        />

                        <Button
                            rounded={true}
                            type="button"
                            title="Update"
                            color={"blue-dark2"}
                            className="font-medium text-sm h-10 px-8 justify-start"
                        />
                    </div>
                </div>
            </ConfirmationModal>
        </>
    )
}

export default LessonSlotSetting