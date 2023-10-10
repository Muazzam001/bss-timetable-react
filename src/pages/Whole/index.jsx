import {useContext, useEffect, useState} from 'react';
import {stopScroll} from "../../utils/utils.js";
import {assets} from "../../assets";
import {useNavigate} from "react-router-dom";
import MainLayout from "../../shared/MainLayout";
import InputField from "../../shared/Input";
import InputSelect from "../../shared/InputSelect";
import Button from "../../shared/Button";
import ManageLesson from "../../shared/ManageLesson";
import Calendar from "../../components/Timetable";
import Processing from "../../components/Processing";
import MainModal from "../../shared/MainModal";
import SideModal from "../../shared/SideModal";
import Sidebar from '../../shared/Sidebar';
import {TimetableContext} from "../../utils/timetableContext.js"
import Tabs from '../../shared/Tabs';
import LessonSlotSetting from '../../components/LessonSlotSetting';
import LessonDaysSetting from '../../components/LessonDaysSetting/index.jsx';

const Whole = () => {
    const {defaultValue: lesson, setDefaultValue: setLesson} = useContext(TimetableContext);
    const navigate = useNavigate();
    const [calendarDisplay, setCalendarDisplay] = useState(false);
    const [duplicateModalOpen, setDuplicateModalOpen] = useState(false);
    const [isSlotModalOpen, setSlotModalOpen] = useState(false);
    const [duplicateName, setDuplicateName] = useState("");
    const [open, setOpen] = useState(false);
    const [year, setYear] = useState("");
    const [option, setOption] = useState("");
    const [type, setType] = useState("");
    const [selectedTab, setSelectedTab] = useState(1);
    const [mainTabsData, setMainTabsData] = useState([
        {
            id: 1,
            full: "Lesson Slot Settings",
            short: "Lesson Slot Settings",
        },
        {
            id: 2,
            full: "Lesson Days Settings",
            short: "Lesson Days Settings",
        }
    ]);

    const level = ["Default", "Winter - Default"];

    const Menus = [
        {title: "Home", src: assets.home},
        // {title: "Subjects", src: assets.subject},
        // {title: "Classes", src: assets.classes},
        {title: "Classrooms", src: assets.classroom},
        // {title: "Teachers", src: assets.teacher2},
        // {title: "Modules", src: assets.modules},
    ];

    useEffect(() => {
        stopScroll(duplicateModalOpen || isSlotModalOpen)
    }, [duplicateModalOpen, isSlotModalOpen])


    const duplicateOption = ["Lesson Setting and Data", "Lesson Setting Only"];
    const duplicateType = ['Default', 'Advance - Tuition'];

    useEffect(() => {
        const timer = setTimeout(() => {
            setCalendarDisplay(true);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };

    }, [calendarDisplay]);

    return (
        <MainLayout headerItem={calendarDisplay && Menus}>

            <div className='relative py-8 min-h-[calc(100vh-175px)]'>
                <div className='container grid items-center max-xl:grid-cols-1 max-xl:gap-y-4 xl:grid-cols-12 xl:gap-3'>
                    <div
                        className='xl:col-span-11 grid max-lg:grid-cols-1 max-lg:gap-y-4 xl:grid-flow-col xl:grid-cols-12 lg:gap-3 lg:items-center'>
                        <div className='xl:col-span-2'>
                            <InputField
                                placeholder="ROC"
                                className=""
                                disabled
                            />
                        </div>

                        <div className='xl:col-span-2'>
                            <InputField
                                placeholder="Cluster 5"
                                className=""
                                disabled
                            />
                        </div>

                        <div className='xl:col-span-3'>
                            <InputField
                                placeholder="TNS Defence, Lahore"
                                className=""
                                disabled
                            />
                        </div>

                        <div className='xl:col-span-3'>
                            <InputSelect
                                width={"100%"}
                                className="min-w-[200px]"
                                options={level}
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                        </div>

                        <div className='xl:col-span-2'>
                            <InputField
                                placeholder="Academic Year 2024"
                                className=""
                                disabled
                            />
                        </div>

                        {/*<InputSelect*/}
                        {/*    width={"100%"}*/}
                        {/*    className="min-w-[200px]"*/}
                        {/*    options={cluster}*/}
                        {/*    value={teamLevel}*/}
                        {/* onChange={(e) => setTeamLevel(e.target.value)} */}
                        {/*/>*/}

                    </div>

                    <div className='xl:col-span-1 flex items-center max-xl:ml-auto'>
                        <Button
                            rounded={false}
                            type="button"
                            title="Reset & Manage"
                            color={"blue-dark2"}
                            className="font-medium text-sm h-12 min-w-[150px] justify-start"
                            onClick={() => navigate("/manage-school")}
                        />
                    </div>
                </div>

                <ManageLesson
                    options={level}
                    icon={assets.settings}
                    text={"Manage Lesson Slots"}
                    value={lesson}
                    setState={setLesson}
                    onDuplicateClick={() => setDuplicateModalOpen(true)}
                    onBreadcrumbClick={() => setSlotModalOpen(true)}
                    calendarOpen={calendarDisplay}
                />

                {calendarDisplay ? (
                    <>
                        <div className='absolute top-3 -left-1 z-50'>
                            <Sidebar/>
                        </div>

                        <Calendar/>
                    </>
                ) : (
                    <>
                        <Processing
                            image={assets.loading}
                            btnColor="bg-warning"
                            processClass={`my-8`}
                            label="Please select timetable above option"/>
                    </>
                )}
            </div>

            <MainModal
                border
                open={open}
                setOpen={setOpen}
                image={assets.okbro}
                btnColor="bg-success"
                label={`Duplicated timetable successfully has been created "Winter".`}
            >
                <Button
                    rounded={true}
                    type="button"
                    title="Ok"
                    color={"blue-dark2"}
                    className="px-10 py-3"
                    onClick={() => setOpen(false)}
                />
            </MainModal>

            <SideModal isOpen={duplicateModalOpen} setIsOpen={setDuplicateModalOpen} title="Manage Duplicate Timetable">
                <section className='w-[500px]'>
                    <div className='flex flex-col gap-y-8'>
                        <InputField
                            label="Duplicate Name"
                            placeholder="Type Duplicate Name"
                            className=""
                            value={duplicateName}
                            onChange={(e) => setDuplicateName(e.target.value)}
                        />

                        <InputSelect
                            label="Duplicate Option"
                            width={"100%"}
                            className="min-w-[200px]"
                            options={duplicateOption}
                            value={option}
                            setState={setOption}
                            onChange={(e) => setOption(e.target.value)}
                        />

                        <InputSelect
                            label="Duplicate Type"
                            width={"100%"}
                            className="min-w-[200px]"
                            options={duplicateType}
                            defaultValue=""
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        />

                    </div>

                    <div className='flex gap-x-5 justify-end mt-10'>
                        <Button
                            title="Cancel"
                            rounded={true}
                            hover={false}
                            className="!px-8 !bg-gray-medium !text-black !text-sm"
                        />

                        <Button
                            rounded={true}
                            type="button"
                            title="Generate Clone"
                            color={"blue-dark2"}
                            className="px-18 py-3"
                            onClick={() => {
                                setDuplicateModalOpen(false)
                                setOpen(true)
                            }}
                        />
                    </div>
                </section>
            </SideModal>

            <SideModal isOpen={isSlotModalOpen} setIsOpen={setSlotModalOpen} title="Manage Lesson Slot">
                <section>
                    <div className='border-b'>
                        <Tabs
                            tabs={mainTabsData}
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                            tabWidth="w-fit"
                        />
                    </div>
                    <div className='py-4'>
                        {selectedTab === 1 ? (
                            <LessonSlotSetting/>
                        ) : selectedTab === 2 ? (
                            <LessonDaysSetting/>
                        ) : null}
                    </div>
                </section>
            </SideModal>
        </MainLayout>
    );
}

export default Whole;