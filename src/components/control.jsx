import React from 'react';
import {assets} from "@/src/assets/index.jsx";
import Image from '@/src/shared/image/image.jsx';

const Control = () => {
    const controlsData = [
        {src: assets.subjects, title: "Find Subjects"},
        {src: assets.classBW, title: "Find Classes"},
        {src: assets.classroomBW, title: "Find Classrooms"},
        {src: assets.teacherBW, title: "Find Teachers"},
    ]

    const controls = controlsData?.map((control, index) => {
        return (
            <div className='flex gap-2 items-center' key={`${index}`}>
                <Image src={control?.src} alt={control.title} className="w-12"/>
                <span className='font-primary text-xs font-semibold'>{control.title}</span>
            </div>
        )
    })
    return (
        <div className='px-4 flex flex-col gap-y-10 mt-10'>
            {controls}
        </div>
    )
}

export default Control