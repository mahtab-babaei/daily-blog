"use client";
import { Callout, Flex, Grid, Text, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "./customEditor.css";
import DarkButton from "../components/DarkButton";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPostSchema } from "../validationSchemas";
import { z } from "zod";
import ErrorMessage from "../components/ErrorMessage";

type PostForm = z.infer<typeof createPostSchema>;

const CreateNewPost = () => {
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
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      await axios.post("/api/blog", data);
      router.push("/blog");
    } catch (error) {
      setSubmitting(false);
      setError("متاسفیم، یک خطای غیر منتظره رخ داد!");
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Grid gap="5" className="w-full max-w-md md:max-w-lg lg:max-w-2xl">
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
          <Text className="text-dark text-base font-medium">عنوان</Text>
          <TextField.Root
            {...register("title")}
            size="3"
            variant="soft"
            className="bg-white p-2 text-sm"
            placeholder="پست جدید"
          />
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
        </Grid>
        <Grid gap="3">
          <Text className="text-dark text-base font-medium">توضیحات</Text>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <SimpleMDE placeholder="شرح پست جدید" {...field} />
            )}
          />
          <ErrorMessage>{errors.description?.message}</ErrorMessage>
        </Grid>
        <Grid gap="3">
          <Text className="text-dark text-base font-medium">تصویر</Text>
          <TextField.Root
            {...register("image")}
            size="3"
            variant="soft"
            className="bg-white p-2 text-sm"
            placeholder="آدرس تصویر"
          />
        </Grid>
        <Flex justify="center">
          <DarkButton isSubmitting={isSubmitting}>ثبت پست</DarkButton>
        </Flex>
      </Grid>
    </form>
  );
};

export default CreateNewPost;
