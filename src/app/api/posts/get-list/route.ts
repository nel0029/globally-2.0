import { requestBackend } from "@/utils/request/request";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const url = `${process.env.FEED_API}`;

    const { nextResponse } = await requestBackend(
      url,
      { method: "GET" },
      request
    );

    return nextResponse;
  } catch (error) {
    return NextResponse.json(error);
  }
}
