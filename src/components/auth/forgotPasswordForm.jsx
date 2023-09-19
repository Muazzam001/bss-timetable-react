import React, {useState} from "react";
import InputField from "@/src/shared/input/inputField.jsx";
import Button from "@/src/shared/button/button.jsx";
import {assets} from "@/src/assets/index.jsx";
import validator from "validator";
import {NavLink, useNavigate} from "react-router-dom";
import "./signIn.scss";

const ForgotPasswordForm = ({className}) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleChange = (value) => {
        setEmail(value);
    };

    const handleResetPassword = () => {
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
                    <h4 className="text-dark/80 text-h5 xl:text-h4 font-semibold font-primary">
                        Reset your password?
                    </h4>
                    <p className="text-dark/80 text-sm xl:text-md font-primary">
                        We’ll help you reset it and get back on track.
                    </p>
                </div>

                <div className="flex flex-col gap-y-8 xl:gap-y-10 w-full">
                    <>
                        <InputField
                            rounded={true}
                            className=""
                            icon={assets.envelope}
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={(e) => handleChange(e.target.value)}
                            error={error}
                        />
                    </>

                    {/* Sign In & Forgot Password Buttons */}
                    <>
                        <Button
                            rounded={true}
                            type="button"
                            title="Reset Password"
                            color="blue-dark2"
                            className="p-3"
                            onClick={handleResetPassword}
                        />
                    </>

                    <div className="text-center text-md xl:text-base">
                        <span
                            className="text-gray-dark1 font-primary text-sm">
                            Already have an account?
                        </span>

                        <NavLink
                            to="/"
                            className="text-blue-dark1 font-semibold cursor-pointer pl-1 font-primary text-sm"
                        >
                            Return to Sign In
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPasswordForm;
