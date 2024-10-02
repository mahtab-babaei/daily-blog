import { Post } from "@prisma/client";
import { Grid, Text } from "@radix-ui/themes";
import Link from "next/link";
import { ConditionalImage } from "../components";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Link href={`/blog/${post.id}`}>
      <Grid
        gap="3"
        className="p-6 rounded-xl bg-white hover:scale-105 transition-transform"
      >
        <div className=" aspect-[1/1] rounded-xl overflow-hidden">
          <ConditionalImage
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <Text as="div" size="3" weight="bold">
          {post.title}
        </Text>
        <Text as="div" color="gray">
          {post.description}
        </Text>
      </Grid>
    </Link>
  );
};

export default PostCard;
