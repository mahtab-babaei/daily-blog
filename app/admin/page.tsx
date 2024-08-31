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

interface PostForm {
  title: string;
  description: string;
  image: string;
}

const AdminPage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<PostForm>();
  const [error, setError] = useState("");

  return (
    <form
      className="flex justify-center"
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post("/api/blog", data);
          router.push("/blog");
        } catch (error) {
          setError("متاسفیم، یک خطای غیر منتظره رخ داد!");
        }
      })}
    >
      <Grid gap="5" className="w-full max-w-md md:max-w-lg lg:max-w-2xl">
        <Text className="font-extrabold text-lg text-accent">
          <Text className="text-primary">ایجاد</Text> پست جدید
        </Text>
        {error && (
          <Callout.Root className="bg-opacity-5 bg-accent text-accent">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>{error}</Callout.Text>
          </Callout.Root>
        )}
        <Grid gap="3">
          <Text className="text-dark font-medium">عنوان</Text>
          <TextField.Root
            {...register("title")}
            size="3"
            variant="soft"
            className="bg-white p-2 text-sm"
            placeholder="پست جدید"
          />
        </Grid>
        <Grid gap="3">
          <Text className="text-dark font-medium">توضیحات</Text>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <SimpleMDE placeholder="شرح پست جدید" {...field} />
            )}
          />
        </Grid>
        <Grid gap="3">
          <Text className="text-dark font-medium">تصویر</Text>
          <TextField.Root
            {...register("image")}
            size="3"
            variant="soft"
            className="bg-white p-2 text-sm"
            placeholder="آدرس تصویر"
          />
        </Grid>
        <Flex justify="center">
          <DarkButton>ثبت پست</DarkButton>
        </Flex>
      </Grid>
    </form>
  );
};

export default AdminPage;
