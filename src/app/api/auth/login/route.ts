import { requestBackend } from "@/utils/request/request";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const url = `${process.env.USER_AUTH_API}/log-in`;

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
    console.log("ERROR catched", error);
    return NextResponse.json(error);
  }
}
function checkCookies(request: NextRequest) {
  throw new Error("Function not implemented.");
}
