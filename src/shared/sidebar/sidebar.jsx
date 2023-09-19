import { useState } from "react";
import { assets } from "@/src/assets/index.jsx";
import Image from "../image/image";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Whole", src: assets.whole },
    { title: "Teachers", src: assets.teacher },
    { title: "Classrooms", src: assets.classroom },
    { title: "Subjects", src: assets.textBooks },
    { title: "Room Supervision", src: assets.facilitator },
    { title: "Settings", src: assets.settings },
  ];

  const handleSideBar = () => {
    setOpen(!open);
  };

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-24"
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
      >
        <ul className="pt-6 flex flex-col gap-2">
          <div
            onClick={handleSideBar}
            className="flex justify-end rounded-md py-2 cursor-pointer font-primary items-center"
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
              className={`flex rounded-md p-2 cursor-pointer hover:bg-sky-blue hover:text-white font-primary bg-blue-300 text-sm items-center gap-x-4`}
            >
              <Image src={menu.src} className="w-[25px]" alt={"sidebar icon"} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
