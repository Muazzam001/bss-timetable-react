import React, { useState } from "react";
import { assets } from "../assets/index.jsx";
import Image from "../shared/image/image.jsx";
import SearchControls from "../shared/searchControls/searchControls.jsx";

const Control = () => {
    const [control, setControl] = useState("");
    const [checkedSubjects, setCheckedSubjects] = useState([]);
    const [checkedClasses, setCheckedClasses] = useState([]);
    const [checkedClassrooms, setCheckedClassrooms] = useState([]);
    const [checkedTeachers, setCheckedTeachers] = useState([]);
    const controlsData = [
        { src: assets.subjects, title: "Subjects" },
        { src: assets.classBW, title: "Classes" },
        { src: assets.classroomBW, title: "Classrooms" },
        { src: assets.teacherBW, title: "Teachers" },
    ]
    const [findSubjects, setFindSubjects] = useState([
        {
            id: 1,
            label: "Math",
            short: "MTH",
            check: true,
        },
        {
            id: 2,
            label: "Physics",
            short: "PHY",
            check: true,
        },
        {
            id: 3,
            label: "English",
            short: "ENG",
            check: false,
        },
        {
            id: 4,
            label: "Urdu",
            short: "URD",
            check: true,
        },
        {
            id: 5,
            label: "Islamiat",
            short: "ISL",
            check: false,
        },
        {
            id: 6,
            label: "Pakistan Studies",
            short: "PST",
            check: false,
        },
        {
            id: 7,
            label: "Computer Science",
            short: "CS",
            check: true,
        },
        {
            id: 8,
            label: "Chemistry",
            short: "CHE",
            check: true,
        },
        {
            id: 9,
            label: "Biology",
            short: "BIO",
            check: false,
        },
    ])

    const [findClasses, setFindClasses] = useState([
        {
            id: 1,
            label: "1st",
            short: "1st",
            check: false,
        },
        {
            id: 2,
            label: "2nd",
            short: "2nd",
            check: true,
        },
        {
            id: 3,
            label: "3rd",
            short: "3rd",
            check: false,
        },
        {
            id: 4,
            label: "4th",
            short: "4th",
            check: true,
        },
        {
            id: 5,
            label: "5th",
            short: "5th",
            check: true,
        },
        {
            id: 6,
            label: "6th",
            short: "6th",
            check: false,
        },
        {
            id: 7,
            label: "7th",
            short: "7th",
            check: false,
        },
        {
            id: 8,
            label: "8th",
            short: "8th",
            check: true,
        },
        {
            id: 9,
            label: "9th",
            short: "9th",
            check: false,
        },
    ])
    const [findClassrooms, setFindClassrooms] = useState([
        {
            id: 1,
            label: "8A",
            short: "8A",
            check: false,
        },
        {
            id: 2,
            label: "8B",
            short: "8B",
            check: false,
        },
        {
            id: 3,
            label: "8C",
            short: "8C",
            check: true,
        },
        {
            id: 4,
            label: "9A",
            short: "9A",
            check: false,
        },
        {
            id: 5,
            label: "9B",
            short: "9B",
            check: false,
        },
        {
            id: 6,
            label: "9C",
            short: "9C",
            check: true,
        },
        {
            id: 7,
            label: "10A",
            short: "10A",
            check: true,
        },
        {
            id: 8,
            label: "10B",
            short: "10B",
            check: false,
        },
        {
            id: 9,
            label: "10C",
            short: "10C",
            check: true,
        },
    ])
    const [findTeachers, setFindTeachers] = useState([
        {
            id: 1,
            label: "Ali",
            short: "Ali",
            check: false,
        },
        {
            id: 2,
            label: "Ahmed",
            short: "Ahmad",
            check: true,
        },
        {
            id: 3,
            label: "Nazir",
            short: "Nazir",
            check: true,
        },
        {
            id: 4,
            label: "Nasir",
            short: "Nasir",
            check: false,
        },
        {
            id: 5,
            label: "Imran",
            short: "Imran",
            check: true,
        },
        {
            id: 6,
            label: "Abdullah",
            short: "Abdullah",
            check: false,
        },
        {
            id: 7,
            label: "Ayesha",
            short: "Ayesha",
            check: false,
        },
        {
            id: 8,
            label: "Chaudhry",
            short: "Chaudhry",
            check: true,
        },
        {
            id: 9,
            label: "Aliya",
            short: "Aliya",
            check: true,
        },
    ])

    const subjectsData = [
        {
            id: 1,
            subjectShort: "CHE",
            subjectFull: "Chemistry",
        },
        {
            id: 2,
            subjectShort: "BIO",
            subjectFull: "Biology",
        },
        {
            id: 3,
            subjectShort: "PHY",
            subjectFull: "Physics",
        },
        {
            id: 4,
            subjectShort: "MTH",
            subjectFull: "Mathimatics",
        },
        {
            id: 5,
            subjectShort: "PST",
            subjectFull: "Pakisatn Studies",
        },
        {
            id: 6,
            subjectShort: "ISL",
            subjectFull: "Islamiat",
        }
    ]

    const subjects = subjectsData?.map((subject, index) => {
        const colors = {
            CHE: "bg-[#997D6C]",
            BIO: "bg-[#898989]",
            ISL: "bg-[#88DEDE]",
            PHY: "bg-[#DA86BB]",
            MTH: "bg-[#BEAD2E]",
            PST: "bg-[#5BCB5A]",
        }
        const cellColor = colors[subject.subjectShort] || 'bg-blue-dark2';
        return (
            <span key={`${index}`} className={`flex flex-auto items-center justify-center font-primary hover:bg-transparent font-semibold text-xs border border-black p-1 ${cellColor} cursor-pointer`}>
                {subject.subjectShort}
            </span>
        )
    })

    const handleControls = (title) => {
        setControl((prevControl) => {
            if (prevControl === title) {
                return ""
            }
            return title
        })
    }



    const controls = controlsData?.map((module) => {
        const selectedItems = (findModules) => {

            return findModules?.filter((item) => item.check === true)
                .map((item) => item.short);
        }
        return (
            <>
                <div>
                    <div className={`flex gap-1 items-center cursor-pointer group ${control === module?.title ? "bg-blue-dark2 hover:bg-blue-dark2" : "hover:bg-blue-light1"} p-2 rounded`} onClick={() => handleControls(module?.title)}>
                        <Image src={module?.src} alt={module.title} className={`w-12 ${control === module?.title ? "invert" : ""}`} />
                        <span className={`font-primary text-xs font-semibold ${control === module?.title ? "text-white" : ""}`}>{`Find ${module.title}`}</span>
                    </div>
                    <div className="font-primary text-blue-dark2 text-xs font-semibold">
                        {module?.title === "Subjects" ? (
                            selectedItems(findSubjects).join(", ")
                        ) : module?.title === "Classes" ? (
                            selectedItems(findClasses).join(", ")
                        ) : module?.title === "Classrooms" ? (
                            selectedItems(findClassrooms).join(", ")
                        ) : module?.title === "Teachers" ? (
                            selectedItems(findTeachers).join(", ")
                        ) : null
                        }
                    </div>
                </div>
            </>
        )
    })
    return (
        <div>
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
            <div className="relative">
                <div className="flex flex-col gap-y-6 mt-10 px-4">
                    {React.Children.toArray(controls)}
                </div>
                <div className="absolute -top-18 right-full z-50 ">
                    {control === "Subjects" ? (
                        <div>
                            <SearchControls header="Subjects" data={findSubjects} setData={setFindSubjects} />
                        </div>
                    )
                        : control === "Classes" ? (
                            <div>
                                <SearchControls header="Classes" data={findClasses} setData={setFindClasses} />
                            </div>
                        )
                            : control === "Classrooms" ? (
                                <div>
                                    <SearchControls header="Classrooms" data={findClassrooms} setData={setFindClassrooms} />
                                </div>
                            )
                                : control === "Teachers" ? (
                                    <div>
                                        <SearchControls header="Teachers" data={findTeachers} setData={setFindTeachers} />
                                    </div>
                                )
                                    : null}
                </div>
            </div>
        </div>
    )
}

export default Control