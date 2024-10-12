import noAvatar from "@/public/images/avatars/noAvatar.png";
import { Avatar, DropdownMenu, Spinner, Text } from "@radix-ui/themes";
import AccentButton from "./AccentButton";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === "loading") return <Spinner size='3' className="p-2"/>;

  return (
    <>
      {status === "authenticated" && (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Text className="cursor-pointer">
              <Avatar
                size="3"
                radius="full"
                src={
                  session!.user!.image ? `/${session!.user!.image}` : undefined
                }
                fallback={<Image src={noAvatar} alt="noAvatar" priority />}
              />
            </Text>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="mr-8 2xs:mr-4">
            <DropdownMenu.Item dir="rtl">
              <Link href="#">ویرایش اطلاعات</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item dir="rtl">
              <Link href="/auth/signout">خروج</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      )}
      {status === "unauthenticated" && (
        <AccentButton>
          <Link href="/auth/signin">ورود</Link>
        </AccentButton>
      )}
    </>
  );
};

export default AuthStatus;
