import prisma from "@/prisma/client";
import { Flex, Grid, Text } from "@radix-ui/themes";
import React from "react";
import PostCard from "./PostCard";

const BlogPage = async () => {
  const posts = await prisma.post.findMany();
  return (
    <Flex justify="center">
      <Grid gap='8'>
      <Text className="font-extrabold text-lg text-primary">
        <Text className="text-accent">آخرین مطالب</Text> دیلی بلاگ
      </Text>
      <Grid
        gap="5"
        className="w-full max-w-md md:max-w-lg lg:max-w-2xl"
        columns={{ initial: "1", sm: "2", md: "3" }}
      >
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            description={post.description.slice(0, 150) + "..."}
            image={post.image}
          />
        ))}
      </Grid>
      </Grid>
    </Flex>
  );
};

export default BlogPage;
