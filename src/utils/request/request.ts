import { AuthErrorResponseCodesEnum } from "@/enums/auth/ErrorCodes";
import { NextRequest, NextResponse } from "next/server";
import removeCookies from "../cookies/remove-cookies";
import setCookies from "../cookies/set-cookies";

const requestBackend = async (
  url: string,
  options: RequestInit = {},
  request: NextRequest,
  requiredAuth = true
) => {
  const token = request.cookies.get("token");
  const auth_name = request.cookies.get("auth_name");

  if ((!token || !auth_name) && requiredAuth) {
    const UnauthorizedResponse = NextResponse.json({
      code: AuthErrorResponseCodesEnum.E0005,
      message: "No token found",
    });

    return {
      nextResponse: UnauthorizedResponse,
    };
  }
  const headers = new Headers(options.headers || {});
  const cookies = request.headers.get("cookie");
  if (cookies) {
    headers.set("Cookie", cookies);
  }

  const fetchOptions: RequestInit = {
    ...options,
    headers,
    credentials: "include",
  };

  const response = await fetch(url, fetchOptions);
  const data = await response.json();

  const setCookieHeaders = response.headers.get("set-cookie");
  const nextResponse = NextResponse.json(data);

  if (setCookieHeaders) {
    setCookies(setCookieHeaders, nextResponse);
  }

  if (requiredAuth && data && data.code === AuthErrorResponseCodesEnum.E0005) {
    console.log("CALLED");
    removeCookies(nextResponse);
  }

  return { nextResponse };
};

export { requestBackend };
