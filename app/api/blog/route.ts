import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { postSchema } from "@/app/validationSchemas";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = postSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newPost = await prisma.post.create({
    data: {
      title: body.title,
      description: body.description,
      image: body.image,
    },
  });

  return NextResponse.json(newPost, { status: 201 });
}
