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
            <div className='flex justify-center items-center gap-2 flex-col p-1 hover:bg-blue-light1 rounded-md'
                 key={`${index}`}>
                <span className='font-primary text-sm font-semibold'>{option.title}</span>

                <Image src={option?.src} alt={option.title} className="w-18 h-18"/>
            </div>
        );
    });

    return (
        <>
            <div className='grid grid-cols-2 gap-y-10 p-4'>
                {options}
            </div>
        </>
    );
}

export default TimetableOptions;