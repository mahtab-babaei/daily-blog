import prisma from "@/prisma/client";
import noAvatar from "@/public/images/avatars/noAvatar.png";
import { Flex, Text, Tooltip } from "@radix-ui/themes";
import Image from "next/image";

const ActiveUsers = async () => {
  const activeUsers = await prisma.user.findMany({
    select: { id: true, name: true, image: true },
    orderBy: { posts: { _count: "desc" } },
    take: 3,
  });
  console.log("Active Users:", activeUsers);

  return (
    <>
      <div className="custom:grid flex items-center justify-between gap-5 max-w-lg">
        <Text className="font-extrabold text-lg text-accent text-center">
          <Text className="text-primary">فعال ترین کـاربران </Text>
          دیلی بـلاگ
        </Text>
        <Flex align="center" justify="center">
          <Text className="font-extrabold text-lg text-light ml-2">2+</Text>
          {activeUsers.map((user) => (
            <Tooltip
              key={user.id}
              content={user.name}
              className="rounded-lg p-2"
            >
              <Image
                className="rounded-full -ml-3"
                width="48"
                height="48"
                priority
                alt="activeUser"
                src={user.image || noAvatar}
              />
            </Tooltip>
          ))}
        </Flex>
      </div>
    </>
  );
};

export default ActiveUsers;
