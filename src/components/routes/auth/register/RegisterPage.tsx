"use client";

import { AuthMainContentWrapper } from "../styled";
import RegisterForm from "@/components/common/forms/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthMainContentWrapper>
      <RegisterForm />
    </AuthMainContentWrapper>
  );
};

export default RegisterPage;
