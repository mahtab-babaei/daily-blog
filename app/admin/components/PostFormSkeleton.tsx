import { Flex, Grid, Skeleton } from "@radix-ui/themes";

const PostFormSkeleton = () => {
  return (
    <Grid gap="5" className="w-full max-w-md md:max-w-lg lg:max-w-2xl">
      <Skeleton height="2.5rem" mt="6" className="rounded-md" />
      <Skeleton height="20rem" className="rounded-md" />
      <Skeleton height="2.5rem" className="rounded-md" />
      <Flex justify="center">
        <Skeleton width="7rem" height="2.5rem" className="rounded-lg" />
      </Flex>
    </Grid>
  );
};

export default PostFormSkeleton;
