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
import useAuthRegister from "@/hooks/auth/Register";
import { AuthErrorResponseCodesEnum } from "@/enums/auth/ErrorCodes";
import { AuthErrorMessageResponses } from "@/enums/auth/ErrorMessages";
import useAuthValidateUserName from "@/hooks/auth/ValidateUserName";
import useDebounce from "@/hooks/common/Debounce";
import {
  validateEmail,
  validateName,
  validatePassword,
  validateUserName,
} from "@/utils/validation/form-validation";

const RegisterForm = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    user_name: "",
    name: "",
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState<{
    [key: string]: string;
  }>({
    user_name: "",
    name: "",
    email: "",
    password: "",
  });

  const { doRequest: register, data } = useAuthRegister();
  const { doRequest: validateUserNameExists, data: validateUserNameData } =
    useAuthValidateUserName();

  const userName = useDebounce(form.user_name, 300);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { isValid: isUserNameValid } = validateUserName(form, setFormError);
    const { isValid: isEmailValid } = validateEmail(form, setFormError);
    const { isValid: isPasswordValid } = validatePassword(form, setFormError);
    const { isValid: isNameValid } = validateName(form, setFormError);

    if (isUserNameValid && isEmailValid && isPasswordValid && isNameValid) {
      setFormError({
        user_name: "",
        name: "",
        email: "",
        password: "",
      });

      await register({ body: form });
    }
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setFormError({ ...formError, [name]: "" });
    setForm({ ...form, [name]: e.target.value });
  };

  useEffect(() => {
    if (data) {
      const errorMessage =
        AuthErrorMessageResponses[
          data.code as keyof typeof AuthErrorMessageResponses
        ];
      if (errorMessage) {
        const newFormError = { ...formError };

        switch (data.code) {
          case AuthErrorResponseCodesEnum.E0001:
            Object.keys(newFormError).forEach((key) => {
              newFormError[key] = errorMessage;
            });
            break;
          case AuthErrorResponseCodesEnum.E0002:
            newFormError.email = errorMessage;
            break;
          case AuthErrorResponseCodesEnum.E0003:
            newFormError.user_name = errorMessage;
            break;
          default:
            break;
        }

        setFormError(newFormError);
      }
      if (!formError.user_name && !formError.email && !formError.password) {
        router.push("/home");
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (userName.length >= 6) {
      validateUserNameExists({ body: { user_name: userName } });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);

  useEffect(() => {
    if (validateUserNameData.code === AuthErrorResponseCodesEnum.E0003) {
      setFormError({
        ...formError,
        user_name: AuthErrorMessageResponses.E0003,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateUserNameData]);

  return (
    <FormCard $size={30} onSubmit={handleSubmit}>
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
          error={formError.user_name}
          name="user_name"
          form={form}
          onChange={handleOnChange}
        />

        <FormItem
          label="Name"
          type="text"
          placeholder="Type your name here"
          error={formError.name}
          name="name"
          form={form}
          onChange={handleOnChange}
        />

        <FormItem
          label="Email address"
          type="text"
          placeholder="Type your email address here"
          error={formError.email}
          name="email"
          form={form}
          onChange={handleOnChange}
        />

        <FormItem
          label="Pasword"
          type="password"
          placeholder="Type your password here"
          error={formError.password}
          name="password"
          form={form}
          onChange={handleOnChange}
        />
      </Box>

      <Box $direction="column" $size={20}>
        <FormButton onClick={handleSubmit} type="submit">
          Register
        </FormButton>

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
