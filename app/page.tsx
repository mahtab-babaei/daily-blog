import { Flex } from "@radix-ui/themes";
import HomePage from "./HomePage";
import { Metadata } from "next";

export default function Home() {
  return (
    <Flex justify="center">
      <HomePage />
    </Flex>
  );
}

export const metadata: Metadata = {
  title: "دیلی بلاگ",
  description: "صفحه ی اصلی دیلی بلاگ",
};
