import prisma from "@/prisma/client";
import { Flex, Grid, Text } from "@radix-ui/themes";
import Link from "next/link";
import { PiEyeBold } from "react-icons/pi";
import { AccentButton, ConditionalImage } from "../../components";
import DeletePostButton from "./DeletePostButton";
import EditPostButton from "./EditPostButton";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

const PostsSummary = async () => {
  const session = await getServerSession(authOptions);
  const posts = await prisma.post.findMany({
    where: { userId: session?.user.id },
    orderBy: { createdAt: "desc" },
  });

  return (
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
    </Grid>
  );
};

export default PostsSummary;
