"use client";

import { useRouter } from "next/navigation";
import {
  Box,
  FormButton,
  FormCard,
  FormDivider,
  FormText,
  FormTextWrapper,
} from "./style";
import FormItem from "./FormItem";
import { useEffect, useState } from "react";
import useAuthLogIn from "@/hooks/auth/LogIn";
import { AuthErrorResponseCodesEnum } from "@/enums/auth/ErrorCodes";

const LogInForm = () => {
  const router = useRouter();
  const user = localStorage.getItem("user");
  const [form, setForm] = useState({
    login_id: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    username: "",
    password: "",
    valid: "",
  });

  const { doRequest: login, data } = useAuthLogIn();

  const handleSubmit = async (e: React.FormEvent) => {
    if (!form.login_id || !form.password) {
      setFormError((prev: { [key: string]: string }) => ({
        valid: prev.valid,
        username: !form.login_id ? "Username is required" : "",
        password: !form.password ? "Password is required" : "",
      }));

      return;
    }

    setFormError({ valid: "", username: "", password: "" });

    e.preventDefault();
    await login({ body: form });
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setForm({ ...form, [name]: e.target.value });
  };

  useEffect(() => {
    if (data.code === AuthErrorResponseCodesEnum.E0004) {
      setFormError((prev: { [key: string]: string }) => ({
        password: prev.password,
        username: prev.username,
        valid: data.message,
      }));
    }
  }, [data, router]);

  useEffect(() => {
    if (!!user) {
      router.push("/home");
    }
  }, [user, router]);
  return (
    <FormCard $size={30} onSubmit={handleSubmit}>
      <FormTextWrapper>
        <FormText $variant="primary" $fontWeight="bold" $size="2xl">
          Log In
        </FormText>
        <FormText $size="2xl">your account</FormText>
      </FormTextWrapper>

      <Box $direction="column" $size={15}>
        <FormItem
          label="Username"
          type="text"
          placeholder="Type your username here"
          name="login_id"
          form={form}
          onChange={handleOnChange}
        />

        <FormItem
          label="Pasword"
          type="password"
          placeholder="Type your password here"
          name="password"
          form={form}
          onChange={handleOnChange}
        />
        {formError && formError.valid && (
          <FormText $size="xs" $variant="red200" $fontWeight="bold">
            {formError.valid}
          </FormText>
        )}
      </Box>

      <Box $direction="column" $size={15}>
        <FormButton onClick={handleSubmit}>Log In</FormButton>

        <FormDivider $size={1} />

        <Box $direction="column" $size={5}>
          <FormTextWrapper>
            <FormText $size="sm">Forgot your password?</FormText>
            <FormText
              $size="sm"
              $variant="primary"
              $fontWeight="bold"
              $isClickable
              onClick={() => router.push("/forgot-password")}
            >
              Reset your password
            </FormText>
          </FormTextWrapper>

          <FormTextWrapper>
            <FormText $size="sm">Not yet registered?</FormText>
            <FormText
              $size="sm"
              $variant="primary"
              $fontWeight="bold"
              $isClickable
              onClick={() => router.push("/register")}
            >
              Register here
            </FormText>
          </FormTextWrapper>
        </Box>
      </Box>
    </FormCard>
  );
};

export default LogInForm;
