import prisma from "@/prisma/client";
import { Flex, Grid, Text } from "@radix-ui/themes";
import PostCard from "./PostCard";

const BlogPage = async () => {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <Flex justify="center">
      <Grid gap="8">
        <Text className="font-extrabold text-lg text-primary">
          <Text className="text-accent">آخرین مطالب</Text> دیلی بلاگ
        </Text>
        <Grid
          gap="5"
          className="w-full max-w-lg md:max-w-xl lg:max-w-3xl"
          columns={{ initial: "1", sm: "2", md: "3" }}
        >
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Grid>
      </Grid>
    </Flex>
  );
};

export const dynamic = "force-dynamic";

export default BlogPage;
