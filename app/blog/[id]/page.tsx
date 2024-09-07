import prisma from "@/prisma/client";
import noImage from "@/public/images/main/404.png";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import moment from "moment-jalaali";

interface Props {
  params: { id: string };
}

const PostDetailPage = async ({ params }: Props) => {
  const post = await prisma.post.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!post) notFound();

  return (
    <div>
      {post.image ? (
        <img src={post.image} alt={post.title} className="rounded-xl" />
      ) : (
        <Image priority className="rounded-xl" src={noImage} alt="imgCardd" />
      )}
      <p>{post?.title}</p>
      <p>{post?.description}</p>
      <p>{moment(post.createdAt).format("jYYYY/jMM/jDD")}</p>
    </div>
  );
};

export default PostDetailPage;
