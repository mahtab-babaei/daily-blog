import { Flex } from "@radix-ui/themes";
import Link from "next/link";

const NavLinks = () => {
  const links = [
    { label: "خانه", href: "/", key: "home" },
    { label: "بلاگ", href: "/blog", key: "blog" },
    { label: "صفحه ادمین", href: "/admin", key: "admin" },
  ];

  return (
    <Flex gap="5" justify="center" py="6" className="text-neutral">
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

export default NavLinks;
