import React from "react";
import {assets} from "@/src/assets/index.jsx";
import Image from "@/src/shared/image/image.jsx";
import AuthLayout from "../shared/authLayout/authLayout.jsx";
import ForgotPasswordForm from "@/src/components/auth/forgotPasswordForm.jsx";
import "./auth.scss";

const ForgotPassword = () => {
    return (
        <AuthLayout>
            <div className="bg-primary-blue w-full">
                <div className="auth-wrapper">
                    <div className="auth-img-wrapper">
                        <Image src={assets.forgotPassword} alt={"Forgot Password icon"}/>
                    </div>

                    <div className="auth-card-wrapper">
                        <ForgotPasswordForm/>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};

export default ForgotPassword;
