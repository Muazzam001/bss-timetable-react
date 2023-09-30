import '../auth.scss';
import AuthLayout from "../../shared/AuthLayout";
import Image from "../../shared/Image";
import {assets} from "../../assets";
import LoginForm from "../../components/Auth/LoginForm";

export default function Login() {
    return (
        <AuthLayout>
            <div className="bg-primary-blue w-full">
                <div className="auth-wrapper">
                    <div className="auth-img-wrapper">
                        <Image src={assets.signIn} alt={"Sign In"} />
                    </div>

                    <div className="auth-card-wrapper">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}
