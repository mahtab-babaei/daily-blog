"use client";
import { DarkButton, ErrorCallout, ErrorMessage } from "@/app/components";
import { userSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Flex, Grid, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type signupForm = z.infer<typeof userSchema>;

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signupForm>({
    resolver: zodResolver(userSchema),
  });
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      await axios.post("/api/auth/signup", data);
      router.push("/admin");
    } catch (error: any) {
      setSubmitting(false);
      if (error.response && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("متاسفیم، یک خطای غیر منتظره رخ داد!");
      }
    }
  });

  return (
    <Flex justify="center">
      <Grid gap="8" className="w-full max-w-md md:max-w-lg">
        <Text className="font-extrabold text-lg text-primary">
          <Text className="text-accent">ایجاد</Text> حساب کاربری
        </Text>
        <form onSubmit={onSubmit}>
          <Grid gap="5">
            <ErrorCallout>{error}</ErrorCallout>
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
              <ErrorMessage>{errors.name?.message}</ErrorMessage>
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
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </Grid>
            <Grid gap="3">
              <Text className="text-dark text-base font-medium">رمز عبور</Text>
              <TextField.Root
                {...register("password")}
                type="password"
                size="3"
                variant="soft"
                className="bg-white p-2 text-sm placeholder:text-xl"
                placeholder="●●●●●●"
              />
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
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
                placeholder="●●●●●●"
              />
              <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
            </Grid>
            <Flex justify="center">
              <DarkButton isSubmitting={isSubmitting}>ثبت نام</DarkButton>
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
