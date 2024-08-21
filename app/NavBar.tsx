"use client";
import NavLinks from "./components/NavLinks";
import HomeNavBar from "./components/HomeNavBar";
import MainNavBar from "./components/MainNavBar";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  return pathname === "/" ? (
    <HomeNavBar>
      <NavLinks />
    </HomeNavBar>
  ) : (
    <MainNavBar>
      <NavLinks />
    </MainNavBar>
  );
};

export default NavBar;
