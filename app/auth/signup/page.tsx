"use client";
import { DarkButton } from "@/app/components";
import { userSchema } from "@/app/validationSchemas";
import { Flex, Grid, TextField, Text } from "@radix-ui/themes";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

type signupForm = z.infer<typeof userSchema>;

const SignUpPage = () => {
  const { register, handleSubmit } = useForm<signupForm>();
  const router = useRouter();

  return (
    <Flex justify="center">
      <form
        className="w-full max-w-md md:max-w-lg"
        onSubmit={handleSubmit(async (data) => {
          await axios.post("/api/auth/signup", data);
          router.push("/admin");
        })}
      >
        <Grid gap="8">
          <Text className="font-extrabold text-lg text-primary">
            <Text className="text-accent">ایجاد</Text> حساب کاربری
          </Text>
          <Grid gap="3">
            <Text className="text-dark text-base font-medium">نام کاربری</Text>
            <TextField.Root
              {...register("name")}
              type="text"
              size="3"
              variant="soft"
              className="bg-white p-2 text-sm"
              placeholder="انتخاب نام کاربری"
            />
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
      </form>
    </Flex>
  );
};

export default SignUpPage;
