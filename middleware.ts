import { NextResponse, NextRequest } from "next/server";
import { getTitles } from "@/app/api/route";

interface Data {
  names: [{ name: string }];
  urls: string[];
}

export default async function middleware(request: NextRequest) {
  // const req = request;
  // const path = req.url.split("http://localhost:3000/")[1];
  // const pathArray = path.split("/");
  // const slugs = pathArray.slice(1);
  // console.log(slugs);
  // // Skip middleware for /dashboard/admin/... paths
  // // if (req.url.includes("admin")) {
  // //   return NextResponse.next();
  // // }
  // var isInvalidUrl = false;
  // async function getTitle() {
  //   const data: Data = await getTitles(slugs);
  //   console.log(data);
  //   return data;
  // }
  // try {
  //   const { names, urls } = await getTitle();
  //   if (names.some((name) => name === null)) {
  //     isInvalidUrl = true;
  //   }
  //   // isInvalidUrl = names.some((name) => name === null);
  //   console.log(isInvalidUrl);
  // } catch (e) {
  //   isInvalidUrl = true;
  // }
  // if (isInvalidUrl) {
  //   const url = req.nextUrl.clone();
  //   url.pathname = "/dashboard";
  //   return NextResponse.redirect(url);
  // } else {
  //   return NextResponse.next();
  // }
}

export const config = {
  matcher: "/dashboard/:path*",
};
