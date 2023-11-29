import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  const subdomain = headers.get("host")?.split(".")[0] ?? "";
  headers.set("subdomain", subdomain);

  const response = NextResponse.next({
    request: {
      headers: headers,
    },
  });

  return response;
}
