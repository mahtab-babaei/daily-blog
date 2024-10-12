import { AccentButton } from '@/app/components';
import noAvatar from '@/public/images/avatars/noAvatar.png';
import { Avatar, Flex, Grid } from "@radix-ui/themes";
import Image from "next/image";
const PostComment = () => {
  return (
    <Grid>
      <Flex gap="2" align="start" justify="center">
        <Avatar radius="full" size="5" fallback={<Image className="rounded-full" src={noAvatar} alt='noAvatar'/>} />
        <input
          className="bg-neutral border-b-2 border-b-light border-opacity-40 w-full p-2"
          placeholder="نظر خود را بنویسید..."
        />
      </Flex>
      <Flex justify="end">
        <AccentButton>ثبت نظر</AccentButton>
      </Flex>
    </Grid>
  );
};

export default PostComment;
