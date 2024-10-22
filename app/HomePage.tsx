import prisma from "@/prisma/client";
import { Flex, Grid, Text } from "@radix-ui/themes";
import Accordion from "./Accordion";
import ActiveUsers from "./ActiveUsers";
import PostCard from "./blog/PostCard";
const HomePage = async () => {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    take: 2,
  });

  return (
    <Grid gap="8" justify="center" mt="8">
      <Flex justify="center">
        <Text className="font-extrabold text-lg text-accent content-center text-center">
          <Text className="text-primary content-center">
            آخرین پسـت های آپلـود شده در
          </Text>{" "}
          دیلی بـلاگ
        </Text>
      </Flex>

      <div className="grid gap-5 grid-cols-2 xs:grid-cols-1 w-full max-w-lg md:max-w-xl lg:max-w-3xl">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <Flex justify="center">
        <Text className="font-extrabold text-lg text-primary">
          سـوالات متـدوال
        </Text>
      </Flex>
      <Flex justify="center" className="max-w-lg md:max-w-xl lg:max-w-3xl">
        <Accordion />
      </Flex>
      <Flex justify="center">
        <ActiveUsers />
      </Flex>
    </Grid>
  );
};

export default HomePage;
