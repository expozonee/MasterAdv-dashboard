import { JWT } from "next-auth/jwt";

export interface JWTWithToken extends JWT {
  accessToken?: string | null;
}
