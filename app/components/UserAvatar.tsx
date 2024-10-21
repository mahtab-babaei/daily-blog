"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Avatar, Spinner, Text } from "@radix-ui/themes";
import Image from "next/image";
import noAvatar from "@/public/images/avatars/noAvatar.png";

const UserAvatar = () => {
  const { data: session } = useSession();
  const [userImage, setUserImage] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`/api/user/${session!.user.id}`);
      setUserImage(response.data.image);
    };
    getUser();
  }, [session]);

  return (
    <>
      <Text className="cursor-pointer">
        <Avatar
          size="3"
          radius="full"
          src={userImage || undefined}
          fallback={<Image src={noAvatar} alt="noAvatar" priority />}
        />
      </Text>
    </>
  );
};

export default UserAvatar;
