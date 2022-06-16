import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;
  if (!pathname.startsWith("/api")) {
    if (pathname === "/login" && req.cookies["next-auth.session-token"]) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
    if (pathname === "/" && !req.cookies["next-auth.session-token"]) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
    if (pathname === "/settings" && !req.cookies["next-auth.session-token"]) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }
}
