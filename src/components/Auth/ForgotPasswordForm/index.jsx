import '../signIn.scss';
import {useState} from 'react';
import validator from 'validator';
import {NavLink, useNavigate} from 'react-router-dom';
import InputField from "../../../shared/Input";
import Button from "../../../shared/Button";
import {assets} from "../../../assets";

const ForgotPasswordForm = ({className}) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [error, setError] = useState("");

    const handleChange = (value) => {
        setEmail(value);
    };

    const handleResetPassword = () => {

        // Check Validations
        setError("");
        let hasError = false;
        if (validator.isEmpty(email)) {
            setError("Email cannot be empty!");
            hasError = true;
        } else if (!validator.isEmail(email)) {
            setError("Invalid Email");
            hasError = true;
        }

        if (hasError) {
            return;
        } else {
            // Call Login API
            navigate("/reset-password");
        }
    };

    return (
        <>
            <div className="card-wrapper ">
                <div className="flex flex-col gap-y-2 items-center justify-center">
                    <h4 className="text-dark/80 text-h5 xl:text-h4 font-semibold font-primary">Reset your password?</h4>

                    <p className="text-dark/80 text-sm xl:text-md font-primary">We’ll help you reset it and get back on
                        track.</p>
                </div>

                <div className="flex flex-col gap-y-8 xl:gap-y-10 w-full">

                    <InputField
                        type="email"
                        name="email"
                        value={email}
                        error={error}
                        rounded={true}
                        icon={assets.envelope}
                        placeholder="example@gmail.com"
                        onChange={(e) => handleChange(e.target.value)}
                    />

                    {/* Sign In & Forgot Password Buttons */}
                    <Button
                        type="button"
                        rounded={true}
                        className="p-3"
                        color="blue-dark2"
                        title="Reset Password"
                        onClick={() => navigate("/reset-password")}
                    />

                    <div className="text-center text-md xl:text-base">
                        <span className="text-gray-dark1 font-primary text-sm">Already have an account?</span>

                        <NavLink className="text-blue-dark1 font-semibold cursor-pointer pl-1 font-primary text-sm"
                                 to="/">Return to Sign In</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPasswordForm;
