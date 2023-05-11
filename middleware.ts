import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    '/posts',
    '/posts/:bar',
    '/'
  ]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/'"],
};