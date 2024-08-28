"use client";
import { Flex, Grid, Text, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "./customEditor.css";
import DarkButton from "../components/DarkButton";

const AdminPage = () => {
  return (
    <Flex justify="center">
      <Grid gap="5" className="w-full max-w-md md:max-w-lg lg:max-w-2xl">
        <Text className="font-extrabold text-lg text-accent">
          <Text className="text-primary">ایجاد</Text> پست جدید
        </Text>
        <Grid gap="3">
          <Text className="text-dark font-medium">عنوان</Text>
          <TextField.Root
            size="3"
            variant="soft"
            className="bg-white p-2 text-sm"
            placeholder="پست جدید"
          />
        </Grid>
        <Grid gap="3">
          <Text className="text-dark font-medium">توضیحات</Text>
          <SimpleMDE
            options={{
              direction: "rtl",
              spellChecker: false,
              hideIcons: ["image"],
            }}
            placeholder="شرح پست جدید"
          />
        </Grid>
        <Grid gap="3">
          <Text className="text-dark font-medium">تصویر</Text>
          <TextField.Root
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
    </Flex>
  );
};

export default AdminPage;
