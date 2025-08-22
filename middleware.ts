import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const { pathname } = req.nextUrl;

    const publicRoutes = ["/", "/auth/signin", "/auth/signup"];
    const isPublicRoute = publicRoutes.includes(pathname);

    if (!token && !isPublicRoute) {
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }

    if (token && !token.username && pathname !== "/onboarding") {
      return NextResponse.redirect(new URL("/onboarding", req.url));
    }

    if (token && token.username && pathname === "/onboarding") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true, // Let us handle auth manually
    },
  }
);

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|auth|.well-known).*)"],
};

