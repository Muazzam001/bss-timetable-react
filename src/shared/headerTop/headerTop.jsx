import React from "react";
import {assets} from "@/src/assets/index.jsx";
import Image from '@/src/shared/image/image.jsx';

const HeaderTop = () => {
    const headerIcons = (title, icon) => {
        return (
            <>
                <div className="header-icon">
                    <div className="max-xl:w-4 xl:w-6">
                        <Image src={icon} alt="faqs icon"/>
                    </div>
                    <p className="text-white text-sm font-secondary font-medium">
                        {title}
                    </p>
                </div>
            </>
        );
    };

    return (
        <div className="bg-blue-medium1">
            <div className="flex items-center justify-end p-2">
                {headerIcons("Contact US", assets.contact)}
                {headerIcons("FAQ's", assets.FAQs)}
                <div className="flex items-center header-icon">
                    <p className="text-white text-sm font-secondary font-medium">
                        Emp 227
                    </p>
                    <div
                        className="max-xl:w-8 xl:w-8 h-8 overflow-hidden border-2 border-solid border-white rounded-full">
                        <Image src={assets.forgotPassword} alt="faqs icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
