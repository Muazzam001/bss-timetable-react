import {assets} from "../../assets";
import Image from "../../shared/Image";

const TimetableOptions = () => {
    const timetableData = [
        {src: assets.testing, title: "Test"},
        {src: assets.reportCard, title: "Generate New"},
        {src: assets.decisionMaking, title: "Verification"},
        {src: assets.relations, title: "Relations"},
    ]
    const options = timetableData?.map((option, index) => {
        return (
            <div className='flex justify-center items-center flex-col gap-y-2 p-1 rounded-md hover:bg-blue-light1'
                 key={`${index}`}>
                <span className='font-primary text-sm font-semibold'>{option.title}</span>

                <Image src={option?.src} alt={option.title} className="w-15 h-15"/>
            </div>
        );
    });

    return (
        <>
            <div className='grid grid-cols-2 gap-y-10 p-4'>{options}</div>
        </>
    );
}

export default TimetableOptions;