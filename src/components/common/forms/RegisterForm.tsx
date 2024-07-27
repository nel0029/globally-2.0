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

const RegisterForm = () => {
  const router = useRouter();
  return (
    <FormCard $size={50}>
      <FormTextWrapper>
        <FormText $isPrimary $isTitle>
          Create
        </FormText>
        <FormText $isTitle>an account</FormText>
      </FormTextWrapper>

      <Box $direction="column" $size={10}>
        <FormItem $size={10}>
          <FormLabel>Username</FormLabel>
          <FormInput
            type="text"
            placeholder="Type your username here"
            autoComplete="off"
          />
        </FormItem>

        <FormItem $size={10}>
          <FormLabel>Name</FormLabel>
          <FormInput
            type="text"
            placeholder="Type your name here"
            autoComplete="off"
          />
        </FormItem>

        <FormItem $size={10}>
          <FormLabel>Email Address</FormLabel>
          <FormInput
            type="email"
            placeholder="Type your email here"
            autoComplete="off"
          />
        </FormItem>

        <FormItem $size={10}>
          <FormLabel>Password</FormLabel>
          <FormInput
            type="password"
            placeholder="Type your password here"
            autoComplete="off"
          />
        </FormItem>
      </Box>

      <Box $direction="column" $size={20}>
        <FormButton>Register</FormButton>

        <FormDivider $size={1} />

        <FormTextWrapper>
          <FormText $isStatement>Already have an account?</FormText>
          <FormText
            $isPrimary
            $isClickable
            $isStatement
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
