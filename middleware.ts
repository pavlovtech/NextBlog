import { authMiddleware } from "@clerk/nextjs";
import headerNavLinks from "./configuration/header-nav-links";

const routes = headerNavLinks.map(l => [`${l.href}`,`${l.href}/:bar`]).flat();

console.log(routes);

export default authMiddleware({
  publicRoutes: [
    '/',
    '/posts',
    '/posts/:foo',
    ...routes
  ]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/'"],
};