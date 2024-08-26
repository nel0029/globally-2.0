import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const auth_name = request.cookies.get("auth_name");

  if (!token || !auth_name) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/home/:path*",
    "/notifications/:path*",
    "/explore/:path*",
    "/messages/:path*",
    "/settings/:path*",
  ],
};
