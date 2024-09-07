import prisma from "@/prisma/client";
import { Flex, Grid, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import PostDetails from "./PostDetails";

interface Props {
  params: { id: string };
}

const PostDetailPage = async ({ params }: Props) => {
  const post = await prisma.post.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!post) notFound();

  return (
    <Flex justify="center">
      <Grid gap="8" className="max-w-lg">
        <PostDetails post={post} />
      </Grid>
    </Flex>
  );
};

export default PostDetailPage;
