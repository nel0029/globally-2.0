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

const LogInForm = () => {
  const [formError, setFormError] = useState<{
    [key: string]: string;
  }>({});
  const router = useRouter();

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
          error="Username is required"
        />

        <FormItem
          label="Pasword"
          type="password"
          placeholder="Type your password here"
          error="Password is incorrect"
        />
      </Box>

      <Box $direction="column" $size={15}>
        <FormButton>Log In</FormButton>

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
