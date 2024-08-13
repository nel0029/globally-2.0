import { requestBackend } from "@/utils/request/request";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { user_name } = body;

    const url = `${process.env.API_BASE_URL}/auth/verify/user-name/${user_name}`;

    const { nextResponse } = await requestBackend(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return nextResponse;
  } catch (error) {
    return NextResponse.json(error);
  }
}
