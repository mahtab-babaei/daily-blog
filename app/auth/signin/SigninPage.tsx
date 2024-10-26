"use client";
import { DarkButton, ErrorCallout } from "@/app/components";
import { userSchema } from "@/app/validationSchemas";
import { Flex, Grid, Text, TextField } from "@radix-ui/themes";
import { getSession, signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type signinForm = z.infer<typeof userSchema>;

const SigninPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push("/admin");
    }
  }, [session, router]);

  const { register, handleSubmit } = useForm<signinForm>();
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl: "/admin",
      });
      if (result?.error) {
        setSubmitting(false);
        setError("ایمیل یا رمز عبور اشتباهه، دوباره امتحان کن.");
      } else {
        const session = await getSession();
        if (session) {
          setTimeout(() => {
            router.refresh();
          }, 6000);
        } else {
          setError("مشکلی در ورود به سیستم وجود دارد، لطفاً دوباره تلاش کنید.");
        }
      }
    } catch (error) {
      setSubmitting(false);
      setError("متاسفیم، یک خطای غیر منتظره رخ داد!");
    }
  });

  return (
    <Flex justify="center">
      <Grid gap="8" className="w-full max-w-md md:max-w-lg">
        <Text className="font-extrabold text-lg text-accent">
          <Text className="text-primary">ورود به</Text> حساب کاربری
        </Text>
        <form onSubmit={onSubmit}>
          <Grid gap="5">
            <ErrorCallout>{error}</ErrorCallout>
            <Grid gap="3">
              <Text className="text-dark text-base font-medium">ایمیل</Text>
              <TextField.Root
                type="email"
                size="3"
                variant="soft"
                className="bg-white p-2 text-sm"
                placeholder="ایمیل خود را وارد کنید"
                {...register("email")}
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
                {...register("password")}
              />
            </Grid>
            <Flex justify="center">
              <DarkButton isSubmitting={isSubmitting}>ورود</DarkButton>
            </Flex>
            <Flex justify="center">
              <Text className="text-primary">
                حساب کاربری ندارید؟{" "}
                <Link className="text-accent font-bold" href="/auth/signup">
                  ثبت نام کنید
                </Link>
              </Text>
            </Flex>
          </Grid>
        </form>
      </Grid>
    </Flex>
  );
};

export default SigninPage;
