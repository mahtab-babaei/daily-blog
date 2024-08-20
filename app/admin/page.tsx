"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout, Flex, Grid, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";
import DarkButton from "../components/DarkButton";
import ErrorMessage from "../components/ErrorMessage";
import Spinner from "../components/Spinner";
import { createPostSchema } from "../validationSchemas";
type PostForm = z.infer<typeof createPostSchema>;

const AdminPage = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PostForm>({
    resolver: zodResolver(createPostSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, SetSubmitting] = useState(false);

  return (
    <>
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            SetSubmitting(true);
            await axios.post("/api/blog", data);
            router.push("/blog");
          } catch (error) {
            SetSubmitting(false);
            setError("متاسفیم، یک خطای غیر منتظره رخ داد!");
          }
        })}
      >
        <Grid gap="5" className="max-w-xl">
          <Text>ایجاد پست جدید</Text>
          {error && (
            <Callout.Root className="bg-opacity-20 bg-accent text-accent">
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>{error}</Callout.Text>
            </Callout.Root>
          )}
          <Grid gap="3">
            <Text>عنوان</Text>
            <TextField.Root placeholder="پست جدید" {...register("title")} />
            <ErrorMessage>{errors.title?.message}</ErrorMessage>
          </Grid>
          <Grid gap="3">
            <Text>توضیحات</Text>
            <Controller
              name="description"
              control={control}
              render={({ field }) => <SimpleMDE {...field} />}
            />

            <ErrorMessage>{errors.description?.message}</ErrorMessage>
          </Grid>
          <Grid gap="3">
            <Text>تصویر</Text>
            <TextField.Root placeholder="آدرس تصویر" {...register("image")} />
          </Grid>
          <Flex justify="center">
            <DarkButton isSubmitting={isSubmitting}>
              ثبت پست {isSubmitting && <Spinner />}
            </DarkButton>
          </Flex>
        </Grid>
      </form>
    </>
  );
};

export default AdminPage;
