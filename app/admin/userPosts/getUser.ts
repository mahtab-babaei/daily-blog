import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";

export async function getUser() {
  const session = await getServerSession(authOptions);
  if (!session) return null;
  const userEmail = session.user!.email!;
  const currentUser = await prisma.user.findUnique({
    where: { email: userEmail },
  });

  return currentUser;
}
