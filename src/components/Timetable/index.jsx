import './calendar.scss';
import {useEffect, useRef, useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import DefaultSetting from "../DefaultSetting";
import Control from "../Control";
import Workload from "../Workload";
import TimetableOptions from "../TimetableOptions";
import CalendarHeader from '../CalendarHeader';
import SideModal from '../../shared/SideModal';
import Tabs from '../../shared/Tabs';
import {assets} from '../../assets';
import Image from '../../shared/Image';

const Calendar = () => {
    const calendarRef = useRef(null);
    const [dayName, setDayName] = useState("");
    const [year, setYear] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [manageModal, setManageModal] = useState(false);
    const [selectedTab, setSelectedTab] = useState("Default Settings");
    const [manageSelectedTab, setManageSelectedTab] = useState(1);
    const manageLessonsTabs = [
        {
            id: 1,
            full: "Manage Lessons",
            short: "Manage Lessons",
        },
        {
            id: 2,
            full: "New Lessons",
            short: "New Lessons",
        },
    ]

    useEffect(() => {
        if (calendarRef.current) {
            const calendarApi = calendarRef.current.getApi();
            const title = calendarApi.view.title;
            const newDate = new Date(title);
            const dayName = new Date(title).toLocaleString('en-us', {weekday: 'long'});

            setDayName(dayName);
            const year = newDate.getFullYear();
            setYear(year);
        }
    }, []);

    const data = [
        ['CHE', 'UDR', 'MTH', '', 'ENG', 'ISL', 'PST', '', 'CS', 'ECO'],
        ['CHE', 'UDR', 'MTH', '', 'ENG', 'ISL', 'PST', '', 'CS', 'ECO'],
        ['PST', 'BIO', 'CS', '', 'UDR', 'CHE', 'UDR', '', 'PHY', 'ENG'],
        ['PHY', 'PST', 'BIO', '', 'CHE', 'ENG', 'ISL', '', 'MTH', 'ECO'],
        ['CHE', 'UDR', 'MTH', '', 'CS', 'ECO', 'UDR', '', 'PHY', 'ENG'],
        ['CHE', 'UDR', 'MTH', '', 'ENG', 'ISL', 'PST', '', 'CS', 'ECO'],
        ['CHE', 'ENG', 'ISL', '', 'BIO', 'CS', 'UDR', '', 'PHY', 'UDR'],
        ['ENG', 'ISL', 'PST', '', 'CS', 'ECO', 'CHE', '', 'MTH', 'PHY'],
    ];

    return (
        <>
            <div className="calendar-container px-4">
                <CalendarHeader
                    calendarRef={calendarRef}
                    dayName={dayName}
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                    sidebar={isSidebarOpen}
                    setSidebar={setIsSidebarOpen}
                />

                <div className=''>
                    <div className={`${isSidebarOpen ? 'w-[calc(100vw-391px)]' : "w-full"} overflow-auto float-left`}>
                        <FullCalendar
                            ref={calendarRef}
                            plugins={[dayGridPlugin, interactionPlugin]}
                            initialView="dayGridWeek"
                            dayCellClassNames="!bg-white !min-h-fit !max-h-fit"
                            dayCellContent={() => {
                                return (
                                    <table
                                        className="table-inner table-auto w-full !min-h-fit text-left whitespace-no-wrap !border !border-gray-medium">
                                        <thead>
                                        <tr>
                                            <th className="!align-middle title-font font-medium text-gray-900 text-xs font-primary bg-gray-100 rounded-tl rounded-bl">1</th>
                                            <th className="!align-middle title-font font-medium text-gray-900 text-xs font-primary bg-gray-100">2</th>
                                            <th className="!align-middle title-font font-medium text-gray-900 text-xs font-primary bg-gray-100">3</th>
                                            <th className="!align-middle title-font font-medium text-gray-900 text-xs font-primary bg-gray-100">BR</th>
                                            <th className="!align-middle title-font font-medium text-gray-900 text-xs font-primary bg-gray-100">4</th>
                                            <th className="!align-middle title-font font-medium text-gray-900 text-xs font-primary bg-gray-100">5</th>
                                            <th className="!align-middle title-font font-medium text-gray-900 text-xs font-primary bg-gray-100">6</th>
                                            <th className="!align-middle title-font font-medium text-gray-900 text-xs font-primary bg-gray-100">BR</th>
                                            <th className="!align-middle title-font font-medium text-gray-900 text-xs font-primary bg-gray-100">7</th>
                                            <th className="!align-middle title-font font-medium text-gray-900 text-xs font-primary bg-gray-100">8</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {data.map((row, rowIndex) => (
                                            <tr key={rowIndex}>
                                                {row.map((cell, cellIndex) => {
                                                    const colors = {
                                                        CHE: "bg-[#997D6C]",
                                                        BIO: "bg-[#898989]",
                                                        ECO: "bg-[#9E69F4]",
                                                        ISL: "bg-[#88DEDE]",
                                                        ENG: "bg-[#A962A5]",
                                                        PHY: "bg-[#DA86BB]",
                                                        URD: "bg-[#E6886C]",
                                                        MTH: "bg-[#BEAD2E]",
                                                        PST: "bg-[#5BCB5A]",
                                                        CS: "bg-[#E8C46A]",
                                                        HQT: "bg-[#1FA9EF]",
                                                        ACC: "bg-[#BFE324]",
                                                        BS: "bg-[#F4F469]",
                                                    }
                                                    const cellColor = colors[cell] || 'bg-blue-dark2';

                                                    return (
                                                        <td key={cellIndex}
                                                            className='font-primary text-xs uppercase w-20 h-20 !text-center !align-middle'>
                                                            <div
                                                                className={`flex flex-col ${cell === "" ? null : cellColor} rounded-sm py-1 text-white ${cell === "" ? null : "border"} border-blue-dark2`}>
                                                                <span className='text-[8px]'>{cell}</span>
                                                            </div>
                                                        </td>
                                                    )
                                                })}
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                );
                            }}

                            headerToolbar={false}
                            firstDay={1}

                            customButtons={{
                                customDay: {
                                    text: `${dayName}`,
                                },
                                customYear: {
                                    text: `${year}`,
                                },

                            }}

                            dayHeaderContent={(info) => {

                                const currentDate = info.date
                                const options = {weekday: 'long'};

                                const dayName = currentDate.toLocaleDateString('en-US', options);
                                return (
                                    <span className='font-primary'>{dayName}</span>

                                );
                                // return (
                                //     <div className='flex justify-between items-center w-full !m-0'>
                                //         <div className='flex items-center gap-5'>
                                //             <div className='!bg-blue-dark2'>
                                //                 <Image src={assets.recent} alt="recent icon" className="w-14 p-2" />
                                //             </div>
                                //             <div>
                                //                 <span className='font-primary flex items-center'>
                                //                     <LockIcon className='!w-4' />
                                //                     {info.text}
                                //                 </span>
                                //             </div>
                                //         </div>
                                //         <div className='flex bg-blue-dark2 p-2 mr-2'>
                                //             <p className='border-r border-white text-sm font-primary font-normal text-white px-5'>New
                                //                 Lesson</p>
                                //             <p className='text-sm font-primary font-normal text-white px-5'>Manage Lessons</p>
                                //         </div>
                                //     </div>
                                // )

                            }}
                        />
                    </div>

                    <div
                        className={`bg-white border overflow-y-auto border-gray-dark2 float-right ${isSidebarOpen ? 'max-w-[351px] w-full' : 'w-0'}`}>
                        {isSidebarOpen && (
                            <div className='w-full h-full'>
                                <div className='flex items-end w-full h-13'>
                                    <div className='flex bg-blue-dark2 p-2 w-full'>
                                        <p
                                            className='item-p'
                                            onClick={() => {
                                                setManageSelectedTab(1)
                                                setManageModal(true)
                                            }
                                            }>
                                            New Lesson
                                        </p>

                                        <p
                                            className='item-p'
                                            onClick={() => {
                                                setManageSelectedTab(2)
                                                setManageModal(true)
                                            }
                                            }>
                                            Manage Lessons
                                        </p>
                                    </div>
                                </div>

                                {/* Side Tabs Panels */}
                                {selectedTab === "Default Settings" ? (
                                    <DefaultSetting/>
                                ) : selectedTab === "Control" ? (
                                    <Control/>
                                ) : selectedTab === "Workload" ? (
                                    <Workload/>
                                ) : selectedTab === "Timetable Options" ? (
                                    <TimetableOptions/>
                                ) : null}
                            </div>
                        )}
                    </div>
                </div>
                <div className='clear-both'></div>
            </div>
            <SideModal isOpen={manageModal} setIsOpen={setManageModal} title="Manage Lesson">
                <div>
                    <div className='mt-1 border-b border-gray-medium'>
                        <Tabs
                            tabs={manageLessonsTabs}
                            selectedTab={manageSelectedTab}
                            setSelectedTab={setManageSelectedTab}
                            fontSize='text-md'
                            gap="gap-x-3"
                        />
                    </div>
                    {
                        manageSelectedTab === 1 ? (
                            <div>
                                <div>
                                    <Image src={assets.noData} alt="No Data" className="w-[400px]"/>
                                </div>
                            </div>
                        ) : (
                            <p>Manage</p>
                        )
                    }
                </div>
            </SideModal>
        </>
    );
}

export default Calendar;