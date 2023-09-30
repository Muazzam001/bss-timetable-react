import '../auth.scss';
import {assets} from "../../assets";
import Image from "../../shared/Image";
import AuthLayout from "../../shared/AuthLayout";
import ForgotPasswordForm from "../../components/Auth/ForgotPasswordForm";

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
