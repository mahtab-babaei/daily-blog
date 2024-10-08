"use client";
import { DarkButton } from "@/app/components";
import { userSchema } from "@/app/validationSchemas";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout, Flex, Grid, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type signupForm = z.infer<typeof userSchema>;

const SignUpPage = () => {
  const { register, handleSubmit } = useForm<signupForm>();
  const router = useRouter();
  const [error, setError] = useState("");

  return (
    <Flex justify="center">
      <Grid gap="8" className="w-full max-w-md md:max-w-lg">
        <Text className="font-extrabold text-lg text-primary">
          <Text className="text-accent">ایجاد</Text> حساب کاربری
        </Text>
        <form
          onSubmit={handleSubmit(async (data) => {
            try {
              await axios.post("/api/auth/signup", data);
              router.push("/admin");
            } catch (error) {
              setError("متاسفیم، یک خطای غیر منتظره رخ داد!");
            }
          })}
        >
          <Grid gap="5">
            {error && (
              <Callout.Root
                variant="outline"
                size="1"
                color="ruby"
                className="text-accent"
              >
                <Callout.Icon>
                  <InfoCircledIcon />
                </Callout.Icon>
                <Callout.Text size="1">{error}</Callout.Text>
              </Callout.Root>
            )}
            <Grid gap="3">
              <Text className="text-dark text-base font-medium">
                نام کاربری
              </Text>
              <TextField.Root
                {...register("name")}
                type="text"
                size="3"
                variant="soft"
                className="bg-white p-2 text-sm"
                placeholder="انتخاب نام کاربری"
              />
            </Grid>
            <Grid gap="3">
              <Text className="text-dark text-base font-medium">ایمیل</Text>
              <TextField.Root
                {...register("email")}
                type="email"
                size="3"
                variant="soft"
                className="bg-white p-2 text-sm"
                placeholder="ایمیل شما"
              />
            </Grid>
            <Grid gap="3">
              <Text className="text-dark text-base font-medium">رمز عبور</Text>
              <TextField.Root
                {...register("password")}
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
                {...register("confirmPassword")}
                type="password"
                size="3"
                variant="soft"
                className="bg-white p-2 text-sm"
                placeholder="●●●●●●●"
              />
            </Grid>
            <Flex justify="center">
              <DarkButton>ثبت نام</DarkButton>
            </Flex>
            <Flex justify="center">
              <Text className="text-primary">
                حساب کاربری دارید؟{" "}
                <Link className="text-accent font-bold" href="/auth/signin">
                  وارد شوید
                </Link>
              </Text>
            </Flex>
          </Grid>
        </form>
      </Grid>
    </Flex>
  );
};

export default SignUpPage;
