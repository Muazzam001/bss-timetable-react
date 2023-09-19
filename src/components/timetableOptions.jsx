import React from 'react'
import {assets} from "@/src/assets/index.jsx";
import Image from '@/src/shared/image/image.jsx';

const TimetableOptions = () => {
    const timetableData = [
        {src: assets.testing, title: "Test"},
        {src: assets.reportCard, title: "Generate New"},
        {src: assets.decisionMaking, title: "Verification"},
        {src: assets.relations, title: "Relations"},
    ]
    const options = timetableData?.map((option, index) => {
        return (
            <div className='flex flex-col-reverse items-center gap-2 hover:bg-blue-light1 rounded-md mx-2'
                 key={`${index}`}>
                <Image src={option?.src} alt={option.title} className="w-18"/>
                <span className='font-primary text-sm font-semibold'>{option.title}</span>
            </div>
        )
    })
    return (
        <div className='grid grid-cols-2 gap-y-10 mt-6'>
            {options}
        </div>
    )
}

export default TimetableOptions