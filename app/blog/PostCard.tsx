import { Grid, Text } from "@radix-ui/themes";
import React from "react";
import noImage from "@/public/images/main/404.png";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  title: string;
  description: string;
  image: string | null;
}

const PostCard = ({ id, title, description, image }: Props) => {
  return (
    <Link href={`/blog/${id}`}>
    <Grid gap="3" className="p-6 rounded-xl bg-white hover:scale-105 transition-transform">
      {image ? (
        <img src={image} alt={title} className="rounded-xl" />
      ) : (
        <Image priority className="rounded-xl" src={noImage} alt="imgCardd" />
      )}
      <Text as="div" size="2" weight="bold">
        {title}
      </Text>
      <Text as="div" color="gray" size="1">
        {description}{" "}
      </Text>
    </Grid>
    </Link>
  );
};

export default PostCard;
