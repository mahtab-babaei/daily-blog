import authOptions from "@/app/auth/authOptions";
import { userInformationSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();

  const validation = userInformationSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!user)
    return NextResponse.json({ error: "Invalid user" }, { status: 404 });

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: { name: body.name, email: body.email, image: body.image || null },
  });

  return NextResponse.json(updatedUser, {status: 200});
}
