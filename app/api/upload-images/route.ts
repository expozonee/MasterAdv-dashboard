import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import type { JWTWithToken } from "@/types/next-auth/jwtWithToken";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function POST(req: NextRequest) {
  const token = (await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  })) as JWTWithToken;

  const formData = await req.formData();

  const response = await fetch("https://masteradv-backend.vercel.app/upload", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
    },
  });

  return new Response(await response.json(), {
    status: response.status,
  });
}
