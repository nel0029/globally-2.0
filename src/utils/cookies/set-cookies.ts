import { NextResponse } from "next/server";

const setCookies = (cookieSetter: string, nextResponse: NextResponse) => {
  cookieSetter.split(/,(?=\S*=)/).forEach((cookie) => {
    nextResponse.headers.append("Set-Cookie", cookie);
  });
};

export default setCookies;
