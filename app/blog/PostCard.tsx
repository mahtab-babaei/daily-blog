import { Grid, Text } from "@radix-ui/themes";
import React from "react";
import imgCard from "@/app/images/headerImage.png";
import Image from "next/image";

const PostCard = () => {
  return (
    <Grid gap="3" className="p-6 rounded-xl bg-white">
      <Image className="bg-accent rounded-xl" src={imgCard} alt="imgCardd" />

      <Text as="div" size="2" weight="bold">
        پست شماره 1
      </Text>
      <Text as="div" color="gray" size="1">
        متن پست شماره 1
      </Text>
    </Grid>
  );
};

export default PostCard;
