import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const url = `${process.env.FEED_API}`;

    const cookies = request.headers.get("cookie");

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies || "",
      },
      credentials: "include",
    });

    const data = await response.json();

    const nextResponse = NextResponse.json(data);

    return nextResponse;
  } catch (error) {
    return NextResponse.json(error);
  }
}
