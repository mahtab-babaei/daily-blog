import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import EditInformationform from "./EditInformationform";

const page = async () => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: {
      id: session!.user.id,
    },
  });

  if (!user) return notFound();

  return (
    <EditInformationform
      user={user}
    />
  );
};

export default page;
