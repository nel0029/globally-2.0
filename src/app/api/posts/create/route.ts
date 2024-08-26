import { requestBackend } from "@/utils/request/request";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.formData();
    const url = `${process.env.POSTS_API}`;

    const { nextResponse } = await requestBackend(
      url,
      { method: "POST", body: body },
      request
    );

    return nextResponse;
  } catch (error) {
    return NextResponse.json(error);
  }
}
