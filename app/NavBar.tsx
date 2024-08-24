"use client";
import NavLinks from "./components/NavLinks";
import HomeNav from "./components/HomeNav";
import MainNav from "./components/MainNav";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  return pathname === "/" ? (
    <HomeNav>
      <NavLinks />
    </HomeNav>
  ) : (
    <MainNav>
      <NavLinks />
    </MainNav>
  );
};

export default NavBar;
