"use client";
import {
  Button,
  Flex,
  Grid,
  Text,
  TextField,
} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const AdminPage = () => {
  return (
    <Grid gap="5" className="max-w-xl">
      <Grid gap="3">
        <Text>عنوان</Text>
        <TextField.Root placeholder="پست جدید" />
      </Grid>
      <Grid gap="3">
        <Text>توضیحات</Text>
        <SimpleMDE />
      </Grid>
      <Grid gap="3">
        <Text>تصویر</Text>
        <TextField.Root placeholder="آدرس تصویر" />
      </Grid>
      <Flex justify="center">
        <Button>ثبت پست جدید</Button>
      </Flex>
    </Grid>
  );
};

export default AdminPage;
