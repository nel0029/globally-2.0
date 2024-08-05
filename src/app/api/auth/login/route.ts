import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const url = `${process.env.API_BASE_URL}/auth/log-in`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    });

    const data = await response.json();
    const setCookieHeaders = response.headers.get("set-cookie");
    const nextResponse = NextResponse.json(data);

    if (setCookieHeaders) {
      setCookieHeaders.split(",").forEach((cookie) => {
        nextResponse.headers.append("Set-Cookie", cookie);
      });
    }

    return nextResponse;
  } catch (error) {
    return NextResponse.json(error);
  }
}
