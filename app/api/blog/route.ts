import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createPostSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
  image: z.string(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = createPostSchema.safeParse(body);

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
