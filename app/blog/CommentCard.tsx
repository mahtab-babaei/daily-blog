import prisma from "@/prisma/client";
import noAvatar from "@/public/images/avatars/noAvatar.png";
import { Avatar, Flex, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";

interface Props {
  userId: string;
  content: string;
}

const CommentCard = async ({ userId, content }: Props) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  return (
    <Grid className="bg-white p-8 rounded-xl" gap="4">
      <Flex align="center" gap="2">
        <Avatar
          size="3"
          radius="full"
          src={user!.image || undefined}
          fallback={<Image src={noAvatar} alt="noAvatar" priority />}
        />
        <Text className="text-accent">
          {user!.name} <Text className="text-dark">گفته:</Text>
        </Text>
      </Flex>
      <Text className="text-light">{content}</Text>
    </Grid>
  );
};

export default CommentCard;
