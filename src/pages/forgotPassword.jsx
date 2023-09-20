import './auth.scss';
import {assets} from "../assets/index.jsx";
import Image from "../shared/image/image.jsx";
import AuthLayout from "../shared/authLayout/authLayout.jsx";
import ForgotPasswordForm from "../components/auth/forgotPasswordForm.jsx";

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
