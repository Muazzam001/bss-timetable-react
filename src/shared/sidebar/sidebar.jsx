import {useState} from "react";
import Image from "../image/image.jsx";
import {assets} from "../../assets/index.jsx";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        {title: "Whole", src: assets.whole},
        {title: "Teachers", src: assets.teacher},
        {title: "Classrooms", src: assets.classroom},
        {title: "Subjects", src: assets.textBooks},
        {title: "Room Supervision", src: assets.facilitator},
        {title: "Settings", src: assets.settings},
    ];

    const handleSideBar = () => {
        setOpen(!open);
    };

    return (
        <div className="flex sticky top-0">
            <div
                className={`bg-dark-purple p-5 pt-8 relative duration-300 ${open ? "w-72" : "w-24"}`}
            >
                <ul className="pt-4 flex flex-col gap-2">
                    <div
                        onClick={handleSideBar}
                        className="flex items-center justify-start rounded-md py-2 cursor-pointer font-primary"
                    >
                        {open ? (
                            <div className="bg-lightsky-blue rounded-md p-1">
                                <Image
                                    src={assets.hamburger}
                                    alt="hamburger sidebar icon"
                                    className="w-[25px] rounded-md"
                                />
                            </div>
                        ) : (
                            <div className="bg-lightsky-blue rounded-md p-1">
                                <Image
                                    src={assets.close}
                                    alt="close sidebar icon"
                                    className="w-[25px] rounded-md"
                                />
                            </div>
                        )}
                    </div>
                    {Menus.map((menu, index) => (
                        <li
                            key={index}
                            className={`flex ${!open ? "justify-center" : ""} rounded-md p-2 cursor-pointer hover:bg-blue-dark2 hover:text-white font-primary bg-white text-sm items-center gap-x-4`}
                        >
                            <Image src={menu.src} className="w-[25px]" alt={"sidebar icon"}/>
                            {open && (
                            <span className={`origin-left duration-100 inline-block`}>
                                {menu.title}
                            </span>)
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;

