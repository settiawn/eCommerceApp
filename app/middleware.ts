import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeToken } from "./db/helpers/jwt";

export async function middleware(request: NextRequest) {
  let token = cookies().get("Authorization")?.value.split(" ")[1];
  if (!token) {
    return NextResponse.json(
      {
        error: "Invalid Token",
      },
      {
        status: 401,
      }
    );
  }

  const payload = await decodeToken<{ _id: string; email: string }>(token);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-id-user", payload._id);
  requestHeaders.set("x-email-user", payload.email);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return response;
}

export const config = {
  matcher: "/api/wishlist/:path*",
};
