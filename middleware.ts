export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/admin/", "/admin/userPosts/:id+", "/admin/information"],
};
