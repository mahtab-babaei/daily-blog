"use client";
import { AlertDialog, Flex, Grid, Text } from "@radix-ui/themes";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const SignOutPage = () => {
  const router = useRouter();
  return (
    <AlertDialog.Root open={true}>
      <AlertDialog.Content className="text-dark">
        <AlertDialog.Title className="text-base mb-5">
          خروج از حساب
        </AlertDialog.Title>
        <AlertDialog.Description className="text-sm">
          <span className="text-base">
            مطمئنی میخوای از حساب کاربریت خارج بشی؟
          </span>
          <span className="mb-5 block py-2">
            در صورت خروجت هیج جای نگرانی نیست، همیشه میتونی برگردی :)
          </span>
        </AlertDialog.Description>
        <Flex gap="3">
          <button
            onClick={() => router.push("/")}
            className="bg-light p-2 font-medium bg-opacity-30 text-sm rounded-md"
          >
            نه ولش کن
          </button>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="bg-accent p-2 font-medium text-white  text-sm rounded-md"
          >
            آره خارج شو
          </button>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default SignOutPage;
