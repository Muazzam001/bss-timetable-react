import Badge from "../badge/badge.jsx";
import Edit from "../../assets/icons/edit.jsx";
import Delete from "../../assets/icons/delete.jsx";

const SubjectCard = () => {
    return (
        <>
            <article className="flex gap-4 rounded-lg border border-gray-100 bg-white p-6">
                <div className="flex justify-between w-full">
                    <div className="flex gap-x-10">
                        <span className="rounded-full bg-blue-500 text-blue-600 w-18 h-18 p-6"></span>

                        <div className="flex flex-col">
                            <p className="text-2xl font-medium font-primary text-gray-900">Mathematics</p>

                            <p className="text-md text-gray-500 font-primary">MATHS</p>
                        </div>
                    </div>

                    <div className="flex justify-between w-2/5">
                        <Badge
                            text={"UnPublished"}
                            bgColor={"bg-blue-medium1/40"}
                            textColor={"text-blue-medium1"}
                        />

                        <div className="flex gap-x-3 h-10">
                            <span
                                className="border-[1.5px] border-gray-medium rounded-full h-8 w-8 flex justify-center items-center">
                                <Edit className="!w-5 !h-5"/>
                            </span>

                            <span
                                className="border-[1.5px] border-gray-medium rounded-full h-8 w-8 flex justify-center items-center">
                                <Delete className="!w-5 !h-5"/>
                            </span>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default SubjectCard;