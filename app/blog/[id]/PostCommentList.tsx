import Pagination from "@/app/components/Pagination";
import prisma from "@/prisma/client";
import { Flex, Grid, Text } from "@radix-ui/themes";
import CommentCard from "../CommentCard";

interface Props {
  postId: number;
  page: string;
}

const PostCommentList = async ({ postId, page }: Props) => {
  const currentPage = parseInt(page) || 1;
  const pageSize = 5;
  const commentCount = await prisma.comment.count({ where: { postId } });

  if (commentCount === 0) return null;

  const commentList = await prisma.comment.findMany({
    where: { postId },
    orderBy: { createdAt: "desc" },
    skip: (currentPage - 1) * 5,
    take: 5,
  });

  return (
    <Grid gap="8">
      <Text className="font-extrabold text-lg text-primary">
        <Text className="text-accent">آخرین </Text> نظـرات کاربـران
      </Text>
      <Grid gap="4">
        {commentList.map((comment) => (
          <CommentCard
            key={comment.id}
            userId={comment.userId}
            content={comment.content}
          />
        ))}
      </Grid>
      <Flex justify="center">
        <Pagination
          itemCount={commentCount}
          pageSize={5}
          currentPage={currentPage}
        />
      </Flex>
    </Grid>
  );
};

export default PostCommentList;
