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

const RegisterForm = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState<{
    [key: string]: string;
  }>({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    if (!form.username || !form.name || !form.email || !form.password) {
      setFormError({
        username: !form.username ? "Username is required" : "",
        name: !form.name ? "Name is required" : "",
        email: !form.email ? "Email is required" : "",
        password: !form.password ? "Password is required" : "",
      });
    }
  };
  return (
    <FormCard $size={30}>
      <FormTextWrapper>
        <FormText $variant="primary" $fontWeight="bold" $size="2xl">
          Create
        </FormText>
        <FormText $size="2xl">an account</FormText>
      </FormTextWrapper>

      <Box $direction="column" $size={15}>
        <FormItem
          label="Username"
          type="text"
          placeholder="Type your username here"
          error={formError.username}
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <FormItem
          label="Name"
          type="text"
          placeholder="Type your name here"
          error={formError.name}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <FormItem
          label="Email address"
          type="email"
          placeholder="Type your email address here"
          error={formError.email}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <FormItem
          label="Pasword"
          type="password"
          placeholder="Type your password here"
          error={formError.password}
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </Box>

      <Box $direction="column" $size={20}>
        <FormButton onClick={handleSubmit}>Register</FormButton>

        <FormDivider $size={1} />

        <FormTextWrapper>
          <FormText $size="sm">Already have an account?</FormText>
          <FormText
            $variant="primary"
            $fontWeight="bold"
            $isClickable
            $size="sm"
            onClick={() => router.push("/login")}
          >
            Login here.
          </FormText>
        </FormTextWrapper>
      </Box>
    </FormCard>
  );
};

export default RegisterForm;
