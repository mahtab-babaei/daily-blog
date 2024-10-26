import prisma from "@/prisma/client";
import { Flex, Grid, Text } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import authOptions from "../auth/authOptions";
import CreateNewPost from "./new/CreateNewPost";
import PostsSummary from "./userPosts/PostsSummary";
import { Metadata } from "next";

const AdminPage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const page = parseInt(searchParams.page) || 1;
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: { id: session!.user.id },
  });

  return (
    <Flex justify="center">
      <Grid gap="8" className="w-full max-w-md md:max-w-lg lg:max-w-2xl">
        <Text className="font-extrabold text-lg text-accent">
          <Text className="text-primary">{user!.name} عزیـز،</Text> خوش اومدی!
        </Text>{" "}
        <Text className="font-extrabold text-lg text-accent">
          <Text className="text-primary">ایجاد</Text> پست جدید
        </Text>
        <CreateNewPost />
        <Text className="font-extrabold text-lg text-primary">
          <Text className="text-accent">آخرین</Text> پست های شما
        </Text>
        <PostsSummary page={page} userId={user!.id} />
      </Grid>
    </Flex>
  );
};

export const metadata: Metadata = {
  title: "دیلی بلاگ - صفحه ادمین",
  description: "صفحه ادمین در دیلی بلاگ",
};

export default AdminPage;
