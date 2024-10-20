"use client";

import { DarkButton, ErrorCallout, ErrorMessage } from "@/app/components";
import { userInformationSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { Flex, Grid, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type userInformationFormaData = z.infer<typeof userInformationSchema>;

const EditInformationform = ({ user }: { user: User }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userInformationFormaData>({
    resolver: zodResolver(userInformationSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      await axios.patch(`/api/admin/${user.id}`, data);
      router.push("/admin");
    } catch (error) {
      setSubmitting(false);
      setError("متاسفیم، یک خطای غیر منتظره رخ داد!");
    }
  });
  return (
    <Flex justify="center">
      <Grid gap="8" className="w-full max-w-md md:max-w-lg">
        <Text className="font-extrabold text-lg text-primary">
          <Text className="text-accent">ویرایش</Text> اطلاعات
        </Text>
        <form onSubmit={onSubmit}>
          <Grid gap="5">
            <ErrorCallout>{error}</ErrorCallout>
            <Grid gap="3">
              <Text className="text-dark text-base font-medium">
                نام کاربری
              </Text>
              <TextField.Root
                type="text"
                size="3"
                variant="soft"
                className="bg-white p-2 text-sm"
                defaultValue={user.name}
                {...register("name")}
              />
              <ErrorMessage>{errors.name?.message}</ErrorMessage>
            </Grid>

            <Grid gap="3">
              <Text className="text-dark text-base font-medium">ایمیل</Text>
              <TextField.Root
                type="email"
                size="3"
                variant="soft"
                className="bg-white p-2 text-sm"
                defaultValue={user.email}
                {...register("email")}
              />
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </Grid>

            <Grid gap="3">
              <Text className="text-dark text-base font-medium">
                تصویر پروفایل
              </Text>
              <TextField.Root
                type="text"
                size="3"
                variant="soft"
                className="bg-white p-2 text-sm placeholder:text-xl"
                defaultValue={user.image || ""}
                {...register("image")}
              />
            </Grid>
            <Flex justify="center">
              <DarkButton isSubmitting={isSubmitting}>
                ویرایش اطلاعات
              </DarkButton>
            </Flex>
          </Grid>
        </form>
      </Grid>
    </Flex>
  );
};

export default EditInformationform;
