import {useState} from "react";
import Image from "../image/image.jsx";
import {assets} from "../../assets/index.jsx";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [sideMenu, setSideMenu] = useState("");
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
            <div className={`bg-dark-purple mt-5`}>
                <div className="flex items-center justify-start rounded-md py-2 cursor-pointer font-primary p-4">
                    <div className="bg-blue-light2 rounded-md p-1" onClick={handleSideBar}>
                        <Image
                            src={open ? (assets.close) : (assets.hamburger)}
                            alt="hamburger sidebar icon"
                            className="w-[25px] rounded-md"
                        />
                    </div>
                </div>
                <ul className='pl-4 pt-3 flex flex-col gap-y-2 duration-300'>
                    {Menus.map((menu, index) => (
                        (open || sideMenu === menu?.title) && (
                            <li
                                className={`${open ? "px-2 w-60" : "w-0"} ${sideMenu === menu?.title ? "bg-blue-dark2 text-white !w-60 !px-2" : "bg-white"} flex duration-300 rounded-md py-2 cursor-pointer hover:bg-blue-dark2 hover:text-white font-primary text-sm items-center gap-x-4`}
                                key={index}
                                onClick={() => {
                                    setSideMenu(menu.title);
                                    handleSideBar();
                                }}>
                                <Image src={menu.src} className="w-6 h-6" alt={"sidebar icon"}/>
                                <span className={`origin-left duration-100 inline-block`}>{menu.title}</span>
                            </li>
                        )
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;

