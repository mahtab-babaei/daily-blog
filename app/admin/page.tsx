import { Flex, Grid, Text } from "@radix-ui/themes";
import CreateNewPost from "./CreateNewPost";
import PostsSummary from "./PostsSummary";

const AdminPage = () => {
  return (
    <Flex justify="center">
      <Grid gap="8" className="w-full max-w-md md:max-w-lg lg:max-w-2xl">
        <Text className="font-extrabold text-lg text-accent">
          <Text className="text-primary">ایجاد</Text> پست جدید
        </Text>
        <CreateNewPost />
        <Text className="font-extrabold text-lg text-primary">
          <Text className="text-accent">آخرین</Text> پست های شما
        </Text>
        <Flex justify="center">
          <PostsSummary />
        </Flex>
      </Grid>
    </Flex>
  );
};

export default AdminPage;
