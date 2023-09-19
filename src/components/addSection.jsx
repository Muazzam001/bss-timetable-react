import React from 'react';
import Image from '@/src/shared/image/image.jsx';
import {assets} from "@/src/assets/index.jsx";
import InputField from '@/src/shared/input/inputField.jsx';
import Button from '@/src/shared/button/button.jsx';

const AddSection = ({team}) => {
    return (
        <>
            <div className='flex gap-x-3 items-center'>
                <span><Image src={assets.section} alt="Input field icon" className='h-9 w-9'/></span>
                <h2 className="leading-7 text-2xl font-primary">Add Section</h2>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-6">
                <div className="sm:col-span-3">
                    <InputField
                        type="text"
                        htmlFor="region"
                        name="region"
                        id="region"
                        label="Select Region"
                        className="!p-3"
                        placeholder="Select Region..."
                        disabled={team.region !== ""}
                        // value={}
                        // onChange={}
                    />
                </div>

                {team.region !== "" ? (
                    <div className="sm:col-span-3">
                        <InputField
                            type="text"
                            htmlFor="cluster"
                            name="cluster"
                            id="cluster"
                            label="Select Cluster"
                            placeholder="Select Cluster..."
                            className="!p-3"
                            disabled={team.region !== "" && team.cluster !== ""}
                            // value={ }
                            // onChange={ }
                        />
                    </div>
                ) : null}

                {team.region !== "" && team.cluster !== "" ? (
                    <div className="sm:col-span-3">
                        <InputField
                            type="text"
                            htmlFor="city"
                            name="city"
                            id="city"
                            label="Select City"
                            placeholder="Select City..."
                            className="!p-3"
                            disabled={team.region !== "" && team.cluster !== "" && team.city !== ""}
                            // value={ }
                            // onChange={ }
                        />
                    </div>
                ) : null}

                {team.region !== "" && team.cluster !== "" && team.city !== "" ? (
                    <div className="sm:col-span-3">
                        <InputField
                            type="text"
                            htmlFor="branch"
                            name="branch"
                            id="branch"
                            label="Select Section"
                            placeholder="Select Section..."
                            className="!p-3"
                            disabled={team.region !== "" && team.cluster !== "" && team.city !== "" && team.branch !== ""}
                            // value={ }
                            // onChange={ }
                        />
                    </div>
                ) : null}
            </div>

            <div className='flex flex-wrap gap-5 justify-end mt-6'>
                <Button
                    title="Cancel"
                    rounded={true}
                    hover={false}
                    className="!px-8 !bg-gray-medium !text-black !text-sm"
                />

                <Button
                    title="Save and Add More"
                    color="blue-dark2"
                    rounded={true}
                    className="!px-8 !text-sm"
                />

                <Button
                    title="Save and Finished"
                    color="blue-dark2"
                    rounded={true}
                    className="!px-8 !text-sm"
                />
            </div>
        </>
    )
}

export default AddSection
