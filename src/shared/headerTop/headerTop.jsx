import "./authHeader.scss";
import Image from "../image/image.jsx";
import {assets} from "../../assets/index.jsx";

const HeaderTop = () => {
    const headerIcons = (title, icon) => {
        return (
            <div className="header-icon">
                <div className="max-xl:w-4 xl:w-6">
                    <Image src={icon} alt="faqs icon"/>
                </div>

                <p className="text-white text-sm font-secondary font-medium">{title}</p>
            </div>
        );
    };

    return (
        <div className="bg-blue-medium1">
            <div className="flex items-center justify-end p-2">
                {headerIcons("Contact US", assets.contact)}

                {headerIcons("FAQ's", assets.FAQs)}

                {/*<div className="flex items-center header-icon">*/}
                {/*    <p className="text-white text-sm font-secondary font-medium">{'Emp 227'}</p>*/}

                {/*    <div*/}
                {/*        className="w-8 h-8 overflow-hidden border-2 border-solid border-white rounded-full flex items-center justify-center">*/}
                {/*        <Image src={assets.forgotPassword} alt={'Emp 227'}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default HeaderTop;
