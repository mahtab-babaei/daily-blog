import logo from "@/public/images/main/Logo.png";
import { Flex, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
import { BsInstagram, BsTelegram, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full bg-light bg-opacity-25 py-24 px-12 mt-12">
      <Flex justify="center">
        <div className="custom:grid custom:justify-center custom:gap-10 flex justify-between items-center w-full max-w-4xl">
          <Grid gap="5">
            <Text className="text-light">ما را در شبکه های اجتماعی دنبال کنید</Text>
            <Flex justify="center" gap="4">
              <BsInstagram className="text-light text-xl cursor-pointer" />
              <BsTelegram className="text-light text-xl cursor-pointer" />
              <BsTwitterX className="text-light text-xl cursor-pointer" />
            </Flex>
          </Grid>
          <Grid dir="ltr">
            <Image src={logo} alt="logo" priority width={43} className="custom:hidden pt-4"/>
            <Text className="text-light text-xs custom:text-center">Copyright © 2024 DailyBlog.</Text>
            <Text className="text-light text-xs custom:text-center">All rights reserved.</Text>
          </Grid>
        </div>
      </Flex>
    </footer>
  );
};

export default Footer;
