import { NextResponse, NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import type { JWT } from "next-auth/jwt";

// export default withAuth({
//   secret: process.env.AUTH_SECRET,
// });

interface tokenRole extends JWT {
  role: string;
}

export default async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const token = (await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  })) as tokenRole;

  if (nextUrl.pathname.startsWith("/dashboard/admin")) {
    if (!token) {
      console.log("not logged in");
      return NextResponse.redirect(
        new URL("/moatasem-login", req.nextUrl.origin).toString()
      );
    }
    if (token.role === "superAdmin") {
      console.log("logged in as superAdmin");
      return NextResponse.next();
    }
  }
}

export const config = {
  matcher: "/:path*",
};
