import { PropsWithChildren } from "react";
import headerImage from "@/app/images/headerImage.png";
import Image from "next/image";

const HomeNav = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative w-full h-[400px]">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
        {children}
      </div>
      <div className="absolute diagonal-gradient w-full h-full z-0"></div>
      <Image
        priority
        className="absolute z-10 w-72 sm:w-[550px]"
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
