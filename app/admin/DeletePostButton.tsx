"use client";
import { AlertDialog, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { PiTrashBold } from "react-icons/pi";

const DeletePostButton = ({ postId }: { postId: number }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const deletePost = async () => {
    try {
      await axios.delete("/api/blog/" + postId);
      router.refresh();
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
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
                onClick={deletePost}
                className="bg-accent p-2 font-medium text-white  text-sm rounded-md"
              >
                آره مطمئنم
              </button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content className="text-dark">
          <AlertDialog.Title className="text-base">خطا</AlertDialog.Title>
          <AlertDialog.Description className="text-sm">
            متاسفیم! امکان حذف کردن این پست وجود نداره.
          </AlertDialog.Description>
          <button
            onClick={() => setError(false)}
            className="bg-light p-2 bg-opacity-30 font-medium rounded-md mt-4 text-sm"
          >
            باشه
          </button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeletePostButton;
