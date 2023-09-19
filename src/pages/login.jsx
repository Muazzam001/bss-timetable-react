import React from "react";
import { assets } from "@/src/assets/index.jsx";
import Image from "@/src/shared/image/image.jsx";
import AuthLayout from "../shared/authLayout/authLayout.jsx";
import LoginForm from "@/src/components/auth/loginForm.jsx";
import "./auth.scss";

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
