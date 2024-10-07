import { DarkButton } from "@/app/components";
import { Flex, Grid, Text, TextField } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const SignInPage = () => {
  return (
    <Flex justify="center">
      <Grid gap="8" className="w-full max-w-md md:max-w-lg">
        <Text className="font-extrabold text-lg text-accent">
          <Text className="text-primary">ورود به</Text> حساب کاربری
        </Text>
        <Grid gap="3">
          <Text className="text-dark text-base font-medium">ایمیل</Text>
          <TextField.Root
            type="email"
            size="3"
            variant="soft"
            className="bg-white p-2 text-sm"
            placeholder="ایمیل خود را وارد کنید"
          />
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
        <Flex justify="center">
          <Grid gap="5">
            <Flex justify="center">
              <DarkButton>ورود</DarkButton>
            </Flex>
            <Text className="text-primary">
              حساب کاربری ندارید؟ <Link className="text-accent font-bold" href="/auth/signup">ثبت نام کنید</Link>
            </Text>
          </Grid>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default SignInPage;
