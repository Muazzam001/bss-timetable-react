import {assets} from "../../assets";
import ArrowLeft from "../../assets/icons/arrowLeft.jsx";
import Image from "../Image";
import Button from "../Button";
import InputField from "../Input";

const Modal = ({isOpen, onClose, team}) => {
    return (
        <>
            {isOpen && (
                <div onClick={onClose}
                     className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-40 overflow-y-hidden"/>
            )}

            <div
                className={`z-50 fixed top-0 right-0 min-h-screen overflow-y-auto w-[55%] border border-gray-medium transform transition-transform ease-in-out duration-700 bg-gray-light-bluish ${
                    isOpen ? "translate-x-0" : "translate-x-full"} `}>
                <div onClick={onClose} className="bg-white py-5 px-3 border-y border-slate-300 cursor-pointer">
                    <ArrowLeft className="!w-6 !h-6"/>
                </div>

                <div className="my-5 ml-16">
                    <h3 className="text-xl text-bold font-primary">Manage School</h3>
                </div>
                <div
                    className="flex flex-col gap-y-14 bg-white my-8 lg:mx-8 mx-2 border rounded-md border-gray-300 p-4 pt-10 overflow-y-auto">
                    <div className="flex gap-x-3 items-center">
                        <span>
                          <Image src={assets.section} alt="Input field icon" className="h-9 w-9"/>
                        </span>

                        <h2 className="leading-7 text-2xl font-primary">Add Section</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-6">
                        <div className="sm:col-span-3 mt-2">
                            <InputField
                                type="text"
                                htmlFor="region"
                                name="region"
                                id="region"
                                label="Select Region"
                                className="!p-3 w-full"
                                placeholder="Select Region..."
                                disabled={team.region !== ""}
                                // value={}
                                // onChange={}
                            />
                        </div>

                        {team.region !== "" ? (
                            <div className="sm:col-span-3 mt-2">
                                <InputField
                                    type="text"
                                    htmlFor="cluster"
                                    name="cluster"
                                    id="cluster"
                                    label="Select Cluster"
                                    placeholder="Select Cluster..."
                                    className="!p-3 w-full"
                                    disabled={team.region !== "" && team.cluster !== ""}
                                    // value={ }
                                    // onChange={ }
                                />
                            </div>
                        ) : null}

                        {team.region !== "" && team.cluster !== "" ? (
                            <div className="sm:col-span-3">
                                <div className="mt-2">
                                    <InputField
                                        type="text"
                                        htmlFor="city"
                                        name="city"
                                        id="city"
                                        label="Select City"
                                        placeholder="Select City..."
                                        className="!p-3"
                                        disabled={
                                            team.region !== "" &&
                                            team.cluster !== "" &&
                                            team.city !== ""
                                        }
                                        // value={ }
                                        // onChange={ }
                                    />
                                </div>
                            </div>
                        ) : null}

                        {team.region !== "" && team.cluter !== "" && team.city !== "" ? (
                            <div className="sm:col-span-3 mt-2">
                                <InputField
                                    type="text"
                                    htmlFor="branch"
                                    name="branch"
                                    id="branch"
                                    label="Select Section"
                                    placeholder="Select Section..."
                                    className="!p-3 w-full"
                                    disabled={
                                        team.region !== "" &&
                                        team.cluster !== "" &&
                                        team.city !== "" &&
                                        team.branch !== ""
                                    }
                                    // value={ }
                                    // onChange={ }
                                />
                            </div>
                        ) : null}
                    </div>

                    <div className="flex flex-wrap gap-5 justify-end mt-6">
                        <Button title="Cancel" rounded={true} hover={false}
                                className="!px-8 !bg-gray-medium !text-black !text-sm"/>

                        <Button title="Save and Add More" color="blue-dark2" rounded={true} className="!px-8 !text-sm"/>

                        <Button title="Save and Finished" color="blue-dark2" rounded={true} className="!px-8 !text-sm"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
