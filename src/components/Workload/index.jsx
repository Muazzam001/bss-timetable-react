import Image from "../../shared/Image";
import InputSelect from "../../shared/InputSelect";
import Tabs from "../../shared/Tabs";
import {useState} from "react";
import {assets} from "../../assets";
import InputSpinner from "../../shared/InputSpinner";

const Workload = () => {
    const [grade, setGrade] = useState("");
    const [gradeSettingTabs, setGradeSettingTabs] = useState(1);
    const [lessonpw, setLessonpw] = useState(0);
    const [teachingSettingTabs, setTeachingSettingTabs] = useState(1);
    const [workloadSelectedTab, setWorkloadSelectedTab] = useState(1);
    const [workload, setWorkload] = useState({
        physics: 0,
        bio: 0,
        chemistry: 0,
        maths: 0,
        english: 0,
        urdu: 0,
        pst: 0,
        islamiat: 0
    })
    const workloadSettingTabs = [
        {
            id: 1,
            full: "Subject Workload",
            short: "Subject Workload",
        },
        {
            id: 2,
            full: "Teaching Workload",
            short: "Teaching Workload",
        },
    ]
    const gradesOptions = ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7"];

    return (
        <div className='px-4 pt-5 pb-18 flex flex-col gap-y-5 h-full'>
            <div className='mt-1 border-b border-gray-medium'>
                <Tabs
                    tabs={workloadSettingTabs}
                    selectedTab={workloadSelectedTab}
                    setSelectedTab={setWorkloadSelectedTab}
                    fontSize='text-md'
                    gap="gap-x-5"
                />
            </div>

            <div className='w-full'>
                <InputSelect
                    width={"100%"}
                    className="min-w-[200px] !text-heading !font-medium !text-md"
                    options={gradesOptions}
                    name="grades"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                />
            </div>

            <div className='mt-1 border-b border-gray-medium'>
                {workloadSelectedTab === 1 ? (
                    <Tabs
                        tabs={[{id: 1, full: "Grade Workload Settings", short: "Grade Workload Settings"}]}
                        selectedTab={gradeSettingTabs}
                        setSelectedTab={setGradeSettingTabs}
                        fontSize='text-md'
                        gap="gap-x-5"
                    />
                ) : (
                    <Tabs
                        tabs={[{id: 1, full: "Teaching Workload Settings", short: "Teaching Workload Settings"}]}
                        selectedTab={teachingSettingTabs}
                        setSelectedTab={setTeachingSettingTabs}
                        fontSize='text-md'
                        gap="gap-x-5"
                    />
                )}
            </div>
            {workloadSelectedTab === 1 ? (
                <div className="flex flex-col gap-y-5">
                    <div className='w-full flex items-center justify-between'>
                        <span className="font-primary text-sm select-none">Physics</span>
                        <InputSpinner
                            className="text-gray-dark1 w-34"
                            min={0}
                            value={workload?.physics}
                            setState={(value) => setWorkload(prev => ({
                                ...prev,
                                physics: value
                            }))}
                        />
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <span className="font-primary text-sm select-none">Bio</span>
                        <InputSpinner
                            className="text-gray-dark1 w-34"
                            min={0}
                            value={workload?.bio}
                            setState={(value) => setWorkload(prev => ({
                                ...prev,
                                bio: value
                            }))}
                        />
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <span className="font-primary text-sm select-none">Chemistry</span>
                        <InputSpinner
                            className="text-gray-dark1 w-34"
                            min={0}
                            value={workload?.chemistry}
                            setState={(value) => setWorkload(prev => ({
                                ...prev,
                                chemistry: value
                            }))}
                        />
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <span className="font-primary text-sm select-none">Math</span>
                        <InputSpinner
                            className="text-gray-dark1 w-34"
                            min={0}
                            value={workload?.maths}
                            setState={(value) => setWorkload(prev => ({
                                ...prev,
                                maths: value
                            }))}
                        />
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <span className="font-primary text-sm select-none">English</span>
                        <InputSpinner
                            className="text-gray-dark1 w-34"
                            min={0}
                            value={workload?.english}
                            setState={(value) => setWorkload(prev => ({
                                ...prev,
                                english: value
                            }))}
                        />
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <span className="font-primary text-sm select-none">Urdu</span>
                        <InputSpinner
                            className="text-gray-dark1 w-34"
                            min={0}
                            value={workload?.urdu}
                            setState={(value) => setWorkload(prev => ({
                                ...prev,
                                urdu: value
                            }))}
                        />
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <span className="font-primary text-sm select-none">Pakistan Studies</span>
                        <InputSpinner
                            className="text-gray-dark1 w-34"
                            min={0}
                            value={workload?.pst}
                            setState={(value) => setWorkload(prev => ({
                                ...prev,
                                pst: value
                            }))}
                        />
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <span className="font-primary text-sm select-none">Islamiat</span>
                        <InputSpinner
                            className="text-gray-dark1 w-34"
                            min={0}
                            value={workload?.islamiat}
                            setState={(value) => setWorkload(prev => ({
                                ...prev,
                                islamiat: value
                            }))}
                        />
                    </div>
                </div>
            ) : (
                <div className='w-full flex items-center justify-between'>
                    <InputSpinner
                        label="Lesson P/W"
                        className="text-gray-dark1 w-full"
                        min={0}
                        value={lessonpw}
                        setState={(value) => setLessonpw(value)}
                    />
                </div>
            )}


            <div className='mt-auto px-4'>
                <button
                    className='bg-blue-dark2 text-white px-4 py-3 flex gap-2 items-center font-primary rounded-lg w-full'>
                    <Image src={assets.calendar2} alt="calendar icon"
                           className="w-4"/><span>Update Default Setting</span>
                </button>
            </div>
        </div>
    )
}

export default Workload;