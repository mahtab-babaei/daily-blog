import prisma from "@/prisma/client";
import noImage from "@/public/images/main/404.png";
import { AlertDialog, Flex, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { PiEyeBold, PiNotePencilBold, PiTrashBold } from "react-icons/pi";
import { AccentButton } from "../components";

const PostsSummary = async () => {
  const posts = await prisma.post.findMany();
  return (
    <Grid gap="5" className="w-full max-w-lg">
      {posts.map((post) => (
        <Flex
          gap="5"
          justify="between"
          align="center"
          className="w-full max-w-lg p-6 rounded-xl bg-white"
        >
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="rounded-xl size-36 xs:hidden"
            />
          ) : (
            <Image
              priority
              className="rounded-xl size-36 xs:hidden"
              src={noImage}
              alt="imgCardd"
            />
          )}
          <Text as="div" size="2" weight="bold">
            {post.title}
          </Text>
          <Grid align="baseline" className="shrink-0" gap="2">
            <button>
              <PiNotePencilBold className="text-center w-6 h-6 text-light hover:text-dark transition-colors" />
            </button>
            <button>
              <Link href={`/blog/${post.id}`}>
                <PiEyeBold className="text-center w-6 h-6 text-light hover:text-dark transition-colors" />
              </Link>
            </button>
            <AlertDialog.Root>
              <AlertDialog.Trigger>
                <button>
                  <PiTrashBold className="text-center w-6 h-6 text-light hover:text-dark transition-colors" />
                </button>
              </AlertDialog.Trigger>
              <AlertDialog.Content className="text-dark">
                <AlertDialog.Title className="text-base">
                  تایید حذف
                </AlertDialog.Title>
                <AlertDialog.Description className="text-sm">
                  از حذف کردن این پست مطمئنی؟ امکان بازیابی پست پاک شده وجود
                  نداره .
                </AlertDialog.Description>
                <Flex mt="4" gap="3">
                  <AlertDialog.Cancel>
                    <button className="bg-light p-2 font-medium bg-opacity-30 text-sm rounded-md">
                      نه ولش کن
                    </button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action>
                    <button className="bg-accent p-2 font-medium text-white  text-sm rounded-md">
                      آره مطمئنم
                    </button>
                  </AlertDialog.Action>
                </Flex>
              </AlertDialog.Content>
            </AlertDialog.Root>
          </Grid>
        </Flex>
      ))}
      <Flex justify="center">
        <AccentButton>دیدن همه</AccentButton>
      </Flex>
    </Grid>
  );
};

export default PostsSummary;
