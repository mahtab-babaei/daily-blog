import noImage from "@/public/images/main/404.png";
import { Flex, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
import { PiEyeBold, PiNotePencilBold, PiTrashBold } from "react-icons/pi";
import { AccentButton } from "../components";

interface Props {
  id: number;
  title: string;
  image: string | null;
}

const PostsSummary = ({ id, title, image }: Props) => {
  const posts = [1, 2];
  return (
    <Grid gap='5' className="w-full max-w-lg">
      {posts.map((post) => (
        <Flex
          gap="5"
          justify="between"
          align="center"
          className="w-full max-w-lg p-6 rounded-xl bg-white"
        >
          {image ? (
            <img
              src={image}
              alt={title}
              className="rounded-xl size-36 xs:hidden"
            />
          ) : (
            <Image
              priority
              className="rounded-xl xs:hidden"
              src={noImage}
              alt="imgCardd"
            />
          )}
          <Text as="div" size="2" weight="bold">
            {title}
          </Text>
          <Grid align="baseline" className="shrink-0" gap="2">
            <button>
              <PiNotePencilBold className="text-center w-6 h-6 text-light hover:text-dark transition-colors" />
            </button>
            <button>
              <PiEyeBold className="text-center w-6 h-6 text-light hover:text-dark transition-colors" />
            </button>
            <button>
              <PiTrashBold className="text-center w-6 h-6 text-light hover:text-dark transition-colors" />
            </button>
          </Grid>
        </Flex>
      ))}
      <Flex justify='center'>
      <AccentButton>دیدن همه</AccentButton>
      </Flex>
    </Grid>
  );
};

export default PostsSummary;