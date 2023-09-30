import '../auth.scss';
import {assets} from "../../assets";
import Image from "../../shared/Image";
import AuthLayout from "../../shared/AuthLayout";
import ResetCard from "../../components/Auth/ResetCard";

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
