import { AuthErrorResponseCodesEnum } from "@/enums/auth/ErrorCodes";
import { NextResponse } from "next/server";
import removeCookies from "../cookies/remove-cookies";
import setCookies from "../cookies/set-cookies";

const requestBackend = async (
  url: string,
  options = {},
  requiredAuth = true
) => {
  const response = await fetch(url, options);
  const data = await response.json();

  const setCookieHeaders = response.headers.get("set-cookie");
  const nextResponse = NextResponse.json(data);

  if (setCookieHeaders) {
    setCookies(setCookieHeaders, nextResponse);
  }

  if (requiredAuth && data && data.code === AuthErrorResponseCodesEnum.E0005) {
    removeCookies(nextResponse);
  }

  return { nextResponse };
};

export { requestBackend };
