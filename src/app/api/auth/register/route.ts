import { requestBackend } from "@/utils/request/request";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const url = `${process.env.USER_AUTH_API}/register`;

    const { nextResponse } = await requestBackend(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(body),
      },
      request,
      false
    );

    return nextResponse;
  } catch (error) {
    return NextResponse.json(error);
  }
}
