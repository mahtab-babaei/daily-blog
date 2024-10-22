import headerImage from "@/public/images/main/headerImage.png";
import Image from "next/image";
import { PropsWithChildren } from "react";
import Introduction from "../Introduction";

const HomeNav = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative w-full h-[400px]">
      <div className="absolute w-full top-0 left-1/2 transform -translate-x-1/2 z-10">
        {children}
      </div>
      <div className="absolute bottom-0 left-0 z-10 px-7 py-14 md:pl-10 md:pr-5">
        <Introduction />
      </div>
      <div className="absolute diagonal-gradient w-full h-full z-0"></div>
      <Image
        priority
        className="absolute z-10 custom:w-72 w-[520px] "
        src={headerImage}
        alt="headerImage"
        style={{
          top: "20%",
          right: "5%",
        }}
      />
    </div>
  );
};

export default HomeNav;
