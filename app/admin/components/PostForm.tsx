"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Post } from "@prisma/client";
import { Flex, Grid, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from 'react-simplemde-editor';
import { z } from "zod";
import { DarkButton, ErrorCallout, ErrorMessage } from "../../components";
import { postSchema } from "../../validationSchemas";
import "./customEditor.css";
import { useSession } from "next-auth/react";

type PostFormData = z.infer<typeof postSchema>;

const PostForm = ({ post }: { post?: Post }) => {
  const {data: session} = useSession();
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
      const response = await axios.post("/api/user", session!.user);
      const userId = response.data.id;

      if (post) await axios.patch("/api/blog/" + post.id, data);
      else await axios.post("/api/blog", {...data, userId});
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
        <ErrorCallout>{error}</ErrorCallout>
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
