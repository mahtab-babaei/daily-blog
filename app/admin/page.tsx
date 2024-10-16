import { Flex, Grid, Text } from "@radix-ui/themes";
import CreateNewPost from "./new/CreateNewPost";
import PostsSummary from "./userPosts/PostsSummary";
import { getServerSession } from "next-auth";
import authOptions from "../auth/authOptions";
import prisma from "@/prisma/client";

const AdminPage = async () => {
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
        <Flex justify="center">
          <PostsSummary />
        </Flex>
      </Grid>
    </Flex>
  );
};

export default AdminPage;
