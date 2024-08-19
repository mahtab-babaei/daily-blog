"use client";
import { Button, Flex, Grid, Text, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface PostForm {
  title: string;
  description: string;
  image?: string;
}

const AdminPage = () => {
  const router = useRouter()
  const { register, control, handleSubmit } = useForm<PostForm>();
  console.log(register("title"));

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/blog", data);
        router.push('/blog')
      })}
    >
      <Grid gap="5" className="max-w-xl">
        <Grid gap="3">
          <Text>عنوان</Text>
          <TextField.Root placeholder="پست جدید" {...register("title")} />
        </Grid>
        <Grid gap="3">
          <Text>توضیحات</Text>
          <Controller
            name="description"
            control={control}
            render={({ field }) => <SimpleMDE {...field} />}
          />
        </Grid>
        <Grid gap="3">
          <Text>تصویر</Text>
          <TextField.Root placeholder="آدرس تصویر" {...register("image")} />
        </Grid>
        <Flex justify="center">
          <Button>ثبت پست جدید</Button>
        </Flex>
      </Grid>
    </form>
  );
};

export default AdminPage;
