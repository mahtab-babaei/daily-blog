import prisma from "@/prisma/client";
import { Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import PostComment from "./PostComment";
import PostCommentList from "./PostCommentList";
import PostDetails from "./PostDetails";

interface Props {
  params: { id: string };
  searchParams: { page: string };
}

const PostDetailPage = async ({ params, searchParams }: Props) => {
  const post = await prisma.post.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!post) notFound();

  return (
    <Flex justify="center">
      <Grid gap="8" className="max-w-lg">
        <PostDetails post={post} />
        <PostComment postId={post.id} />
        <PostCommentList postId={post.id} page={searchParams.page} />
      </Grid>
    </Flex>
  );
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: { id: parseInt(params.id) },
  });

  return {
    title: post?.title,
    description: 'details of post ' + post?.id
  }
}

export default PostDetailPage;

