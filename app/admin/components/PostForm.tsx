"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Post } from "@prisma/client";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout, Flex, Grid, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from 'react-simplemde-editor';
import { z } from "zod";
import { DarkButton, ErrorMessage } from "../../components";
import { postSchema } from "../../validationSchemas";
import "./customEditor.css";

type PostFormData = z.infer<typeof postSchema>;

const PostForm = ({ post }: { post?: Post }) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      if (post) await axios.patch("/api/blog/" + post.id, data);
      else await axios.post("/api/blog", data);
      router.push("/blog");
      router.refresh();
    } catch (error) {
      setSubmitting(false);
      setError("متاسفیم، یک خطای غیر منتظره رخ داد!");
    }
  });

  return (
    <form onSubmit={onSubmit}>
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
          <Text className="text-dark text-base font-medium">عنوان</Text>
          <TextField.Root
            {...register("title")}
            size="3"
            variant="soft"
            className="bg-white p-2 text-sm"
            placeholder="پست جدید"
            defaultValue={post?.title}
          />
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
        </Grid>
        <Grid gap="3">
          <Text className="text-dark text-base font-medium">توضیحات</Text>
          <Controller
            defaultValue={post?.description}
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
            defaultValue={post?.image || ""}
          />
        </Grid>
        <Flex justify="center">
          <DarkButton isSubmitting={isSubmitting}>
            {post ? "ویرایش پست" : "ثبت پست"}
          </DarkButton>
        </Flex>
      </Grid>
    </form>
  );
};

export default PostForm;
