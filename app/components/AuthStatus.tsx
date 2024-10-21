"use client";
import { DropdownMenu, Spinner } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import AccentButton from "./AccentButton";
import UserAvatar from "./UserAvatar";

const AuthStatus = () => {
  const { status } = useSession();

  if (status === "loading") return <Spinner size="3" className="p-2" />;

  if (status === "unauthenticated") {
    return (
      <AccentButton>
        <Link href="/auth/signin">ورود</Link>
      </AccentButton>
    );
  }

  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <UserAvatar />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="mr-8 2xs:mr-4">
          <DropdownMenu.Item dir="rtl">
            <Link href="/admin/information">ویرایش اطلاعات</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item dir="rtl">
            <Link href="/auth/signout">خروج</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
};

export default AuthStatus;
