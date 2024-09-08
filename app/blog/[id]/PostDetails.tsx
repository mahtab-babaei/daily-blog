import noImage from "@/public/images/main/404.png";
import Image from "next/image";
import moment from "moment-jalaali";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Flex, Grid, Heading } from "@radix-ui/themes";
import { Post } from "@prisma/client";
import ReactMarkdown from 'react-markdown'

interface Props {
  post: Post
}


const PostDetails = ({post}: Props) => {
  return (
    <Grid gap="4" className="bg-white p-8 max-w-lg rounded-xl">
        <Flex justify="center">
          {post.image ? (
            <img src={post.image} alt={post.title} className="rounded-xl" />
          ) : (
            <Image
              priority
              className="rounded-xl"
              src={noImage}
              alt="imgCardd"
            />
          )}
        </Flex>
        <Heading className="text-base text-dark">{post?.title}</Heading>
        <ReactMarkdown className="prose text-light text-sm">{post?.description}</ReactMarkdown>
        <Flex gap="1">
          <CalendarIcon className="text-light" />
          <p className="text-dark font-bold">
            {moment(post.createdAt).format("jYYYY/jMM/jDD")}
          </p>
        </Flex>
      </Grid>
  )
}

export default PostDetails