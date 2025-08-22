import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username?: string | null;
      display_name?: string | null;
      avatar_url?: string | null;
      status?: string | null;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string | null;
  }
}
