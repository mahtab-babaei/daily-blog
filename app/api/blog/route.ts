import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createPostSchema } from "../../validationSchemas";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = createPostSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const newPost = await prisma.post.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newPost, { status: 201 });
}
