import { assets } from "../assets/index.jsx";
import Image from "../shared/image/image.jsx";

const Control = () => {
    const controlsData = [
        { src: assets.subjects, title: "Find Subjects" },
        { src: assets.classBW, title: "Find Classes" },
        { src: assets.classroomBW, title: "Find Classrooms" },
        { src: assets.teacherBW, title: "Find Teachers" },
    ]

    const subjectsData = ["CHE", "BIO", "PHY", "MTH", "PST", "ISL"]

    const subjects = subjectsData?.map((subject, index) => {
        const colors = {
            CHE: "bg-[#997D6C]",
            BIO: "bg-[#898989]",
            ISL: "bg-[#88DEDE]",
            PHY: "bg-[#DA86BB]",
            MTH: "bg-[#BEAD2E]",
            PST: "bg-[#5BCB5A]",
        }
        const cellColor = colors[subject] || 'bg-blue-dark2';
        return (
            <span key={`${index}`} className={`flex flex-auto items-center justify-center font-primary text-xs border border-black p-1 ${cellColor}`}>{subject}</span>
        )
    })


    const controls = controlsData?.map((control, index) => {
        return (
            <div className='flex gap-2 items-center' key={`${index}`}>
                <Image src={control?.src} alt={control.title} className="w-12" />
                <span className='font-primary text-xs font-semibold'>{control.title}</span>
            </div>
        )
    })
    return (
        <div className=''>
            <div>
                <div className="flex py-5 bg-gray-medium">
                    <div className="w-[30%] flex justify-center">
                        <span className={`flex h-8 w-12 mt-2 items-center justify-center font-primary text-sm border border-black p-1 bg-lime-200`}>MTH</span>
                    </div>
                    <div className="w-[70%] pr-5">
                        <p className="font-primary">
                            MTH - Mathematic
                            Muhammad Tauseef
                            CA. 9M Blue
                        </p>
                    </div>
                </div>
                <div className="flex gap-1 flex-auto px-2 py-1">
                    {subjects}
                </div>
            </div>
            <div className="flex flex-col gap-y-10 mt-10 px-4">
                {controls}
            </div>
        </div>
    )
}

export default Control