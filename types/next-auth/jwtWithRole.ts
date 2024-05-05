import type { JWT } from "next-auth/jwt";

export interface TokenWithRole extends JWT {
  role: string;
}
