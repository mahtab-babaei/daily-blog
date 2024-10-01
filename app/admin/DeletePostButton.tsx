"use client";
import { AlertDialog, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { PiTrashBold } from "react-icons/pi";

const DeletePostButton = ({ postId }: { postId: number }) => {
  const router = useRouter();
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <button>
          <PiTrashBold className="text-center w-6 h-6 text-light hover:text-dark transition-colors" />
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Content className="text-dark">
        <AlertDialog.Title className="text-base">تایید حذف</AlertDialog.Title>
        <AlertDialog.Description className="text-sm">
          از حذف کردن این پست مطمئنی؟ امکان بازیابی پست پاک شده وجود نداره .
        </AlertDialog.Description>
        <Flex mt="4" gap="3">
          <AlertDialog.Cancel>
            <button className="bg-light p-2 font-medium bg-opacity-30 text-sm rounded-md">
              نه ولش کن
            </button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <button
              onClick={async () => {
                await axios.delete("/api/blog/" + postId);
                router.refresh();
              }}
              className="bg-accent p-2 font-medium text-white  text-sm rounded-md"
            >
              آره مطمئنم
            </button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeletePostButton;
