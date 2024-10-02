import prisma from "@/prisma/client";
import noImage from "@/public/images/main/404.png";
import { Flex, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { PiEyeBold } from "react-icons/pi";
import { AccentButton } from "../../components";
import DeletePostButton from "./DeletePostButton";
import EditPostButton from "./EditPostButton";

const PostsSummary = async () => {
  const posts = await prisma.post.findMany();
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
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="rounded-xl size-36 xs:hidden"
            />
          ) : (
            <Image
              priority
              className="rounded-xl size-36 xs:hidden"
              src={noImage}
              alt="imgCard"
            />
          )}
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
        <AccentButton>دیدن همه</AccentButton>
      </Flex>
    </Grid>
  );
};

export default PostsSummary;
