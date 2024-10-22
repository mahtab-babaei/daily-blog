import prisma from "@/prisma/client";
import noAvatar from "@/public/images/avatars/noAvatar.png";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Flex, Text } from "@radix-ui/themes";
import Image from "next/image";

const ActiveUsers = async () => {
  const activeUsers = await prisma.user.findMany({
    select: { id: true, name: true, image: true },
    orderBy: { posts: { _count: "desc" } },
    take: 3,
  });

  return (
    <div className="custom:grid flex items-center justify-between gap-5 max-w-lg">
      <Text className="font-extrabold text-lg text-accent text-center">
        <Text className="text-primary">فعال ترین کـاربران </Text>
        دیلی بـلاگ
      </Text>
      <Flex align="center" justify='center'>
        <Text className="font-extrabold text-lg text-light ml-2">2+</Text>
        {activeUsers.map((user) => (
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Image
                key={user.id}
                className="rounded-full -ml-3"
                width="48"
                height="48"
                priority
                alt="activeUser"
                src={user.image || noAvatar}
              />
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="bg-dark text-white p-2 rounded-lg text-xs">
                {user.name}
                <Tooltip.Arrow className="fill-dark" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        ))}
      </Flex>
    </div>
  );
};

export default ActiveUsers;
