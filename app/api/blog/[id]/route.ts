import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const post = await prisma.post.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!post)
    return NextResponse.json({ error: "Invalid post" }, { status: 404 });

  await prisma.post.delete({
    where: {
      id: post.id,
    },
  });

  return NextResponse.json({});
}
