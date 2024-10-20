import { DarkButton } from "@/app/components";
import { Flex, Grid, TextField, Text } from "@radix-ui/themes";
import React from "react";

const page = () => {
  return (
    <Flex justify="center">
      <Grid gap="8" className="w-full max-w-md md:max-w-lg">
        <Text className="font-extrabold text-lg text-primary">
          <Text className="text-accent">ویرایش</Text> اطلاعات
        </Text>
        <Grid gap="5">
          <Grid gap="3">
            <Text className="text-dark text-base font-medium">نام کاربری</Text>
            <TextField.Root
              type="text"
              size="3"
              variant="soft"
              className="bg-white p-2 text-sm"
            />
          </Grid>

          <Grid gap="3">
            <Text className="text-dark text-base font-medium">ایمیل</Text>
            <TextField.Root
              type="email"
              size="3"
              variant="soft"
              className="bg-white p-2 text-sm"
            />
          </Grid>

          <Grid gap="3">
            <Text className="text-dark text-base font-medium">
              تصویر پروفایل
            </Text>
            <TextField.Root
              type="password"
              size="3"
              variant="soft"
              className="bg-white p-2 text-sm placeholder:text-xl"
            />
          </Grid>
          <Flex justify="center">
            <DarkButton>ویرایش اطلاعات</DarkButton>
          </Flex>
        </Grid>
      </Grid>
    </Flex>
  );
};

export default page;
