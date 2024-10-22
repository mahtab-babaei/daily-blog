import { Flex, Text } from "@radix-ui/themes";
import { DarkButton } from "./components";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className="hidden md:grid gap-6 text-white items-center w-52">
      <h1 className="text-2xl font-bold">دیـلی بـلاگ</h1>
      <Text>
        دیلی بلاگ محیطی امن برای به اشتراک گذاشتن اطلاعات، خاطرات، مطالب و
        مقالات ارزشمند شماست. هر روز با دیلی بلاگ یه روز خوبه!
      </Text>
      <Flex justify="end">
        <Link href='/auth/signup'>
        <DarkButton>ثبـت نـام</DarkButton>
        </Link>
      </Flex>
    </div>
  );
};

export default Introduction;
