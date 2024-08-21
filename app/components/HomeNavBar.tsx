import React, { PropsWithChildren } from "react";

const HomeNavBar = ({ children }: PropsWithChildren) => {
  return <div className="diagonal-gradient w-full h-[400px]">{children}</div>;
};

export default HomeNavBar;
