import './auth.scss';
import AuthLayout from "../shared/authLayout/authLayout.jsx";
import Image from "../shared/image/image.jsx";
import {assets} from "../assets/index.jsx";
import LoginForm from "../components/auth/loginForm.jsx";

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
