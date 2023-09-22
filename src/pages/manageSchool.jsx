import {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {stopScroll} from '../utils/utils.js';
import MainLayout from "../shared/mainLayout/mainLayout.jsx";
import Team from "../shared/team/team.jsx";
import MultiSelectionTeam from "../shared/multiSelectionTeam/multiSelectionTeam.jsx";
import Button from "../shared/button/button.jsx";
import SideModal from "../shared/sideModal/sideModal.jsx";
import AddSection from "../components/addSection.jsx";

const ManageSchool = () => {
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const [team, setTeam] = useState({
        region: "",
        cluster: "",
        // city: "",
        branch: "",
        teamLevel: [],
    });

    useEffect(() => {
        stopScroll(isModalOpen)
        handleDisable()
    }, [isModalOpen, team])


    const handleLevelChange = (target) => {
        const {value} = target;

        if (target.checked) {
            if (!team?.teamLevel?.includes(value)) {
                setTeam((prevTeam) => ({...prevTeam, teamLevel: [...prevTeam.teamLevel, value]}));
            }
        } else {
            setTeam((prevTeam) => ({...prevTeam, teamLevel: prevTeam.teamLevel.filter((item) => item !== value)}));
        }
    }

    // Open/Close Modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Handle Change team value
    const handleChange = (target) => {
        const {name, value} = target;
        setTeam((prevTeam) => ({...prevTeam, [name]: value}))
    }

    const handleDisable = () => {
        const isEveryKeyEmpty = Object.values(team).some(value => {
            if (Array.isArray(value)) {
                return value.length === 0;
            } else {
                return value === "";
            }
        });
        setDisabled(isEveryKeyEmpty);
    }

    const region = ["ROC", "RON", "ROS"]
    const cluster = ["Cluster 1", "Cluster 2", "Cluster 3", "Cluster 4", "Cluster 5", "Cluster 6", "Cluster 7", "Cluster 8", "Cluster 9"]
    // const city = ["Lahore", "Islamabad", "Peshawar", "Rawalpindi", "Kashmir", "Rawalakot"]
    const branch = ["Gulberg", "Shadman", "Johar Town", "Zaman Park", "Azadi Chowk", "Badshahi Masjid Lahore"]
    const level = ["Early Year - Co-Education", "Early Year - Boys", "Low Primary - Co-Education", "Primary - Co-Education", "Primary - Girls", "Primary - Boys", "IB School - Co-Education", "Secondary School - Co-Education", "Secondary School - Boys", "Secondary School - Girls", "All / Whole"]

    return (
        <MainLayout>

            <div className='container min-h-[calc(100vh-178px)]'>

                <div className='flex flex-col gap-10 pb-10 pt-6'>

                    <div>
                        <h3 className='text-h3 font-primary text-center text-blue-dark1'>Welcome to Beaconhouse</h3>
                        <p className='text-center font-primary text-sm text-blue-dark1'>Please provide content from
                            beacon house team</p>
                    </div>

                    <div
                        className={`grid grid-flow-row gap-y-8 lg:gap-y-12 gap-x-5 md:gap-x-10 lg:gap-x-15 3xl:gap-x-20 lg:grid-cols-2 grid-cols-1`}>
                        <Team
                            items={region}
                            title="Select Region"
                            name="region"
                            onChange={handleChange}
                        />

                        <Team
                            items={cluster}
                            title="Select Cluster"
                            name="cluster"
                            onChange={handleChange}
                        />

                        {/*<Team*/}
                        {/*    items={city}*/}
                        {/*    title="Select City"*/}
                        {/*    name="city"*/}
                        {/*    onChange={handleChange}*/}
                        {/*/>*/}

                        <Team
                            items={branch}
                            title="Select Branch"
                            name="branch"
                            onChange={handleChange}
                        />

                        <MultiSelectionTeam
                            items={level}
                            title="Select Level"
                            name="level"
                            onChange={handleLevelChange}
                        />

                    </div>

                    <div className='flex justify-end mt-20'>
                        <Button
                            rounded={true}
                            type="button"
                            title="Next"
                            color={"blue-dark2"}
                            className="px-18 py-3"
                            disabled={disabled}
                            onClick={() => navigate("/timetable-whole")}
                        />
                    </div>

                </div>
            </div>

            {/*<SideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} title="Manage School">*/}
            {/*    <AddSection/>*/}
            {/*</SideModal>*/}

        </MainLayout>
    );
}

export default ManageSchool;