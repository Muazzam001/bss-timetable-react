import {assets} from "../../assets/index.jsx";
import Image from "../image/image.jsx";
import "./authHeader.scss";

const AuthHeader = () => {
    const headerIcons = (title, icon) => {
        return (
            <>
                <div className="header-icon">
                    <div className="max-xl:w-5 max-xl:h-5 xl:w-7 xl:h-7">
                        <Image src={icon} alt={title}/>
                    </div>

                    <p className="text-white text-sm font-secondary font-semibold">
                        {title}
                    </p>
                </div>
            </>
        );
    };

    return (
        <>
            <div className="bg-blue-medium1 w-full">
                <div className="header-wrapper">
                    <div className="header-logo">
                        <Image src={assets.logo} alt={"Application Logo"}/>
                    </div>

                    <div className="flex items-center">
                        {headerIcons("Contact US", assets.contact)}
                        {headerIcons("FAQ's", assets.FAQs)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthHeader;
