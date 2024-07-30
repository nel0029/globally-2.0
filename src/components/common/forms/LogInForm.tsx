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
import { useState } from "react";

const LogInForm = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    if (!form.username || !form.password) {
      setFormError({
        username: !form.username ? "Username is required" : "",
        password: !form.password ? "Password is required" : "",
      });
    }
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setFormError({ ...formError, [name]: "" });
    setForm({ ...form, [name]: e.target.value });
  };

  return (
    <FormCard $size={30}>
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
          name="username"
          form={form}
          onChange={handleOnChange}
          error={formError.username}
        />

        <FormItem
          label="Pasword"
          type="password"
          placeholder="Type your password here"
          name="password"
          form={form}
          onChange={handleOnChange}
          error={formError.password}
        />
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
