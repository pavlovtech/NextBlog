import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    '/posts',
    '/'
  ]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/'"],
};