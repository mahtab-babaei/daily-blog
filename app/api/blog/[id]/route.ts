import authOptions from "@/app/auth/authOptions";
import { postSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session)
    return NextResponse.json({}, {status: 401});
  
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

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session)
    return NextResponse.json({}, {status: 401});
  
  const body = await request.json();

  const validation = postSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const post = await prisma.post.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!post) 
    return NextResponse.json({ error: "Invalid error" }, { status: 404 });

  const updatedPost = await prisma.post.update({
    where: { id: post.id },
    data: {
      title: body.title,
      description: body.description,
      image: body.image,
    },
  });

  return NextResponse.json(updatedPost);
}
