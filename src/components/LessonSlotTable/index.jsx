import Image from "../../shared/Image";
import {assets} from "../../assets";
import Tooltips from "../../shared/Tooltips";

const LessonSlotTable = ({openRowUpdateModal, tableHeadData, tableData, setUpdatedRow, openEditBreakModal}) => {
    return (
        <div className="h-[350px] 2xl:h-[450px] overflow-auto">

            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm mt-2">
                <thead className="ltr:text-left rtl:text-right">
                <tr>
                    {tableHeadData.map((item) => {
                        return (
                            <th key={`${item.id}`}
                                className={`${item?.id == 1 ? "w-5 pl-8" : item?.id == 2 ? "!text-left w-36" : "w-36"} whitespace-nowrap px-4 py-2 font-medium font-primary text-gray-900`}>
                                {item.name}
                            </th>
                        )
                    })}
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                {tableData.map((item) => {
                    return (
                        <tr key={`${item.id}`} className="even:bg-gray-light">
                            <td className="whitespace-nowrap p-1 pl-4 font-primary text-center text-gray-900 !w-fit">{item?.break ? (
                                <Tooltips title="Add break that will be between lessons">
                                    <Image src={assets.tooltip} className="w-4 h-4 cursor-pointer"/>
                                </Tooltips>
                            ) : null}</td>
                            <td className="whitespace-nowrap pr-4 py-2 font-primary  text-gray-900">{item.name}</td>
                            <td className="whitespace-nowrap px-4 py-2 font-primary text-center text-gray-700">{item.short}</td>
                            <td className="whitespace-nowrap px-4 py-2 font-primary text-center text-gray-700">{item.startTime}</td>
                            <td className="whitespace-nowrap px-4 py-2 font-primary text-center text-gray-700">{item.endTime}</td>
                            <td className="whitespace-nowrap px-4 py-2 font-primary text-center text-gray-700">{item.lessonDuration}</td>
                            <td className="whitespace-nowrap px-4 py-2 font-primary text-center text-gray-700 flex justify-center items-center">
                                    <span
                                        onClick={() => {
                                            item?.break ? openEditBreakModal(true) : openRowUpdateModal(true);
                                            setUpdatedRow(item);
                                        }}
                                    >
                                        <Image
                                            src={assets.edit2}
                                            alt="edit icon"
                                            className="w-4 h-4 cursor-pointer"
                                        />
                                    </span>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default LessonSlotTable;