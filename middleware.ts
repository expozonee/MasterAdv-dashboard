import { NextResponse, NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const isAuthenticated = checkUserAuthentication(req);

  // If the current page is the login page and the user is authenticated, continue to the requested page
  if (req.nextUrl.pathname === "/moatasem-login" && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard/admin", req.url));
  }

  // If the current page starts with '/dashboard/admin' and the user is not authenticated, redirect to the login page
  if (!isAuthenticated && req.nextUrl.pathname.startsWith("/dashboard/admin")) {
    return NextResponse.redirect(new URL("/moatasem-login", req.url));
  }

  // For all other pages, continue to the requested page
  return NextResponse.next();
}

function checkUserAuthentication(req: NextRequest) {
  const user = req.cookies.get("user")?.value;
  if (!user) {
    return false;
  }
  return true;
}

export const config = {
  matcher: "/:path*",
};
