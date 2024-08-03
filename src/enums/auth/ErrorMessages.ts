import { AuthErrorResponseCodesEnum } from "./ErrorCodes";

export const AuthErrorMessageResponses = {
  [AuthErrorResponseCodesEnum.E0001]: "Please fill all necessary fields",
  [AuthErrorResponseCodesEnum.E0002]: "Email is already in used",
  [AuthErrorResponseCodesEnum.E0003]: "Username is already in used",
  [AuthErrorResponseCodesEnum.E0004]: "Invalid credentials",
  [AuthErrorResponseCodesEnum.E0005]: "Unauthorized",
  [AuthErrorResponseCodesEnum.E0006]: "No token is provided, please login",
  [AuthErrorResponseCodesEnum.E0007]: "No username is provided",
  [AuthErrorResponseCodesEnum.E0008]: "Password not match",
};
