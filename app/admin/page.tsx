import { Button, Flex, Grid, Text, TextArea, TextField } from "@radix-ui/themes";

const AdminPage = () => {
  return (
    <Grid gap="5" className="max-w-xl">
      <Grid gap="3">
        <Text>عنوان</Text>
        <TextField.Root placeholder="پست جدید" />
      </Grid>
      <Grid gap="3">
        <Text>توضیحات</Text>
        <TextArea placeholder="شرح پست جدید" />
      </Grid>
      <Grid gap="3">
        <Text>تصویر</Text>
        <TextField.Root placeholder="آدرس تصویر" />
      </Grid>
      <Flex justify='center'>
      <Button>ثبت پست جدید</Button>
    </Flex>
    </Grid>
  );
};

export default AdminPage;
