import { useRouter } from "next/navigation";
import {
  Box,
  FormButton,
  FormCard,
  FormDivider,
  FormInput,
  FormItem,
  FormLabel,
  FormText,
  FormTextWrapper,
} from "./style";

const LogInForm = () => {
  const router = useRouter();
  return (
    <FormCard $size={50}>
      <FormTextWrapper>
        <FormText $isPrimary $isTitle>
          Log In
        </FormText>
        <FormText $isTitle>your account</FormText>
      </FormTextWrapper>

      <Box $direction="column" $size={10}>
        <FormItem $size={10}>
          <FormLabel>Username</FormLabel>
          <FormInput
            type="text"
            placeholder="Type your username here"
            autoComplete="username"
          />
        </FormItem>

        <FormItem $size={10}>
          <FormLabel>Password</FormLabel>
          <FormInput
            type="password"
            placeholder="Type your password here"
            autoComplete="current-password"
          />
        </FormItem>
      </Box>

      <Box $direction="column" $size={20}>
        <FormButton>Log In</FormButton>

        <FormDivider $size={1} />

        <FormTextWrapper>
          <FormText $isStatement>Forgot your password?</FormText>
          <FormText
            $isPrimary
            $isClickable
            $isStatement
            onClick={() => router.push("/forgot-password")}
          >
            Reset your password
          </FormText>
        </FormTextWrapper>

        <FormTextWrapper>
          <FormText $isStatement>Not yet registered?</FormText>
          <FormText
            $isPrimary
            $isClickable
            $isStatement
            onClick={() => router.push("/register")}
          >
            Register here
          </FormText>
        </FormTextWrapper>
      </Box>
    </FormCard>
  );
};

export default LogInForm;
