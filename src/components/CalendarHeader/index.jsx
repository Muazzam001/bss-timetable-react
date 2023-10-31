import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { assets } from "../../assets";
import Image from "../../shared/Image";

const CalendarHeader = ({ calendarRef, dayName, selectedTab, setSelectedTab, sidebar, setSidebar, selectedSetting, setSelectedSetting }) => {

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };

    const handleTableClick = (tabName) => {
        setSelectedSetting(tabName);
    };

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    // Tab Items Data
    const tabItems = [
        { name: 'Control Options', imageSrc: assets.control },
        { name: 'Lesson Default Settings', imageSrc: assets.deadline },
    ];

    const tableItems = [
        { name: 'Default Timetable' },
        { name: 'Additional Timetable' },
    ];

    return (
        <>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center bg-white border border-gray-medium border-b-0 mt-5'>

                <div className=' flex items-center justify-between pl-10 pr-3 w-full mb-8 lg:mb-0'>
                    <div className='flex gap-5'>
                        {tableItems.map((tab, index) => (
                            <div onClick={() => handleTableClick(tab.name)} key={index}
                                className={`relative flex flex-col items-center justify-center font-primary font-semibold text-tny cursor-pointer`}>

                                <span
                                    className={`absolute -top-[24px] w-full border-t-4 rounded ${selectedSetting === tab.name ? `!border-blue-dark2` : 'border-gray-medium'}`}>&nbsp;</span>

                                <span
                                    className={`-translate-y-12 ${selectedSetting === tab.name ? `text-blue-dark2` : ''}`}>{tab.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className='flex items-center gap-5 mr-auto'>
                        <Image src={assets.calendar1} alt="calendar icon" className="w-8" />

                        <span className='font-primary font-semibold'>Timetable</span>
                    </div>

                    {/* Collapse / Expand Icon */}
                    <div className='relative py-1'>
                        <div className='absolute flex items-center gap-1 -top-5 -left-2 cursor-pointer' onClick={toggleSidebar}>
                            <span className='font-primary font-semibold text-tny'>Collapse</span>
                            <Image src={assets.collapse} alt="Collapse Icon" className={`w-3 cursor-pointer transition duration-300  ${!sidebar ? "rotate-90" : "-rotate-90"}`} />
                        </div>
                        <Image src={assets.large} alt="Collapse Icon" className="w-12 cursor-pointer" />
                    </div>
                </div>

                <div className={`flex items-center justify-between gap-x-1 md:gap-x-2 xl:gap-x-1 ${sidebar ? "lg:max-w-[300px] w-full" : "hidden"}`}>
                    {tabItems.map((tab, index) => (
                        <div onClick={() => handleTabClick(tab.name)} key={index}
                            className={`relative flex-auto h-full min-h-[3.5rem] flex flex-col items-center justify-center font-primary font-semibold text-tny cursor-pointer hover:bg-blue-light1 ${selectedTab === tab.name ? `!bg-blue-light1` : ''} `}>

                            <span
                                className={`absolute -top-[0.25rem] w-full h-4 border-t-4 rounded ${selectedTab === tab.name ? `!border-blue-dark2` : 'border-gray-medium'}`}>&nbsp;</span>

                            <span
                                className={`-translate-y-7 ${selectedTab === tab.name ? `text-blue-dark2` : ''}`}>{tab.name}</span>

                            <Image src={tab.imageSrc} alt='' className={`w-8 -translate-y-2`} />

                            {selectedTab === tab.name && (
                                <span className='absolute z-50 -bottom-4 w-full text-center'>
                                    <PlayArrowIcon className='text-blue-dark2 rotate-90 !w-5' />
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CalendarHeader;