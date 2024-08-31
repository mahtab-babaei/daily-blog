import { Flex, Grid, Text } from "@radix-ui/themes";
import CreateNewPost from "./CreateNewPost";

const AdminPage = () => {
  return (
    <Flex justify="center">
      <Grid gap="8" className="w-full max-w-md md:max-w-lg lg:max-w-2xl">
        <Text className="font-extrabold text-lg text-accent">
          <Text className="text-primary">ایجاد</Text> پست جدید
        </Text>
        <CreateNewPost />
      </Grid>
    </Flex>
  );
};

export default AdminPage;
