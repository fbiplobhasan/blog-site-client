import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { userService } from "./services/user.service";
import { Roles } from "./constants/roles";

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  let isAuthenticated = false;
  let isAdmin = false;

  const { data } = await userService.getSession();

  if (data) {
    ((isAuthenticated = true), (isAdmin = data.user.role === Roles.admin));
  }

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAdmin && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }

  if (!isAdmin && pathname.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  console.log(pathname);

  //   console.log("Hello from proxy.", request.url);

  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: ["/dashboard", "/admin-dashboard", "/dashboard/:path*", "/admin-dashboard/:path*"],
};
