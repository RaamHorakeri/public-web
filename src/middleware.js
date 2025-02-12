import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {
  const access_token = cookies().get("access_token")?.value;

  const PROTECTED_ROUTES = ["/dashboard"];
  const currentPath = request.nextUrl.pathname;

  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    currentPath.startsWith(route),
  );

  if (access_token === undefined && isProtectedRoute) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", currentPath);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
}; //[ "/", "/community/featuredQuestions/:questionNum*"]
