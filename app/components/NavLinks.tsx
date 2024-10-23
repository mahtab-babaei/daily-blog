"use client";
import logo from "@/public/images/main/logo.png";
import { Flex } from "@radix-ui/themes";
import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthStatus from "./AuthStatus";

const NavLinks = () => {
  const currentPath = usePathname();

  const links = [
    { label: "خانه", href: "/", key: "home" },
    { label: "ادمین", href: "/admin", key: "admin" },
    { label: "بلاگ", href: "/blog", key: "blog" },
    { label: "سوالات متداول", href: "/#faq", key: "questions" },
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
        <AuthStatus />
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
