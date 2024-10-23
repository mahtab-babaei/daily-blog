import prisma from "@/prisma/client";
import { Flex, Grid, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import PostFormSkeleton from "@/app/admin/components/PostFormSkeleton";

const PostForm = dynamic(() => import("@/app/admin/components/PostForm"), {
  ssr: false,
  loading: () => <PostFormSkeleton />,
});

interface Props {
  params: { id: string };
}

const EditPostPage = async ({ params }: Props) => {
  const post = await prisma.post.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!post) notFound();

  return (
    <Flex justify="center">
      <Grid gap="8" className="w-full max-w-md md:max-w-lg lg:max-w-2xl">
        <Text className="font-extrabold text-lg text-primary">
          <Text className="text-accent">ویرایش</Text> پست
        </Text>
        <PostForm post={post} />
      </Grid>
    </Flex>
  );
};

export async function generateMetadata({ params }: Props) {
  const post = await prisma.post.findUnique({
    where: { id: parseInt(params.id) },
  });

  return {
    title: 'ویرایش ' + post?.title,
    description: 'edit post ' + post?.id
  }
}

export default EditPostPage;
