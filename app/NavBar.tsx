import Link from "next/link";

const NavBar = () => {
  const links = [
    { label: "صفحه ادمین", href: "/admin", key: "admin" },
    { label: "بلاگ", href: "/blog", key: "blog" },
    { label: "خانه", href: "/", key: "home" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 p-5 justify-center ">
      <Link href="/">لوگو</Link>
      <div className="flex space-x-6">
        {links.map((link) => (
          <Link key={link.key} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
