import { ConditionalImage } from "@/app/components";
import { Post } from "@prisma/client";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Flex, Grid, Heading } from "@radix-ui/themes";
import moment from "moment-jalaali";
import ReactMarkdown from "react-markdown";

const PostDetails = ({ post }: { post: Post }) => {
  return (
    <Grid gap="4" className="bg-white p-8 max-w-lg rounded-xl">
      <Flex justify="center">
        <div className="aspect-[1/1] rounded-xl overflow-hidden">
          <ConditionalImage
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </Flex>
      <Heading className="text-base text-dark">{post?.title}</Heading>
      <ReactMarkdown className="prose text-light text-sm">
        {post?.description}
      </ReactMarkdown>
      <Flex gap="1">
        <CalendarIcon className="text-light" />
        <p className="text-dark font-bold">
          {moment(post.createdAt).format("jYYYY/jMM/jDD")}
        </p>
      </Flex>
    </Grid>
  );
};

export default PostDetails;
