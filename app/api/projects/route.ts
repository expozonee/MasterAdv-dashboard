import { JWTWithToken } from "@/types/next-auth/jwtWithToken";
import axios from "axios";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function GET(request: Request) {
  const id = new URL(request.url).searchParams.get("id");
  const businessType = new URL(request.url).searchParams.get("businessType");
  const projectType = new URL(request.url).searchParams.get("projectType");
  const businessCategories = new URL(request.url).searchParams.get(
    "businessCategories"
  );

  const response = await axios
    .get("https://masteradv-backend.vercel.app/getProjects", {
      headers: {
        "Cache-Control": "no-cache",
      },
      params: {
        id: id,
        businessType: businessType,
        projectType: projectType,
        businessCategories: businessCategories,
      },
    })
    .then((res) => res.data);
  return new Response(JSON.stringify(response));
}

export async function POST(req: NextRequest) {
  const token = (await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  })) as JWTWithToken;

  const body = await req.json();
  const response = axios
    .post("https://masteradv-backend.vercel.app/modifyProject", body, {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.accessToken}`,
      },
    })
    .then((res) => res);
  const message = await response;
  return new Response(JSON.stringify(message.data));
}

export async function DELETE(req: NextRequest) {
  const token = (await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  })) as JWTWithToken;

  const body = await req.json();
  console.log(body);
  const response = axios
    .delete("http://localhost:4000/deleteProject", {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.accessToken}`,
      },
      data: body,
    })
    .then((res) => res);
  const message = await response;
  return new Response(JSON.stringify(message.data));
}
