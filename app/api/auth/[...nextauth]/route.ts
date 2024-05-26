import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import { getUserFromDb } from "@/utils/db";
import { User as NextAuthUser } from "next-auth";

interface User extends NextAuthUser {
  name: string;
  role: string;
  accessToken: string;
}

const authOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          const user = await getUserFromDb(email, password);
          console.log(user);
          return user;
        } catch (error: any) {
          const errorResponse = JSON.parse(error.message as string);
          throw new Error(errorResponse.error);
          // return null;
        }

        // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        // if (user) {
        // Any object returned will be saved in `user` property of the JWT

        // return user;
        // } else {
        // If you return null then an error will be displayed advising the user to check their details.
        // return null;

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        // }
      },
    }),
  ],
  pages: {
    signIn: "/moatasem-login",
    signOut: "/dashboard",
    error: "/moatasem-login",
  },

  callbacks: {
    async jwt({ token, user, session }) {
      if (user) {
        return {
          ...token,
          name: (user as User).name,
          role: (user as User).role,
          accessToken: (user as User).accessToken,
        };
      }
      return token;
    },
    async session({ session, user, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          name: token.name,
          role: token.role,
        },
      };
    },
    async redirect({ url, baseUrl }) {
      return url;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
