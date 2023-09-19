import React from "react";
import { assets } from "@/src/assets/index.jsx";
import ResetCard from "@/src/components/auth/resetCard.jsx";
import Image from "@/src/shared/image/image.jsx";
import "./auth.scss";
import AuthLayout from "../shared/authLayout/authLayout.jsx";

const ResetPassword = () => {
  return (
    <AuthLayout>
      <div className="bg-primary-blue w-full">
        <div className="auth-wrapper">
          <div className="auth-img-wrapper">
            <Image src={assets.inbox} alt={"Reset Password"} />
          </div>

          <div className="auth-card-wrapper">
            <ResetCard />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
