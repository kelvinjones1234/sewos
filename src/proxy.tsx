import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    // This runs FIRST. It checks if there is a valid token at all.
    // If this returns false, NextAuth automatically kicks them to the signIn page.
    authorized: ({ token }) => !!token,
  },
  pages: {
    signIn: "/admin/auth/login", // Redirects here if unauthenticated
  },
});

export const config = {
  matcher: [
    // Middleware runs on these protected routes
    "/admin/dashboard/:path*",
    // "/dashboard/:path*",
    // "/invest/:path*",
  ],
};