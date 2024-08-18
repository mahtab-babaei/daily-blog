import { Flex } from "@radix-ui/themes";
import Link from "next/link";

const NavBar = () => {
  const links = [
    { label: "خانه", href: "/", key: "home" },
    { label: "بلاگ", href: "/blog", key: "blog" },
    { label: "صفحه ادمین", href: "/admin", key: "admin" },
  ];
  return (
    <Flex gap="5" justify="center" p='5' mb='5' className="border-b">
      <Flex gap="5">
        {links.map((link) => (
          <Link key={link.key} href={link.href}>
            {link.label}
          </Link>
        ))}
      </Flex>
      <Link href="/">لوگو</Link>
    </Flex>
  );
};

export default NavBar;
