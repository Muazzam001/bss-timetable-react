import './auth.scss';
import {assets} from "../assets/index.jsx";
import Image from "../shared/image/image.jsx";
import AuthLayout from "../shared/authLayout/authLayout.jsx";
import ResetCard from "../components/auth/resetCard.jsx";

const ResetPassword = () => {
    return (
        <AuthLayout>
            <div className="bg-primary-blue w-full">
                <div className="auth-wrapper">
                    <div className="auth-img-wrapper">
                        <Image src={assets.inbox} alt={"Reset Password"}/>
                    </div>

                    <div className="auth-card-wrapper">
                        <ResetCard/>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};

export default ResetPassword;
