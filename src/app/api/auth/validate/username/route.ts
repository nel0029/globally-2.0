import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { user_name } = body;

    const url = new URL(
      `${process.env.API_BASE_URL}/auth/verify/user-name/${user_name}`
    );

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    const nextResponse = NextResponse.json(data);

    return nextResponse;
  } catch (error) {
    return NextResponse.json(error);
  }
}
