import './signIn.scss';
import {useState} from "react";
import validator from "validator";
import {useNavigate} from "react-router-dom";
import {assets} from "../../assets/index.jsx";
import InputField from "../../shared/input/inputField.jsx";
import Button from "../../shared/button/button.jsx";

export default function LoginForm({className}) {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState({
        email: "",
        password: "",
    });

    const handleChange = (value, field) => {
        if (field === "email") {
            setForm({...form, email: value});
        } else if (field === "password") {
            setForm({...form, password: value});
        }
    };

    const handleLogin = () => {
        let hasError = false;
        setError({email: "", password: ""});
        // Check Validations
        if (validator.isEmpty(form.email)) {
            setError((prevError) => ({
                ...prevError,
                email: "Email cannot be empty!",
            }));
            hasError = true;
        } else if (!validator.isEmail(form.email)) {
            setError((prevError) => ({
                ...prevError,
                email: "Invalid Email"
            }));
            hasError = true;
        }
        if (validator.isEmpty(form.password)) {
            setError((prevError) => ({
                ...prevError,
                password: "Password cannot be empty!",
            }));
            hasError = true;
        }

        if (hasError) {
            return;
        } else {
            // Call Login API
            navigate("/manage-school");
        }
    };

    return (
        <>
            <div className="card-wrapper">
                <div className="flex justify-center mb-5 xl:mb-8">
                    <h4 className="text-dark/80 text-h5 xl:text-h4 font-semibold font-primary">
                        Sign In To Beacon house
                    </h4>
                </div>

                <div className="w-full flex flex-col gap-y-4 xl:gap-y-6">
                    <div>
                        <InputField
                            rounded={true}
                            className="placeholder:text-lg"
                            icon={assets.envelope}
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            value={form?.email}
                            onChange={(e) => handleChange(e.target.value, "email")}
                            error={error.email}
                        />
                    </div>

                    <div>
                        <InputField
                            rounded={true}
                            className="placeholder:text-lg"
                            icon={assets.lock}
                            type="password"
                            name="password"
                            placeholder="********"
                            value={form.password}
                            onChange={(e) => handleChange(e.target.value, "password")}
                            error={error.password}
                        />
                    </div>

                    <label htmlFor="remember-me" className="flex items-center ml-4">
                        <span className="border border-blue-medium1 w-5 h-5 rounded cursor-pointer z-50">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="peer hidden"
                            />

                            <span
                                className="peer-checked:inline-block hidden w-[12px] h-[7px] border-t-2 border-r-2 rotate-[130deg] translate-x-[3px] -translate-y-[5px] border-blue-dark2 cursor-pointer"></span>
                        </span>

                        <span className="ml-2 block text-sm text-gray-900 font-primary cursor-pointer">
                          Remember me
                        </span>
                    </label>

                    {/* Sign In & Forgot Password Buttons */}
                    <div className="flex flex-col max-xl:gap-y-4 xl:gap-y-6">
                        <Button
                            rounded={true}
                            type="submit"
                            title="Sign In"
                            color="blue-medium1"
                            onClick={() => navigate("/manage-school")}
                            className="p-3"
                        />

                        <Button
                            rounded={true}
                            type="button"
                            title="Forgot Password?"
                            color="blue-dark2"
                            className="p-3"
                            onClick={() => navigate("/forgot-password")}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
