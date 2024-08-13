import { NextResponse } from "next/server";

const removeCookies = (nextResponse: NextResponse) => {
  const cookieNames = ["auth_name", "token"];
  cookieNames.forEach((name) => {
    const expiredCookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    nextResponse.headers.append("Set-Cookie", expiredCookie);
  });
};

export default removeCookies;
