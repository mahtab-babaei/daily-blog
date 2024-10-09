"use client";
import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import { useSession } from "next-auth/react";
import AccentButton from "./AccentButton";
import logo from "@/public/images/main/Logo.png";
import Image from "next/image";

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
        <AccentButton>
          {status === "authenticated" && <Link href="/auth/signout">خروج</Link>}
          {status === "unauthenticated" && (
            <Link href="/auth/signin">ورود</Link>
          )}
        </AccentButton>
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
          <Image priority src={logo} alt="logo" />
        </Link>
      </Flex>
    </div>
  );
};

export default NavLinks;
