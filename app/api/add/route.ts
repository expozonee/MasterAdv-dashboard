import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { JWTWithToken } from "@/types/next-auth/jwtWithToken";

export async function POST(req: NextRequest) {
  const token = (await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  })) as JWTWithToken;

  const data = await req.json();
  const type = new URL(req.url).searchParams.get("type");

  const response = await axios.post("http://localhost:4000/add", data, {
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
    },
    params: {
      type: type,
    },
  });

  return NextResponse.json(response.data);
}
