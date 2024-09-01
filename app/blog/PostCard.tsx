import { Grid, Text } from "@radix-ui/themes";
import React from "react";
import noImage from "@/public/images/main/404.png";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string | null;
}

const PostCard = ({ title, description, image }: Props) => {
  return (
    <Grid gap="3" className="p-6 rounded-xl bg-white">
      {image ? (
        <img src={image} alt={title} />
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
  );
};

export default PostCard;
