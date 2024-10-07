import { DarkButton } from "@/app/components";
import { Flex, Grid, TextField, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <Flex justify="center">
      <Grid gap="8" className="w-full max-w-md md:max-w-lg">
        <Text className="font-extrabold text-lg text-primary">
          <Text className="text-accent">ایجاد</Text> حساب کاربری
        </Text>
        <Grid gap="3">
          <Text className="text-dark text-base font-medium">نام کاربری</Text>
          <TextField.Root
            type="text"
            size="3"
            variant="soft"
            className="bg-white p-2 text-sm"
            placeholder="انتخاب نام کاربری"
          />
          <Grid gap="3">
            <Text className="text-dark text-base font-medium">ایمیل</Text>
            <TextField.Root
              type="email"
              size="3"
              variant="soft"
              className="bg-white p-2 text-sm"
              placeholder="ایمیل شما"
            />
          </Grid>
        </Grid>
        <Grid gap="3">
          <Text className="text-dark text-base font-medium">رمز عبور</Text>
          <TextField.Root
            type="password"
            size="3"
            variant="soft"
            className="bg-white p-2 text-sm"
            placeholder="●●●●●●●"
          />
        </Grid>
        <Grid gap="3">
          <Text className="text-dark text-base font-medium">
            تکرار رمز عبور
          </Text>
          <TextField.Root
            type="password"
            size="3"
            variant="soft"
            className="bg-white p-2 text-sm"
            placeholder="●●●●●●●"
          />
        </Grid>
        <Flex justify="center">
          <Grid gap="5">
            <Flex justify="center">
              <DarkButton>ثبت نام</DarkButton>
            </Flex>
            <Text className="text-primary">
              حساب کاربری دارید؟{" "}
              <Link className="text-accent font-bold" href="/auth/signin">
                وارد شوید
              </Link>
            </Text>
          </Grid>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default SignUpPage;
