"use client";
import { Flex, Grid, Text, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "./customEditor.css";
import DarkButton from "../components/DarkButton";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface PostForm {
  title: string;
  description: string;
  image: string;
}

const AdminPage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<PostForm>();

  return (
    <form
      className="flex justify-center"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/blog", data);
        router.push("/blog");
      })}
    >
      <Grid gap="5" className="w-full max-w-md md:max-w-lg lg:max-w-2xl">
        <Text className="font-extrabold text-lg text-accent">
          <Text className="text-primary">ایجاد</Text> پست جدید
        </Text>
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
