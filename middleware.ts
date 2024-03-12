import { NextResponse, NextRequest } from "next/server";
import PageData from "@/app/dashboard/PageData";

export default async function middleware(request: NextRequest) {
  console.log();
  // const checkData = PageData();
  const req = request;
  // console.log(req.url.);
  // console.log("hello this is middleware!");

  return NextResponse.next(); // Add this line
}

export const config = {
  matcher: "/dashboard/:path*",
};
