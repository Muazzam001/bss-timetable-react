import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {assets} from "../../assets";
import Image from "../../shared/Image";

const CalendarHeader = ({calendarRef, dayName, selectedTab, setSelectedTab, sidebar, setSidebar}) => {

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    // Tab Items Data
    const tabItems = [
        {name: 'Control', imageSrc: assets.control},
        {name: 'Default Settings', imageSrc: assets.deadline},
        {name: 'Workload', imageSrc: assets.choose},
        {name: 'Timetable Options', imageSrc: assets.calendar},
    ];

    return (
        <>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center bg-white border border-gray-medium border-b-0 mt-5'>

                <div className='flex items-center justify-between pl-10 pr-3 w-full mb-8 lg:mb-0'>

                    <div className='flex items-center gap-5'>
                        <Image src={assets.calendar1} alt="calendar icon" className="w-8"/>

                        <span className='font-primary font-semibold'>Timetable</span>
                    </div>

                    {/* Collapse / Expand Icon */}
                    <div onClick={toggleSidebar} className='py-1'>
                        {sidebar ? (
                            <Image src={assets.large} alt="Collapse Icon" className="w-12 cursor-pointer"/>
                        ) : (
                            <Image src={assets.expand} alt="Expand Icon" className="w-12 cursor-pointer"/>
                        )}
                    </div>

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

                <div className={`flex items-center justify-between gap-x-1 md:gap-x-2 xl:gap-x-1 ${sidebar ? "lg:max-w-[350px] w-full" : "hidden"}`}>
                    {tabItems.map((tab, index) => (
                        <div onClick={() => handleTabClick(tab.name)} key={index}
                             className={`relative flex-auto h-full min-h-[3.5rem] flex flex-col items-center justify-center font-primary font-semibold text-tny cursor-pointer hover:bg-blue-light1 ${selectedTab === tab.name ? `!bg-blue-light1` : ''} `}>

                            <span
                                className={`absolute -top-[0.25rem] w-full h-4 border-t-4 rounded ${selectedTab === tab.name ? `!border-blue-dark2` : 'border-gray-medium'}`}>&nbsp;</span>

                            <span
                                className={`-translate-y-7 ${selectedTab === tab.name ? `text-blue-dark2` : ''}`}>{tab.name}</span>

                            <Image src={tab.imageSrc} alt='' className={`w-8 -translate-y-2`}/>

                            {selectedTab === tab.name && (
                                <div className='absolute z-50 -bottom-4 w-full text-center'>
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
    );
}

export default CalendarHeader;