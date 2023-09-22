import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {assets} from "../../assets/index.jsx";
import Image from "../image/image.jsx";

const CalendarHeader = ({calendarRef, dayName, selectedTab, setSelectedTab}) => {

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };

    const tabItems = [
        {name: 'Control', imageSrc: assets.control},
        {name: 'Default Setting', imageSrc: assets.deadline},
        {name: 'Workload', imageSrc: assets.choose},
        {name: 'Timetable Options', imageSrc: assets.calendar},
    ];

    return (
        <>

            <div className='flex justify-between items-center bg-white border border-gray-medium border-b-0 mt-5'>

                <div className='flex items-center gap-5 py-2 pl-10'>

                    <Image src={assets.calendar1} alt="calendar icon" className="w-8"/>

                    <span className='font-primary font-semibold'>Timetable</span>
                    {/* <div className='flex items-center gap-1'>

                    <span className='font-primary font-semibold'>{dayName}</span>
                    <ArrowLeft
                        className="cursor-pointer hover:bg-blue-light1 rounded-md"
                        onClick={() => {
                            const calenderNext = calendarRef.current.getApi();
                            calenderNext.prev();
                        }} />

                    <ArrowRight
                        className="cursor-pointer hover:bg-blue-light1 rounded-md"
                        onClick={() => {
                            const calenderNext = calendarRef.current.getApi();
                            calenderNext.next();
                        }} />
                    <span className='font-primary'>{year}</span>

                </div> */}
                    {/* <div className='ml-5'>

                    <button className='bg-blue-dark2 text-white px-4 py-1 font-primary' onClick={() => {
                        const calenderNext = calendarRef.current.getApi();
                        calenderNext.changeView('dayGridDay')
                    }}>Day
                    </button>
                    <button
                        className='bg-gray-dark2 text-white px-4 py-1 font-primary'
                        onClick={() => {
                            const calenderNext = calendarRef.current.getApi();
                            calenderNext.changeView('dayGridWeek')
                        }}
                        disabled
                    >Week
                    </button>

                </div> */}
                </div>

                <div className='flex items-center gap-3 max-w-[300px] w-full'>

                    {tabItems.map((tab, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col items-center font-primary font-semibold text-tny border-t-4 rounded border-gray-medium cursor-pointer hover:bg-blue-light1 ${selectedTab === tab.name ? `border-[#175088]` : ''}`}
                            onClick={() => handleTabClick(tab.name)}
                        >
                            <span className='-translate-y-8'>{tab.name}</span>
                            <Image src={tab.imageSrc} alt='' className={`w-8 -translate-y-2`}/>

                            {selectedTab === tab.name && (
                                <div className='absolute -bottom-6 w-full text-center'>
                                    <PlayArrowIcon className='text-blue-dark2 rotate-90 !w-5'/>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/*<div className='flex items-center gap-8 '>*/}
                {/* <div className='flex items-center gap-3 pt-2'>
                        <div className='flex flex-col items-center font-primary font-semibold text-tny border-t-4 rounded border-gray-medium'>
                            <span className='-translate-y-8'>Control</span>
                            <Image src={assets.control} alt="" className="w-8 -translate-y-2" />
                        </div>
                        <div className='flex flex-col items-center font-primary font-semibold text-tny border-t-4 rounded border-gray-medium'>
                            <span className='-translate-y-8'>Default Setting</span>
                            <Image src={assets.deadline} alt="" className="w-8 -translate-y-2" />
                        </div>
                        <div className='flex flex-col items-center font-primary font-semibold text-tny border-t-4 rounded border-gray-medium'>
                            <span className='-translate-y-8'>Workload</span>
                            <Image src={assets.choose} alt="" className="w-8 -translate-y-2" />
                        </div>
                        <div className='flex flex-col items-center font-primary font-semibold text-tny border-t-4 rounded border-gray-medium'>
                            <span className='-translate-y-8'>Timetable Options</span>
                            <Image src={assets.calendar} alt="" className="w-8 -translate-y-2" />
                        </div>
                    </div> */}
                {/*</div>*/}

            </div>
        </>
    )
}

export default CalendarHeader;