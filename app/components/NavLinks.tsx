"use client";
import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import { useSession } from "next-auth/react";
import AccentButton from "./AccentButton";

const NavLinks = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "خانه", href: "/", key: "home" },
    { label: "بلاگ", href: "/blog", key: "blog" },
    { label: "صفحه ادمین", href: "/admin", key: "admin" },
  ];

  return (
    <Flex
      gap="5"
      justify="center"
      align="center"
      py="6"
      className="text-neutral text-base"
    >
      <AccentButton>
        {status === "authenticated" && <Link href="/auth/signout">خروج</Link>}
        {status === "unauthenticated" && <Link href="/auth/signin">ورود</Link>}
      </AccentButton>
      <Flex gap="5" align="center">
        {links.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className={classnames({
              "font-bold": link.href === currentPath,
              "hover:font-bold transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </Flex>
      <Link href="/">لوگو</Link>
    </Flex>
  );
};

export default NavLinks;
