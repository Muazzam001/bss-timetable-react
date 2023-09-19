import React, {useState} from 'react';
import InputField from '@/src/shared/input/inputField.jsx';
import MainLayout from '@/src/shared/mainLayout/mainLayout.jsx';
import Button from '@/src/shared/button/button.jsx';
import InputSelect from '@/src/shared/inputSelect/inputSelect.jsx';

const SelectTimetable = () => {
    const [teamLevel, setTeamLevel] = useState("")
    const [year, setYear] = useState("")
    const cluster = ["Cluster 1", "Cluster 2", "Cluster 3", "Cluster 4", "Cluster 5", "Cluster 6", "Cluster 7", "Cluster 8", "Cluster 9"]
    const level = ["Early Year - Co-Education", "Early Year - Boys", "Low Primary - Co-Education", "Primary - Co-Education", "Primary - Girls", "Primary - Boys", "IB School - Co-Education", "Secondary School - Co-Education", "Secondary School - Boys", "Secondary School - Girls", "All / Whole"]
    return (
        <MainLayout>
            <div className='bg-gray-light-yellowish pt-10'>
                <div className='container flex items-center flex-wrap gap-4'>

                    <InputField
                        placeholder="ROC"
                        className="h-10 lg:!w-38"
                    />

                    <InputField
                        placeholder="Cluster 5"
                        className="h-10 lg:!w-38"
                    />

                    <InputField
                        placeholder="Beaconhouse-Newlands 1"
                        className="h-10 lg:!w-38"
                    />

                    <InputField
                        placeholder="Lahore"
                        className="h-10 lg:!w-38"
                    />

                    <InputSelect
                        label="Select Year"
                        width={"160px"}
                        options={cluster}
                        defaultValue="year"
                        value={teamLevel}
                        onChange={(e) => setTeamLevel(e.target.value)}
                    />

                    <InputSelect
                        label="Select Year"
                        width={"160px"}
                        options={level}
                        defaultValue="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />

                    <Button
                        rounded={false}
                        type="button"
                        title="Reset & Manage"
                        color={"blue-dark2"}
                        className="font-medium text-sm h-10 mt-1 min-w-[160px] justify-start"
                    />
                </div>
                <div className='container flex items-center justify-end flex-wrap gap-4 mt-10'>
                    <div className='bg-white w-2/5 flex justify-end border border-gray-medium py-2 pr-5'>
                        <InputSelect
                            label="Select Year"
                            width={"160px"}
                            options={level}
                            defaultValue="year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default SelectTimetable;
