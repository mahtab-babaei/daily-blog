import { emailSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = emailSchema.safeParse({email: body.email});

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (!user)
    return NextResponse.json({ error: "Invalid user" }, { status: 404 });

  return NextResponse.json({
    id: user?.id,
    name: user?.name,
    email: user?.email,
    image: user?.image,
  });
}
