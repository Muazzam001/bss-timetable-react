import { useState, useEffect } from 'react';
import { stopScroll } from "../../../utils/utils.js";
import { assets } from "../../../assets/index.jsx";
import MainLayout from "../../../shared/mainLayout/mainLayout.jsx";
import InputField from "../../../shared/input/inputField.jsx";
import InputSelect from "../../../shared/inputSelect/inputSelect.jsx";
import Button from "../../../shared/button/button.jsx";
import ManageLesson from "../../../shared/manageLesson/manageLesson.jsx";
import Calendar from "../../../components/timetable/calendar.jsx";
import Processing from "../../../shared/processing/processing.jsx";
import MainModal from "../../../shared/mainModal/mainModal.jsx";
import SideModal from "../../../shared/sideModal/sideModal.jsx";
import Sidebar from '../../../shared/sidebar/sidebar.jsx';

// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function CustomTabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }
// CustomTabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };
// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }

const Whole = () => {
    const [calendarDisplay, setCalendarDisplay] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [duplicateName, setDuplicateName] = useState("");
    const [open, setOpen] = useState(false)
    const [year, setYear] = useState("")
    const [lesson, setLesson] = useState("")
    const [option, setOption] = useState("")
    const [type, setType] = useState("")
    // const cluster = ["Cluster 1", "Cluster 2", "Cluster 3", "Cluster 4", "Cluster 5", "Cluster 6", "Cluster 7", "Cluster 8", "Cluster 9"]
    const level = ["Default", "Winter - Default"]

    const Menus = [
        { title: "Home", src: assets.home },
        { title: "Subjects", src: assets.subject },
        { title: "Classes", src: assets.classes },
        { title: "Classrooms", src: assets.classroom },
        { title: "Teachers", src: assets.teacher2 },
        { title: "Modules", src: assets.modules },
    ];

    useEffect(() => {
        stopScroll(isModalOpen)
    }, [isModalOpen])


    const duplicateOption = ["Lession Setting and Data", "Lession Setting Only"];
    const duplicateType = ['Default', 'Advance - Tution'];

    // const [value, setValue] = React.useState(0);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    return (
        <MainLayout headerItem={Menus}>

            <div className='relative py-8 min-h-[calc(100vh-178px)]'>

                <div className='container grid grid-flow-col items-center grid-cols-12 gap-3 '>

                    <div className='col-span-5 grid grid-flow-col gap-3 items-center'>
                        <div>
                            <InputField
                                placeholder="ROC"
                                className="w-full"
                                disabled
                            />
                        </div>

                        <div>
                            <InputField
                                placeholder="Cluster 5"
                                className="w-full"
                                disabled
                            />
                        </div>

                        <div>
                            <InputField
                                placeholder="TNS Defence, Lahore"
                                className="w-full"
                                disabled
                            />
                        </div>

                    </div>

                    <div className='col-span-6 grid grid-flow-col grid-cols-3 gap-3 items-center'>
                        <div className='col-span-2'>
                            <InputSelect
                                width={"100%"}
                                className="min-w-[200px]"
                                options={level}
                                defaultValue="year"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                        </div>
                        {/*<InputSelect*/}
                        {/*    width={"100%"}*/}
                        {/*    className="min-w-[200px]"*/}
                        {/*    options={cluster}*/}
                        {/*    defaultValue="year"*/}
                        {/*    value={teamLevel}*/}
                        {/* onChange={(e) => setTeamLevel(e.target.value)} */}
                        {/*/>*/}
                        <div>
                            <InputField
                                placeholder="Academic Year 2024"
                                className="w-full"
                                disabled
                            />
                        </div>
                    </div>

                    <div className='col-span-1 flex items-center'>
                        <Button
                            rounded={false}
                            type="button"
                            title="Reset & Manage"
                            color={"blue-dark2"}
                            className="font-medium text-sm h-12 min-w-[150px] justify-start"
                            onClick={() => setCalendarDisplay(true)}
                        />
                    </div>

                </div>

                <ManageLesson
                    options={level}
                    icon={assets.settings}
                    text={"Manage Lesson Slots"}
                    value={lesson}
                    setState={setLesson}
                    setIsOpen={setIsModalOpen}
                />

                <div className='absolute top-16 z-50'>
                    <Sidebar />
                </div>

                {calendarDisplay ? (
                    <>
                        <Calendar />
                    </>
                ) : (
                    <div className='flex justify-center'>
                        <Processing image={assets.loading} label="Please select timetable above option"
                            btnColor="bg-warning" />
                    </div>
                )}
            </div>

            <MainModal
                open={open}
                setOpen={setOpen}
                image={assets.okbro}
                label={`Duplicated timetable successfully has been created "Winter".`}
                btnColor="bg-success"
                border
            >
                <Button
                    rounded={true}
                    type="button"
                    title="Ok"
                    color={"blue-dark2"}
                    className="px-18 py-3"
                    onClick={() => setOpen(false)}
                />
            </MainModal>

            <SideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} title="Manage Duplicate Timetable">
                <section className='w-[500px]'>
                    <div className='flex flex-col gap-y-8'>
                        <InputField
                            label="Duplicate Name"
                            placeholder="Type Duplicate Name"
                            className="h-10 w-full"
                            value={duplicateName}
                            onChange={(e) => setDuplicateName(e.target.value)}
                        />

                        <InputSelect
                            label="Duplicate Option"
                            width={"100%"}
                            className="min-w-[200px]"
                            options={duplicateOption}
                            defaultValue="year"
                            value={option}
                            onChange={(e) => setOption(e.target.value)}
                            setState={setOption}
                        />

                        <InputSelect
                            label="Duplicate Type"
                            width={"100%"}
                            className="min-w-[200px]"
                            options={duplicateType}
                            defaultValue="year"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        />

                    </div>

                    <div className='flex gap-5 justify-end mt-10'>
                        <Button
                            title="Cancel"
                            rounded={true}
                            hover={false}
                            className="!px-8 !bg-gray-medium !text-black !text-sm"
                        />

                        <Button
                            rounded={true}
                            type="button"
                            title="Generate Clone"
                            color={"blue-dark2"}
                            className="px-18 py-3"
                            onClick={() => {
                                setIsModalOpen(false)
                                setOpen(true)
                            }}
                        />
                    </div>
                </section>

                {/* <section>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Item One" {...a11yProps(0)}/>
                                <Tab label="Item Two" {...a11yProps(1)} />
                                <Tab label="Item Three" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            Item One
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            Item Two
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            Item Three
                        </CustomTabPanel>
                    </Box>
                </section> */}

            </SideModal>
        </MainLayout>
    );
}

export default Whole;