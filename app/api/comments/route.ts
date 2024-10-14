import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { Comment } from "@prisma/client";
import { commentSchema } from "@/app/validationSchemas";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = commentSchema.safeParse(body);

  if (!validation.success) return NextResponse.json(validation.error.errors, {status: 400});

  const newComment: Comment = await prisma.comment.create({
    data: {
      content: body.content,
      postId: body.postId,
      userId: body.userId,
    },
  });

  return NextResponse.json(newComment, { status: 201 });
}
