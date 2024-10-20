import Pagination from "@/app/components/Pagination";
import prisma from "@/prisma/client";
import { Flex, Grid, Text } from "@radix-ui/themes";
import Link from "next/link";
import { PiEyeBold } from "react-icons/pi";
import { ConditionalImage } from "../../components";
import DeletePostButton from "./DeletePostButton";
import EditPostButton from "./EditPostButton";

interface Props {
  page: number;
  userId: string;
}

const PostsSummary = async ({ page, userId }: Props) => {
  const pageSize = 3;
  const postCount = await prisma.post.count({
    where: { userId },
  });
  const posts = await prisma.post.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  return (
    <Flex justify="center">
      <Grid gap="5" className="w-full max-w-lg">
        {posts.map((post) => (
          <Flex
            key={post.id}
            gap="5"
            justify="between"
            align="center"
            className="w-full max-w-lg p-6 rounded-xl bg-white"
          >
            <ConditionalImage
              src={post.image}
              alt={post.title}
              className="rounded-xl size-36 xs:hidden"
            />
            <Text as="div" size="2" weight="bold">
              {post.title}
            </Text>
            <Grid align="baseline" className="shrink-0" gap="2">
              <EditPostButton postId={post.id} />
              <button>
                <Link href={`/blog/${post.id}`}>
                  <PiEyeBold className="text-center w-6 h-6 text-light hover:text-dark transition-colors" />
                </Link>
              </button>
              <DeletePostButton postId={post.id} />
            </Grid>
          </Flex>
        ))}
        <Flex justify="center">
          <Pagination
            itemCount={postCount}
            pageSize={pageSize}
            currentPage={page}
          />
        </Flex>
      </Grid>
    </Flex>
  );
};

export default PostsSummary;
