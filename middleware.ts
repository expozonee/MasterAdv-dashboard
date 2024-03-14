import { NextResponse, NextRequest } from "next/server";
import { getTitles } from "@/app/api/route";

interface Data {
  names: [{ name: string }];
  urls: string[];
}

export default async function middleware(request: NextRequest) {
  const req = request;
  const path = req.url.split("http://localhost:3000/")[1];
  const pathArray = path.split("/");
  const slugs = pathArray.slice(1);
  // console.log(slugs);

  var isInvalidUrl = false;

  async function getTitle() {
    const data: Data = await getTitles(slugs);
    return data;
  }
  try {
    const { names, urls } = await getTitle();
    isInvalidUrl = names.some((name) => name === null);
  } catch (e) {
    isInvalidUrl = true;
  }

  if (isInvalidUrl) {
    const url = req.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: "/dashboard/:path*",
};
