import prisma from "@/prisma/client";
import { Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import PostComment from "./PostComment";
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
        <PostComment postId={post.id} />
      </Grid>
    </Flex>
  );
};

export default PostDetailPage;
