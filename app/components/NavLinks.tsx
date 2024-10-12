"use client";
import noAvatar from "@/public/images/avatars/noAvatar.png";
import logo from "@/public/images/main/Logo.png";
import { Avatar, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import classnames from "classnames";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AccentButton from "./AccentButton";

const NavLinks = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "خانه", href: "/", key: "home" },
    { label: "ادمین", href: "/admin", key: "admin" },
    { label: "بلاگ", href: "/blog", key: "blog" },
    { label: "سوالات متداول", href: "/", key: "questions" },
  ];

  return (
    <div className="px-10 2xs:px-4">
      <Flex
        gap="5"
        justify="between"
        align="center"
        py="5"
        className="text-neutral text-base truncate"
      >
        {status === "authenticated" && (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Text className="cursor-pointer">
                <Avatar
                  size="3"
                  radius="full"
                  src={
                    session.user!.image ? `/${session.user!.image}` : undefined
                  }
                  fallback={
                    <Image src={noAvatar} alt="noAvatar" priority />
                  }
                />
              </Text>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="mr-8 2xs:mr-4">
              <DropdownMenu.Item dir="rtl">
                <Link href="#">ویرایش اطلاعات</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item dir="rtl">
                <Link href="auth/signout">خروج</Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        )}
        {status === "unauthenticated" && (
          <AccentButton>
            <Link href="/auth/signin">ورود</Link>
          </AccentButton>
        )}
        <Flex gap="5" align="center">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={classnames({
                "font-bold": link.href === currentPath,
                "hover:font-bold transition-colors": true,
                "custom:hidden": link.key === "questions",
              })}
            >
              {link.label}
            </Link>
          ))}
        </Flex>
        <Link href="/" className="xs:hidden">
          <Image height={48} priority src={logo} alt="logo" />
        </Link>
      </Flex>
    </div>
  );
};

export default NavLinks;
