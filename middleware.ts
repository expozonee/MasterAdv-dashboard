import { NextResponse, NextRequest } from "next/server";
import NextAuth from "next-auth";
// export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";

export default withAuth({
  secret: process.env.AUTH_SECRET,
});

// NEW CODE

// const { auth } = NextAuth(authConfig);

// export default auth((req) => {
//   const { nextUrl } = req;

//   const isAuthenticated = !!req.auth;
//   const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

//   if (isPublicRoute && isAuthenticated) {
//     return Response.redirect(new URL(PRIVATE_ROUTES, nextUrl));
//   }

//   if (!isPublicRoute && !isAuthenticated) {
//     return Response.redirect(new URL(ROOT, nextUrl));
//   }
// });

// export const config = {
//   matcher: "/:path*",
// };

// OLD CODE

// export default function middleware(req: NextRequest) {
//   // Check if the user is authenticated
//   // console.log(req.headers.get("cookie"));
//   const isAuthenticated = checkUserAuthentication(req);
//   // If the current page is the login page and the user is authenticated, continue to the requested page
//   if (req.nextUrl.pathname === "/moatasem-login" && isAuthenticated) {
//     return NextResponse.redirect(new URL("/dashboard/admin", req.url));
//   }
//   // If the current page starts with '/dashboard/admin' and the user is not authenticated, redirect to the login page
//   if (!isAuthenticated && req.nextUrl.pathname.startsWith("/dashboard/admin")) {
//     return NextResponse.redirect(new URL("/moatasem-login", req.url));
//   }
//   // For all other pages, continue to the requested page
//   return NextResponse.next();
// }
// function checkUserAuthentication(req: NextRequest): boolean {
//   const cookie = req.headers.get("cookie");
//   if (!cookie) return false;
//   const token = cookie
//     .split(";")
//     .find((cookie) => cookie.trim().startsWith("user="));
//   if (!token) return false;
//   const jwtParts = token.split(".");
//   if (jwtParts.length !== 3) return false;
//   const payloadBase64Url = jwtParts[1];
//   const payloadBase64 = payloadBase64Url.replace(/-/g, "+").replace(/_/g, "/");
//   const payloadJson = Buffer.from(payloadBase64, "base64").toString("utf8");
//   let payload;
//   try {
//     payload = JSON.parse(payloadJson);
//   } catch (err) {
//     console.error("Invalid JWT payload");
//     return false;
//   }
//   if (payload.role === "superAdmin") return true;
//   return false;
// }

export const config = {
  matcher: "/dashboard/admin:path*",
};
