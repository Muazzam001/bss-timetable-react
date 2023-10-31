import {NavLink} from "react-router-dom";
import Image from "../Image";
import {assets} from "../../assets";

const Header2 = ({headerItem}) => {

    const navigation =
        headerItem &&
        headerItem?.map((navItem, index) => {
            return (
                <NavLink to={navItem?.url} key={`${index}`}
                         className="flex flex-col items-center justify-center gap-y-1 rounded-md px-2 py-1.5 hover:bg-blue-light2">
                    <span className="w-6 h-6 flex justify-center items-center">
                        <Image alt="" className="" src={navItem?.src}/>
                    </span>

                    <span className="font-primary text-xs text-center">{navItem?.title}</span>
                </NavLink>
            );
        });

    return (
        <header className="text-gray-600 body-font bg-white">
            <div className="px-10 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <NavLink className="flex items-center py-2" to={''}>
                    <Image src={assets.logo} alt="" className="w-16"/>
                </NavLink>

                <nav className="md:ml-auto flex flex-wrap gap-x-2 items-center text-base justify-center">
                    {navigation}
                </nav>
            </div>
        </header>
    );
};

export default Header2;
