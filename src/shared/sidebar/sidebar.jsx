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
    ];

    const handleSideBar = () => {
        setOpen(!open);
    };

    return (
        <div className="flex sticky top-0">
            <div className={`bg-dark-purple p-4 relative duration-300 ${open ? "w-72" : "w-20"}`}>
                <div className="flex items-center justify-start rounded-md py-2 cursor-pointer font-primary">
                    <div className="bg-blue-light2 rounded-md p-1" onClick={handleSideBar}>
                        <Image
                            src={open ? (assets.hamburger) : (assets.close)}
                            alt="hamburger sidebar icon"
                            className="w-[25px] rounded-md"
                        />
                    </div>
                </div>

                <ul className="pt-3 flex flex-col gap-y-2">
                    {Menus.map((menu, index) => (
                        <li
                            key={index}
                            className={`flex ${!open ? "justify-center" : ""} rounded-md p-2 cursor-pointer hover:bg-blue-dark2 hover:text-white font-primary bg-white text-sm items-center gap-x-4`}
                        >
                            <Image src={menu.src} className="w-6 h-6" alt={"sidebar icon"}/>

                            {
                                open && (<span className={`origin-left duration-100 inline-block`}>{menu.title}</span>)
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;

